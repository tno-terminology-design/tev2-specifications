---
# Docusaurus header
id: term-selection-instruction
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: term-selection-instruction
termType: concept
isa:
glossaryTerm: Term Selection Instruction
glossaryText: "an instruction that is used to select one or more [terms](scoped-term@) for the purpose of processing their documentation, e.g., to create an [MRG](@)."
grouptags: [ "glossary-entries", "terminology-management" ]
formPhrases: [ "term-selection-instruction{ss}", "selection-instruction{ss}" ]
# Curation status
status: proposed
created: 20230731
updated: 20230731
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Term Selection Instruction

A **Term Selection Instruction** is an instruction that is used to select one or more [terms](scoped-term@) for the purpose of processing their documentation, e.g., to create an [MRG](@).

[Curators](@) must have the ability to [construct terminologies](/docs/manuals/curator/terminology-construction). They do so by specifying the contents of a [terminology](@) as a sequence of [term selection instructions](@), which they maintain in the [SAF](@). [Term selection instructions](@) have a [well defined syntax](/docs/specs/syntax/term-selection).

The [MRGT](@) interprets the [term selection instructions](@) in the sequence in which they are specified, and doing this changes the [provisional MRG](@) that it is creating; [provisional MRG Entries](@) may be [created (added)](/docs/specs/syntax/term-selection#add-terms) or [removed](/docs/specs/syntax/term-selection#add-terms). There are also instructions for [modifying](/docs/specs/syntax/term-selection#add-terms) [provisional MRG Entries](@).

## Examples

1. There are [examples for adding terms ](/docs/specs/syntax/term-selection#add-terms) to a [provisional MRG](@).
2. There are also [examples for removing terms](/docs/specs/syntax/term-selection#remove-terms) from a [provisional MRG](@). 

## Notes

- Term selection instructions are essential for ensuring that the terminological assets in a scope are relevant, accurate, and comprehensive.
- Curators use term selection instructions to tailor the terminology to the specific needs and [objectives](@essif-lab) of the community or project.
