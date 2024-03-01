---
id: term-selection
sidebar_label: Term Selection
toc_min_heading_level: 2
toc_max_heading_level: 2
date: 20240129
---

# Term Selection - Syntax

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A [term selection instruction](@) is a specification for the [MRGT](@) to modify the [provisional MRG](@) that it is working with should be modified. This documents specifies the syntax for the various instructions.

<details>
  <summary>Example of a `termselection` field in a SAF</summary>

[Term selection instructions](@) go in the `termselection` fields of in the [versions section](/docs/specs/files/saf#versions) of the [SAF](@). This `termselection` field is an array of YAML texts. Here is an example:

~~~ yaml
  termselection:
  - "[party,actor,action,onboarding,organization]@essif-lab"
  - "rename action [id:act, term:act, formPhrases:'act{ss}']"
  - "term[action]@essif-lab"
~~~

:::warning Every instruction must be surrounded by quotes
This is to ensure YAML interpreters can actually read it.<br/>
Take care to properly nest quotes (as in the 'rename' instruction of the example).
:::

</details>

# Selecting Terms to be Added to the Provisional MRG {#adding-terms}

<details>
  <summary>Legend of abbreviations used</summary>

| Instruction | Description |
| ----------- | ----------- |
| `<tid>`     | a [terminology identifier](@) that identifies the [terminology](@) that the [MRGT](@) will use as its source. |
| `<f1>`, `<f2>` | a [formphrase](@) (for a particular [term](@)). |
| `<key>`     | the name of a field in the [header](@) of a [curated text](@), or in an [MRG entry](@) of the [MRG](@), whichever the [MRGT](@) uses as its source. |
| `<v1>`, `<v2>` | a text value. |

</details>

| Instruction | Description |
| ----------- | ----------- |
| `"*"`       | Create an [MRG entry](@) from every [curated text](@) in the [current scope](@), and add it to the [provisional MRG](@). |
| `"[ <f1>, <f2>, ... ]"`       | Create an [MRG entry](@) from *every* [curated text](@) that [matches](form-phrase#matching@) any of the [form phrases](@) `<f<i>>`. |
| `"<key> [ <v1>, <v2>, ... ]"` | Create an [MRG entry](@) from every [curated text](@) that has a [header](@) with a field named `<key>`, and whose value matches any of the specified values `<v<i>>`.[^1] |

[^1]: 'matching' means that [<mark>TBD: specify the matching algorithm, in particular when the field itself is an arry, such as `grouptags`, `headingids`, etc.</mark>]

:::tip Adding terms from other scopes
By adding `@<tid>` to any of the above instructions, you specify that the [MRG entries](@) that are to be selected must originate from the [terminology](@) that the [terminology identifier](@) `<tid>` identifies.

The instruction `"[ party, actor ]@essif-lab"` will copy all [MRG entries](@) from the (default version) of the [MRG] as it exists in the [scope](@) `essif-lab`. Of course, `essif-lab` must be defined as a [scopetag](@) in one of the entries of the [scopes section](/docs/specs/files/saf#scopes) of the [SAF](@).
:::

<details>
  <summary>Examples for adding terms</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | "[actor,party]"              | select every [curated text](@) in the [current scope](@), that [matches](form-phrase#matching@) any of the [form phrases](@) `actor` or `party`. |
  | "term [actor]"               | select every [curated text](@) in the [current scope](@), of which the `term` field in its [header](@) has the value `actor`. |
  | "status[proposed,approved]"  | select every [curated text](@) in the [current scope](@), of which the `status` field in its [header](@) has the value `proposed` or `approved`. |
  | "somefield []"               | select every [curated text](@) in the [current scope](@), of which the `somefield` field in its [header](@) has no value specified. |
  | "[actor,party]@tev2:v1"      | select every [MRG entry](@) in the [terminology](@) identified by `@tev2:v1`, that [matches](form-phrase#matching@) any of the [form phrases](@) `actor` or `party`. |
  | "term [actor,party]@tev2:v1" | select every [MRG entry](@) in the [terminology](@) identified by `@tev2:v1`, of which the `term` field has the value `actor` or `party`. |
  | "grouptags[x,y,z]@essif-lab" | select every [MRG entry](@) in the default [terminology](@) of [scope](@) `essif-lab`, of which the `grouptags` field contains one or more of the values `x`, `y`, or `z`. |

</details>

## Selecting Terms to be Removed from the Provisional MRG {#remove-terms}

The syntax for removing terms is similar to one that is used for adding terms, but it is preceded with a `-`character, as follows:

<details>
  <summary>Legend of abbreviations used</summary>

| Instruction | Description |
| ----------- | ----------- |
| `<f1>`, `<f2>` | a [formphrase](@) (for a particular [term](@)). |
| `<key>`     | the name of a field in the [header](@) of a [curated text](@), or in an [MRG entry](@) of the [MRG](@), whichever the [MRGT](@) uses as its source. |
| `<v1>`, `<v2>` | a text value. |

</details>

| Instruction | Description |
| ----------- | ----------- |
| `"-[ <f1>, <f2>, ... ]"`       |  Remove every [MRG entry](@) from the [provisional MRG](@) that [matches](form-phrase#matching@) any of the `<f<i>>`. |
| `"-<key> [ <v1>, <v2>, ... ]"` |  Remove every [MRG entry](@) from the [provisional MRG](@) that has a field named `<key>`, and whose value matches any of the specified values `<v<i>>`.[^1] |

<details>
  <summary>Examples for removing terms:</summary>

  | Syntax: | Meaning: |
  | :-----  | :------  |
  | "-[actor,party]"             | remove all [MRG entries](@) that [match](form-phrase#matching@) any of the [form phrases](@) `actor` or `party`. |
  | "-term [actor]"              | remove all entries that have a `term` field whose value is `actor`. |
  | "-status[proposed,approved]" | remove all entries that have a `status` field whose value is `proposed` or `approved`. |
  | "-grouptags[x,y,z]"          | remove all entries that have a `grouptags` field of which one of the listed [grouptags](@) is `x`, `y`, or `z`. |
  | "-somefield []"              | remove all entries that have a `somefield` field that has no value specified. |

</details>

## Renaming/rewriting term fields {#rename-terms}

In analogy with [namespaces](https://en.wikipedia.org/wiki/Namespace), we accommodate for the renaming of [terms](@) (better: modifying fields in [provisional MRG entries](@)) as they are 'imported' from [terminologies](@) other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only the [term](@) that should be renamable (which is sufficient for [namespaces](https://en.wikipedia.org/wiki/Namespace)), but also certain attributes may need to be changed, e.g. the `formPhrases`.

The following syntaxes are available for renaming fields in a [provisional MRG entry](@) that is part of the [provisional MRG](@):

<details>
  <summary>Legend of abbreviations used</summary>

| Instruction | Description |
| ----------- | ----------- |
| `<ttrm>` | is the value of the `term` field in the [MRG entry](@) of the [provisional MRG](@) that is selected for the renaming process, which may optionally be preceded with `<termType>:` (where `<termType>` would then be the value of the `termType` field in that [MRG entry](@)). Note that this value is an identifier for that [MRG entry](@). |
| `<k<i>>` | a text that corresponds with a field name in an [MRG entry](@) in the [provisional MRG](@), such as `formPhrases`, `glossaryText`, `grouptags`, `status`, etc. |
| `<v<i>>` | a text that will replace the existing text of the field identified by `<k<i>>`. If the text contains multiple words, it should be surrounded with quotes. |

</details>

| Instruction | Description |
| ----------- | ----------- |
| `"rename <ttrm> [ <k1>:<v1>, <k2>:<v2>, ... ]"` | In the [MRG entry](@) that is identified by `<ttrm>` in the [provisional MRG](@), the values of the fields `k<i>` are replaced by their corresponding values `v<i>` (also if `v<i>` is the empty string) |

Here is how it works. First, the [provisional MRG Entry](@) is searched that has a `term` field whose value is `<term>`. If found, all `<key>`:`<value>` pairs are processed in the sequence they are specified. Processing a `<key>`:`<value>` pair consists of looking for a field named `<key>` in the selected [MRG entry](@). We now have the following situations:

- if the `<key>` field exists, and
  - if the `<value>` is not empty, then the contents of the field is overwritten by `<value>`;
  - if the `<value>` is empty, then the contents of the field is deleted;
- if the `<key>` field does not exists, and
  - if the `<value>` is not empty, then a new field named `<key>` with the specified `<value>` is added to the [MRG entry](@);
  - if the `<value>` is empty, then nothing is done.

<details>
<summary>Renaming examples</summary>

- **`"rename party [ status:accepted, glossaryText:'A natural person or a legal person' ]"`**:
  - searches for the [provisional MRG entry](@) whose `term` field has value `party`, and (when found)
  - changes (or creates) its `status` field to so that it contains `accepted`, and 
  - changes (or creates) its `glossaryText` field to so that it contains `"A natural person or a legal person"`.

- **"`rename party [ term:partij, formPhrases:'partij{en}', glossaryText:'Een natuurlijk persoon of een rechtspersoon' ]"`**
  - searches for the [provisional MRG entry](@) whose `term` field has value `party`, and (when found)
  - changes (or creates) its `term` field to so that it contains `partij`;
  - changes (or creates) its `status` field to so that it contains `approved`.
  - changes (or creates) its `glossaryText` field to so that it contains `"A natural or legal person"`
  
- **`"rename party [ glossaryText: ]"`**
  - searches for the [provisional MRG entry](@) whose `term` field has value `party`, and (when found)
  - removes the contents from the `glossaryText` field if such a field exists.<br/>

</details>

