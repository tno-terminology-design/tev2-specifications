---
id: mrg
sidebar_label: MRG (Machine Readable Glossary)
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Machine Readable Glossary (MRG)

An **MRG** or **Machine Readable Glossary** is a [glossary](@)[^1] for a particular (version of a) [terminology](@) that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/specs/files/mrg), to enable automated processing and integration with software systems. Unlike [dictionaries](@), the [terms](@) in an MRG are not ambiguous and have clear and well-defined [meanings](definition@).

[^1]: Actually, the [MRG](@) is more of an inventory than a [glossary](@), because it contains _all_ [semantic units](@) that are [curated](@) within the [scope](@). Apart from [terms](@), it may also include e.g., [mental models](pattern@) and [use cases](@). We choose to maintain the [term](@) "Machine Readable Glossary" ([MRG](@)), because most of us would view it - initially, at least - as a list of [terms](@) and their [definitions](@).

An [MRG](@) is meant to be used by the tools from the [toolbox](/docs/category/specs/tools), e.g. for creating a [HRG](@), or to help resolve [TermRefs](@). 

A [scope](@) may have multiple [MRGs](@), each of which represents a specific version of its [terminology](@).

## File naming conventions {#file-naming-conventions}

The file naming conventions apply to one particular [scope](@), which implies that there is a single [SAF](@), a single [glossarydir](@), and a single [scopedir](@). Within this [scope](@), the meaning of [scopetags](@), i.e. the [scopes](@) to which they refer, are defined in/by the [SAF](@). 

Within this [glossarydir](@) we can generate (or import), and hence also find all [MRG](@)-files that are needed within its [scope](@). We use the following file naming convention for such files:

