---
# TEv2 Curated Text Header
term: mrg-entry
termType: concept
isa:
glossaryTerm: MRG Entry
glossaryText: "A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  [semantic unit](@), such as the associated [term(s)](@), its [definition](@), etc., to make it easy for IT-tools to create, e.g. documentation, [glossaries](@), [dictionaries](@), whitepapers, etc. that uses such [terms](@) ([definitions](@), etc.)."
synonymOf:
grouptags:
formPhrases: [ "mrg-entr{yies}" ]
# Curation status
status: proposed
created: 20220811
updated: 20220811
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# MRG Entry

An **MRG Entry** is a machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  [semantic unit](@), such as the associated [term(s)](@), its [definition](@), etc., to make it easy for IT-tools to create, e.g. documentation, [glossaries](@), [dictionaries](@), whitepapers, etc. that uses such [terms](@) ([definitions](@), etc.).

A [terminology](@) can be seen as the collection of [MRG entries](@) that hold all data related to the [terms](scoped-term@) that the [terminology](@) consists of.

The contents of an [MRG entry](@) may vary, depending on the type of [semantic unit](@) that it documents. The kinds of data that are common for all [semantic units](@) are documented [here](http://localhost:3000/docs/40-specs/files/mrg#entries).

The [terminology pattern](pattern:terminology@) provides an overview of how this concept fits in with related concepts.

The [terminology construction section](/docs/40-specs/syntax/terminology-construction) describes how [MRG entries](@) are selected (and manipulated) for the construction of a particular [terminology](@).

### Purpose

[MRG entries](@) provide all (meta) data about a particular [semantic unit](@) that IT-tools might need for their own purposes.

As an example, consider a [terms-community](@) that would like to have an overview of all [terms](@) that it uses in a human readable way, and decides it needs a ([human readable](hrg@)) [glossary](@) of these [terms](@). Thus, they need a [tool](hrgt@) that knows how to find all these [terms](@) and their [definitions](@), and (after sorting them) render them into some human readable form. This [tool](hrgt@) would look for the [MRG](@) for that [terminology](@), which contains the [MRG entries](@) that contain all data that  the [tool](hrgt@) needs.

As the number of tools that need (meta) data about [terms](@) grows, [MRG entries](@) will be expected to cater for such needs.
