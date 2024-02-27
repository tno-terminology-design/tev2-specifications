---
id: tev2-glossary
sidebar_label: "Glossary"
toc_min_heading_level: 6
toc_max_heading_level: 6
date: 20231202
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Glossary, Abbreviations

<Tabs
  defaultValue="glossary"
  values={[
    {label: 'TEv2 glossary',               value: 'glossary'},
    {label: 'List of Abbreviations',       value: 'abbreviations'},
    {label: 'Glossary with Abbreviations', value: 'glossary-and-abbrs'},
  ]}>

<TabItem value="glossary">

# TEv2 Glossary

{% hrg="tev2" %}

</TabItem>

<TabItem value="abbreviations">

# List of Abbreviations

| Abbreviation | Refers to |
| ------------ | --------- |
{% hrg="" converter="{{#if glossaryAbbr}}| [{{glossaryAbbr}}]({{localize navurl}}) | [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{termid}}@) |\n{{/if}}" %}

</TabItem>

<TabItem value="glossary-and-abbrs">

# TEv2 Glossary

| Abbreviation | Refers to |
| ------------ | --------- |
{% hrg="" con[1]="markdown-table-row" con[2]="markdown-abbr-table-row" %}

</TabItem>

</Tabs>
