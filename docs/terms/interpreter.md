---
# Docusaurus header
id: interpreter
# TEv2 Curated Text Header
term: interpreter
termType: concept
isa:
glossaryTerm: Interpreter
glossaryText: "a [regex](@) that is used to locate a particular text construct (such as a [TermRef](@) or [MRGRef](@)) in a text, and that populates [named capturing groups](@) as specified in the [interpreter profile](@) of the particular [text conversion tool](@) for which it is designed."
grouptags:
formPhrases: [ "interpreter{ss}" ]
# Curation status
status: proposed
created: 20230731
updated: 20240108
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Interpreter

An **interpreter** is a [regex](@) that is used to locate a particular text construct (such as a [TermRef](@) or [MRGRef](@)) in a text, and that populates [named capturing groups](@) as specified in the [interpreter profile](@) of the particular [text conversion tool](@) for which it is designed.

The [specifications](/docs/category/toolbox-specs) of the particular [tool](text-conversion-tool@) tell you which [interpreters](@) are predefined for that [tool](text-conversion-tool@), and what the [interpreter profile](@) is that a customized [interpreter](@) may use.

:::info Editor's note
We could perhaps add references to appropriate sections of relevant tools, so that readers can see examples of this.
:::

The generic workings of interpreters is documented in the [TEv2 Text Conversion pattern](/docs/overview/tev2-text-conversion).