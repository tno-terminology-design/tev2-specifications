---
id: mrg-ref-syntax
sidebar_label: MRG References
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
{% hrg="<tid>" converter="<converter>" %}
~~~

where

- `<tid>` is a [terminology identifier](@), that identifies a [terminology](@) (and implies an associated [MRG](@)) within the [current scope](@). If empty, or unspecified, it defaults to the default [terminology](@) of the [current scope](@).
- `converter="<converter>` specifies the [converter](@) that is to be used for generating glossary entries. If it isn't specified as part of the [MRGRef](@), it must be specified as a command-line parameter, or as a value in the configuration file that the [HRGT](@) uses. 
- `<converter>` is a text that specifies either: 
    - a predefined way in which glossary entries are being formatted (see [further down](#predefined-mrgref-converters)), such as `markdowntable` or `essiflab`;
    - a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars).

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

## Predefined MRGRef Converters {#predefined-mrgref-converters}

Predefined glossary layouts have the advantage that they are easy to use, and provide for a (small) range of generally useful layouts. Also, using them would produce acceptable results even in non-standard conditions, e.g., when a [curated text](@) does not specify its `glossaryTerm` field. 

However, [curators](@) can specify other formats. To help them do this, the examples we provide for the predefined formats also show how the same, or similar, results can be achieved by customized specifications of the glossary layouts.

The predefined converters for glossary generation are:

```mdx-code-block
<APITable>
```

| `<glossary layout>`      | Description |
| :---------------------- | :---------- |
| `markdown-table-row`    | [HRG entries](@) are compiled as a single markdown table row, where the first cell contains the term, and the second its description. |
| `markdown-section-2`    | [HRG entries](@) are compiled as a markdown section, with the term as section header 2 `## `, and the description as the section body below. |
| `markdown-section-3`    | [HRG entries](@) are compiled as a markdown section, with the term as section header 3 `### `, and the description as the section body below. |

```mdx-code-block
</APITable>
```

### Converter for Markdown Tables

An [MRGref](@) that specifies `converter="markdowntable"` as its glossary layout is appropriate for generating a [glossary](@) as a markdown table within a regular markdown file. Suppose that markdown file contains the following text:

<Tabs
  groupId="converter-specs"
  defaultValue="predefined"
  values={[
    {label: 'Using predefined layout', value: 'predefined'},
    {label: 'Simple customized layout', value: 'simple'},
    {label: 'Actual implementation', value: 'actual'},
  ]}>

<TabItem value="predefined"><br/>

Specifying the [MRGref](@) using the predefined glossary layout called `markdown-table-row`.

```markdown
| Term | Description |
| :--- | :---------- |
{% hrg="tev2" converter="markdowntable" %}
---
```
</TabItem>

<TabItem value="simple"><br/>

Specifying the [MRGref](@) using a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars), as follows.

~~~ markdown
| Term | Description |
| :--- | :---------- |
{% hrg="tev2" converter="| {{glossaryTerm}} | {{glossaryText}} |\n" %}
---
~~~

