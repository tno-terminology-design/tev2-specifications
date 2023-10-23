---
id: mrg
sidebar_label: MRG (Machine Readable Glossary)
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Machine Readable Glossary (MRG)

Every [scope](@) has (at least) one **Machine Readable Inventory**[^1] (that we call a **Machine Readable Glossary** or [MRG](@)), that renders the [terminology](@) of a specific [scope](@) into a specific, well-defined format that is described in this document. An [MRG](@) is meant to be used by the tools from the [toolbox](/docs-toolbox), e.g. for creating a [HRG](@), or to help resolve [TermRefs](@). A [scope](@) may have multiple [MRGs](@), each of which represents a specific version of its [terminology](@).

[^1]: The [MRG](@) is an inventory rather than a [glossary](@), because it contains _all_ [semantic units](@) that are [curated](@) within the [scope](@): apart from [terms](@), it also include e.g., [mental models](pattern@) and [use cases](@). We choose to maintain the [term](@) "Machine Readable Glossary" ([MRG](@)), because most of us would view it - initially, at least - as a list of [terms](@) and their [definitions](@).

## File naming conventions {#mrg-file-naming-conventions}

The file naming conventions apply to one particular [scope](@), which implies that there is a single [SAF](@), a single [glossarydir](@), and a single [scopedir](@). Within this [scope](@), the meaning of [scopetags](@), i.e. the [scopes](@) to which they refer, are defined in/by the [SAF](@). 

Within this [glossarydir](@) we can generate (or import), and hence also find all [MRG](@)-files that are needed within its [scope](@). We use the following file naming convention for such files:

