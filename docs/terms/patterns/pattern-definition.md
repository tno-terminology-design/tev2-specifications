---
# Docusaurus header
id: definition
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: definition
termType: pattern
glossaryTerm: "Definition Pattern"
glossaryText: "a [mental model](@) that describes the relations between a [concept](@) (or any other [semantic unit](@)), the [term(s)](@) that are used to refer to it, and the [criteria](@) to use for determining whether or not something is an instance (example) of that [semantic unit](@)."
grouptags: [ ]
formPhrases: [ "definition{ss}-pattern{ss}" ]
# Curation status
status: proposed
created: 20240316
updated: 20240316
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Definition Pattern

import useBaseUrl from '@docusaurus/useBaseUrl'

This [mental model](@) describes the relations between a [concept](@) (or any other [semantic unit](@)), the [term(s)](@) that are used to refer to it, and the [criteria](@) to use for determining whether or not something is an instance (example) of that [semantic unit](@).

## Purpose

The purpose of this [mental model](@) is to provide a solid basis for 

- mechanisms that enable people to understand others;
- authoring texts that use [terms](@) whose [definitions](@) have a high likelihood of being understandable by the intended audience of the text;
- developing [terminologies](@) that can be used within a group of people.

## Introduction

Cognitive science has it that people have their individual ideas, concepts, etc. for making sense of the world around them. These things, that are called "[semantic units](@)" in cognitive science, are intangible. They are part of one's mind, and cannot readily be communicated to others.

People have created representations of such [semantic units](@) that are tangible, and therefor can be used in communications. [Words](https://en.wikipedia.org/wiki/Word) or [phrases](https://en.wikipedia.org/wiki/Phrase) are one example, but people also came to use [symbols](https://en.wikipedia.org/wiki/Symbol), [signs](https://en.wikipedia.org/wiki/Sign_(semiotics)), sounds etc.

The problem here is that there typically is no guarantee that people use such representations to refer to the same [semantic units](@). The result is that words or phrases may be [ambiguous](https://en.wikipedia.org/wiki/Ambiguity), or [conflated](https://en.wikipedia.org/wiki/Conflation).

Fortunately, all of us have learned 'the meaning' of a large number of words and phrases, that is: what they mean in the social, cultural, national context in which we have grown up. They are the basic words of our [mother tongue](https://en.wikipedia.org/wiki/First_language). The context in which we grew up ensured that the people therein understand these basic words in the same way, that is: for all practical purposes.

This is the basis on top of which we can introduce new terms, and describe [concepts](semantic-units@) that are new, or that are particular specializations of other [concepts](semantic-units@). Such descriptions should enable others that are to understand these [concepts](semantic-units@). Ideally, they are [criteria](@) that enable others to determine what is, and what is not, an instance (or: example) of the [concept](semantic-unit@). 

Such [criteria](@) can be tested for validity:

1. Devise an arbitrary use-cases in which people can  apply the [criteria](@) to something.
2. Have all participants determine whether or not this something complies with the [criteria](@).
3. If there are participants that have a different judgment, they have a different understanding. To fix this may require adjustment of the [criteria](@)
4. The more use-cases are devised in which people have the same judgments, the greater the likelihood that they have the same understanding of the [concept](semantic-unit@) that is being described.

## Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](/docs/miscellaneous/notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'definition' pattern"
  src={useBaseUrl('images/tev2-definition.png')}
/>

The figure shows [semantic units](@), using a cloud-like symbol to illustrate that this is something intangible. It also shows that the [semantic unit](@) is part of a [scope](@), which typically contains several (i.e., a lot) of them.

Within the context of its [scope](@), every [semantic unit](@):

- can have at most one determinant, i.e., a [criterion](@) (a description) that can be used to determine whether or not something is an instance (or: example) of that [semantic-unit](@).
- can be represented by any number of [words or phrases (terms)](term@), which are synonyms (or aliases) of each other.
- can have at most one [definition](@), which is the composition of all [terms](scoped-term@) that are used to refer to the [semantic unit](@), and the (single) [criterion](@) that is its determinant.

Thus, a [definition](@) only exists for a [semantic unit](@) in a [scope](@) if the determinant exists, and there is at least one [term](@) that is used within that [scope](@) to refer to it.