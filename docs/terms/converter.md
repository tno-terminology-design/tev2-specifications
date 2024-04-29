---
# Docusaurus header
id: converter
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: converter
termType: concept
isa:
glossaryTerm: Converter
glossaryText: "a specification, in the form of a [handlebars template](@), for constructing a text that a particular [text conversion tool](@) uses to create its output."
glossaryNotes:
- A [TRRT](@) converter constructs a text that replaces a [TermRef](@). That text, when rendered in a static website, would typically link to the page that documents the term. Also, it may provide a popup that shows its definition.
- A [HRGT](@) converter constructs a text that replaces an [MRGRef](@). That text typically renders as a [human readable glossary](@).
grouptags: [ ]
formPhrases: [ "converter{ss}" ]
# Origins/Acknowledgements
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Converter

A **converter** is a specification, in the form of a [handlebars template](@), for constructing a text that a particular [text conversion tool](@) uses to create its output.

The [specifications](toolbox@) of the particular [tool](text-conversion-tool@) tell you which [converters](@) are predefined for that [tool](text-conversion-tool@), and what the [converter profile](@) is that a customized [converter](@) may use.

:::info Editor's note
We could perhaps add references to appropriate sections of relevant tools, so that readers can see examples of this.
:::

The generic workings of converters is documented in the [TEv2 Text Conversion pattern](/docs/overview/tev2-text-conversion).
