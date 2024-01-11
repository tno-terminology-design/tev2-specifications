---
id: mrg-term-selection-syntax
sidebar_label: MRG Term Selection
toc_min_heading_level: 2
toc_max_heading_level: 2
date: 20231006
---

# MRG Term Selection Instruction Syntax

import useBaseUrl from '@docusaurus/useBaseUrl'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Curators](@) must have the ability to determine which [terms](@) are, or are not part of a [terminology](@), as a prerequisite for generating a corresponding [MRG](@). This document specifies the syntax for the instructions that [curators](@) can use to do this, and also how these instructions are being processed, which leads to a [provisional MRG](@) that contains [provisional MRG entries](@) for each of these [terms](@). This processing is [the first step in MRG generation](/docs/40-specs/tools/mrgt#constructing-provisional-mrg)

## Introduction

Specifying a [terminology](@), i.e., creating a [provisional MRG](@) is a process that starts with an empty set of [terms](@), i.e., an empty set of [provisional MRG entries](@) that each document such a [term](@). Then, the [terminology selection instructions](@) that are specified for the particular version of the [terminology](@) (as specified in the [`versions` section](/docs/40-specs/files/saf#versions) of the [SAF](@)), are executed; one after the other.

<details>
  <summary>Example SAF, showing elements that are relevant for term selection (irrelevant fields are omitted)</summary>

~~~ yaml
scope:
  scopetag: myscope # identifier for 'current scope'
  scopedir: https://github.com/myscope-repo/tree/master/docs  # URL of the scope-directory of `myscope`
  curatedir: terms # directory where all curated files are located.
  glossarydir: glossaries # directory where all glossary files and related stuff are located.
  defaultvsn: latest # vsntag that identifies the default terminology. A link to the MRG is located at `scopedir`/`glossarydir`/mrg.`scopetag`.yaml
...
scopes:

- scopetag: essiflab # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology
  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory
- scopetag: tev2 # definition of (scope)tag(s) that are used within this scope to refer to a specific terminology
  scopedir: https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs # URL of the scope-directory
...
versions:
  - vsntag: terms
    termselection:
      - "*" # import all terms defined by a curated text in the [current scope](@)
  - vsntag: v1.0.3 # a versiontag that identifies this version from all other versions in the SAF
    altvsntags: [ latest ] 
    termselection:
      - "*@essiflab" # import all terms from the MRG linked to by `mrg.essiflab.yaml`
      - "-grouptags[terminology]" # then, remove all terms tagged with the grouptag `terminology`
      - "*" # then, all terms defined by a curated text in the [current scope](@)
~~~

</details>

In this text, we will use the [term](@) **[current scope](@)** for the [scope](@) within which the [terminology](@) is being created. Note that in the [current scope](@), you can only create a [terminology](@) that belongs to that [scope](@), and therefore that [terminology](@) must be one of the versions as defined in the [SAF](@) of that scope. The particular version that is being created is then referred to as the **current version**.

## Adding Terms {#syntax-add}

Selecting and subsequently adding [terms](@) to the [provisional MRG](@) consists of:
1. [identifying](@) such [terms](@);
2. [identifying](@) the source from which data is to be taken for constructing the associated [MRG entries](@);
3. [creating](/docs/40-specs/tools/mrgt#create-mrg-entry) a [provisional MRG entry](@) for every [semantic unit](@) that is [identified](@), using the data that documents this [semantic unit](@) in the designated source, and flagging this [provisional MRG entry](@) for further processing if (and only if) the source is the set of [curated texts](@) of the [current scope](@), and the data contains a `synonymOf`-field that is not empty;
4. adding this [provisional MRG entry](@) to the [provisional MRG](@), possibly overwriting an [entry](provisional-mrg-entry@) if one already exists for the [identified](@) [term](@).

By default, this source is the set of [curated texts](@) of the [current scope](@). For every [curated text](@) that documents a selected [term](@), a [provisional MRG entry](@) is created that contains the [header](@) of that [curated text](@), without the (first and last) lines that contain `---` (the front matter delimiters).

However, any (existing) [MRG](@) can be designated as an alternative source, by adding an `@<tid>` part to the instruction, where `<tid>` is a [terminology identifier](@) that [identifies](@) the [terminology](@) from which the [term](@) is to be added. For every [MRG entry](@) in that [MRG](@), that documents a selected [term](@), a [provisional MRG entry](@) is created that contains all fields of that [MRG entry](@), except for the `vsntag` [field](/docs/40-specs/files/mrg#entries), which will be assigned the value of the `vsntag` field that is found in the ['terminology' section](/docs/40-specs/files/mrg#terminology) of the [MRG](@) from which the data was taken.

### Selecting all terms from a particular source {#syntax-add-all-terms}

The following syntaxes are available for selecting all [terms](@) from a specific source for inclusion into the [provisional MRG](@):

- **`*`**<br/>Add all [terms](@) for which there are [curated texts](@) in the [current scope](@).<br/>&nbsp;
- **`* @<tid>`**<br/>Add all [terms](@) from the [terminology](@) that is [identified](@) by the [terminology-identifier](@) `<tid>`. The associated [MRG](@) must exist in the [glossarydir](@) of the [current scope](@), which can be arranged by calling the [MRG importer](@).

<details>
  <summary>Examples:</summary>

  | Examples:  | Meaning: |
  | :-------   | :------  |
  | *&nbsp;@tev2:v1 | Add all [terms](@) that are in version `v1` of the [terminology](@) of the [scope](@) identified by `tev2`, i.e., in [MRG](@) file `mrg.tev2.v1.yaml`. |
  | * @tev2    | Add all [terms](@) that are in the default version of the [terminology](@) of the [scope](@) identified by `tev2`,<br/>i.e., in [MRG](@) file `mrg.tev2.yaml`. |
  | * @:v1.0.3 | Add all [terms](@) that are in version `v1.0.3` of the [terminology](@) of the [current scope](@).<br/>i.e., in [MRG](@) file `mrg.<cstag>.v1.0.3.yaml`, where `<cstag>` is the value of the `scopetag` field in the [`scope` section](/docs/40-specs/files/saf#scope-section) of the [SAF](@) of the [current scope](@). |
  | * @        | Add all [terms](@) that are in the default version of the [terminology](@) of the [current scope](@).<br/>i.e., in [MRG](@) file `mrg.<cstag>.yaml`, where `<cstag>` is the value of the `scopetag` field in the [`scope` section](/docs/40-specs/files/saf#scope-section) of the [SAF](@) of the [current scope](@). |
  | *          | Add all [terms](@) that are described by a [curated text](@) in the [current scope](@). |

The difference between `*` and `* @` is that the first takes [curated texts](@) as source, whereas the latter takes an existing [MRG](@) as source, being the [MRG](@) that contains the default version of the [terminology](@) of the [current scope](@). This allows [terminologies](@) to be defined in terms of their predecessors.

</details>

### Selecting specific terms from a particular source {#syntax-add-selected-terms}

The following syntaxes are available for selecting a subset of the [terms](@) from a specific source:

- **`<key>` [ `<value>`, `<value2>`, ... ]**, where:
  - `<key>` is a text that corresponds with a field name in a [header](@) (front-matter) of a [curated text](@), such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not a [curated text](@) is to be selected.<br/>&nbsp;
- **`<key>` [ `<value>`, `<value2>`, ... ] `@<tid>`**, where:
  - `<tid>` is a [terminology identifier](@) that [identifies](@) the [terminology](@) from which the [term](@) is to be added.
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) that resides in that [MRG](@), such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not a [term](@) from the designated [terminology](@) is to be selected.
 
These instructions will select every [term](@) whose specification (as taken from the designated source) contains a field named `<key>`, and (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details>
  <summary>Examples:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | term [actor]               | select every [term](@) in the [current scope](@), that is described by a [curated text](@) of which the [header](@) has a `term` field with the value `actor`. |
  | status[proposed,approved]  | select every [term](@) in the [current scope](@), that is described by a [curated text](@) of which the [header](@) has a `status` field with the value `proposed` or `approved`. |
  | somefield []               | select every [term](@) in the [current scope](@), that is described by a [curated text](@) of which the [header](@) has a `somefield` field that has no value specified. |
  | term [actor,party]@tev2:v1 | select every [term](@) in the [terminology](@) [identified](@) by `@tev2:v1`, that is described by an [MRG entry](@) (in the corresponding [MRG](@)) that has a `term` field with the value `actor` or `party`. |
  | grouptags[x,y,z]@essif-lab | select every [term](@) in the default [terminology](@) of [scope](@) `essif-lab`, that is described by an [MRG entry](@) (in the corresponding [MRG](@)) that has a `grouptags` field whose value is `x`, `y`, or `z`. |
  
</details>

## Removing Terms {#syntax-remove}

Selecting and subsequently removing [provisional MRG entries](@)) from the [provisional MRG](@) consists of [identifying](@) and removing them.

The syntax is similar to one that is used for adding terms, but it is preceded with a `-`sign, as follows:

- **-`<key>` [ `<value>`, `<value2>`, ... ]**, where:
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) in the [provisional MRG](@), , such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not an [MRG entry](@) is to be removed from the [provisional MRG](@).

This syntax removes every [provisional MRG entry](@) from the [provisional MRG](@) that has a field named `<key>`, and where (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details>
  <summary>Examples:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | -term [actor]              | remove all entries that have a `term` field whose value is `actor`. |
  | -status[proposed,approved] | remove all entries that have a `status` field whose value is `proposed` or `approved`. |
  | -grouptags[x,y,z]          | remove all entries that have a `grouptags` field of which one of the listed [grouptags](@) is `x`, `y`, or `z`. |
  | -somefield []              | remove all entries that have a `somefield` field that has no value specified. |

</details>

## Renaming/rewriting term fields {#syntax-rename}

:::info Editor's note
The ability to rename [terms](@) as they are imported may introduce issues related to other field-names, such as `term`, `formPhrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::

In analogy with [namespaces](https://en.wikipedia.org/wiki/Namespace), we accommodate for the renaming of [terms](@) (better: modifying fields in [provisional MRG entries](@)) as they are 'imported' from [terminologies](@) other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only the [term](@) that should be renamable (which is sufficient for [namespaces](https://en.wikipedia.org/wiki/Namespace)), but also certain attributes may need to be changed, e.g. the `formPhrases`.

The following syntaxes are available for renaming fields in a [provisional MRG entry](@) that is part of the [provisional MRG](@):

- **`rename` `<term>` [ `<key>`:`<value>`, `<key2>:<value2>`, ... ]**, where:
  - `<term>` is the value of the `term` field in the [provisional MRG entry](@) that is selected for the renaming process. Note that this value is an [identifier](@) for that [provisional MRG entry](@).
  - `<key>` is a text that corresponds with a field name in a [provisional MRG entry](@), such as `formPhrases`, `glossaryText`, `grouptags`, `status`, etc.
  - `<value>` is a text that will replace the existing text of the field identified by `<key>`. If the text contains multiple words, it is advised to surround it with (single or double) quotes.

Here is how it works. First, the [provisional MRG Entry](@) is searched that has a `term` field whose value is `<term>`. If found, all `<key>`:`<value>` pairs are processed in the sequence they are specified. Processing a `<key>`:`<value>` pair consists of looking for a field named `<key>` in the selected [MRG entry](@). We now have the following situations:

- if the `<key>` field exists, and
  - if the `<value>` is not empty, then the contents of the field is overwritten by `<value>`;
  - if the `<value>` is empty, then the contents of the field is deleted;
- if the `<key>` field does not exists, and
  - if the `<value>` is not empty, then a new field named `<key>` with the specified `<value>` is added to the [MRG entry](@);
  - if the `<value>` is empty, then nothing is done.

<details>
<summary>Renaming examples</summary>

- **`rename party [ status:accepted, hoverText:"A natural person or a legal person" ]`**:
  - searches for the [provisional MRG entry](@) whose `term` field has value `party`, and (when found)
  - changes (or creates) its `status` field to so that it contains `accepted`, and 
  - changes (or creates) its `hoverText` field to so that it contains `"A natural person or a legal person"`.

- **`rename party [ term:partij, formPhrases:"partij{en}", hoverText:"Een natuurlijk persoon of een rechtspersoon" ]`**
  - searches for the [provisional MRG entry](@) whose `term` field has value `party`, and (when found)
  - changes (or creates) its `term` field to so that it contains `partij`;
  - changes (or creates) its `status` field to so that it contains `approved`.
  - changes (or creates) its `hoverText` field to so that it contains `"A natural or legal person"`
  
- **`rename party [ hoverText: ]`**
  - searches for the [provisional MRG entry](@) whose `term` field has value `party`, and (when found)
  - removes the contents from the `hoverText` field if such a field exists.<br/>

</details>

where:

| symbol                | description |
| --------------------- | :---------- |
| `<term>`              | the [term](@) of the tuple that will be selected for renaming. |
| `<fieldmodifierlist>` | a (non-empty) comma-separated list of `<fieldmodifier>`s. |
| `<fieldmodifier>`     | a `<key>:<value>` pair. |
| `<key>`               | a text that identifies a field in a [provisional MRG entry](@), the value of which is to be changed, e.g. `formPhrases`, `grouptags`, etc. |
| `<value>`             | a text that will replace the existing text of the field identified by `<key>`.  |

This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified `<term>` as its `term`-field, and then sequentially processing the `<fieldmodifier>`s in the `<fieldmodifierlist>`, which means that the existing text of the field that is identified by the `<key>` element of the `<fieldmodifier>` is replaced by the text specified by the `<value>` element of that `<fieldmodifier>`.

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `term`, `formPhrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::