---
id: overview-spec-tools-envisaged
sidebar_label: Overview
date: 20231031
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Overview - Envisaged TEv2 Tools

This is the place where we develop specifications for new tools that we envisage will at some point become part of the [TEv2 Toolbox](@):

- the **[Integrity Checker Tool](/docs/spec-tools-envisaged/ict)** (or [ICT](@)). This tool enables [curators](@) to test the integrity of [SAFs](@), [MRGs](@), and [curated texts](@) for integrity, logging any situation that may cause inconvenience or errors, and providing helptexts that are aimed at guiding [curators](@) to resolve any such issues.

- The **[TermRef Selector](/docs/spec-tools-envisaged/termref-selector)** tool is a variant of the [trrt](@), the purpose of which is to provide a list of [term selection instructions](@) that can be used to create an [MRG](@) that contains an [entry](mrg-entry@) for every [term](@) for which a [term ref](@) exists in its input files.

- the **[Human Readable Glossary generation Tool](/docs/spec-tools-envisaged/HRGT)** (or [HRGT](@)). This tool reads the [MRG](@) of a [scope](@), resolves any [TermRefs](@) as necessary, and creates a rendering that results in a [HRG](@).

- the **[Machine Readable Dictionary generation Tool](/docs/spec-tools-envisaged/MRDT)** (or [MRDT](@)). This tool generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or [MRD](@)) of [terms](@) that originate from different (versions of) [terminologies](@), from various [scopes](@). [MRDs](@) are meant to be processed by a [HRDT](@), which turns it into (a specific format of) [HRD](@)).

- the **[Human Readable Dictionary generation Tool](/docs/spec-tools-envisaged/HRDT)** (or [HRDT](@)). This tool generates a a Human Readable [Dictionary](@) ([HRD](@)), that renders the [terms](@) from a [machine readable dictionary (MRD)](mrd@) into one of several formats, e.g. HTML, or PDF. [HRDs](@) can be created for different purposes, e.g. to compare different [terminologies](@) (across [scopes](@)), or as a reference of what [terms](@) mean in different [scopes](@).

Apart from these tools, a collection of code snippets is envisaged that can be used to automatically generate [MRGs](@) and [HRGs](@) upon successful commits to the master-branch of an associated repo/wiki, enabling [curators](@) to establish CI/CD pipelines.