Note that this is a simple handlebars expression, that is not very robust against missing variables. See, e.g., the section on [custom glossary converters](#custom-glossary-converters) on how to make them more robust, or even better: the documentation on [handlebars expressions](https://handlebarsjs.com/guide/#what-is-handlebars).
</TabItem>

<TabItem value="actual"><br/>

Specifying the [MRGref](@) using the [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars) similar to the implementation [here](https://essif-lab.github.io/framework/docs/essifLab-glossary), is done as follows.

~~~ markdown
| Term | Description |
| :--- | :---------- |
{% hrg="tev2" converter=| [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}}) | {{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}} |" %}
---
~~~

This example is derived from the [terminology-config.yaml](https://github.com/essif-lab/framework/blob/master/docs/terminology-config.yaml) of the [essif-lab/framework](https://github.com/essif-lab/framework/tree/master) repository, which is explained further [below](#converter-for-essif-lab-glossary-look-alikes). The actual reference `{% hrg="" %}` uses all the defaults (set in the config).
</TabItem>

</Tabs>

---

Under the assumption that the [terminology identifier](@) `tev2` refers to a [terminology](@) (and associated [MRG](@)) that holds [definitions](@) for the [terms](@) `Glossary`, `Curator` and `Definition`, the result could e.g., look something like the following.

~~~ markdown
| Term | Description |
| :--- | :---------- |
| Glossary | an alphabetically sorted list of [terms](@) with the (single) meaning it has in (at least) one context. |
| Curator (of a Scope) | a person responsible for curating, managing, and maintaining the [terminologies](@), to ensure shared understanding among a [community](@) working together on a particular set of [objectives](@). |
| Definition | the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@). |
---
~~~

### Converter for eSSIF-Lab Glossary lookalikes

An [MRGref](@) that specifies `converter="essiflab"` as its glossary layout is appropriate for generating a [glossary](@) that is similar to the one used by [eSSIF-Lab](https://essif-lab.github.io/framework/docs/essifLab-glossary). The markdown file that would produce this would be as follows:

<Tabs
  groupId="converter-specs"
  defaultValue="predefined"
  values={[
    {label: 'Using predefined layout', value: 'predefined'},
    {label: 'Simple customized layout', value: 'simple'},
    {label: 'Actual implementation', value: 'actual'},
  ]}>

<TabItem value="predefined"><br/>

Specifying the [MRGref](@) using the predefined glossary layout called `essiflab`:

~~~ markdown
---
# Docusaurus header fields:
id: glossary
sidebar_label: Glossary
---

# Glossary

{% hrg="tev2" converter="essiflab" %}

---
Here endeth the glossary.
~~~
</TabItem>

<TabItem value="simple"><br/>

Specifying the [MRGref](@) using a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars), as follows:

:::warning Editor's note
@Ca5e: please check that the SIMPLE converter handlebar expression in the below example sufficiently describes what the `essiflab` layout is about.
The actual, more difficult version should be placed in the next chapter (customizing )
:::

~~~ markdown
---
# Docusaurus header fields:
id: glossary
sidebar_label: Glossary
---

# Glossary

{% hrg="tev2" converter="\n### [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{glossaryText}}{{else}}Error: no glossary text has been specified for this term.{{/if}}\n" %}

---
Here endeth the glossary.
~~~

Note that this is a simple handlebars expression, that is not very robust against missing variables. See, e.g., the section on [custom glossary converters](#custom-glossary-converters) on how to make them more robust, or even better: the documentation on [handlebars expressions](https://handlebarsjs.com/guide/#what-is-handlebars).
</TabItem>

<TabItem value="actual"><br/>

Specifying the [MRGref](@) using the [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars) as it was originally implemented, is done as follows:

:::warning Editor's note
@Ca5e: please check that the handlebar expression that is ACTUALLY USED for the `essiflab` converter is specified here below.
:::

~~~ markdown
---
# Docusaurus header fields:
id: glossary
sidebar_label: Glossary
---

# Glossary

{% hrg="tev2" converter="\n## [{{glossaryTerm}}]({{localize navurl}})\n\n{{glossaryText}}\n" %}
---
Here endeth the glossary.
~~~

Note that this is a simple handlebars expression, that is not very robust against missing variables. See, e.g., the section on [custom glossary converters](#custom-glossary-converters) on how to make them more robust, or even better: the documentation on [handlebars expressions](https://handlebarsjs.com/guide/#what-is-handlebars).
</TabItem>

</Tabs>

Under the assumption that the [terminology identifier](@) `tev2` refers to a [terminology](@) (and associated [MRG](@)) that holds [definitions](@) for the [terms](@) `Glossary`, `Curator` and `Definition`, the result could e.g., look something like this:

~~~ markdown
---
# Docusaurus header fields:
id: glossary
sidebar_label: Glossary
---

# Glossary

## [Glossary](/docs/terms/glossary)

an alphabetically sorted list of [terms](@) with the (single) meaning it has in (at least) one context.

## [Curator (of a Scope)](/docs/terms/curator)

a person responsible for curating, managing, and maintaining the [terminologies](@), to ensure shared understanding among a [community](@) working together on a particular set of [objectives](@).

## [Definition](/docs/terms/definition)

the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@).

---
Here endeth the glossary.
~~~

## Custom Glossary Converters {#custom-glossary-converters}

When the predefined glossary converters are not appropriate, [curators](@) can define their own converter, by specifying them as a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars).

The handlebar expressions can use all fields that exist in [MRG entries](@) as variables. For example, `{{glossaryText}}` is the variable that contains the text specified in the `glossaryText` field of the [MRG entry](@).

:::info Editor's note
There may be merit in allowing/enabling handlebar expressions to also use variables that access fields in the MRG headers - see [tev2-tools/issue #4](https://github.com/tno-terminology-design/tev2-tools/issues/4)
:::

:::info Editor's note
@Ca5e: can you write a few examples here, ranging from very simple converters (that have the property of not being very robust against missing values in variables) to complexer ones (that are robust(er))?
:::
