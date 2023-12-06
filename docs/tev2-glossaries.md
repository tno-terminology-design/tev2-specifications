---
id: tev2-glossaries
date: 20231205
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# All TEv2 Glossaries

This page is evidence that an [HRG](@) can be generated for every [MRG](@) that is available within the scope. It also shows that [HRGs](@) can be generated in different formats.

<Tabs
  defaultValue="default"
  values={[
    {label: '"" (default)', value: 'default'},
    {label: ':Terms', value: 'terms'},
    {label: ':Documentation', value: 'documentation'},
    {label: 'essif-lab:latest', value: 'latest'},
  ]}>

<TabItem value="default">

This is the [glossary](@) for the default [terminology](@) within this [scope](@), in the format as defined in file `terminology-config.yaml`, which holds the default configurations for the [TEv2 tools](@) within the this [scope](@).

{% hrg="" %}

</TabItem>

<TabItem value="terms">

This is the [glossary](@) for the [terminology](@) within this [scope](@), that only contains the [terms](@) that are actually [defined](@) (and [curated](@)) therein. It is formatted as a `markdowntable`.

| Term | Definition |
| ---- | ---------- |
{% hrg=":terms" converter="markdowntable" %}

</TabItem>

<TabItem value="latest">

This is the [glossary](@) for the `latest` version of the [terminology](@) within this [scope](@). It is formatted as in `essiflab`.

{% hrg=":latest" converter="essif" %}

</TabItem>

<TabItem value="documentation">

This is the [glossary](@) for the [terminology](@) within this [scope](@) that is used for documentation purposes (version is `documentation`). It is formatted in `html`.

{% hrg=":documentation" converter="html" %}

</TabItem>

</Tabs>