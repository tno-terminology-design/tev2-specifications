---
# Docusaurus header
id: term-type
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: term-type
termType: concept
isa: identifier
glossaryTerm: Term Type
glossaryText: "a [(regularized) text](regularized-text@) that identifies a particular *kind* of [semantic unit](@) within a particular [scope](@). Examples include `concept`, `relation`, `pattern` (or `mental-model`)."
grouptags: [ ]
formPhrases: [ "term-type{ss}", "termtype{ss}" ]
# Curation status
status: proposed
created: 20220606
updated: 20230801
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Term Type

A **Term Type** is an identifier that is used to identify a particular *kind* of [semantic unit](@). Examples include `concept`, `relation`, `pattern` (or `mental-model`).

The ability to specify a [term type](@) as part of a [term](@) mimics the common practice of disambiguating semantically overloaded [terms](@). With in the context of [TEv2](@), this is currently not used.

## Default Term Type

Every [semantic unit](@) that is described in a [curated text](@) may be classified as a particular kind, by specifying the class in the `termType`-field of its [header](@).

Whenever the `termType`-field is left empty, or is omitted, and the [curated text](@) is used for generating an [MRG entry](@), this [MRG entry](@) will include a `termType` field that has the default value for that scope. 

The default value is specified in the `defaulttype`-field in the [scope section](/docs/specs/files/saf#scope-section) of the [SAF](@). 

## Recommended Term Types

Every [scope](@) is free to choose its own term type values. However, in order to ensure interoperability as much as possible, we recommend to use any of the ones as defined below:

| name       | this is a [semantic unit](@) that captures |
| ---------- | ----------- |
| `concept`  | an idea/thought behind a classification of [entities](@) (what makes [entities](@) in that class 'the same') (see: [concept](@)). |
| `relation` | a (significant) connection or association between two or more [concepts](@) (see: [relation](@)). |
| `property` | a connection or association between a [concept](@) and a primitive data element, such as a text or a number, that represents some characteristic that instances of the [concept](@) may have (see: [property](@)). |
| `pattern`  | a (coherent) set [concepts](@) (ideas), [properties](@), [relations](@) between [concepts](@), and constraints, which together apply to a certain topic (see: [pattern](@)). |
