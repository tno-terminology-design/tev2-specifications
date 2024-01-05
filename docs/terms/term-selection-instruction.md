---
# Docusaurus header
id: term-selection-instruction
# TEv2 Curated Text Header
term: term-selection-instruction
termType: concept
isa:
glossaryTerm: Term Selection Instruction
glossaryText: "an instruction that is used to select one or more [terms](scoped-term@) for the purpose of processing their documentation, e.g., to create an [MRG](@)."
synonymOf:
grouptags: [ glossary-entries, terminology-management ]
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

A **Term Selection Instruction** is an instruction that is used to select one or more [terms](scoped-term@) for the purpose of processing their documentation, e.g., to create an [MRG](@). Term selection instructions have a [well defined syntax](/docs/spec-syntax/mrg-term-selection-syntax).

Term selection instructions enable [curators](@) to construct a [terminology](@), by

- selecting [terms](@) [that are to be added](/docs/spec-syntax/mrg-term-selection-syntax#syntax-add) to the [terminology under construction](@). These [terms](@) can be specified by [curated texts](@) from the [scope](@) itself, or specified within [MRGs](@) that are curated in) other [scopes](@).
- selecting [terms](@) [that need to be removed](/docs/spec-syntax/mrg-term-selection-syntax#syntax-remove) from the [terminology under construction](@).
- selecting [terms](@) [that need to be renamed (or have attributes modified)](/docs/spec-syntax/mrg-term-selection-syntax#syntax-rename) in the [terminology under construction](@).

These instructions are essential for determining which terms should be included in an [MRG](@) (and [HRGs](@)) that are maintained within the [scope](@).

Term selection instructions serve as guidelines for curators and stakeholders to identify and select relevant terms based on predefined rules or filters.

## Examples

1. There are [examples for adding terms ](/docs/spec-tools/mrg-terminology-construction#syntax-add) to a [terminology under construction](@).
2. There are also [examples for removing terms](/docs/spec-tools/mrg-terminology-construction#syntax-remove) from a [terminology under construction](@). 

## Notes

- Term selection instructions are essential for ensuring that the terminological assets in a scope are relevant, accurate, and comprehensive.
- Curators use term selection instructions to tailor the terminology to the specific needs and [objectives](@) of the community or project.
