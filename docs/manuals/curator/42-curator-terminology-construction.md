---
id: terminology-construction
toc_min_heading_level: 2
toc_max_heading_level: 2
date: 20240129
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Terminology Construction

[Curators](@) need the ability to construct one or more (versions of) [terminologies](@) for any [scope](@) they [curate](@). Creating a [terminology](@) consists of

1. selecting the [concepts](@) and other [semantic units](@) that are to be referenceable by [terms](@) of the [terminology](@). This is done by [editing](#specifying-terminology) the [SAF](@);
2. generating an [MRG](@), i.e., a list of [MRG entries](@), each of which documents a selected [concepts](@)/[semantic units](@), which includes the [term](@) that is used to refer to them. This is done by invoking the [MRGT](@).

## Specifying the contents of a terminology {#specifying-terminology}

The specification of a [terminology](@) exists as an entry in the [`versions` section](/docs/specs/files/saf#versions) of the [SAF](@) of the [scope](@) in which the [terminology](@) is [curated](@). [Curators](@) can add and remove them as they see fit.

A new [terminology](@) specification must at least have

- a [versiontag](@) that allows the [terminology](@) to be [identified](@) (within its [scope](@)), 
- a list of [term selection instructions](@) that specify the [terms](@) that are to be included (or removed) from the [terminology](@) as it is being constructed, and
- some meta-data (see the [documentation](/docs/specs/files/saf#versions).

<details>
  <summary>Example SAF, showing the specifications for 2 [terminologies](@)</summary>

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
      - "*" # include all terms defined by a curated text in the current scope
  - vsntag: v1.0.3 # a versiontag that identifies this version from all other versions in the SAF
    altvsntags: [ latest ] 
    termselection:
      - "*@essiflab" # import all terms from the MRG linked to by `mrg.essiflab.yaml`
      - "-grouptags[terminology]" # then, remove all terms tagged with the grouptag `terminology`
      - "*" # then, include all terms defined by a curated text in the current scope
~~~

</details>

## Process for creating a terminology

The creation (or maintenance) of a [terminology](@) is equivalent with the creation (or maintenance) of the set of [MRG entries](@) that document each of the [terms](@) therein. Thus, the process for creating a [terminology](@) can be described as follows:

1. start with an empty set of [MRG entries](@) - we use the term "[provisional MRG](@)" to refer to this set.

2. sequentially process the list of [term selection instructions](@) as specified in the appropriate entry of the [`versions` section](/docs/specs/files/saf#versions) of the [SAF](@), i.e. instructions which allow for

  - [adding](/docs/specs/syntax/term-selection#add-terms) [MRG entries](@) to the [provisional MRG](@); these can either be [entries](mrg-entry@) that have been created from [curated texts](@), or [entries](mrg-entry@) whose contents are obtained from an [MRG](@) other than the one that is being created.[^1]

  - [removing](/docs/specs/syntax/term-selection#remove-terms) [MRG entries](@) from the [provisional MRG](@);

  - [modifying attributes](/docs/specs/syntax/term-selection#rename-terms) of a specific [MRG entry](@) in the [provisional MRG](@), e.g. for renaming a term that originated from another [scope](@).

[^1]: Two (or more) [MRG entries](@) cannot have the same value in their `termid` fields. Therefore, if an [MRG entry](@) is added whose value in its `termid` field already exists with an [MRG entry](@) that is already in the [provisional MRG](@), then this latter [entry](mrg-entry@) will be discarded, after which the new [entry](mrg-entry@) is added.

This process is run by the [MRGT](@) - see 

<details>
  <summary>Prerequisites</summary>

In this text, we will use the terms:

- **[current scope](@)** for the [scope](@) within which the [terminology](@) is being created and
- **current version** for the version of the [terminology](@) that is being created.

In the syntax specification for [term selection instructions](@), we use the following symbols:

| Symbol | Description |
| :----- | :---------- |
| `<key>` | a text that corresponds with a field name in an [MRG entry](@) of a designated [MRG](@), or the [header](@) (front-matter) of a [curated text](@). Examples: `term`, `grouptags`, `status`. |
| `<value>` | a text that is used to [identify](@) an [MRG entry](@) or a [curated text](@). |

</details>

## Adding Terms {#add-terms}

Adding terms is done using instructions that 
1. identify a (set of) [term(s)](@) that is to be added to the [provisional MRG](@).
2. specify the source from which an [MRG entries](@) will be created for each of these [terms](@).

By default, the source is the the set of [curated texts](@) of the [current scope](@).

However, any (existing) [MRG](@) can be used as an alternative source, by adding the text `@<terminology-identifier>` to the instruction that selects the [terms](@), where `<terminology-identifier>` is the [terminology identifier](@) that identifies the [MRG](@). Note that this [MRG](@) must have been made available in the [glossarydir](@) of the [current scope](@).

### Add all terms from a specific source {#syntax-add-all-terms}

The following syntaxes are available for adding all terms from a specific source to the [provisional MRG](@):

- **`*`**<br/>Add all [terms](@) that are described by a [curated texts](@) in the [current scope](@).<br/>&nbsp;
- **`* @<tid>`**<br/>Add all [terms](@) that have an [MRG entry](@) in the [MRG](@) as [identified](@) by the [terminology-identifier](@) `<tid>`. This [MRG](@) must have been made available in the [glossarydir](@) of the [current scope](@).

<details>
  <summary>Examples:</summary>

  | Examples:  | Meaning: |
  | :-------   | :------  |
  | *&nbsp;@tev2:v1 | Add all [terms](@) that are in version `v1` of the [terminology](@) of the [scope](@) identified by `tev2`, i.e., in [MRG](@) file `mrg.tev2.v1.yaml`. |
  | * @tev2    | Add all [terms](@) that are in the default version of the [terminology](@) of the [scope](@) identified by `tev2`,<br/>i.e., in [MRG](@) file `mrg.tev2.<defaultvsn>.yaml`, where `<defaultvsn>` is the value of the `defaultvsn` field in the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@) that is located in the [scopedir](@) associated with the [scopetag](@) `tev2`. |
  | * @:v1.0.3 | Add all [terms](@) that are in version `v1.0.3` of the [terminology](@) of the [current scope](@).<br/>i.e., in [MRG](@) file `mrg.<cstag>.v1.0.3.yaml`, where `<cstag>` is the value of the `scopetag` field in the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@) of the [current scope](@). |
  | * @        | Add all [terms](@) that are in the default version of the [terminology](@) of the [current scope](@).<br/>i.e., in [MRG](@) file `mrg.<cstag>.<defaultvsn>.yaml`, where:<br/>- `<cstag>` is the value of the `scopetag` field in the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@) of the [current scope](@), and<br/>- `<defaultvsn>` is the value of the `defaultvsn` field in that same [SAF](@). |
  | *          | Add all [terms](@) that are described by a [curated text](@) in the [current scope](@). |

The difference between `*` and `* @` is that the first takes [curated texts](@) as source, whereas the latter takes an existing [MRG](@) as source, being the [MRG](@) that contains the default version of the [terminology](@) of the [current scope](@). This allows [terminologies](@) to be defined in terms of their predecessors.

</details>

### Add selected terms from a specific source {#syntax-add-selected-terms}

The following syntaxes are available for adding a selection of terms from a specific source to the [provisional MRG](@):

- **`<key>` [ `<value>`, `<value2>`, ... ]**, where:
  - `<key>` is a text that corresponds with a field name in a [header](@) (front-matter) of a [curated text](@), such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not a [curated text](@) is to be selected for inclusion in the [provisional MRG](@).<br/>&nbsp;
- **`<key>` [ `<value>`, `<value2>`, ... ] `@<tid>`**, where:
  - `<tid>` is a [terminology identifier](@) that [identifies](@) an [MRG](@) (that must have been made available in the [glossarydir](@) of the [current scope](@)).
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) that resides in that [MRG](@), such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not an [MRG entry](@) from that [MRG](@) is to be selected for inclusion in the [provisional MRG](@).

:::info Editor's note
[Issue #15](https://github.com/tno-terminology-design/tev2-tools/issues/15) requests for adding the following:

- The list **[ `<value>`, `<value2>`, ... ]** can be replaced with `*` (or is it **[`*`]**?), which would then mean that all curated texts or MRG entries are selected whose `<key>` field exists and is not empty.
- Any `<value>` may be preceded by the `!`-character or the `NOT` (or `not`) keyword, which would then  mean that all curated texts or MRG entries are selected whose `<key>` field does NOT contain the specified `<value>`. This could be used, e.g., to select terms whoses `status` fiels does not contain the value `deprecated`.

This documentation should reflect what was done as the issue gets closed.
:::

These instructions will add every term from the designated source, whose specification contains a field named `<key>`, and (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details>
  <summary>Examples:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | term [actor]               | select every [curated text](@) from the [current scope](@), that has a `term` field in its [header](@) of which the value is `actor`. |
  | status[proposed,approved]  | select every [curated text](@) from the [current scope](@), that has a `status` field in its [header](@) of which the value is `proposed` or `approved`. |
  | somefield []               | select every [curated text](@) from the [current scope](@), that has a field `somefield` that has no value specified. |
  | term [actor,party]@tev2:v1 | select every [MRG entry](@) from [MRG](@) of [scope](@) `tev2` that has [version](versiontag@) `v1`, that has a `term` field whose value is `actor` or `party`. |
  | grouptags[x,y,z]@essif-lab | select every [MRG entry](@) from the default [MRG](@) of [scope](@) `essif-lab`, that has a `grouptags` field whose value is `x`, `y`, or `z`. |
  
</details>

## Removing Terms {#remove-terms}

Removing terms is equivalent to removing selected [MRG entries](@) from the [provisional MRG](@). The syntax is similar to one that is used for adding terms, but it is preceded with a `-`sign, and a source may not be specified, as it is always the [provisional MRG](@).

The following syntaxes are available for removing a selection of terms from the [provisional MRG](@):

- **-`<key>` [ `<value>`, `<value2>`, ... ]**, where:
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) in the [provisional MRG](@), , such as `term`, `grouptags`, `status`, etc.
  - `<value>`, `<value2>`, ... are texts that are used to determine whether or not an [MRG entry](@) is to be removed from the [provisional MRG](@).

This syntax removes every [MRG entry](@) from the [provisional MRG](@) that has a field named `<key>`, and where (one of) the value(s) of that field matches with at least one of the values in `[ <value1>, <value2>, ... ]`.

<details>
  <summary>Examples:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | -term [actor]              | remove all entries that have a `term` field whose value is `actor`. |
  | -status[proposed,approved] | remove all entries that have a `status` field whose value is `proposed` or `approved`. |
  | -grouptags[x,y,z]          | remove all entries that have a `grouptags` field of which one of the listed [grouptags](@) is `x`, `y`, or `z`. |
  | -somefield []              | remove all entries that have a `somefield` field that has no value specified. |

</details>

## Rename/rewrite term fields {#rename-terms}

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `term`, `form-phrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::

In analogy with [namespaces](https://en.wikipedia.org/wiki/Namespace), we accommodate for the renaming of [terms](@) as they are 'imported' from [terminologies](@) other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only a [term](@) that should be renamable (which is sufficient for [namespaces](https://en.wikipedia.org/wiki/Namespace)), but also certain attributes may need to be changed.

The following syntaxes are available for renaming fields in an [MRG entry](@) that is part of the [provisional MRG](@):

- **`rename` `<ttrm>` [ `<key>`:`<value>`, `<key2>:<value2>`, ... ]**, where:
  - `<ttrm>` is the value of the `term` field in the [MRG entry](@) of the [provisional MRG](@) that is selected for the renaming process, which may optionally be preceded with `<termType>:` (where `<termType>` would then be the value of the `termType` field in that [MRG entry](@)). Note that this value is an [identifier](@) for that [MRG entry](@).
  - `<key>` is a text that corresponds with a field name in an [MRG entry](@) in the [provisional MRG](@), such as `formPhrases`, `glossaryText`, `grouptags`, `status`, etc.
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