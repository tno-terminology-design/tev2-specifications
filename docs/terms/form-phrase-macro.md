---
# Docusaurus header
id: form-phrase-macro
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: form-phrase-macro
termType: concept
isa:
glossaryTerm: "Form Phrase Macro"
glossaryText: "a sequence of characters (the macro name) that identifies a sequence (map) of character strings that specify typical variations of a [form phrase](@), such as plural forms, possessie extensions, verb-conjugation forms, etc."
formPhrases: [ "formphrase macro{ss}", "form-phrase macro{ss}" ]
# Origins/Acknowledgements
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Form Phrase Macro

A **Form Phrase Macro** is a sequence of characters (the macro name) that identifies a sequence (map) of character strings that specify typical variations of a [form phrase](@), such as plural forms, possessie extensions, verb-conjugation forms, etc.

For example, when the macro `{ss}` is used in a [form phrase](@) specification `"actor{ss}"`, or `act`, this is a shorthand for the set `"actor", "actors", "actor's", "actor(s)"`, or the set `"act", "acts", "act's", "act(s)"` respectively.

A [form phrase](@) that contains a [form phrase macro](@) can be expanded into a set of [form phrases](@) that no longer contain the [form phrase macro](@). Thus a [form phrase](@) that contains a [form phrase macro](@) can be seen as a 'shorthand notation' for the set of [form phrases](@) that it can be expanded into.

## Purpose

[Form phrase macros](@) facilitate the specification of [form phrases](@), by enabling efficient ways of representing plural forms, possessive extensions, verb-conjugation forms, etc.

## Form Phrase Macro Expansion {#expansion-process}

The [form phrase macro](@) expansion process takes as inputs:

1. a [form phrase](@) that contains a [form phrase macro](@), and
2. a sequence (map) of character strings that is associated with the [form phrase macro](@).

For every character string in the [form phrase macro](@) map, the expansion process creates a [form phrase](@) that is identical to the [form phrase](@) that is input, and then it substitutes the [form phrase macro](@) therein with the character string. Thus, The expansion process produces as many [form phrases](@) as there are character strings in the [form phrase macro](@) map.

Here is an example.

1. The input [form phrase](@) is `actor{ss}`.
2. The [form phrase macro](@) `ss` is associated with the character string map `[ "", "s", "'s", "(s)" ]`.

The result of the expansion process is `[ "actor", "actors", "actor's", and "actor(s)" ]`

## Predefined [Form phrase macros](@) {#predefineds}

The following table specifies the [form phrase](@) macros that can be used by default. The table shows 
1. the [form phrase macro](@) name,
2. the list of character strings that is used to create a set of [form phrases](@) from the [form phrase](@) that includes the macro,
3. an example that could appear as a [form phrase](@) in a `formPhrases`-field of a [curated text](@),
4. the set of (simplified) `showtext`s that would match that [form phrase](@):

| macro    | character string map      | example         | is exapanded into |
| -------- | :-----------------------: | :-------------: | :---------------- |
| `{es}`   | "e", "es", "ed", "ing"    | `manag{es}`     | "manage", "manages", "managed", "managing" |
| `{ess}`  | "", "es", "'s", "(es)"    | `regex{ess}`    | "regex", "regexes", "regex's", "regex(es)" |
| `{ss}`   | "", "s", "'s", "(s)"      | `actor{ss}`     | "actor", "actors", "actor's", and "actor(s)" |
| `{yies}` | "y", "y's", "ies"         | `part{yies}`    | "party", "party's", and "parties" |
| `{ying}` | "y", "ying", "ies", "ied" | `identif{ying}` | "identify", "identifying", "identifies", and "identified" |
| `{able}` | "able", "ability"         | `cap{able}`     | "capable", "capability" |

:::tip Use macro's with care.
The above macro's should be used with care. Here are some tips:

1. Use `{es}` only for **regular verbs** that conjugate as specified.
2. Use `{ess}` only for **nouns** whose plural is constructed by adding `es`.
3. Use `{ss}` macro only for **nouns** whose plural is constructed by adding an `s`.
4. Use `{yies}` only for **nouns** that end with a `y`.
5. Use `{yies}` only for **verbs** that end with a `y`.
:::

<!-- The following are suggestions (by chatGPT) for similar macros.
They are currently not included because we have not found any terms that would benefit from them.
| `{ing}`  | <code>(s?\|ing\|ed)</code>            | `play{ing}`     | "play", "plays", "playing", "played" |
| `{ion}`  | <code>(ion\|ions\|ional)</code>       | `organizat{ion}`| "organization", "organizations", "organizational" |
| `{eror}` | <code>(er\|or\|ers\|ors)</code>       | `advis{eror}`   | "adviser", "advisor", "advisers", "advisors" |
| `{ment}` | <code>(ment\|ments\|mental)</code>    | `develop{ment}` | "development", "developments", "developmental" |
| `{ful}`  | <code>(ful\|fully\|fulness)</code>    | `hope{ful}`     | "hopeful", "hopefully", "hopefulness" |
| `{less}` | <code>(less\|lessly\|lessness)</code> | `care{less}`    | "careless", "carelessly", "carelessness" |
-->

## Custom [Form Phrase Macros](@)

The set of [form phrase macros](@) that is available in a [scope](@) is configurable. This allows [form phrase macros](@) to be configured, amongst others, to suit languages that have different grammatical rules, such as Dutch or French.

Please refer to the description of [form phrase macro maps](@) for details.