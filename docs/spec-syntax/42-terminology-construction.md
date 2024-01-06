---
id: terminology-construction
sidebar_label: MRG Terminology Construction
toc_min_heading_level: 2
toc_max_heading_level: 2
date: 20231002
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Terminology Construction

[Curators](@) need the ability to construct (different versions of) the [terminology](@) for any [scope](@) they [curate](@). This page documents
1. the way in which a [curator](@) can specify this for a [scope](@) that they [curate](@), and
2. how that specification is used to create the associated [terminology](@).

The actual creation of a [terminology](@), and the subsequent generation of the [MRG](@) that contains it, is done by the [MRGT](@).

## Specifying the contents of a terminology {#specifying-terminology}

A [curator](@) specifies a [terminology](@) by creating a new entry in the [`versions` section](/docs/spec-files/saf#versions) of the [SAF](@) of the [scope](@) in which the [terminology](@) is [curated](@). This entry will contain 

- one or more [versiontags](@) that allow the [terminology](@) to be [identified](@) (within its [scope](@)), 
- the [term selection instructions](@) that specify the [terms](@) that are to be included (or removed) from the [terminology](@) as it is being constructed, and
- some meta-data (see the [documentation](/docs/spec-files/saf#versions).

## Process for creating a terminology

The creation of a [terminology](@) is equivalent with the creation of the set of [MRG entries](@) that document each of the [terms](@) therein. Thus, the process for creating a [terminology](@) can be described as follows:
1. start with an empty set of [MRG entries](@) - we use the term "[terminology under construction](@)" to refer to this set.
2. sequentially process the list of [term selection instructions](@) as specified in the appropriate entry of the [`versions` section](/docs/spec-files/saf#versions) of the [SAF](@), i.e. instructions which allow for
  - [adding](#syntax-add) [MRG entries](@) to the [terminology under construction](@); these can either be [entries](mrg-entry@) that have been created from [curated texts](@), or [entries](mrg-entry@) whose contents are obtained from an [MRG](@) other than the one that is being created.
  - [removing](#syntax-remove) [MRG entries](@) from the [terminology under construction](@);
  - [modifying attributes](#syntax-rename) of a specific [MRG entry](@) in the [terminology under construction](@), e.g. for renaming a term that originated from another [scope](@).

## Prerequisites

In this text, we will use the terms:

- **current scope** for the [scope](@) within which the [terminology](@) is being created and
- **current version** for the [version](@) of the [terminology](@) that is being created.

In the syntax specification for [term selection instructions](@), we use the following symbols:

| Symbol | Description |
| :----- | :---------- |
| `<key>` | a text that corresponds with a field name in an [MRG entry](@) of a designated [MRG](@), or the [header](@) (front-matter) of a [curated text](@). Examples: `term`, `grouptags`, `status`. |
| `<value>` | a text that is used to [identify](@) an [MRG entry](@) or a [curated text](@). |

## Adding Terms {#syntax-add}

Adding terms is done using instructions that 
1. identify a (set of) [term(s)](@) that is to be added to the [terminology-under-construction](@).
2. specify the source from which an [MRG entries](@) will be created for each of these [terms](@).

By default, the source is the the set of [curated texts](@) of the current scope.

However, any (existing) [MRG](@) can be used as an alternative source, by adding the text `@<terminology-identifier>` to the instruction that selects the [terms](@), where `<terminology-identifier>` is the [terminology identifier](@) that identifies the [MRG](@). Note that this [MRG](@) must have been made available in the [glossarydir](@) of the current scope.

### Add all terms from a specific source {#syntax-add-all-terms}

The following syntaxes are available for adding all terms from a specific source to the [terminology under construction](@):

- **`*`**<br/>Add all [terms](@) that are described by a [curated texts](@) in the current scope.<br/>&nbsp;
- **`* @<tid>`**<br/>Add all [terms](@) that have an [MRG entry](@) in the [MRG](@) as [identified](@) by the [terminology-identifier](@) `<tid>`. This [MRG](@) must have been made available in the [glossarydir](@) of the current scope.

<details>
  <summary>Examples:</summary>

  | Examples:  | Meaning: |
  | :-------   | :------  |
  | *&nbsp;@tev2:v1 | Add all [terms](@) that are in version `v1` of the [terminology](@) of the [scope](@) identified by `tev2`, i.e., in [MRG](@) file `mrg.tev2.v1.yaml`. |
  | * @tev2    | Add all [terms](@) that are in the default version of the [terminology](@) of the [scope](@) identified by `tev2`,<br/>i.e., in [MRG](@) file `mrg.tev2.<defaultvsn>.yaml`, where `<defaultvsn>` is the value of the `defaultvsn` field in the [`scope` section](/docs/spec-files/saf#scope-section) of the [SAF](@) that is located in the [scopedir](@) associated with the [scopetag](@) `tev2`. |
  | * @:v1.0.3 | Add all [terms](@) that are in version `v1.0.3` of the [terminology](@) of the current scope.<br/>i.e., in [MRG](@) file `mrg.<cstag>.v1.0.3.yaml`, where `<cstag>` is the value of the `scopetag` field in the [`scope` section](/docs/spec-files/saf#scope-section) of the [SAF](@) of the current scope. |
  | * @        | Add all [terms](@) that are in the default version of the [terminology](@) of the current scope.<br/>i.e., in [MRG](@) file `mrg.<cstag>.<defaultvsn>.yaml`, where:<br/>- `<cstag>` is the value of the `scopetag` field in the [`scope` section](/docs/spec-files/saf#scope-section) of the [SAF](@) of the current scope, and<br/>- `<defaultvsn>` is the value of the `defaultvsn` field in that same [SAF](@). |
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

<details>
  <summary>Examples:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | term [actor]               | select every [curated text](@) from the current scope, that has a `term` field in its [header](@) of which the value is `actor`. |
  | status[proposed,approved]  | select every [curated text](@) from the current scope, that has a `status` field in its [header](@) of which the value is `proposed` or `approved`. |
  | somefield []               | select every [curated text](@) from the current scope, that has a field `somefield` that has no value specified. |
  | term [actor,party]@tev2:v1 | select every [MRG entry](@) from [MRG](@) of [scope](@) `tev2` that has [version](versiontag@) `v1`, that has a `term` field whose value is `actor` or `party`. |
  | grouptags[x,y,z]@essif-lab | select every [MRG entry](@) from the default [MRG](@) of [scope](@) `essif-lab`, that has a `grouptags` field whose value is `x`, `y`, or `z`. |
  
</details>

## Removing Terms {#syntax-remove}

Removing terms is equivalent to removing selected [MRG entries](@) from the [terminology under construction](@). The syntax is similar to one that is used for adding terms, but it is preceded with a `-`sign, and a source may not be specified, as it is always the [terminology under construction](@).

The following syntaxes are available for removing a selection of terms from the [terminology under construction](@):

- **-`<key>` [ `<value>`, `<value2>`, ... ]**, where:
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) in the [terminology under construction](@), , such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not an [MRG entry](@) is to be removed from the [terminology under construction](@).

This syntax removes every [MRG entry](@) from the [terminology-under-construction](@) that has a field named `<key>`, and where (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details>
  <summary>Examples:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | -term [actor]              | remove all entries that have a `term` field whose value is `actor`. |
  | -status[proposed,approved] | remove all entries that have a `status` field whose value is `proposed` or `approved`. |
  | -grouptags[x,y,z]          | remove all entries that have a `grouptags` field of which one of the listed [grouptags](@) is `x`, `y`, or `z`. |
  | -somefield []              | remove all entries that have a `somefield` field that has no value specified. |

</details>

## Rename/rewrite term fields {#syntax-rename}

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `term`, `form-phrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::

In analogy with [namespaces](https://en.wikipedia.org/wiki/Namespace), we accommodate for the renaming of [terms](@) as they are 'imported' from [terminologies](@) other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only a [term](@) that should be renamable (which is sufficient for [namespaces](https://en.wikipedia.org/wiki/Namespace)), but also certain attributes may need to be changed.

The following syntaxes are available for renaming fields in an [MRG entry](@) that is part of the [terminology under construction](@):

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
| `<key>`               | a text that identifies a field in an [MRG entry], the value of which is to be changed, e.g. `form-phrases`, `grouptags`, etc. |
| `<value>`             | a text that will replace the existing text of the field identified by `<key>`.  |

This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified `<term>` as its `term`-field, and then sequentially processing the `<fieldmodifier>`s in the `<fieldmodifierlist>`, which means that the existing text of the field that is identified by the `<key>` element of the `<fieldmodifier>` is replaced by the text specified by the `<value>` element of that `<fieldmodifier>`.

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `term`, `form-phrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::