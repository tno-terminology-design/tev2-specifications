---
# Docusaurus header
id: tev2-text-conversion-tool
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: tev2-text-conversion-tool
termType: concept
isa: tev2-tool
glossaryTerm: TEv2 Text Conversion Tool
glossaryText: "a [TEv2 tool](@) whose purpose is to convert particular text constructs (such as [TermRefs](@) or [MRGRefs](@)) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."
synonymOf: 
grouptags: 
formPhrases: [ "tev2-text-conversion-tool{ss}", "text-conversion-tool{ss}", "conversion-tool{ss}" ]
# Curation status
status: proposed
created: 20240108
updated: 20240108
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# TEv2 Text Conversion Tools

A **TEv2 Text Conversion Tool** is a [TEv2 tool](@) whose purpose is to convert particular text constructs (such as [TermRefs](@) or [MRGRefs](@)) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources.

Examples of such [tools](tev2-text-conversion-tool@) include the [TRRT](@) and the [HRGT](@).

All [text conversion tools](@) follow the same [pattern for converting texts](/docs/overview/tev2-text-conversion). This implies that each of them

- has a specific [interpreter profile](@) and a specific [converter profile](@) and
- can be configured using a predefined or custom [interpreter](@) and [converter](@) that match these profiles respectively.