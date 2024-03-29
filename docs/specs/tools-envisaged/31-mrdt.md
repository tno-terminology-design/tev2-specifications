---
id: mrdt
sidebar_label: MR Dictionary Generation
date: 20220801
---

# Machine Readable Dictionary Generation Tool

import useBaseUrl from '@docusaurus/useBaseUrl'

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

The **Machine Readable Dictionary generation Tool ([MRDT](@))** generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or [MRD](@)) of [terms](@) that originate from different (versions of) [terminologies](@), from various [scopes](@). The inventory has a specific, well-defined [format](/docs/specs/files/mrd). Like [MRGs](@), the contents of [MRDs](@) is determined by a list of [term selection instructions](@), which specify the (sets of) terms that are to be included.

[MRDs](@) are meant to be processed by the other tools in the [toolbox](toolbox@), specifically by one of the [HRDTs](@), which would then create a [Human Readable Dictionary](@) (or [HRD](@)).

[MRDs](@) can typically used to enable the creation of [HRDs](@) that are fit for specific purposes, e.g. for comparing [terminologies](@) between different [scopes](@), which helps e.g. when aligning [terminologies](@) between them. Also they can be used to provide an overview of what various [scopes](@) utilize specific terms for (education). And there's certainly going to be more such purposes.

:::info Editor's note
The specifications of this tool need to be authored.
It is suggested to look at the MRGT-specs, and adapt that text.
:::