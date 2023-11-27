---
id: mrg-ref-syntax
sidebar_label: MRG References
date: 20231029
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MRG References - Syntax

[MRG References](@) (or [MRGRefs](@) for short) are textual constructs that refer to a specific [terminology](@) within a particular [scope](@). The purpose of an [MRG Reference](@) is that it can be converted (by the [HRGT](@)) into a text that contains a [human readable glossary](@) of the [terms](@) contained in that [terminology](@).

An [MRGRef](@) has the following syntax:

~~~ markdown
{% hrg="<tid>" converter="<glossarylayout>" %}
~~~

where

- `<tid>` is a [terminology identifier](@), that identifies a [terminology](@) (and implies an associated [MRG](@)) within the [current scope](@). If empty, or unspecified, it defaults to the default [terminology](@) of the [current scope](@).
- `<glossarylayout>` is a text that specifies either: 
    - a predefined way in which glossary entries are being formatted, such as `markdowntable` or `essiflab`;
    - a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars).

## Predefined Glossary Converters

Predefined glossary layouts have the advantage that they are easy to use, and provide for a (small) range of generally useful layouts. Also, using them would produce acceptable results even in non-standard conditions, e.g., when a [curated text](@) does not specify its `glossaryTerm` field. 

However, [curators](@) can specify other formats. To help them do this, the examples we provide for the predefined formats also show how the same, or similar, results can be achieved by customized specificaitons of the glossary layouts.

The predefined glossarylayouts are:

| `<glossarylayout>` | Description |
| :----------------- | :---------- |
| `markdowntable`    | [HRG entries](@) are generated as a single markdown table row, where the first cell contains the term, and the second its description. |
| `essiflab`         | [HRG entries](@) are generated that are similar to what is shown in the [essif-lab glossary](https://essif-lab.github.io/framework/docs/essifLab-glossary). |

### Converter for Markdown Tables

An [MRGref](@) that specifies `converter="markdowntable"` as its glossary layout is appropriate for generating a [glossary](@) as a markdown table within a regular markdown file. Suppose that markdown file contains the following text:

<Tabs
  defaultValue="markdowntable"
  values={[
    {label: 'Predefined layout', value: 'markdowntable'},
    {label: 'Customized layout', value: 'handlebars'},
  ]}>

<TabItem value="markdowntable"><br/>

Specifying the [MRGref](@) using the predefined glossary layout called `markdowntable`:

~~~ markdown
| Term | Description |
| :--- | :---------- |
{% hrg="tev2" converter="markdowntable" %}
---
~~~
</TabItem>

<TabItem value="handlebars"><br/>

Specifying the [MRGref](@) using a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars), as follows:

~~~ markdown
| Term | Description |
| :--- | :---------- |
{% hrg="tev2" converter="| {{glossaryTerm}} | {{glossaryText}} |/n" %}
---
~~~

Note that this is a simple handlebars expression, that is not very robust against missing variables. See, e.g., the section on [custom glossary converters](#custom-glossary-converters) on how to make them more robust, or even better: the documentation on [handlebars expressions](https://handlebarsjs.com/guide/#what-is-handlebars).
</TabItem>

</Tabs>

Under the assumption that the [terminology identifier](@) `tev2` refers to a [terminology](@) (and associated [MRG](@)) that holds [definitions](@) for the [terms](@) `Glossary`, `Curator` and `Definition`, the result could e.g., look something like this:

~~~ markdown
| Term | Description |
| :--- | :---------- |
| Glossary | an alphabetically sorted list of [terms](@) with the (single) meaning it has in (at least) one context. |
| Curator (of a Scope) | a person responsible for curating, managing, and maintaining the [terminologies](@), to ensure shared understanding among a [community](@) working together on a particular set of objectives. |
| Definition | the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@). |
---
~~~

### Converter for eSSIF-Lab Glossary look-alikes

An [MRGref](@) that specifies `converter="essiflab"` as its glossary layout is appropriate for generating a [glossary](@) that is similar to the one used by [eSSIF-Lab](https://essif-lab.github.io/framework/docs/essifLab-glossary). The markdown file that would produce this would be as follows:

<Tabs
  defaultValue="essiflab"
  values={[
    {label: 'Predefined layout', value: 'essiflab'},
    {label: 'Customized layout', value: 'handlebars'},
  ]}>

<TabItem value="essiflab"><br/>

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

<TabItem value="handlebars"><br/>

Specifying the [MRGref](@) using a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars), as follows:

~~~ markdown
---
# Docusaurus header fields:
id: glossary
sidebar_label: Glossary
---

# Glossary

{% hrg="tev2" converter="@Ca5e: please specify the SIMPLE converter handlebar expression for essif-lab" %}

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

a person responsible for curating, managing, and maintaining the [terminologies](@), to ensure shared understanding among a [community](@) working together on a particular set of objectives.

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
