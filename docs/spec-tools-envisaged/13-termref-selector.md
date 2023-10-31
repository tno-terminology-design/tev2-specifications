---
id: termref-selector
sidebar_label: TermRef Selector
date: 20231031
---

# TermRef Selector

import useBaseUrl from '@docusaurus/useBaseUrl'

export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

The **TermRef Selector** tool is a variant of the [trrt](@), the purpose of which is to provide a list of [term selection instructions](@) that can be used to create an [MRG](@) that contains an [entry](mrg-entry@) for every [term](@) for which a [term ref](@) exists in its input files.

In other words: if you have a set of files that contain [term refs](@) for which you want to create an [MRG](@), you can specify these files as input for the [TermRef Selector](@) tool, and use its output in the `termselection` field that is used to generate that [MRG](@). Of course, you need to make sure that there is an entry in the `versions`-section in the [SAF](@) for this [terminology](@).

## How it is envisaged to work

Like the [TRRT](@), the [TermRef Selector](@) 
- expects the [MRGs](@) that it should use to lookup the terms, to exist in the [glossarydir](@) of the [current scope](@);
- looks for any [term refs](@) in the input documents, and attempts to locate the associated [entry](mrg-entry@) in the designated [MRG](@).

Unlike the [TRRT](@), the [TermRef Selector](@) does not copy the input files

The [TermRef Selector](@) 
1. starts by creating an empty list of [term identifiers](@)
2. processes all [term refs](@) of all input files, by
    - looking them up in the appropriate [MRG](@)
    - adding a [term identifiers](@) for the [MRG entry](@) that matches the [term ref](@) (making sure there are no duplicates in the list)
3. writing output (possibly to a file), that consists of one line for each [term identifier](@) in the list that consists of the [term selection instructions](@) that instructs the [MRGT](@) to add the term to a [provisional MRG](@).

