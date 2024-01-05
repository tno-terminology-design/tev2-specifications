---
# Docusaurus header
id: converter
# TEv2 Curated Text Header
term: converter
termType: concept
isa:
glossaryTerm: Converter
glossaryText: "a specification, in the form of a [handlebars expression](@), for constructing a text that a particular [text conversion tool](@) uses to create its output."
synonymOf:
grouptags: 
formPhrases: [ "converter{ss}" ]
# Curation status
status: proposed
created: 2023-07-31
updated: 2024-01-08
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Converter

A **converter** is a specification, in the form of a [handlebars expression](@), for constructing a text that a particular [text conversion tool](@) uses to create its output.

The [specifications](/docs/category/toolbox-specs) of the particular [tool](text-conversion-tool@) tell you which [converters](@) are predefined for that [tool](text-conversion-tool@), and what the [converter profile](@) is that a customized [converter](@) may use.

:::info Editor's note
We could perhaps add references to appropriate sections of relevant tools, so that readers can see examples of this.
:::

The generic workings of converters is documented in the [TEv2 Text Conversion pattern](/docs/overview/tev2-text-conversion).
