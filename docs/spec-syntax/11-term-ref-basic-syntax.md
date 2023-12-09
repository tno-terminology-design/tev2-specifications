---
id: term-ref-default-syntax
sidebar_label: TermRefs - Default Syntax
date: 20231123
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Term References - Default Syntax

As an [author](@) or [curator](@), you want to be able to mark words or phrases, and have them refer to (the documentation of) a particular [concept](@) or other [semantic unit](@). Such marked-up words or phrases are called [TermRefs](@).

The syntax for [TermRefs](@) isn't fixed. This file specifies one of the different ways in which this can be done, and call it the **'default syntax' for [TermRefs][@]**.

In the default syntax,a [TermRef](@) can be thought of as a [Markdown link](https://www.markdownguide.org/basic-syntax/#links), but rather than linking to some URL or fragment, it refers to (a specific trait of) a specific [concept](@) or other [semantic unit](@), as defined in a particular [terminology](@).

The most general form of the default syntax is:

\[ `show text` \]( `termtype` : `term` # `trait` @ `scopetag` : `vsntag` )

where: 
- `show text` is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters `@` or `]` (this is needed to distinguish [TermRefs](@) from regular [markdown links](https://www.markdownguide.org/basic-syntax/#links)).
- 
- `termtype` is a word that identifies the type of the term, e.g. 'concept', 'relation', or 'pattern'.
- `termtype` : `term` # `trait` @ `scopetag` : `vsntag` is the  

Here is an example of a [TermRef](@): `[definitions](definition@)`. When this text is rendered into a human readable form, it will show the text `definitions` (plural) enhanced, and it will link to the text that describes (or defines) the term `definition` (singular). If you would want to use this term as it is defined in the [scope](@) called `essif-lab`, you could do that by wrinting `[definitions](definition@essif-lab)` (provided that `essif-lab` is a defined [scopetag](@) within the [scope](@) that you operate in).

The complete, generic structure of a [TermRef](@) is: **\[`show text`\](`term`#`trait`@`scopetag`:`vsntag`)**. However, all of its elements (except for `show text`) are optional, so as to limit the 'extra work' that [authors](@) need to do to a minimum.

### `showtext` {#showtext}

**`showtext`** is the text that will be highlighted/emphasized to indicate it is linked.
It must not contain the characters `@` or `]` (this is needed to distinguish [TermRefs](@) from regular [markdown links](https://www.markdownguide.org/basic-syntax/#links)).

### `term` {#term}

**`term`** is the [(scoped) term](@) that [identifies](@) the [semantic unit](@) that is to be referred to.<br/>It must satisfy the regex `[a-z0-9_-]+`.

If omitted, its value is assumed to be [derivable from `showtext`](/docs/spec-tools/trrt#id).
At a minimum, this is the case if the `term` equals the result of processing `showtext` by first converting every character in the range `[A-Z]` to lower-case, and then replacing every sequence of characters specified by regex `[^A-Za-z_-]+` with (a single) `-` character.

### `trait` {#trait}

**`trait`** is a text that [identifies](@) a particular (kind of) characteristic (feature, attribute, particularity) that is associated with the [term](@), and to a description of which is to be referred.<br/>It must satisfy the regex `[a-z0-9_-]+`.

If omitted (in which case the preceding `#`-character may also be omitted), the [TermRef](@) will by default resolve to the text of its [glossary](@) entry. While it is envisaged that `trait` must be a text from a predefined set of allowed/supported texts (e.g. `purpose`, `criteria`, `example-3`), the precise semantics remain to be specified.

:::info Editor's note
The semantics of `trait` need to be better specified.
:::
### `scopetag` {#scopetag}

**`scopetag`** is a [tag](@) that [identifies](@) the [scope](@) of the [terminology](@) that contains the [(scoped) term](scoped-term@) that is being referenced.<br/>It must satisfy the regex `[a-z0-9_-]+`. Also, it must appear as such in the `scopes` section of the [SAF](@) of the [scope](@) within which the document containing the [TermRef](@) is being maintained, or it must be the [scopetag](@) of the [scope](@) itself.

If omitted, a default [scope](@) will be used, which is the [scope](@) from which the [TRRT](@) is being called, which SHOULD be the [scope](@) within which the document containing the [TermRef](@) is being maintained. Note that the preceding `@` sign MUST NOT be omitted because as it serves the purpose to distinguish [TermRefs](@) from other [markdown links](https://www.markdownguide.org/basic-syntax/#links).

### `vsntag` {#vsntag}

**`vsntag`** is a [versiontag](@) that [identifies](@) the specific version of the [terminology](@) in the [scope](@) that contains the [(scoped) term](scoped-term@) that is being referenced.<br/>It must satisfy the regex `[a-z0-9_-\.]+`.

If omitted (in which case the preceding `:`-character may also be omitted), its value will be the default, which is determined by the [curators](@) of that [scope](@) (the [MRG](@) that has the [terminology](@) that contains the (scoped) term](scoped-term@) that is being referenced, is specified in the [SAF](@) of that [scope](@), in the appropriate `scopes.mrgfile`-field). A `vsntag` is only valid if it appears as the value of the `vsntag` field or an element of the `altvsntags` field in one of the list-elements of the `versions` field in the [SAF](@) of the [scope](@).

:::info Editor's note
It has been suggested to provide [TermRef](@) syntax that allows one to refer to a [semantic unit](@) from a [terminology](@) that was 'current'/'latest'/... at a particular date. The [SAF](@) [versioning specifications](/docs/spec-files/saf#versions) already cater for `from` and `to` dates, but everything else needs to be worked out.
:::

## Motivation for the chosen syntax

We want to enable [authors](@) to use [TermRefs](@) pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. [Markdown links](https://www.markdownguide.org/basic-syntax/#links) are of the form \[`show text`\](`ref-text`), where `show text` is the text that is rendered and emphasized so that a [reader](@) knows it can be clicked, and `ref-text` is a (relative or absolute) URL, or a [heading ID](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids), that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for [TermRefs](@) that is<br/>- sufficiently similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links),<br/>- 'humanly interpretable' when it isn't processed by the [TRRT](@),<br/>- easy to use for [authors](@), and<br/>- sufficiently distinct from a Markdown link so that the [TRRT](@) will not process Markdown links yet will process the [TermRefs](@).
