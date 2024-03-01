---
# Docusaurus header
id: header
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: header
termType: concept
isa:
bodyFile: /specs/files/10-curated-text-file.md
glossaryTerm: "Header (of a Curated Text)"
glossaryText: "the part of a [curated text](@), which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."
glossaryNotes:
- "Headers live in [curated text files](@)."
grouptags: [ ]
formPhrases: [ "header{ss}" ]
# Curation status
status: proposed
created: 20230723
updated: 20230723
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Header

The **Header (of a [Curated Text](@))** is the part at the beginning of that [curated text](@), that starts with a line that (only) contains the text `---`, and that ends with a second occurrence of such a line. The [header](@) is a set of key-value pairs (interleaved with comments) that contain meta data about the [curated text](@) and/or data that could also have been part of the [body](@), but is so small that it doesn't warrant to have a dedicated section for it.

## Notes

- The header is crucial for categorizing and managing curated texts, enabling efficient retrieval and navigation of relevant information.
- The information within the header ensures consistency and accuracy in the curation process.
