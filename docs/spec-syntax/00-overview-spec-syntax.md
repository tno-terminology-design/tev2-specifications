---
id: overview-spec-syntax
sidebar_label: Overview
date: 20220819
---

# Overview - TEv2 Syntax

import useBaseUrl from '@docusaurus/useBaseUrl'

[TEv2](@) uses specific syntaxes:

- the **[TermReference Syntax](/docs/spec-syntax/term-ref-syntax)** is the syntax that enables [authors](@) to mark [terms](@) that they use such that [readers](@) will be informed about their specific meaning while reading, and can learn more about such [terms](@) by clicking on them. You can see how that works in this sentence, by hovering over this [term](@), and clicking on it if you want to know more about it;
- the **[Term Identifier Syntax](/docs/spec-syntax/term-identifier-syntax)** enables [authors](@) to refer to a particular [term](@) in a specific version of a [terminology](@). This syntax is also used in the [TermReference Syntax](/docs/spec-syntax/term-ref-syntax).
- the **[Terminology Identifier Syntax](/docs/spec-syntax/terminology-identifier-syntax)** enables [authors](@) to refer to a specific version of a [terminology](@), as documented by an [MRG](@). This syntax can be used, e.g., as part of the [Term Identifier Syntax](/docs/spec-syntax/term-identifier-syntax).
- the **[Form Phrases Syntax](/docs/spec-syntax/form-phrase-syntax)** is the syntax that [authors](@) need to specify [form phrases](@) (in the `formPhrases` field of [curated texts](@) - see the [curated text file specs](/docs/spec-files/ctext-file));
- the **[MRG Term Selection Syntax](/docs/spec-tools/mrg-terminology-construction)** is used by [curators](@) to define the contents of (a particular version) of a [terminology](@) that they [curate](@). This syntax appears in the [`versions` section](/docs/spec-files/saf#versions) of a [SAF](@).
