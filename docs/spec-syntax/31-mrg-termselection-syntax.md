---
id: mrg-termselection-syntax
sidebar_label: MRG Term Selection
date: 20231006
---

# MRG Term Selection Syntax

import useBaseUrl from '@docusaurus/useBaseUrl'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When [curators](@) specify a [terminology](@), e.g., to generate an [MRG](@) that documents that [terminology](@), they need the ability to select the [terms](@) that are to be included in that [terminology](@). This document specifies syntaxes that [curators](@) can use to do so.

## Introduction

Specifying a [terminology](@) is a process that starts with an empty set of [term](@) (better: an empty set of [MRG entries](@) that each document such a [term](@)), and subsequently adding, removing, or changing elements to, from or of that set respectively.

We use the term '[terminology under construction](@)' to refer to such a set, and we use the term 'instruction' to refer to a particular syntax that specifies the [term(s)](@) for which an [MRG entry](@) in that [terminology under construction](@) is to be added, removed, or changed. The list of instructions that specify a particular version of a [terminology](@) that is [curated](@) in a specific [scope](@) are to be provided (can be found) in one of the elements of the [`versions` section](/tev2-specifications/docs/spec-files/saf#versions) of the [SAF](@) of that [scope](@). The particular version is either the value of the `vsntag`-field of that element, or one of the values in the `altvsntag`-field of that element.

<details>
  <summary>Example SAF, showing elements for term selection (irrelevant fields are omitted)</summary>

~~~ yaml
scope:
  scopetag: myscope # identifier for 'current scope'
  scopedir: https://github.com/myscope-repo/tree/master/docs  # URL of the scope-directory
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
      - "*" # import all terms defined by a curated text in the current scope
  - vsntag: v1.0.3 # a versiontag that identifies this version from all other versions in the SAF
    altvsntags: [ latest ] 
    termselection:
      - "*@essiflab" # import all terms from the MRG linked to by `mrg.essiflab.yaml`
      - "-grouptags[terminology]" # then, remove all terms tagged with the grouptag `terminology`
      - "*" # then, all terms defined by a curated text in the current scope
~~~

</details>

In this text, we will use the terms **current scope** for the [scope](@) within which the [terminology](@) is being created. Note that in the current scope, you can only create a [terminology](@) that belongs to that [scope](@), and therefore that [terminology](@) must be one of the versions as defined in the [SAF](@) of that scope. The particular version that is being created is then referred to as the **current version**.

## Adding Terms {#syntax-add}

Selecting [terms](@) to be added to the [terminology under construction](@) consists of:
1. [identifying](@) such [terms](@), and.
2. [identifying](@) the source from which the corresponding [MRG entries](@) will be created.

By default, this source is the the set of [curated texts](@) of the current scope. However, any (existing) [MRG](@) can be designated as an alternative source, by adding an `@<terminology-identifier>` part to the instruction, where `<terminology-identifier>` is the [terminology identifier](@) that identifies the [terminology](@) of which the [MRG](@) contains the [MRG entries](@) for its [terms](@).

### Add all terms from a specific source {#syntax-add-all-terms}

The following syntaxes are available for adding all terms from a specific source to the [terminology under construction](@):
- **`*`**<br/>Add all [terms](@) that are described by a [curated texts](@) in the current scope.<br/>&nbsp;
- **`* @<tid>`**<br/>Add all [terms](@) that have an [MRG entry](@) in the [MRG](@) as [identified](@) by the [terminology-identifier](@) `<tid>`. This [MRG](@) must have been made available in the [glossarydir](@) of the current scope.

<details><summary>Examples:</summary>

  | Examples:  | Meaning: |
  | :-------   | :------  |
  | *&nbsp;@tev2:v1 | Add all [terms](@) that are in version `v1` of the [terminology](@) of the [scope](@) identified by `tev2`, i.e., in [MRG](@) file `mrg.tev2.v1.yaml`. |
  | * @tev2    | Add all [terms](@) that are in the default version of the [terminology](@) of the [scope](@) identified by `tev2`,<br/>i.e., in [MRG](@) file `mrg.tev2.yaml`. |
  | * @:v1.0.3 | Add all [terms](@) that are in version `v1.0.3` of the [terminology](@) of the current scope.<br/>i.e., in [MRG](@) file `mrg.<cstag>.v1.0.3.yaml`, where `<cstag>` is the value of the `scopetag` field in the [`scope` section](/docs/spec-files/saf#terminology) of the [SAF](@) of the current scope. |
  | * @        | Add all [terms](@) that are in the default version of the [terminology](@) of the current scope.<br/>i.e., in [MRG](@) file `mrg.<cstag>.yaml`, where `<cstag>` is the value of the `scopetag` field in the [`scope` section](/docs/spec-files/saf#terminology) of the [SAF](@) of the current scope. |
  | *          | Add all [terms](@) that are described by a [curated text](@) in the current scope. |

The difference between `*` and `* @` is that the first takes [curated texts](@) as source, whereas the latter takes an existing [MRG](@) as source, being the [MRG](@) that contains the default version of the [terminology](@) of the current scope. This allows [terminologies](@) to be defined in terms of their predecessors.

</details>

### Add selected terms from a specific source {#syntax-add-selected-terms}

The following syntaxes are available for adding a selection of terms from a specific source to the [terminology under construction](@):
- **`<key>` [ `<value>`, `<value2>`, ... ]**, where:
  - `<key>` is a text that corresponds with a field name in a [header](@) (front-matter) of a [curated text](@), such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not a [curated text](@) is to be selected for inclusion in the [terminology under construction](@).<br/>&nbsp;
- **`<key>` [ `<value>`, `<value2>`, ... ] `@<tid>`**, where:
  - `<tid>` is a [terminology identifier](@) that [identifies](@) an [MRG](@) (that must have been made available in the [glossarydir](@) of the current scope).
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) that resides in that [MRG](@), such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not an [MRG entry](@) from that [MRG](@) is to be selected for inclusion in the [terminology under construction](@).
 
These instructions will add every term from the designated source, whose specification contains a field named `<key>`, and (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details><summary>Examples:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | term [actor]               | select every [curated text](@) from the current scope, that has a `term` field in its [header](@) of which the value is `actor`. |
  | status[proposed,approved]  | select every [curated text](@) from the current scope, that has a `status` field in its [header](@) of which the value is `proposed` or `approved`. |
  | somefield []               | select every [curated text](@) from the current scope, that has a field `somefield` that has no value specified. |
  | term [actor,party]@tev2:v1 | select every [MRG entry](@) from [MRG](@) of [scope](@) `tev2` that has [version](versiontag@) `v1`, that has a `term` field whose value is `actor` or `party`. |
  | grouptags[x,y,z]@essif-lab | select every [MRG entry](@) from the default [MRG](@) of [scope](@) `essif-lab`, that has a `grouptags` field whose value is `x`, `y`, or `z`. |
  
</details>

## Remove Terms {#syntax-remove}

Removing terms is equivalent to removing selected [MRG entries](@) from the [terminology under construction](@). The syntax is similar to one that is used for adding terms, but it is preceeded with a `-`sign, and a source may not be specified, as it is always the [terminology under construction](@).

The following syntaxes are available for removing a selection of terms from the [terminology under construction](@):
- **-`<key>` [ `<value>`, `<value2>`, ... ]**, where:
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) in the [terminology under construction](@), , such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not an [MRG entry](@) is to be removed from the [terminology under construction](@).

This syntax removes every [MRG entry](@) from the [terminology-under-construction](@) that has a field named `<key>`, and where (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details><summary>Examples:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | -term [actor]              | remove all entries that have a `term` field whose value is `actor`. |
  | -status[proposed,approved] | remove all entries that have a `status` field whose value is `proposed` or `approved`. |
  | -grouptags[x,y,z]          | remove all entries that have a `grouptags` field of which one of the listed [grouptags](@) is `x`, `y`, or `z`. |
  | -somefield []              | remove all entries that have a `somefield` field that has no value specified. |

</details>

## Rename/rewrite term fields {#syntax-rename}

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `term`, `formphrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::

In analogy with [namespaces](https://en.wikipedia.org/wiki/Namespace), we accommodate for the renaming of [terms](@) as they are 'imported' from [terminologies](@) other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only a [term](@) that should be renameable (which is sufficient for [namespaces](https://en.wikipedia.org/wiki/Namespace)), but also certain attributes may need to be changed.

The following syntaxes are available for renaming fields in an [MRG entry] that is part of the [terminology under construction](@):
- **`rename` `<term>` [ `<key>`:`<value>`, `<key2>:<value2>`, ... ]**, where:
  - `<term>` is the value of the `term` field in the [MRG entry](@) of the [terminology under construction](@) that is selected for the renaming process. Note that this value is an [identifier](@) for that [MRG entry](@).
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) in the [terminology under construction](@), such as `formPhrases`, `glossaryText`, `grouptags`, `status`, etc.
  - `<value>` is a text that will replace the existing text of the field identified by `<key>`. If the text contains multiple words, it is advised to surround it with quotes.

Here is how it works. First, the [MRG Entry](@) is searched that has a `term` field whose value is `<term>`. If found, all `<key>`:`<value>` pairs are processed in the sequence they are specified. Processing a `<key>`:`<value>` pair consists of looking for a field named `<key>` in the selected [MRG entry](@). We now have the following situations:
- if the `<key>` field exists, and
  - if the `<value>` is not empty, then the contents of the field is overwritten by `<value>`;
  - if the `<value>` is empty, then the contents of the field is deleted;
- if the `<key>` field does not exists, and
  - if the `<value>` is not empty, then a new field named `<key>` with the specified `<value>` is added to the [MRG entry](@);
  - if the `<value>` is empty, then nothing is done.

<details>
<summary>Renaming examples</summary>

- **`rename party [ status:accepted, hoverText:"A natural person or a legal person" ]`**:
  - searches for the [MRG entry](@) whose `term` field has value `party`, and (when found)
  - changes (or creates) its `status` field to so that it contains `accepted`, and 
  - changes (or creates) its `hoverText` field to so that it contains `"A natural person or a legal person"`.

- **`rename party [ term:partij, formPhrases:"partij{en}", hoverText:"Een natuurlijk persoon of een rechtspersoon" ]`**
  - searches for the [MRG entry](@) whose `term` field has value `party`, and (when found)
  - changes (or creates) its `term` field to so that it contains `partij`;
  - changes (or creates) its `status` field to so that it contains `approved`.
  - changes (or creates) its `hoverText` field to so that it contains `"A natural or legal person"`
  
- **`rename party [ hoverText: ]`**
  - searches for the [MRG entry](@) whose `term` field has value `party`, and (when found)
  - removes the contents from the `hoverText` field if such a field exists.<br/>

</details>

where:

| symbol                | description |
| --------------------- | :---------- |
| `<term>`              | the [term](@) of the tuple that will be selected for renaming. |
| `<fieldmodifierlist>` | a (non-empty) comma-separated list of `<fieldmodifier>`s. |
| `<fieldmodifier>`     | a `<key>:<value>` pair. |
| `<key>`               | a text that identifies a field in an [MRG entry], the value of which is to be changed, e.g. `formphrases`, `grouptags`, etc. |
| `<value>`             | a text that will replace the existing text of the field identified by `<key>`.  |

This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified `<term>` as its `term`-field, and then sequentially processing the `<fieldmodifier>`s in the `<fieldmodifierlist>`, which means that the existing text of the field that is identified by the `<key>` element of the `<fieldmodifier>` is replaced by the text specified by the `<value>` element of that `<fieldmodifier>`.

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `term`, `formphrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::