- **`mrg.<scopetag>.<vsntag>.yaml`** is the name of a file that contains an actual [MRG](@), or it is a file that links (references) such a file, where:

  - **`<scopetag>`** is the [scopetag](@) that [identifies](@) the [scope](@) in which the [MRG](@) is curated, as specified in the [SAF](@) of the [scope](@) we are in. Thus, its value must either be that of the `scopetag`-field in the [`scope`-section](docs/spec-files/saf#scope-section) of the [SAF](@), or it must be one of the values in the `scopetags`-field in the [scopes (plural) section](docs/spec-files/saf#scopes) of that [SAF](@).
  - **`<vsntag>`** is the [versiontag](@) that [identifies](@) the version of the [terminology](@) for which the [MRG](@) contains [entries](mrg-entry@). Its value must be either one of the `vsntag`-fields, or appear in one of the `altvsntag`-fields in the [`versions` section](/docs/spec-files/saf#versions) of the [SAF](@).

- **`mrg.<scopetag>.yaml`** is the name of the (symbolic link) file that links to the file `mrg.<scopetag>.<vsntag>.yaml`, where `<vsntag>` is the value of `defaultvsn`-field in the [`scope`-section](docs/spec-files/saf#scope-section) of the [SAF](@). 

This naming convention enables tools (as well as [curators](@) and others) that operate within a particular [scope](@), to quickly find a particular [MRG](@) that is relevant for that [scope](@).

## MRG structure

A Machine Readable Glossary (MRG) is a YAML (or JSON) file that has three main parts, which we refer to as 'sections':
- **`terminology`** specifies the characteristics of the [terminology](@) of the [scope](@). This includes the [scopetag](@) and [scopedir](@) of the [scope](@), as well as the license under which the contents of the [MRG](@) can be used.
- **`scopes`** specifies which (other) [scopes](@) are relevant to this [terminology](@). This includes the [scopetag](@) and [scopedir](@) of any such [scope](@).
- **`entries`** contains an (unsorted) list of [MRG entries](@).

<details>
  <summary>Example of sections `terminology` and `scopes`</summary>

~~~ yaml
terminology: # the fields below must match the corresponding data in the SAF
  scopetag: tev2 # scope, the terminology of which is contained in this MRG
  scopedir: https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs
  curatedir: terms
  vsntag: v0.9.4
  altvsntags: [ latest ]
  license: LICENSE.md
scopes: # mappings of scopetags that are used, and their scopedirs
  - scopetag: essiflab
    scopedir: https://github.com/essif-lab/framework/tree/master/docs
  - scopetag: ctwg
    scopedir: https://github.com/trustoverip/ctwg
entries: # here follows an (unsorted) list of MRG entries
~~~

</details>

## MRG `Terminology` section {#mrg-terminology}

The following fields are defined for the sections `terminology`:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name       | Req'd | Description |
| ---------- | :---: | :---------- |
| `scopetag`   | Y | [Scopetag](@) of the [scope](@) in which the [MRG](@) is defined.  |
| `scopedir`   | Y | URL that locates the [scope directory](@) associated with that [scope](@). |
| `curatedir`  | Y | Path to the directory where all [curated files](@) are located. This directory may contain subdirectories to allow [curators](@) to organize the files in any way they see fit. Full URL is `<scopedir>`/`<curatedir>`.|
| `vsntag`     | Y | [versiontag](@) by which the [terminology](@) of this [MRG](@) can be distinguished from the other versions of the [terminology](@) (in other [MRGs](@)). Its value MUST match the `vsntag` field of the corresponding `versions` section in the [SAF](@) |
| `altvsntags` | n | List of alternative [versiontags](@) that can be used to [identify](@) this version. Each of the values MUST be in the list of [versiontags](@) in the `altvsntags` field of the the corresponding `versions` section in the [SAF](@). |
| `license`    | n | File that contains the (default) licensing conditions. Full URL is `scopedir`/`license`. Its value MUST match the `license` field of the corresponding `versions` section in the [SAF](@), or if that isn't specified, the `license` field of the `scope` section in the [SAF](@). |

## MRG `scopes` section {#mrg-scopes}

The following fields are defined for the section `scopes`:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name       | Req'd | Description |
| ---------- | :---: | :---------- |
| `scopetag`   | Y | [Scopetag](@) of a third-party [scope](@), the [MRG](@) of which contains [MRG entries](@) that have been imported into the [MRG](@). This [scopetag](@) has been chosen by the [curators](@) of the [scope](@) of which the [MRG](@) is part, to refer to that particular third-party [scope](@). This [scopetag](@) may differ from the [scopetag](@) that the [curators](@) of that third-party [scope](@) have chosen for this [scope](@) <br/>Must satisfy regex `[a-z0-9_-]+`. |
| `scopedir`   | Y | URL that locates the [scope directory](@) associated with that third-party [scope](@). |

## MRG Entries (the `entries` section) {#mrg-entries}

The `entries` section of an [MRG](@) is a list of [MRG entries](@), the purpose of which is that the various tools can find all data that is relevant for the purpose that such a tool serves.

This `entries` section documentents the [terminology](@) that is [identified] by each of the [versiontags](@) in either the `vsntag` field or the `altvsntag` field in the `terminology` section of the [MRG](@).

An [MRG entry](@) has a few fields that are always present, because the [MRGT](@) generates them, as follows:

| Field          | Value(s) that are assigned to the fields |
| -------------- | :---------- |
| `scopetag`     | [Scopetag](@) that [identifies](@) the [scope](@) from within which the contents of the [MRG entry](@) is obtained.[^2] This is either [scope](@) from within which the [MRG](@) has been generated, or the [scope](@) from which the [MRG entry](@) was imported. In the latter case, the [`scopes` section](#mrg-scopes) in the [MRG](@) MUST contain a mapping between the `scopetag` and its associated [scope directory](@). |
| `vsntag`       | [Versiontag](@) that [identifies](@) the version of the [terminology](@) from which the contents of the [MRG entry](@) is obtained. If the contents of the [MRG entry](@) was constructed from a [curated text](@), its value equals the value of the `vsntag` field in the [`terminology`-section](#mrg-terminology) of the [MRG](@) that this [MRG entry](@) is a part of. As a result, `scopetag`:`versiontag` [identifies](@) the [terminology](@) from which this [MRG entry](@) has originated. |
| `locator`      | path, relative to `scopedir`/`curatedir`/, where `scopedir` can be obtained from the `scopes` section of the [MRG](@), and `curatedir` can be obtained from the [SAF](@) that lives in this `scopedir`, where the [curated text](@) lives from which the contents of the [MRG entry](@) was constructed. |
| `navurl`       | path, relative to the URL as specified in the `website` field in the [`scope` section](/docs/spec-files/saf#scope-section) of the [SAF](@) (that lives in the `scopedir` as specified in the `scopes` section of the [MRG](@)), where the rendered version of the [curated text](@) is located. |
| `headingids`   | a list of the [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids) that exist in the file that contains the [body](@) of the [curated text](@), and can serve as `trait` in a [TermRef](@). |

[^2]: One purpose of having the `scopetag` field is for determining which [MRG entries](@) in a [provisional MRG](@) require further processing. See [processing synonyms] for an example.

An [MRG entry](@) has additional fields that come from the front matter of the [curated text](@) that the [MRG entry](@) represents. Some fields are
- mandatory for all [curated texts](@), and hence will always appear in an [MRG entry](@); these appear in the table below.
- optional for [curated texts](@) - typically, e.g. to accommodate for differences in the types [semantic units](@) that [curated texts](@) document; these also appear in the table below.
- optional in the sense that they are intended to be processed by TEv2 tool plugins - these are not documented here.
- optional in the sense that they are intended to be used by third party rendering tools, such as Docusaurus or Jekyll - these are also not documented here.

:::info Editor's note
We need to think about how to refer readers to sections of plugins and rendering tool documentation that they might want/need to use.
:::

The following table documents the fields that are used within the context of [TEv2](@)

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name            | Req'd | Description |
| --------------- | :---: | :---------- |
| `scopetag`        | Y | [Scopetag](@) that [identifies](@) the [scope](@) from within which the contents of the [MRG entry](@) is [curated](@), and obtained. The [`scopes` section](#mrg-scopes) in the [MRG](@) SHOULD contain a mapping between the `scopetag` and its associated [scope directory](@).|
| `vsntag`          | Y | [Versiontag](@) that [identifies](@) the version of the [terminology](@) from which the contents of the [MRG entry](@) is obtained. If the contents of the [MRG entry](@) was constructed from a [curated text](@), its value equals the value of the `vsntag` field in the [`terminology`-section](#mrg-terminology) of the [MRG](@) that this [MRG entry](@) is a part of. As a result, `scopetag`:`versiontag` [identifies](@) the [terminology](@) from which this [MRG entry](@) has originated.<br/>Must satisfy regex `[a-z0-9_-.]+`.  |
| `term`            | Y | [Text](term-identifier@) that [identifies](@) a [semantic unit](@) within this [scope](@), and hence also the [curated text](@) that describes it, which includes its [definition](@). Its value is typically the value of the `glossaryTerm` field, where all characters are made lower-case, any text between parentheses is discarded, and any (sequences of) spaces (or other special characters) are replaced with a `-`character.<br/>The [`term`-field](/docs/spec-syntax/term-ref-syntax#term) of a [TermRef](@) that refers to this [curated text](@) must match this value.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termType`        | n | [Text](term-type@) that [identifies](@) the kind of [semantic unit](@) that this [curated text](@) describes. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), or `usecase`.<br/>Must satisfy regex `[a-z0-9_-]+`. |
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
| `locator`         | n | Text that identifies the file that holds the [curated text](@) of the [semantic unit](@) that this [MRG entry](@) describes. The full URL of the [curated text](@) is `scopedir`/`curatedir`/`locator`, where `scopedir` and `curatedir` can be found in the [SAF](@) (which is in the root of `scopedir`). Note that `locator` may contain a path. |
| `navurl`          | n | URL that locates a human readable, rendered version of the [curated text](@) of the [semantic unit](@) that this [MRG entry](@) describes. This URL is used to resolve [TermRefs](@) that refer to this [semantic unit](@). |
| `headingids`      | n | a list of the [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids) that exist in the file that contains the [body](@) of the [curated text](@), and can serve as `trait` in a [TermRef](@). |

# Footnotes
