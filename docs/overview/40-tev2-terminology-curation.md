---
id: tev2-terminology-curation
sidebar_label: Terminology Curation
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# TEv2 - Terminology Curation

:::info Editor's note
This section may need to be revised, and/or moved to the [Curators Manual](/docs/manuals/curator/curator-overview).
:::

TEv2 assumes that the [curated](@) data resides in an existing [scope directory](@), and that [curated files](@) are expected to be processable by other tools, including, but not limited to [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a [scope directory](@) must be [set up](/docs/manuals/curator/curator-tev2-installation) in advance.

Thus, whenever a [terms-community](@) decided that some contribution is to be included in the part of the [corpus](@) that is maintained by that [community](terms-community@), the [curators](@) of that [community](terms-community@) are tasked to

1. create/maintain/update any [scope](@)-related administration in the [scope directory](@) that is needed for curation, as specified by a [Scope Administration File (SAF)](docs/specs/files/saf);
2. convert that contribution to (a set of) [curated files](@), that comply with the [specifications](/docs/specs/files/curated-text-file) for such files;
3. store them at the location as designated in the [SAF](docs/specs/files/saf);
4. generate/update any artifact that the [community](terms-community@) wants to automatically maintain, which in particular includes the [MRG](@) and associated [HRG](@).

This document provides an overview of the knowledge that [curators](@) may need to perform this task, which can be broken up in the following parts:

1. [Setup/installation](/docs/manuals/curator/curator-tev2-installation) of a [scope directory](@) that is suitable for working with TEv2, and the creation of a [SAF](docs/specs/files/saf).

2. [Curation](@) of terminological contributions. This requires knowledge about the [file structure](/docs/specs/files/curated-text-file) of [curated file](@).

3. Generation of documentation (artifacts). It is typical for a [terms community](@) to want to have a [glossary](@) of the terms they either have defined themselves, or are defined elsewhere but are to be used within that [community](@). However, other artifacts may be generated as well (a [dictionary](@), white papers, etc.) - this is all up to the [community](@).
