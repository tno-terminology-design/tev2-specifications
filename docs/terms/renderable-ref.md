---
# TEv2 Curated Text Header
term: renderable-ref
termType: concept
isa:
glossaryTerm: Renderable Ref
glossaryText: "a text with which the [TRRT](@) replaces a [TermRef](@), that can be processed by specific third party rendering tools, the result of which is a rendering of the original [TermRef](@) that has additional characteristics that help [readers](@) to (better) understand the intention of its [author](@)."
synonymOf:
grouptags:
formPhrases: [ "renderable-ref{ss}", "renderableref{ss}", "renderable-reference{ss}" ]
# Curation status
status: proposed
created: 20220606
updated: 20220804
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Renderable Ref

### Summary
A **Renderable Ref(erence)** is a text with which the [TRRT](@) replaces a [TermRef](@), that can be processed by specific third party rendering tools, the result of which is a rendering of the original [TermRef](@) that has additional characteristics that help [readers](@) to (better) understand the intention of its [author](@).

For example, when rendering a [TermRef](@)

- for a static website, the [renderable ref](@) might contain texts that would produce the effect that, when a [reader](@) browses to that website and hovers its mouse over a [renderable ref](@), this will produce a popup that contains its [definition](@).
- for a PDF, the [renderable ref](@) might contain texts that would enable generator tools to produce a [glossary](@) of all [terms](@) that were referenced within the paper, which could then automatically be inserted as an appendix to the PDF.

[Curators](@), which are expected to control the ways in which authored texts are further processed (into rendered texts), will need to know the options provided by the [TRRT tool](trrt@) in order to ensure that the [TermRefs](@) that are used in an authored text are rendered with the kind of [renderable refs](@) that produce the envisaged rendering effects.

### Purpose
[Renderable refs](@) enable authored texts to be rendered in various ways, depending on the kind of target towards which is rendered.