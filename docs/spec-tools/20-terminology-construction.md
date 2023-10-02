---
id: terminology-construction
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

A [curator](@) specifies a [terminology](@) by creating a new entry in the [`versions` section](tev2-specifications/docs/spec-files/saf#versions) of the [SAF](@) (of the [scope](@) in which the [terminology](@) is to reside). This entry will contain 

- one or more [versiontags](@) that allow the [terminology](@) to be [identified](@) (within its [scope](@)), 
- the [term selection criteria](@) that specify the [terms](@) that are to be included (or removed) from the [terminology as it is being constructed](terminology-under-construction@), and
- some meta-data (see the [documentation](tev2-specifications/docs/spec-files/saf#versions).

## Process for creating a terminology

The creation of a [terminology](@) is equivalent with the creation of the set of [MRG entries](@) that document each of the [terms](@) therein. Thus, the process for creating a [terminology](@) can be described as follows:
1. start with an empty set of [MRG entries](@) - we use the term "[terminology under construction](@)" to refer to this set.
2. sequentially process the list of [term selection criteria](@) as specified in the appropriate entry of the [`versions` section](tev2-specifications/docs/spec-files/saf#versions) of the [SAF](@), i.e. instructions which allow for
  - [adding](#syntax-add) [MRG entries](@) to the [terminology under construction](@); these can either be [entries](mrg-entry@) that have been created from [curated texts](@), or [entries](mrg-entry@) whose contents are obtained from an [MRG](@) other than the one that is being created.
  - [removing](#syntax-remove) [MRG entries](@) from the [terminology under construction](@);
  - [modifying attributes](#syntax-rename) of a specific [MRG entry](@) in the [terminology under construction](@), e.g. for renaming a term that originated from another [scope](@).
## Prerequisites

In this text, we will use the terms:
- **current scope** for the [scope](@) within which the [terminology](@) is being created and
- **current version** for the [version](@) of the [terminology](@) that is being created.

In the syntax specification for [term selection criteria](@), we use the following symbols:

| Symbol | Description |
| :----- | :---------- |
| `<key>` | A text that corresponds with a field name in a [MRG entry](@) or the [header](@) (front-matter) of a [curated text](@), e.g., `term`, `grouptags`, `status`. |
| `<value>` | A text that is used to [identify](@) an [MRG entry](@) or a [curated text](@). |
| `<source>` | An (**optional**) text of the form `@<terminology-identifier>`, that [identifies](@) the source from where [terms](@) are to be selected.<br/> If omitted, the source is the set of [curated texts](@) that are maintained within the current scope.<br/>If specified, the source is the [MRG](@) identified by `<terminology-identifier>` (where `<terminology-identifier>` is a [terminology-identifier](@)). Note that this [MRG](@) is expected to have been [made available](mrg-importer@) within the current scope. |

## Adding Terms {#syntax-add}

Adding terms is done using instructions that identify one or more [MRG entries](@) or [curated texts](@) that are not in the [terminology-under-construction](@).

The `<source>` parameter, if it is provided, specifies the [MRG](@) within which [MRG entries](@) are to be searched. If the `<source>` parameter is not provided, the set of [curated texts](@) in the current scope is used for searching. Both [MRG entries](@) and [headers](@) of [curated texts](@) contain fields that are examined to determine whether or not the [MRG entry](@) or [curated text](@) are to be used for inclusion in the [terminology-under-construction](@).

### `* <source>`

Add all terms from the source specified by `<source>`. If `<source>` is omitted, all terms are added that have a [curated text](@) in the current [scope].

<details><summary>Examples:</summary>

  | Examples: | The syntax is an instruction to add all terms: |
  | :-------- | :--- |
  | *              | that have a [curated text](@) in the current scope. |
  | * @            | that are in the default version of the [terminology](@) of the current scope. |
  | * @tev2        | that are in the default version of the [terminology](@) of the [scope](@) identified by `tev2`. |
  | *&nbsp;@tev2:latest | that are in the latest version of the [terminology](@) of the [scope](@) identified by `tev2`. |
  | * @:latest     | that are in the latest version of the [terminology](@) of the current scope. |

The difference between `*` and `* @` is that the first takes [curated texts](@) as source, whereas the latter takes an existing [MRG](@) as source, being the [MRG](@) that contains the default version of the [terminology](@) of the current scope. This allows [terminologies](@) to be defined in terms of their predecessors.

</details>

### `<key> [ <value1>, <value2>, ... ] <source>`

Add every term from the designated `<source>`, whose specification contains a field named `<key>`, and (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details><summary>Examples:</summary>

  | Syntax: | The syntax is an instruction to add all terms: |
  | :------------------------- | :--- |
  | term [actor]               | from the current scope, that have a `term` field whose value is `actor`. |
  | term [actor,party]@tev2    | from the latest [terminology](@) of [scope](@) `tev2`, that have a `term` field whose value is `actor` or `party`. |
  | status[proposed,approved]  | from the current scope, that have a `status` field whose value is `proposed` or `approved`. |
  | grouptags[x,y,z]@essif-lab | from the latest [terminology](@) of [scope](@) `essif-lab`, that have a `grouptags` field whose value is `x`, `y`, or `z`. |
  | somefield []               | from the current scope, that have a field `somefield` that has no value specified. |

</details>

## Removing Terms {#syntax-remove}

Removing terms is equivalent to removing selected [MRG entries](@) from the [terminology under construction](@). The syntax is similar to one that is used for adding terms, but it is preceeded with a `-`sign, and a source may not be specified, as it is always the [terminology under construction](@).
### `-<key> [ <value1>, <value2>, ... ]`

Remove all terms from [terminology-under-construction], whose [MRG entry](@) contains a field named `<key>`, and (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details><summary>Examples:</summary>

  | Syntax: | The syntax is an instruction to remove all terms from the [terminology under construction](@) that have: |
  | :------------------------- | :--- |
  | -term [actor]              | a `term` field whose value is `actor`. |
  | -status[proposed,approved] | a `status` field whose value is `proposed` or `approved`. |
  | -grouptags[x,y,z]          | a `grouptags` field of which one of the listed [grouptags](@) is `x`, `y`, or `z`. |
  | -somefield []              | a `somefield` field that has no value specified. |

</details>

## Rename/rewrite Term Attributes {#syntax-rename}

<img
  alt="From this point onward, texts are under construction"
  src={useBaseUrl('images/wip/wip-under-construction-from-here-onward.png')}
/><br/><br/>

In analogy with [namespaces](https://en.wikipedia.org/wiki/Namespace), we accommodate for the renaming of [terms](@) as they are 'imported' from [terminologies](@) other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only a [term](@) that should be renameable (which is sufficient for [namespaces](https://en.wikipedia.org/wiki/Namespace)), but also certain attributes may need to be changed.

### `rename <term> [ <fieldmodifierlist> ]`.

<details>
<summary>Syntax examples</summary>

| Instruction | What it does when it is processed: |
| :---------- | :---------- |
| `rename party partij` | renames the [term](@) that is currently associated with the [term](@) `party` into `partij`. |

</details>

where:

| Symbol                | Description |
| :-------------------- | :---------- |
| `<term>`              | The [term](@) of the tuple that will be selected for renaming. |
| `<fieldmodifierlist>` | A (non-empty) comma-separated list of `<fieldmodifier>`s. |
| `<fieldmodifier>`     | A `<key>:<value>` pair. |
| `<key>`               | A text that identifies a field in an [MRG entry], the value of which is to be changed, e.g. `formphrases`, `grouptags`, etc. |
| `<value>`             | A text that will replace the existing text of the field identified by `<key>`.  |

This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified `<term>` as its `term`-field, and then sequentially processing the `<fieldmodifier>`s in the `<fieldmodifierlist>`, which means that the existing text of the field that is identified by the `<key>` element of the `<fieldmodifier>` is replaced by the text specified by the `<value>` element of that `<fieldmodifier>`.

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `term`, `formphrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::