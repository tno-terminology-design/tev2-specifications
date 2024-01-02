---
id: form-phrase-syntax
sidebar_label: Form Phrases
date: 20220808
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Form Phrases - Syntax

This document specifies the syntax of [form phrases](@), i.e. texts that are specified in the [header](@) of [curated texts](@), in the field `formPhrases`.[^1]

[^1]: Since [MRG entries](@) include the [header](@) of such [curated texts](@), the `formPhrases` field can also be found therein.

[Form phrases](@) are [used to automatically convert](/docs/spec-tools/trrt#id) the `show text` parts of [term refs](@) into `[termid](@)`s, for the purpose of accommodating, e.g., plural forms (for nouns) or conjugate forms (for verbs). This facilitates the work for [authors](@), as this no longer requires them to explicitly mention the `term` part in a [term ref](@) when the `showtext` they use matches one of the [form phrases](@).

## Simple Form Phrases

In the simple form, a single [form phrase](@) is a sequence of characters [`[a-z0-9_-]+`](https://www.debuggex.com/r/w7mm0fzpON23yuZQ). The contents of the `formPhrases` field (in the [header](@) of a [curated text](@)) is a comma-separated list of such [form phrases](@), matching the (PCRE) regex [`(?:\s*(?:[a-z0-9_-{}]+)\s*(?:,\s*([a-z0-9_-{}]+))*)?`](https://www.debuggex.com/r/20MNb2zgNwLDD-dD).

The `formPhrases`-field is used by the [trrt](@) in its attempts to [convert the `showtext`](/docs/spec-tools/trrt#showtext) part of a [term ref](@) into a string that can serve as the `term` of that [term ref](@).

The [trrt](@) does so by looping over the [terms](@) of the designated [terminology](@), and checking whether or not such a [term](@) is a match, as follows:

- First, the [trrt](@) simplifies the `showtext`, by converting uppercase characters to lowercase, and replacing (sequences of) special characters and spaces with a single `-` character. Thus a `showtext` with value `Form - Phrase` would be converted into `form-phrase`.
- Then, the [trrt](@) checks whether the result matches the contents of the `term`-field, and is done when that's the case. 
- If there is no match, the [trrt](@) checks whether the result matches any of the [form phrases](@) in the `formPhrases` field. If that is the case, there is a match, and the [term ref](@) of which the `showtext` is a part will be referring to the matching [term](@).

Thus, if the `showtext` of a [term ref](@) is `actor's`, and the `formPhrases` field of some [curated text](@) contains `actors, actor's, actor(s)`, there would be a match, and the [term ref](@) would refer to that [term](@)). 

Similarly, if the `showtext` is `Term Refs`, and some (other) [curated text](@) has a `term` field containing `termref` and its `formPhrases` field contains `termrefs, term-ref, term-refs`, then there would be a match. Note that other `showtexts`, such as `TermRef`, `termref`, `term-ref`, `term%refs`, etc., would also result in a match.

<details>
   <summary>Detailed example</summary>

Consider a text with a [term ref](@), e.g., 

~~~ markdown
...
This is a text that is about [actors](actor@), and the [actor's](actor@) capabilities.
This text also says what the [actor(s)](actor@) might be doing.
...
~~~

As you can see, the `showtexts` are plurals or conjugate forms of the term `actor`.
It would help [authors](@) if they could write this text as follows:

~~~ markdown
...
This is a text that is about [actors](@), and the [actor's](@) capabilities.
This text also says what the [actor(s)](@) might be doing.
...
~~~

which would require the [trrt](@) to automatically convert such plurals or conjugate forms into the corresponding base term. That's where [form phrases](@) come in.

This can be done by specifying such plurals, conjugate forms, or any other texts as a [form phrase](@) and adding it to the `formPhrases` field (in the [header](@)) of the [curated text](@) that documents the base term (`actor` in our example), as follows:

~~~ yaml
formPhrases: [ actor, actors, actor's, actor(s) ]
~~~
</details>

## Form phrase macros {#form-phrase-macros}

When you have worked some time with [form phrases](@), you will have noticed some patterns. For example, there many nouns (such as `actor`, `term`, or `form phrase`) have a plural form that can be constructing by adding an `s`, and it is conventient to specify such a plural form as a [form phrase](@). These nouns also have other often recurring forms, that are constructed by adding, e.g., `'s`, or `(s)`.

A [form phrase](@) macro is a syntax that allows you to specify such a pattern as a single [form phrase](@). For example, the constructions mentioned in the previous paragraph can be specified by adding `{ss}` to the noun, as in `actor{ss}`, `term{ss}`, and `form-phrase{ss}`. The text `{ss}` is a form phrase macro; it is a shorthand syntax that, when used in a [form phrase](@), specifies a list of [form phrases](@) that are derived from its non-macro part.

The following table specifies the [form phrase](@) macros that have currently being defined. The table shows 
1. the macro text,
2. the regex that is used for checking whether a (simplified) `showtext` matches the [form phrase](@),
3. an example that could appear as a [form phrase](@) in a `formPhrases`-field of a [curated text](@),
4. the set of (simplified) `showtext`s that would match that [form phrase](@):

| macro    |           regex                       |     example     | texts that the example matches |
| -------- | :-----------------------------------: | :-------------: | :----------------------------- |
| `{ss}`   | <code>(\|s\|'s\|(s\))</code>          | `actor{ss}`     | matches: "actor", "actors", "actor's", and "actor(s)" |
| `{yies}` | <code>(y\|y's\|ies)</code>            | `part{yies}`    | matches: "party", "party's", and "parties" |
| `{ying}` | <code>(y\|ier\|ying\|ies\|ied)</code> | `identif{ying}` | matches: "identify", "identifier", "identifying", "identifies", and "identified" |


<details>
   <summary>Example of a form phrase macro and its use</summary>

Suppose we have a [curated text](@) for the term `actor`, and in its front matter, we specify:

~~~ yaml
formPhrases: [ 'identif{yies}' ]
~~~

The part `{yies}` is a (predefined) macro, that is associated with the regex `(y|y's|ies)`.

When the [trrt](@) converts a [term ref](@), one of the things it needs to do is to [convert a so-called `show-text` into a `term`](/docs/spec-tools/trrt#showtext) that exists in some [curated text](@). If the `show-text` does not match the `term` of any of the [curated texts](@), the [trrt](@) will try to match it against every form phrase in every [curated text](@), including the [formphrase](@) `actor{ss}`.

You can think of how this work as follows[^3]. When the [trrt](@) encounters a `showtext`, it will loop over [curated texts](@) (or [MRG entries](@)) to find a match. If it can't find one (in case `showtext` is not the value of the `term` field), it will the take the list of [form phrases](@) specified in the `formPhrases` field, and replace every of its [form phrase](@) that contains a macro, with all possible [form phrases] that do not contain a macro. For example, if the contents of the `formPhrases` field would be `identifier{ss}, identif(ying)`, the replacement result would be the list `identifier`, `identifiers`, `identifier's`, `identifier(s)`, `identify`, `identifier`, `identifying`, `identifies` and `identified`. So there would be a match if the `showtext` would equal any of these [term refs](@).

[^3]: Actual implementations are expected to do this in a more efficient way.

</details>

## Notes