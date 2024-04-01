---
id: mrg-refs
sidebar_label: MRG References (MRGRefs)
date: 20231029
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import APITable from '@site/src/components/APITable';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MRG References - Syntax

[MRG References](@) (or [MRGRefs](@) for short) are textual constructs that refer to a specific [terminology](@) within a particular [scope](@). The purpose of an [MRG Reference](@) is that it can be converted (by the [HRGT](@)) into a text that contains a [human readable glossary](@) of the [terms](@) contained in that [terminology](@).

The syntax for [MRGRefs](@) is not fixed. While there is a default syntax, [curators](@) can define their own syntax, and specify that as a command-line parameter or a parameter in the configuration file for appropriate tools, such as the [HRGT](@). If an [interpreter](@) is not specified, it defaults to `default`, the associated syntax of which is specified below. 

## Default MRGRef Syntax {#default-mrgref-syntax}

The default syntax for [MRGRefs](@) is as follows:

~~~ markdown
{% hrg="<tid>" converter="<converter>" sorter="<sorter>" %}
~~~

where

- `<tid>` is a [terminology identifier](@), that identifies a [terminology](@) (and implies an associated [MRG](@)) within the [current scope](@). If empty, or unspecified, it defaults to the default [terminology](@) of the [current scope](@).

:::warning ([issue #25](https://github.com/tno-terminology-design/tev2-tools/issues/25))
When the `<tid>` points to a [scope](@) that is not the [current scope](@), the [TermRefs](@) that appear in the generated glossary must be resolved using the [MRG](@) that contains the identified [terminology](@). Currently, the tools do not support a mechanism for doing this. 
:::

- `converter="<converter>"` specifies the [converter](@) that is to be used for generating glossary entries. If it isn't specified as part of the [MRGRef](@), it must be specified as a command-line parameter, or as a value in the configuration file that the [HRGT](@) uses. 
- `<converter>` is a text that specifies either: 
    - a predefined way in which glossary entries are being formatted (see [further down](#predefined-mrgref-converters)), such as `markdowntable` or `essif-lab`;
    - a [handlebars template](@).
- `sorter="<sorter>"` specifies the [sorter](@) that is to be used for sorting the glossary entries. If it isn't specified as part of the [MRGRef](@), it is derived from the command-line parameter, or the a value in the configuration file that the [HRGT](@) uses. If neither is specified, it defaults to `default`.
- `<sorter>` is a text that specifies either: 
    - a predefined way in which glossary entries are being sorted (see [further down](#predefined-mrgref-sorters)), such as `default` or `glossaryterm`;
    - a [handlebars template](@).

## Predefined MRGRef Interpreters {#predefined-mrgref-interpreters}

Predefined glossary interpreters have the advantage that they are easy to use. However, it is possible that in particular contexts, they pose problems. For such cases, [curators](@) can specify custom formats.

The predefined interpreters for detecting [MRGRefs](@) are as follows:

```mdx-code-block
<APITable>
```

| `<interpreter>` | Description |
| :-------------- | :---------- |
| `default`       | `{% hrg="<tid>" converter="<converter>" sorter="<sorter>" %}`, where `converter="<converter>"` and `sorter="<sorter>"` are optional. This is the default [interpreter](@) for [MRGRefs](@). |

```mdx-code-block
</APITable>
```

## Predefined MRGRef Sorters {#predefined-mrgref-sorters}

Sorters are similar to [converters](@), in that they can either specify a predefined way of sorting glossary entries, or a [handlebars template](@) that specifies how to sort them.

The predefined sorters for glossary generation are:

```mdx-code-block
<APITable>
```

| `<sorter>` | Expression | Description |
| :--------- | :--------- | :---------- |
| `default`  | `{{term}}{{termType}}` | [HRG entries](@) are first sorted on the `term` field, and then on the `termType` field. |
| `glossaryterm` | `{{glossaryTerm}}{{term}}{{termType}}` | [HRG entries](@) are first sorted on the `glossaryTerm` field, and then the same as `default`. |

```mdx-code-block
</APITable>
```

## Predefined MRGRef Converters {#predefined-mrgref-converters}

Predefined glossary layouts have the advantage that they are easy to use, and provide for a (small) range of generally useful layouts. Also, using them would produce acceptable results even in non-standard conditions, e.g., when a [curated text](@) does not specify its `glossaryTerm` field. 

However, [curators](@) can specify other formats. To help them do this, the examples we provide for the predefined formats also show how the same, or similar, results can be achieved by customized specifications of the glossary layouts.

The predefined converters for glossary generation are:

```mdx-code-block
<APITable>
```

| `<converter>`           | Description |
| :---------------------- | :---------- |
| `markdown-table-row`    | [HRG entries](@) are compiled as a single markdown table row, where the first cell contains the term, and the second its description. |
| `markdown-section-2`    | [HRG entries](@) are compiled as a markdown section, with the term as section header 2 `## `, and the description as the section body below. |
| `markdown-section-3`    | [HRG entries](@) are compiled as a markdown section, with the term as section header 3 `### `, and the description as the section body below. |

```mdx-code-block
</APITable>
```

### Converter for Markdown Tables

An [MRGref](@) that specifies `converter="markdown-table-row"` as its glossary layout is appropriate for generating a [glossary](@) as a markdown table within a regular markdown file. Suppose that markdown file contains the following text.

<Tabs
  groupId="md-converter"
  defaultValue="predefined"
  values={[
    {label: 'Using predefined layout', value: 'predefined'},
    {label: 'Simple customized layout', value: 'simple'}
  ]}>

<TabItem value="predefined"><br/>

Specifying the [MRGref](@) using the predefined glossary layout called `markdown-table-row`.

```markdown
| Term | Description |
| :--- | :---------- |
{% hrg="tev2" converter="markdown-table-row" %}
---
```
</TabItem>

<TabItem value="simple"><br/>

Specifying the [MRGref](@) using a [handlebars template](@), as follows.

~~~ markdown
| Term | Description |
| :--- | :---------- |
{% hrg="tev2" converter="| {{glossaryTerm}} | {{glossaryText}} |\n" %}
---
~~~

Note that this is a simple [handlebars template](@), that is not very robust against missing variables. See, e.g., the section on [custom glossary converters](#custom-glossary-converters) on how to make them more robust, or even better: the documentation on [Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars).
</TabItem>

</Tabs>

---

Under the assumption that the [terminology identifier](@) `tev2` refers to a [terminology](@) (and associated [MRG](@)) that holds [definitions](@) for the [terms](@) `Glossary`, `Curator` and `Definition`, the result could e.g., look something like the following.

~~~ markdown
| Term | Description |
| :--- | :---------- |
| Glossary | an alphabetically sorted list of [terms](@) with the (single) meaning it has in (at least) one context. |
| Curator (of a Scope) | a person responsible for curating, managing, and maintaining the [terminologies](@), to ensure shared understanding among a [community](@) working together on a particular set of [objectives](@essif-lab). |
| Definition | the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@). |
---
~~~

### Converter for eSSIF-Lab Glossary lookalikes

An [MRGref](@) that specifies `converter="markdown-section-3"` as its glossary layout is appropriate for generating a [glossary](@) that is similar to the one used by [eSSIF-Lab](https://essif-lab.github.io/framework/docs/essifLab-glossary). The markdown file that would produce this would be as follows.

<Tabs
  groupId="essif-converter"
  defaultValue="predefined"
  values={[
    {label: 'Using predefined layout', value: 'predefined'},
    {label: 'Simple customized layout', value: 'simple'}
  ]}>

<TabItem value="predefined"><br/>

Specifying the [MRGref](@) using the predefined glossary layout called `markdown-section-3`:

~~~ markdown
---
# Docusaurus header fields:
id: glossary
sidebar_label: Glossary
---

# Glossary

{% hrg="essif-lab" converter="markdown-section-3" %}

---
Here endeth the glossary.
~~~
</TabItem>

<TabItem value="simple"><br/>

Specifying the [MRGref](@) using a [handlebars template](@), as follows:

~~~ markdown
---
# Docusaurus header fields:
id: glossary
sidebar_label: Glossary
---

# Glossary

{% hrg="tev2" converter="### [{{glossaryTerm}}]({{localize navurl}})\n\n{{glossaryText}}\n\n" %}

---
Here endeth the glossary.
~~~

Note that this is a simple [handlebars template](@), that is not very robust against missing variables. See, e.g., the section on [custom glossary converters](#custom-glossary-converters) on how to make them more robust, or even better: the documentation on [Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars).
</TabItem>

</Tabs>

---

Under the assumption that the [terminology identifier](@) `essif-lab` refers to a [terminology](@) (and associated [MRG](@)) that holds [definitions](@) for the [terms](@) `Glossary`, `Curator` and `Definition`, the result could e.g., look something like this:

~~~ markdown
---
# Docusaurus header fields:
id: glossary
sidebar_label: Glossary
---

# Glossary

### [Glossary](/docs/terms/glossary)

an alphabetically sorted list of [terms](@) with the (single) meaning it has in (at least) one context.

### [Curator (of a Scope)](/docs/terms/curator)

a person responsible for curating, managing, and maintaining the [terminologies](@), to ensure shared understanding among a [community](@) working together on a particular set of [objectives](@essif-lab).

### [Definition](/docs/terms/definition)

the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@).

---
Here endeth the glossary.
~~~

## Custom Glossary Converters {#custom-glossary-converters}

When the predefined glossary converters are not appropriate, [curators](@) can define their own converter, by specifying them as a [handlebars template](@).

The [handlebars template](@)s can use all fields of the [converter profile](@) as variables. For example, `{{glossaryText}}`, or `{{entry.glossaryText}}`, is the variable that contains the text specified in the `glossaryText` field of the specific [MRG entry](@), and `{{err.file}}` contains the name of the file where the [MRGRef](@) was found.

Converters can use the [TEv2 helper functions](@) and [block helpers](https://handlebarsjs.com/guide/block-helpers.html#basic-blocks) to create a diverse range of glossary entries. The example below illustrates this functionality. Note that the newlines and spaces are strictly handled by the [converter](@), in the example they are primarily for readability.

```ts
<a href="{{localize entry.navurl}}">{{capFirst entry.term}}</a>

{{#if entry.glossaryText}}
  *Text derived from the {{mrg.scopetag}} glossary at {{mrg.website}}.*
  {{entry.glossaryText}}
{{else}}
  No description available here at {{err.file}}, please see {{entry.navurl}}.
{{/if}}

{{#ifValue entry.termType equals="image"}}
  <img src="{{locator}}.jpg" alt="An image of {{term}}" width="500">
{{/ifValue}}

```

Partially depending on the `TermType` property of the [MRG entry](@), this converter string can produce output with images, links, and text, that accurately describes a [semantic unit](@) in the [terminology](@) that the [MRGRef](@) refers to.
