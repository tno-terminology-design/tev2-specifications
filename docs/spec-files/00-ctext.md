---
id: ctext
sidebar_label: Curated Texts
date: 20220713
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Curated Texts

A **[curated text](@)** is a text that documents a [semantic unit](@) within a specific [scope](@). This page specifies the syntax that [curators](@) must ensure that all [curated texts](@) comply with, and that [authors](@) are expected to follow.

The documentation of a [semantic unit](@) includes, e.g.:
- the [term(s)](@) that are used within its [scope](@) to represent that [semantic unit](@);
- a [definition](@) by which [readers](@) should be able to distinguish between instances and non-instances of that [semantic unit](@)
- administrative attributes, e.g., various [tags](@), dates, status, etc.
- processing attributes, e.g., formphrases, etc.,
- rendering attributes, e.g., texts to use for generating [glossaries](@), document titles, pop-ups, etc.

Within the constraints for [curated texts](@) as specified in this document, there is still lots of freedom regarding what [authors](@) (of such [texts](curated-text@)) could do, or not do. The [curators](@) of the [scope](@) are expected to provide guidance to these [authors](@) about additional constraints they require them to follow.

## Context

In principle[^1], a [curated text](@) resides in a file which we call a **[curated file](@)**. All [curated files](@) of a [scope](@) are expected to live in (a subdirectory of) its [scopedir](@), which we call the [curatedir](@), and whose location within the [scopedir] is specified in the [SAF](@). [Curated files](@) are expected to be processable using the [terminology tools](/docs-toolbox). However, [curators](@) may decide that they are also to be processable by other, third party tools, e.g., for the purpose of making rendered versions of such files available to some public. Examples of such tools include [Docusaurus v2](https://docusaurus.io/docs), or [github pages](https://pages.github.com/).

[^1]: There are exceptions. In some contexts, documentation files may already exist that would properly describe a particular term. For [TEv2](@), the documentation of the [MRG](@) is an example: it specifies everything you might want to know about machine readable glossary files. If we could use that file to provide the [curated text](@) for [MRGs](@), that would be very convenient. Since [curated texts](@) consist of a [header](@) and a [body](@), instead of stuffing them both in a single [curated file](@), we have the possibility to have only the [header](@) in a [curated file](@), and leave the [body](@) in the existing document.

## Structure

Every [curated text](@) consists of two parts: a ([YAML](https://yaml.org/spec/1.2.2/)) **[header](@)**, which is also called the 'frontmatter', and a ([markdown](https://www.markdownguide.org/basic-syntax/)) **[body](@)**. The [header](@) is a set of key-value pairs that contain meta data about the [curated text](@) and/or data that could also have been part of the [body](@), but is so small that it doesn't warrant to have a dedicated section for it. Typically the [header](@) and the [body](@) are placed in a single [file](curated-file@). 

<details>
  <summary>Example</summary>
  <div>

~~~ yaml
---
# Docusaurus front matter
id: ctext
sidebar_label: Curated Texts
# TEv2 Curated Text Header
term: curated-text
termType: concept
isa:
glossaryTerm: Curated Text
glossaryText: a text that documents a [concept](@) or other [semantic unit](@) of a specific [community](@) or other [party](@), and is located within a [scope](@) that is owned by that [community](@)/[party](@).
synonymOf:
grouptags:
formPhrases: curated-text{ss}, ctext{ss}
# TEv2 Curation status
status: proposed
created: 2022-06-02
updated: 2023-08-14
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Curated Text
A curated text starts with three dashes `---`.
This indicates the start of its (YAML) header.
Typically, the header consists of a sequence of key-value pairs.
The header is terminated with onother three dashes and a new line.

The body of the curated text typically starts behind the header block,
but it can also be placed in another file within the `scopedir`.
The body is typically markdown, but other constructs may be inserted
that contribute to the rendering of these texts in a (static) website.
An example of this is [MDX](https://mdxjs.com/).
A discussion on these other constructs is outside the scope of this document.
~~~

  </div>
</details>

[Headers](@) of [curated texts](@) are used by [TEv2](@) tools, but may also contain entries that are used by other tools, such as static site generators. The example above shows some entries that are used by (the static site generator) Docusaurus. In order to avoid confusion about which entries serve what purposes, it is advised to mark them as separate sections, as shown in the example. 

## Header Fields {#header-fields}

[TEv2](@) requires a number of fields to exist, to ensure its correct functioning. However, for specific features of different tools, additional fields may be specified. Here is a list of the fields that are are available for genenic use across the tools:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name            | Req'd | Description |
| --------------- | :---: | ----------- |
| `term`            | Y | [Text](term-identifier@) that [identifies](@) a [semantic unit](@) within this [scope](@), and hence also the [curated text](@) that describes it, which includes its [definition](@). Its value is typically the value of the `glossaryTerm` field, where all characters are made lower-case, any text between parentheses is discarded, and any (sequences of) spaces (or other special characters) are replaced with a `-`character.<br/>The [`term`-field](/docs/spec-syntax/term-ref-syntax#term) of a [TermRef](@) that refers to this [curated text](@) must match this value.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termType`        | n | [Text](term-type@) that [identifies](@) the kind of [semantic unit](@) that this [curated text](@) describes. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`), or `usecase`.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `isa`             | n | [Term identifier](@) that [identifies](@) the [semantic unit](@) of which this is a specialization. |
| `bodyFile`        | n | Path, relative to the [scopedir](@), that contains the [body](@) of this [curated text](@). If not specified, the [body](@) in this file serves as the [body](@) of the [curated text](@). |
| `glossaryTerm`    | n | Text that is used for the [term](@) in a human readable [glossary](@). For example, for a [term](@) called `member`, you may want to specify a glossaryTerm `member (of a [community](@))`. |
| `glossaryText`    | n | Text that is used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). This text MUST be expected to contain [TermRefs](@). |
| `synonymOf`       | n | [Term identifier](@) that [identifies](@) the defined [term](@) of the [semantic unit](@) for which this is a [synonym](@). |
| `grouptags`       | n | List of [grouptags](@), each of which signifies that the [(scoped) term](@) that this [curated text](@) documents, is part of the group of [terms](@) that it represents.<br/>Example: `[tev2, management]`.<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-]+)\s*(?:,\s*([a-z0-9_-]+))*\s*\])?`](https://www.debuggex.com/r/a51CXl1NzR3kwihT). |
| `formPhrases`     | n | List of [texts](formphrase@) that are [used to convert](/docs/spec-tools/trrt#id) the `show text` parts of [TermRefs](@) into `term`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs). For details, see ['Syntax Specs - Form Phrases](/docs/spec-syntax/form-phrase-syntax). |
| `status`          | n | Text that identifies the status of the term. ([Communities](@) of) [scopes](@) may specify values for this field. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `created`         | n | Date at which of the [curated text](@) was created, in the date format as used within this [scope](@). |
| `updated`         | n | Date at which of the [curated text](@) was last modified, in the date format as used within this [scope](@). |
| `contributors`    | n | Text that shows (or refers to) the people that have contributed to this [curated text](@). |
| `attribution`     | n | Text that credits the original creation of the texts in the document. |
| `originalLicense` | n | Reference to the license of the work from which the texts were derived. |

:::info Editor's note
Do we need to provide more guidance, e.g., regarding the front matter fields that may be used by the [TRRT](@) for converting [TermRefs](@), e.g. with popovers (for which it is known that the `hoverText` field is used)?
:::