- **`mrg.<scopetag>.<vsntag>.yaml`** is the name of a file that contains an actual [MRG](@), or it is a file that links (references) such a file, where:

  - **`<scopetag>`** is the [scopetag](@) that [identifies](@) the [scope](@) in which the [MRG](@) is curated, as specified in the [SAF](@) of the [scope](@) we are in. Thus, its value must either be that of the `scopetag`-field in the [`scope`-section](docs/spec-files/saf#scope-section) of the [SAF](@), or it must be one of the values in the `scopetags`-field in the [scopes (plural) section](docs/spec-files/saf#scopes) of that [SAF](@).
  - **`<vsntag>`** is the [versiontag](@) that [identifies](@) the version of the [terminology](@) for which the [MRG](@) contains [entries](mrg-entry@). Its value must be either one of the `vsntag`-fields, or appear in one of the `altvsntag`-fields in the [`versions` section](/docs/specs/files/saf#versions) of the [SAF](@).

- **`mrg.<scopetag>.yaml`** is a copy of the file `mrg.<scopetag>.<vsntag>.yaml`, where `<vsntag>` is the value of `defaultvsn`-field in the [`scope`-section](docs/spec-files/saf#scope-section) of the [SAF](@). 

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

## MRG `Terminology` section {#terminology}

The following fields are defined for the sections `terminology`:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

```mdx-code-block
<APITable>
```

| Name       | Req'd | Description |
| ---------- | :---: | :---------- |
| `scopetag`   | Y | [Scopetag](@) of the [scope](@) in which the [MRG](@) is defined.  |
| `scopedir`   | Y | URL that locates the [scope directory](@) associated with that [scope](@). |
| `curatedir`  | Y | Path to the directory where all [curated files](@) are located. This directory may contain subdirectories to allow [curators](@) to organize the files in any way they see fit. Full URL is `<scopedir>`/`<curatedir>`.|
| `vsntag`     | Y | [versiontag](@) by which the [terminology](@) of this [MRG](@) can be distinguished from the other versions of the [terminology](@) (in other [MRGs](@)). Its value MUST match the `vsntag` field of the corresponding `versions` section in the [SAF](@) |
| `altvsntags` | n | List of alternative [versiontags](@) that can be used to [identify](@) this version. Each of the values MUST be in the list of [versiontags](@) in the `altvsntags` field of the the corresponding `versions` section in the [SAF](@). |
| `license`    | n | File that contains the (default) licensing conditions. Full URL is `scopedir`/`license`. Its value MUST match the `license` field of the corresponding `versions` section in the [SAF](@), or if that isn't specified, the `license` field of the `scope` section in the [SAF](@). |

```mdx-code-block
</APITable>
```

## MRG `scopes` section {#scopes}

The following fields are defined for the section `scopes`:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name       | Req'd | Description |
| ---------- | :---: | :---------- |
| `scopetag`   | Y | [Scopetag](@) of a third-party [scope](@), the [MRG](@) of which contains [MRG entries](@) that have been imported into the [MRG](@). This [scopetag](@) has been chosen by the [curators](@) of the [scope](@) of which the [MRG](@) is part, to refer to that particular third-party [scope](@). This [scopetag](@) may differ from the [scopetag](@) that the [curators](@) of that third-party [scope](@) have chosen for this [scope](@) <br/>Must satisfy [regex](@) `[a-z0-9_-]+`. |
| `scopedir`   | Y | URL that locates the [scope directory](@) associated with that third-party [scope](@). |

## MRG Entries (the `entries` section) {#entries}

The `entries` section of an [MRG](@) is a list of [MRG entries](@), the purpose of which is that the various tools can find all data that is relevant for the purpose that such a tool serves.

This `entries` section documents the [terminology](@) that is [identified] by each of the [versiontags](@) in either the `vsntag` field or the `altvsntag` field in the `terminology` section of the [MRG](@).

An [MRG entry](@) has a few fields that are always present, because the [MRGT](@) generates them, as follows:

```mdx-code-block
<APITable>
```

| Field          | Value(s) that are assigned to the fields |
| -------------- | :---------- |
| `scopetag`     | [Scopetag](@) that [identifies](@) the [scope](@) from within which the contents of the [MRG entry](@) is obtained.[^2] This is either [scope](@) from within which the [MRG](@) has been generated, or the [scope](@) from which the [MRG entry](@) was imported. In the latter case, the [`scopes` section](#mrg-scopes) in the [MRG](@) MUST contain a mapping between the `scopetag` and its associated [scope directory](@). |
| `vsntag`       | [Versiontag](@) that [identifies](@) the version of the [terminology](@) from which the contents of the [MRG entry](@) is obtained. If the contents of the [MRG entry](@) was constructed from a [curated text](@), its value equals the value of the `vsntag` field in the [`terminology`-section](#mrg-terminology) of the [MRG](@) that this [MRG entry](@) is a part of. As a result, `scopetag`:`versiontag` [identifies](@) the [terminology](@) from which this [MRG entry](@) has originated. |
| `locator`      | path, relative to `scopedir`/`curatedir`/, where the [curated text](@) lives from which the contents of the [MRG entry](@) was constructed. The value of `scopedir` can be obtained from the `scopes` section of the [MRG](@), and that of `curatedir` can be obtained from the [SAF](@) that lives in this `scopedir`. |
| `navurl`       | path, relative to the URL as specified in the `website` field in the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@) (that lives in the `scopedir` as specified in the `scopes` section of the [MRG](@)), where the rendered version of the [curated text](@) is located. Its value will be empty if it cannot be constructed, e.g., because the `[navpath](@)` field in the [SAF](@) is empty or otherwise incorrect. |
| `termid`       | [Text](termid@) that unambiguously [identifies](@) the [semantic unit](@) within this [scope](@) that is documented by this [MRG entry](@). There MUST NOT be another [MRG entry](@) within the [MRG](@) that has a `termid` field with the same value. |
| `headingids`   | a list of the [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids) that exist in the file that contains the [body](@) of the [curated text](@), and can serve as `trait` in a [TermRef](@). |

```mdx-code-block
</APITable>
```

[^2]: One purpose of having the `scopetag` field is for determining which [MRG entries](@) in a [provisional MRG](@) require further processing. See [processing synonyms] for an example.

An [MRG entry](@) has additional fields that come from the front matter of the [curated text](@) that the [MRG entry](@) represents. Some fields are

- mandatory for all [curated texts](@), and hence will always appear in an [MRG entry](@); these appear in the table below.
- optional for [curated texts](@) - typically, e.g. to accommodate for differences in the types [semantic units](@) that [curated texts](@) document; these also appear in the table below.
- optional in the sense that they are intended to be processed by TEv2 tool plugins - these are not documented here.
- optional in the sense that they are intended to be used by third party rendering tools, such as Docusaurus or Jekyll - these are also not documented here.

:::info Editor's note
We need to think about how to refer readers to sections of plugins and rendering tool documentation that they might want/need to use.
:::

The following table documents the fields that are used within the context of [TEv2](@). Note that [authors](@) or [curators](@) are free to add other fields in the [headers](@) of [curated texts](@), e.g., to enable such texts to be processed by tools other than those of [TEv2](@).

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
| --------------- | :---: | :---------- |
| `scopetag`        | Y | [Scopetag](@) that [identifies](@) the [scope](@) from within which the contents of the [MRG entry](@) is [curated](@), and obtained. The [`scopes` section](#mrg-scopes) in the [MRG](@) SHOULD contain a mapping between the `scopetag` and its associated [scope directory](@).|
| `vsntag`          | Y | [Versiontag](@) that [identifies](@) the version of the [terminology](@) from which the contents of the [MRG entry](@) is obtained. If the contents of the [MRG entry](@) was constructed from a [curated text](@), its value equals the value of the `vsntag` field in the [`terminology`-section](#mrg-terminology) of the [MRG](@) that this [MRG entry](@) is a part of. As a result, `scopetag`:`versiontag` [identifies](@) the [terminology](@) from which this [MRG entry](@) has originated.<br/>Must satisfy [regex](@) `[a-z0-9_-.]+`.  |
| `locator`         | Y | path, relative to `scopedir`/`curatedir`/, where the [curated text](@) lives from which the contents of the [MRG entry](@) was constructed. The value of `scopedir` can be obtained from the `scopes` section of the [MRG](@), and that of `curatedir` can be obtained from the [SAF](@) that lives in this `scopedir`. |
| `navurl`          | Y | path, relative to the URL as specified in the `website` field in the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@) (that lives in the `scopedir` as specified in the `scopes` section of the [MRG](@)), where the rendered version of the [curated text](@) is located. Its value will be empty if it cannot be constructed, e.g., because the `[navpath](@)` field in the [SAF](@) is empty or otherwise incorrect. |
| `headingids`      | Y | a list of the [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids) that exist in the file that contains the [body](@) of the [curated text](@), and can serve as `trait` in a [TermRef](@). |
| `termid`          | Y | [Text](termid@) that unambiguously [identifies](@) the [semantic unit](@) within this [scope](@) that is documented by this [MRG entry](@). There MUST NOT be another [MRG entry](@) within the [MRG](@) that has a `termid` field with the same value. |
| `term`            | Y | [Text](term-identifier@) that [identifies](@) a [semantic unit](@) within this [scope](@), and hence also the [curated text](@) that describes it, which includes its [definition](@). Its value is typically the value of the `glossaryTerm` field, where all characters are made lower-case, any text between parentheses is discarded, and any (sequences of) spaces (or other special characters) are replaced with a `-`character.<br/>The [`term`-field](/docs/specs/syntax/term-ref-syntax#term) of a [TermRef](@) that refers to this [curated text](@) must match this value.<br/>Must satisfy [regex](@) `[a-z0-9_-]+`. |
| `termType`        | n | [Text](term-type@) that [identifies](@) the kind of [semantic unit](@) that this [curated text](@) describes. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), or `usecase`.<br/>Must satisfy [regex](@) `[a-z0-9_-]+`. |
| `bodyFile`        | n | Path, relative to the [scopedir](@), that contains the [body](@) of this [curated text](@). If not specified, the [body](@) in this file serves as the [body](@) of the [curated text](@). |
| `glossaryTerm`    | n | Text that is used for the [term](@) in a human readable [glossary](@). For example, for a [term](@) called `member`, you may want to specify a glossaryTerm `member (of a [community](@))`. |
| `glossaryText`    | n | Text that is used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). This text MUST be expected to contain [TermRefs](@). |
| `synonymOf`       | n | [Term identifier](@) that [identifies](@) the defined [term](@) of the [semantic unit](@) for which this is a [synonym](@). |
| `grouptags`       | n | List of [grouptags](@), each of which signifies that the [(scoped) term](@) that this [curated text](@) documents, is part of the group of [terms](@) that it represents.<br/>Example: `[tev2, management]`. |
| `formPhrases`     | n | List of [texts](form-phrase@) that are [used to convert](/docs/specs/tools/trrt#id) the `show text` parts of [TermRefs](@) into `term`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs). For details, see ['Syntax Specs - Form Phrases](/docs/specs/syntax/form-phrase-syntax).[^3] |

```mdx-code-block
</APITable>
```

[^3]: The `formPhrases` field in an [MRG Entry](@) is void of so-called [form phrase macros](/docs/specs/syntax/form-phrase-syntax#form-phrase-macros); it is simply a (possibly extensive) list of [form phrases](@).

# Footnotes
