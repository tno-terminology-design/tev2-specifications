---
id: tev2-glossaries-demo
toc_min_heading_level: 6
toc_max_heading_level: 6
date: 20231205
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Glossary Generation Demo

This page is evidence that an [HRG](@) can be generated for every [MRG](@) that is available within the scope. It also shows that [HRGs](@) can be generated in different formats.

<Tabs
  defaultValue="default"
  values={[
    {label: 'TEv2 glossary',             value: 'default'},
    {label: 'Curated Terms glossary',    value: 'terms'},
    {label: 'Recent changes glossary',   value: 'recent-changes'},
    {label: 'Mental Model glossary',     value: 'patterns'},
    {label: 'Latest eSSIF-Lab glossary', value: 'latest'},
  ]}>

<TabItem value="default">

:::info
This is the [glossary](@) for the default [terminology](@) within this (TEv2) [scope](@), in the format as defined in file `terminology-config.yaml`, which holds the default configurations for the [TEv2 tools](@) within the this [scope](@).

The [MRGRef](@) that is used is `{%` `hrg="tev2"` `%}`
:::

{% hrg="tev2" %}

</TabItem>

<TabItem value="terms">

:::info
This [glossary](@) contains the [terms](@) that are curated within this (TEv2) [scope](@). It is formatted as a `markdowntable`.

The [MRGRef](@) that is used is `{%` `hrg=":terms" converter="markdown-table-row"` `%}`
:::

| Term | Definition |
| ---- | ---------- |
{% hrg=":terms" converter="markdown-table-row" %}

</TabItem>

<TabItem value="recent-changes">

:::info
This [glossary](@) contains the [terms](@) that are curated within this (TEv2) [scope](@). It has a custom format, and is sorted according to the date of last change, as it appears in the [MRGEntry](@).

The [MRGRef](@) that is used is `{%` `hrg=":terms" converter="| [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}}) | {{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}} | {{updated}} |\n" sorter="{{updated}}"` `%}`
:::

| Term | Definition | Updated |
| ---- | ---------- | ------- |
{% hrg=":terms" converter="| [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}}) | {{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}} | {{updated}} |\n" sorter="{{updated}}" %}

</TabItem>

<TabItem value="patterns">

:::info
This [glossary](@) lists the [mental models](@) (or [patterns](@)) that are known within this (TEv2) scope. It is formatted in a custom format (specified by a handlebars expression template).

The [MRGref](@) that is used is `{%` `hrg=":patterns" converter="## [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n
{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n"` `%}`
:::

{% hrg=":patterns" converter="## [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n
{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n" %}

</TabItem>

<TabItem value="latest">

:::info
This is the [glossary](@) for the `latest` version of the [terminology](@) within [scope](@) that we know as `essif-lab`. It is formatted using `markdown-section-3`.

NOTE that the [HRG entries](@) are sorted by the value of their `glossaryText`.

The [MRGref](@) that is used is `{%` `hrg="essif-lab:latest" converter="### [{{#if glossaryTerm}}{{noRefs glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{noRefs glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n" sorter="{{noRefs glossaryText}}"` `%}`
:::

{% hrg="essif-lab:latest" converter="### [{{#if glossaryTerm}}{{noRefs glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{noRefs glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n" sorter="{{glossaryText}}" %}

</TabItem>

</Tabs>
