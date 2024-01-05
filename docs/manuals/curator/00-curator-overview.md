---
id: overview-curator
sidebar_label: Curators
date: 20220513
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Curators Manual - Overview

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

[Curators](@) (i.e. the members of a so-called [terms community](@)) manage the (contents of the) [scope(s)](@) on behalf of the [community](@) (whose [semantic units](@) are being documented within that [scope](@)). [Curators](@) may serve (i.e.: [curate](@) the [scopes](@)) of multiple [communities](@).

A [curator](@) is tasked with describing the [scope](@) particulars, [curating](@) its [curated texts](@), generating the various [glossaries](@) ([MRGs](@) and [HRGs](@)), [dictionaries](@) (if and when necessary and possible), and other tangible, 'rendered artifacts' (e.g. static websites, PDFs, whitepapers) as agreed with the [community](@).

Also, [curators](@) are expected to specify the processes that enable contributors and [authors](@) to contribute to the contents of the [scope](@) (e.g. by providing suggestions for texts, discussing them, etc.), specifically any conditions/requirements that they have to be aware of and take into account, and that are needed to enable the [curators](@) to do their job.

The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. [curation](@)) of [terminologies](@), as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual [scopes](@).

The task of [curators](@) is to create/maintain the [scope directory](@) that they are tasked to [curate](@). This Curators Manual is intended to help them do this.

:::info Editor's note
This section needs to be revised from here onward
:::

TEv2 assumes that the [curated](@) data resides in an existing [scope directory](@), and that [curated files](@) are expected to be processable by other tools, including, but not limited to [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a [scope directory](@) must be [set up](/docs/manuals/tev2-installation) in advance.

Thus, whenever a [terms-community](@) decided that some contribution is to be included in the part of the [corpus](@) that is maintained by that [community](terms-community@), the [curators](@) of that [community](terms-community@) are tasked to

1. create/maintain/update any [scope](@)-related administration in the [scope directory](@) that is needed for curation, as specified by a [Scope Administration File (SAF)](docs/spec-files/saf);
2. convert that contribution to (a set of) [curated files](@), that comply with the [specifications](/docs/spec-files/ctext-file) for such files;
3. store them at the location as designated in the [SAF](docs/spec-files/saf);
4. generate/update any artifact that the [community](terms-community@) wants to automatically maintain, which in particular includes the [MRG](@) and associated [HRG](@).

This document provides an overview of the knowledge that [curators](@) may need to perform this task, which can be broken up in the following parts:

1. [Setup/installation](/docs/manuals/tev2-installation) of a [scope directory](@) that is suitable for working with TEv2, and the creation of a [SAF](docs/spec-files/saf).

2. [Curation](@) of terminological contributions. This requires knowledge about the [file structure](/docs/spec-files/ctext-file) of [curated file](@).

3. [generation](/docs/category/toolbox-specs) of [curated texts](@). It is typical for a [terms community](@) to want to have a [glossary](@) of the [terms](@) they either have [defined](@) themselves, or are [defined](@) elsewhere but are to be used within that [community](@). However, other artifacts may be generated as well (a [dictionary](@), white papers, etc.) - this is all up to the [community](@).