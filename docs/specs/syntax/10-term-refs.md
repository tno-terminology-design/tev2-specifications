---
id: term-refs
sidebar_label: Term References (TermRefs)
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TermRefs - Syntax

As an [author](@) or [curator](@), you want to be able to mark words or phrases and have them refer to (the documentation of) a particular [concept](@) or other [semantic unit](@). Such marked-up words or phrases are called [TermRefs](@).

[TermRefs](@) can be converted (by the [TRRT](@)) into so-called [renderable refs](@), which are texts that are being rendered in a way that helps readers better understand the words/phrases that you marked up. For example, when the document you authored is used in a website, the [TermRef](@) could be rendered en an emphasized way, and have a popup balloon that has its definition when a reader hovers its mouse over it.

The [TRRT specifications](trrt#term-ref-resolution@) specify
- how [TermRefs](@) are converted;
- how you can customize the [TermRef](@) syntax to your needs;
- how you can customize the [renderable refs](@) to look like what you want.

The following tabs-table tells you which syntaxes are predefined:

<Tabs
  defaultValue="default"
  values={[
    {label: '`default` TermRef syntax',      value: 'default'},
    {label: '`alternative` TermRef syntax',  value: 'alternative'},
  ]}>

<TabItem value="default">

## Default TermRef Syntax {#default}

By default a [TermRef](@) can be thought of as a special kind of [Markdown link](https://www.markdownguide.org/basic-syntax/#links). It link-part does not contain a URL or fragment, but contains text that refers to (a specific trait of) a specific [concept](@) or other [semantic unit](@), as defined in a particular [terminology](@).

The most general form of the default syntax is:

\[ `show text` \]( `termType`:`term`#`trait`@`terminology-identifier` )

where: 
- `show text` (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters `@` or `]` (this is needed to distinguish [TermRefs](@) from regular [markdown links](https://www.markdownguide.org/basic-syntax/#links)).
- `termType` (optional) is a [term type](@). When not specified, it is given the default type for [semantic units](@) in the [current scope](@), which usually would be `concept`.
- `term` (optional) is a [term](@). If not specified, its value is constructed based on the value of `showtext`, as specified in the [TRRT](trrt#id@).
- `trait` (optional) refers to a particular characteristic of the [semantic unit](@). If specified, it must be the [heading id](https://www.markdownguide.org/extended-syntax/#heading-ids) of the section in the [body](@) of a [curated text](@) that describes the characteristic. If not specified it refers to the whole of (the documentation of) the [semantic unit](@).
- `terminology-identifier` is a [terminology identifier](@). If not specified, its value is taken to be the default [terminology](@) of the [current scope](@).

### Examples

:::info Editor's note
vanaf hier tekst reviseren.
Merk op dat de conversie spullen naar de TRRT specs moeten verhuizen!
:::

- `[TermRef Examples](term-ref#example)` 

This [TermRef](@) refers to the [semantic unit](@) that is identified by the [term identifier](@) `<termType>:<term>@<terminology-identifier>`.  When all optional fields are specified, this 

The par


 that identifies the [terminology](@) in which `termid` identifies a [semantic unit](@).

Here is an example of a [TermRef](@): `[definitions](definition@)`. When this text is rendered into a human readable form, it will show the text `definitions` (plural) enhanced, and it will link to the text that describes (or defines) the term `definition` (singular). If you would want to use this term as it is defined in the [scope](@) called `essif-lab`, you could do that by writing `[definitions](definition@essif-lab)` (provided that `essif-lab` is a defined [scopetag](@) within the [scope](@) that you operate in).

### Motivation for the chosen syntax

We want to enable [authors](@) to use [TermRefs](@) pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. [Markdown links](https://www.markdownguide.org/basic-syntax/#links) are of the form \[`show text`\](`ref-text`), where `show text` is the text that is rendered and emphasized so that a [reader](@) knows it can be clicked, and `ref-text` is a (relative or absolute) URL, or a [heading ID](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids), that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for [TermRefs](@) that is<br/>- sufficiently similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links),<br/>- 'humanly interpretable' when it isn't processed by the [TRRT](@),<br/>- easy to use for [authors](@), and<br/>- sufficiently distinct from a Markdown link so that the [TRRT](@) will not process Markdown links yet will process the [TermRefs](@).

</TabItem>

<TabItem value="alternative">

## Alternative TermRef Syntax {#alt}

It is convenient for [authors](@) to be able to use the '@`scopetag`' part of a [TermRef](@) immediately behind the `show text` within the square brackets (`[` and `]`), and leave out the parentheses and the text in between if all the other items are omitted.

This is particularly useful in the vast majority of cases, where the default processing of `showtext` results in `term` and `trait` is absent. Examples of this are `[definition](@)`, or `[TermRef](@)`.

The usefulness becomes even greater as the [TRRT](@) also implements more sophisticated ways to derive a `term` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).

:::info Editor's note
This alternative notation will assume that the `showtext` part of a [TermRef](@) won't contain the `@` character. However, it is likely that some [authors](@) will want to use an email address as the `showtext` part of a *regular* link, e.g. as in `[rieks.joosten@tno.nl](mailto:rieks.joosten@tno.nl)`. However, since [scopetags](@) should not contain `.`-characters, `[rieks.joosten@tno.nl]` does not qualify as a `showtext` in our syntax. [Authors](@) should [use angle brackets to link to email addresses](https://www.markdownguide.org/basic-syntax/#urls-and-email-addresses), as in `<rieks.joosten@tno.nl>`.
:::

This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:

| Alternative syntax | Equivalent regular syntax |
| :----------------: | :-----------------------: |
| \[`show text`@\] | \[`show text`\](@) |
| \[`show text`@`scopetag`\] | \[`show text`\](`showtext`@`scopetag`) |
| \[`show text`@`scopetag`:`vsntag`\](`term`#`trait`) | \[`show text`\](`term`#`trait`@`scopetag`:`vsntag`) |

In the last row of the above table, `term` and `#trait` are optional. Thus, `[definition@]()` is equivalent with `[definition](@)` and with `[definition](@)`.

</TabItem>

</Tabs>

## Customizing TermRef Syntax (#customize)

:::info Editor's note
this section needs to be written.
:::