---
id: tev2-toolbox
date: 20231031
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# TEv2 Terminology Toolbox

As mentioned in the [TEv2 overview](/docs/tev2-overview), the toolbox contains a number of tools. The ones that exist (or are sufficiently mature to use) include:

- the **Term Ref(erence) Resolution Tool ([TRRT](trrt@))**. This tool takes files that contain so-called [TermRefs](@) and outputs a copy of these files in which these [TermRefs](@) are converted into so-called [renderable refs](@), i.e. texts that can be further processed by tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains markups that help [readers](@) to quickly find more explanations of the [concept](@) or other [semantic unit](@) that is being referenced.

- the **MRG Importer ([MRG importer](@))**. This tool serves to get any [MRG](@) that may be needed within a particular [scope](@), and make it available in the [scope's](@) [glossarydir](@). The idea behind this is that various tools that may need such [MRGs](@) would not need to include such code. Further details are in the [MRG importer specs](/docs/spec-tools/mrg-import).

- the **Machine Readable Glossary generation Tool ([MRGT](@))**. This tool reads the [SAF](@) of a [scope](@) to find the instructions by which it creates an [MRG](@) for each of the versions of the [terminology](@) that are maintained within that [scope](@).

Other tools are [envisaged](/doc/tev2-toolbox-envisaged).
