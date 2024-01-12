# Docusaurus header
id: term-ref
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: term-ref
termType: concept
isa:
glossaryTerm: TermRef
glossaryText: "a word or phrase that is [marked up (in a specific way)](/docs/specs/syntax/term-ref-syntax) so that it refers to a particular [concept](@) (or other [semantic unit](@)), enabling it to be rendered in a variety of ways for the purpose of helping [readers](@) to (better) understand the intention of its [author](@)."
synonymOf:
grouptags:
formPhrases: [ "term-ref{ss}", "termref{ss}", "term-reference{ss}" ]
# Curation status
status: proposed
created: 20220606
updated: 20220804
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Term Ref

A **Term Ref** is a word or phrase that is [marked up (in a specific way)](/docs/specs/syntax/term-ref-syntax) so that it refers to a particular [concept](@) (or other [semantic unit](@)), enabling it to be rendered in a variety of ways for the purpose of helping [readers](@) to (better) understand the intention of its [author](@).

A [TermRef](@) consists of two parts. The first part is the word or phrase that is marked up (the so-called `show text`). The second part is the actual reference that specifies the [concept](@) (or other [semantic unit](@)) to which the [TermRef](@) refers. This second part is called a [term identifier](@).

[Authors](@) need to know the [TermRef syntax](/docs/specs/syntax/term-ref-syntax) that they are expected to use.

[Curators](@), which are expected to control the ways in which authored texts are further processed (into rendered texts), will need to know the options provided by the [TRRT tool](trrt@) in order to ensure that the [TermRefs](@) that are used in in authored text are rendered in the way(s) that are envisaged.

## Purpose

[TermRefs](@) make it easy for [authors](@) to associate some word(s) or phrase(s) with a specific [semantic unit](@), c.q. the [curated text](@) that (authoritatively) documents it. Also, [TermRefs](@) enable authored texts to be rendered in various ways, each of which is capable of converting such [TermRefs](@) into effects that help [readers](@) to (better) understand what the [author(s)](@) of the text intended when using a [term](@) or phrase.

## Example Characteristic {#example}

[TermRefs](@) can be used to refer to particular characteristics associated with the [semantic unit](@) to which they refer. This section exists as an illustration that it can be referenced by the [TermRef](@) [Example characteristic of TermRefs](term-ref#example)