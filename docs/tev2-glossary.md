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
  ]}>

<TabItem value="glossary">

# TEv2 Glossary

{% hrg="tev2" converter="{{#if glossaryNotes}}| {{noRefs glossaryTerm}} | {{glossaryText}}{{#if glossaryNotes}}<br/><br/>**Notes**\n\n<ul>{{#each glossaryNotes}}\n<li>{{this}}</li>{{/each}}\n</ul>{{/if}} |\n{{/if}}" %}
" %}

</TabItem>

<TabItem value="abbreviations">

# List of Abbreviations

| Abbreviation | Refers to |
| ------------ | --------- |
{% hrg="" converter="{{#if glossaryAbbr}}| [{{glossaryAbbr}}]({{localize navurl}}) | [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{termid}}@) |\n{{/if}}" %}

</TabItem>

</Tabs>
