---
# Docusaurus header
id: synonym
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: synonym
termType: concept
isa: term
glossaryTerm: Synonym (of a [term](@))
glossaryText: "a [term](@) that has the same (or sufficiently similar) meaning as another [term](@) (i.e., the [term](@) of which it is a [synonym](@)."
grouptags: [ ]
formPhrases: [ "synonym{ss}" ]
# Curation status
status: proposed
created: 20221127
updated: 20221127
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Synonym

## Summary
A **synonym** is a [term](@) that has the same (or sufficiently similar) meaning as another [term](@) (i.e., the [term](@) of which it is a [synonym](@).

While from a theoretical point of view a [term](@) and its [synonyms](@) are identical, in practice they are more 'equivalent', i.e. while they have the same meaning, when using one or the other in a sentence, there is often one term that is preferred over the other.

## The `synonymOf` field {#synonym-of}

[Curated texts](@) have an (optional) `synonymOf`-field in their [headers](@). The contents of that field must be the [term identifier](@) that can be dereferenced from the current [scope](@) to the [semantic unit](@) (or associated [MRG entry](@)) for which the [term](@) that is being documented is a synonym.

## How Synonyms Work

Consider a `synonym`, i.e., a [curated text](@) that has a `synonymOf` field that contains a dereferenceable [term identifier](@). Let's say that the `original` is what the `synonym` is a synonym of. Here's how we construct an [MRG entry](@) for the `synonym` (assuming that the [MRG entry](@) of the original exists:

1. Creating a copy of the [MRG entry](@) of the `original`.
2. Copy all fields in the [header](@) of the `synonym` into that copy, overwriting fields that already exist.
3. Add all required [MRG entry](@) fields as usual, possibly (again) overwriting fields that already exist.

This way of working allows [curators](@) to tailor specific fields, such as the [glossary texts](@) field, or the [form phrases](@) fields for the `synonym`.

## Purpose
Within the context of [TEv2](@), the ability to [define](@) [synonyms](@) for a [term](@) is needed so that [HRGs](@) can be made better readable without taking away control over the structure of an [HRG](@) entry.
