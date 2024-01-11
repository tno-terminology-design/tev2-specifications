---
id: hrdt
sidebar_label: HR Dictionary Generation
date: 20220801
---

# Human Readable Dictionary Generation Tool

import useBaseUrl from '@docusaurus/useBaseUrl'

export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

The **Human Readable Dictionary generation Tool ([HRDT](@))** generates a Human Readable [Dictionary](@) ([HRD](@)), that renders the [terms](@) from a [machine readable dictionary (MRD)](mrd@) into one of several formats, e.g. HTML, or PDF. This rendering may be subject to further processing by third-party rendering tools, such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), etc. (see also: [Using the Tools](/docs/category/40-specs/tools)).

[HRDs](@) can be created for different purposes, e.g. to

- compare [terminologies](@) between different [scopes](@), which helps e.g. when aligning [terminologies](@) between them.
- provide an overview of what various [scopes](@) utilize specific [terms](@) for (education).

And there's certainly going to be more such purposes.

:::info Editor's note
Before this tool can really be properly specified, it may help to do some experiments to see what is really needed in order to keep it as simple as possible, and only then start proper specifications.
:::
