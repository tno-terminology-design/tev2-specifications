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
    {label: 'TEv2 glossary',               value: 'default'},
    {label: 'Curated Terms glossary',      value: 'terms'},
    {label: 'Recent changes glossary',     value: 'recent-changes'},
    {label: 'Mental Model glossary',       value: 'patterns'},
    {label: 'Latest eSSIF-Lab glossary',   value: 'latest'},
    {label: 'Glossary and Abbrs (inline)', value: 'glossary-and-abbrs'},
    {label: 'Glossary with Notes',         value: 'glossary-with-notes'},
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
This [glossary](@) lists the [mental models](@) (or [patterns](@)) that are known within this (TEv2) scope. It is formatted in a custom format (specified by a handlebars template).

The [MRGref](@) that is used is `{%` `hrg=":patterns" converter="## [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n
{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n"` `%}`
:::

{% hrg=":patterns" converter="## [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n
{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n" %}

:::info
The same [glossary](@) can be constructed from any other [MRG](@) that contains [entries](mrg-entries@) for each of these [mental models](@), simply by generating empty strings for [MRG entries](@) that do not have `termType: pattern`. To do this, we use the following [MRGref](@):

`{%` `hrg=":patterns" converter="{{#ifValue termType equals='pattern'}}## [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n{{/ifValue}}"` `%}`
:::

{% hrg=":patterns" converter="{{#ifValue termType equals='pattern'}}## [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n{{/ifValue}}" %}

</TabItem>

<TabItem value="latest">

:::info
This is the [glossary](@) for the `latest` version of the [terminology](@) within [scope](@) that we know as `essif-lab`. It is formatted using `markdown-section-3`.

NOTE that the [HRG entries](@) are sorted by the value of their `glossaryText`.

The [MRGref](@) that is used is `{%` `hrg="essif-lab:latest" converter="### [{{#if glossaryTerm}}{{noRefs glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{noRefs glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n" sorter="{{noRefs glossaryText}}"` `%}`
:::

{% hrg="essif-lab:latest" converter="### [{{#if glossaryTerm}}{{noRefs glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{noRefs glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n" sorter="{{glossaryText}}" %}

</TabItem>

<TabItem value="glossary-and-abbrs">

:::info
This is the [glossary](@) for the default [terminology](@) within this (TEv2) [scope](@), in the same format as defined in file `terminology-config.yaml`, but now with the specification of the [converters](@) placed inline.

The [MRGRef](@) that is used is `{%` `hrg="" con[1]="markdown-table-row" con[2]="markdown-abbr-table-row"` `%}`
:::

| Abbreviation | Refers to |
| ------------ | --------- |
{% hrg="" con[1]="markdown-table-row" con[2]="markdown-abbr-table-row" %}

</TabItem>

<TabItem value="glossary-with-notes">

:::info
This is the [glossary](@) that shows that you can add notes to a glossary entry.
For this purpose, we use a custom converter that

1. only creates an entry for MRG entries that have an existing, non-empty `glossaryNotes` field
2. shows the notes.

We have simplified the handlebars template so that it becomes easier for readers to focus on what we have been trying to do here.

The [MRGRef](@) that is used is `{%` `hrg="" converter="{{#if glossaryNotes}}## {{noRefs glossaryTerm}}\n\n{{glossaryText}}\n\n### Notes\n\n{{#each glossaryNotes}}- {{this}}\n{{/each}}\n{{/if}}"` `%}`
:::

## Glossary (Markdown style)

{% hrg="" converter="{{#if glossaryNotes}}### {{noRefs glossaryTerm}}\n\n{{glossaryText}}\n\n#### Notes\n\n{{#each glossaryNotes}}- {{this}}\n{{/each}}\n{{/if}}" %}

## Glossary (Table style)

:::info
The same, but now generating the glossary in a table format. We use the [MRGRef](@):

`{%` `hrg="" converter="{{#if glossaryNotes}}## {{noRefs glossaryTerm}}\n\n{{glossaryText}}\n\n### Notes\n\n{{#each glossaryNotes}}- {{this}}\n{{/each}}\n{{/if}}"` `%}`
:::

| Term | Description |
| :--- | :---------- |
{% hrg="" converter="{{#if glossaryNotes}}| {{noRefs glossaryTerm}} | {{glossaryText}}{{#if glossaryNotes}}<br/><br/>**Notes**<br/><br/><ul>{{#each glossaryNotes}}<li>{{this}}</li>{{/each}}<br/></ul>{{/if}} |\n{{/if}}" %}

</TabItem>

</Tabs>
