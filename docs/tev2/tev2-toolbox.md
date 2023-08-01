---
id: tev2-toolbox
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220421
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# TEv2 Terminology Toolbox

As mentioned in the [TEv2 overview](/docs/tev2/tev2-overview), the toolbox is envisaged to have a variety of tools, including:

- the **Term Ref(erence) Resolution Tool ([TRRT](trrt@))**. This tool takes files that contain so-called [TermRefs](@) and outputs a copy of these files in which these [TermRefs](@) are converted into so-called [renderable refs](@), i.e. texts that can be further processed by tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains markups that help [readers](@) to quickly find more explanations of the [concept](@) or other [knowledge artifact](@) that is being referenced.

- the **MRG Importer ([MRG importer](@))**. This tool serves to get any [MRG](@) that may be needed within a particular [scope](@), and make it available in the [scope's](@) [glossarydir](@). The idea behind this is that various tools that may need such [MRGs](@) would not need to include such code. Further details are in the [MRG importer specs](/docs/tev2/spec-tools/mrg-importer).

- the **Machine Readable Glossary generation Tool ([MRGT](@))**. This tool reads the [SAF](@) of a [scope](@) to find the instructions by which it creates an [MRG](@) for each of the versions of the [terminology](@) that are maintained within that [scope](@).

- the **Human Readable Glossary generation Tool ([HRGT](@))**. This tool reads the [MRG](@) of a [scope](@), resolves any [TermRefs](@) as necessary, and creates a rendering that results in a [HRG](@).

- the **Integrity Checker Tool ([ICT](@))**. This tool enables [curators](@) to test the integrity of [SAFs](@), [MRGs](@), and [curated texts](@) for integrity, logging any situation that may cause inconvenience or errors, and providing helptexts that are aimed at guiding [curators](@) to resolve any such issues.

- the **Machine Readable Dictionary generation Tool ([MRDT](@))**. This tool generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or [MRD](@)) of [terms](@) that originate from different (versions of) [terminologies](@), from various [scopes](@). [MRDs](@) are meant to be processed by a [HRDT](@), which turns it into (a specific format of) [HRD](@)).

- the **Human Readable Dictionary generation Tool ([HRDT](@))**. This tool generates a a Human Readable [Dictionary](@) ([HRD](@)), that renders the [terms](@) from a [machine readable dictionary (MRD)](mrd@) into one of several formats, e.g. HTML, or PDF. [HRDs](@) can be created for different purposes, e.g. to compare different [terminologies](@) (across [scopes](@)), or as a reference of what [terms](@) mean in different [scopes](@).

These tools are intended to be called from the command-line, typically
1. in a context where the user is developing (documents, papers, etc.) locally, and
2. in a github or gitlab context, where the tools are called from within a CI/CD pipeline.

Apart from these tools, a collection of code snippets is envisaged that can be used to automatically generate [MRGs](@) and [HRGs](@) upon successful commits to the master-branch of an associated repo/wiki, enabling [curators](@) to establish CI/CD pipelines.
