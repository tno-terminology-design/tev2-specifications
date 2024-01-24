---
id: curated-text-file
date: 20231009
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import APITable from '@site/src/components/APITable';

# Curated Text Files

Every [curated text](@) consists of two parts:

1. the [header](@) (also called the '[front matter](@)' of the [curated text](@)). It a set of ([YAML](https://yaml.org/spec/1.2.2/)) key-value pairs that contain meta data about the [curated text](@) and/or data that could also have been part of the [body](@), but is so small that it doesn't warrant to have a dedicated section for it.
2. the [body](@), that contains all other documentation. It has no fixed structure. When the [curated text](@) is to processed using a static site generator such as [Docusaurus v2](https://docusaurus.io/docs), or [github pages](https://pages.github.com/), it would typically contain ([markdown](https://www.markdownguide.org/basic-syntax/)).

<details>
  <summary>Example of a [curated text file](@) that contains a complete [curated text](@)</summary>
  <div>

```yaml
---
# Docusaurus [front matter](@)
id: ctext
sidebar_label: Curated Texts
# TEv2 Curated Text Header
term: curated-text
termType: concept
glossaryTerm: Curated Text
glossaryText: a text that documents a [concept](@) or other [semantic unit](@) of a particular [party](@), and specifies, e.g., the [term(s)](@) by which the [party](@) refers thereto, its [definition](@), and any other relevant information.
formPhrases: [ "curated-text{ss}" ]
# TEv2 Curation status
status: proposed
created: 20220602
updated: 20230814
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Curated Text

A curated text starts with three dashes `---`.
This indicates the start of its (YAML) header.
Typically, the header consists of a sequence of key-value pairs.
The header is terminated with another three dashes and a new line.

The body of the curated text typically starts behind the header block,
but it can also be placed in another file within the `scopedir`.
The body is typically markdown, but other constructs may be inserted
that contribute to the rendering of these texts in a (static) website.
An example of this is [MDX](https://mdxjs.com/).
A discussion on these other constructs is outside the scope of this document.
```

  </div>
</details>

A [curated text file](@) typically contains the complete [curated text](@). However, the [body](@) can be stored in a separate [file](body-file@), in which case, the [header](@) specifies where the [body file](@) is located.

[Curated text files](@) live in a (sub)directory of the [scopedir](@), which we call its [curatedir](@). The path of the [curatedir](@) (relative to the [scopedir](@)) can be found in the `curatedir` field of the [scope section](/docs/specs/files/saf#scope-section) in the [SAF](@).

This page specifies the syntax for [curated texts](@), which boils down to specifying the structure of their [headers](@), as [bodies](@) do not have any requirements for their structure that the [TEv2 tools](@) need.

## Header Structure {#header}

A [curated text](@) starts with three dashes `---`, which indicates the start of its (YAML) [header](@). This is followed by a sequence of key-value pairs (and comments). The [header](@) is terminated with another three dashes and a new line.

[Headers](@) of [curated texts](@) are used by [TEv2](@) tools, but may also contain entries that are used by other tools, such as static site generators. The example above shows some entries that are used by (the static site generator) Docusaurus. In order to avoid confusion about which entries serve what purposes, it is advised to put them in different sections and separate these with comments, as shown in the example.

## Predefined TEv2 Header Fields {#header-fields}

Different [TEv2 tools](@) use header fields in [headers](@) for various purposes. Below is a list of fields that are known to be used by tools that either exist or are under construction. This list is by no means complete, because as tools may be extended, and new tools can be added, it is possible that other fields may have be in use in particular [scopes](@).

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

```mdx-code-block
<APITable>
```

| Name            | Req'd | Description |
| --------------- | :---: | ----------- |
| `termType`        | n | [Text](term-type@) that [identifies](@) the kind of [semantic unit](@) that this [curated text](@) describes. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), or `usecase`. If not specified, its value defaults to the `defaulttype`-field in the [scope section](/docs/specs/files/saf#scope-section) of the [SAF](@). |
| `term`            | Y | text that is used to refer to the [semantic unit](@) that is documented by this [curated text](@). |
| `isa`             | n | [Term identifier](@) that [identifies](@) the [semantic unit](@) of which this is a specialization. |
| `bodyFile`        | n | Path, relative to the [scopedir](@), that contains the [body](@) of this [curated text](@). If not specified, the [body](@) in this file serves as the [body](@) of the [curated text](@). |
| `glossaryTerm`    | n | Text that is used for the [term](@) in a human readable [glossary](@). For example, for a [term](@) called `member`, you may want to specify a glossaryTerm `member (of a [community](@))`. |
| `glossaryText`    | n | Text that is used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). This text MUST be expected to contain [TermRefs](@). |
| `synonymOf`       | n | [Term identifier](@) that [identifies](@) the defined [term](@) of the [semantic unit](@) for which this is a [synonym](@). |
| `grouptags`       | n | List of [grouptags](@), each of which signifies that the [(scoped) term](@) that this [curated text](@) documents, is part of the group of [terms](@) that it represents.<br/>Example: `[tev2, management]`. |
| `formPhrases`     | n | List of [texts](form-phrase@) that are [used to convert](trrt#id@) the `show text` parts of [TermRefs](@) into `term`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs). For details, see ['Syntax Specs - Form Phrases](/docs/specs/syntax/form-phrase-syntax). |
| `status`          | n | Text that identifies the status of the term. ([Communities](@) of) [scopes](@) may specify values for this field. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `created`         | n | Date at which of the [curated text](@) was created, in the date format as used within this [scope](@). |
| `updated`         | n | Date at which of the [curated text](@) was last modified, in the date format as used within this [scope](@). |
| `contributors`    | n | Text that shows (or refers to) the people that have contributed to this [curated text](@). |
| `attribution`     | n | Text that credits the original creation of the texts in the document. |
| `originalLicense` | n | Reference to the license of the work from which the texts were derived. |

```mdx-code-block
</APITable>
```

:::info Editor's note
Do we need to provide more guidance, e.g., regarding the [front matter](@) fields that may be used by the [TRRT](@) for converting [TermRefs](@), e.g. with popovers (for which it is known that the `hoverText` field is used)?
:::
