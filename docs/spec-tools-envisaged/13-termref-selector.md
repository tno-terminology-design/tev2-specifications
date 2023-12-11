---
id: termref-selector
sidebar_label: TermRef Selector
date: 20231031
---

# TermRef Selector Tool

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

The **TermRef Selector** tool is a tool that helps you as you create purpose-specific [MRGs](@), such as an [MRG](@) that contains an [MRG entry](@) for every [TermRef](@) that you use in a particular (set of) document(s), which you can subsequently use to generate a [HRG](@) for.

:::info
This idea needs to be thought through. One of the questions would be whether you would want the tool to create a set of term-selection instructions (to be inserted in an entry in the `termselection`-section of a SAF), or whether this tool is another kind of MRGT that simply creates such an MRG.
:::