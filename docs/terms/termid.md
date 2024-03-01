---
# Docusaurus header
id: termid
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: termid
termType: concept
isa: identifier
glossaryTerm:
glossaryText: "a text of the form `<termType>:<term>` that serves as an unambiguous identifier for a specific [semantic unit](@) in some given [scope](@)."
grouptags: [ ]
formPhrases: [ "termid{ss}", "term-id{ss}" ]
# Curation status
status: proposed
created: 20220606
updated: 20220809
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Term-ID

A **Term-ID** is a text of the form `<termType>:<term>` that serves as an unambiguous identifier for a specific [semantic unit](@) in some given [scope](@), where `<termType>` represents a [term type](@), and `<term>` is a [term](@).

The reason for having term-ids is that a [term](@) may be ambiguous within (a [terminology](@)) of some [scope](@). For example, terms such as `jurisdiction`, `identifier`, etc. could refer to a [concept](@), but equally well to a [mental model](@), or a [relation](@) that links some [concepts](@).

Every [MRG entry](@) in an [MRG](@) has a field `termid` that contains the [term-ID](@) of the [semantic unit](@) that the [MRG entry](@) is about. Its value is constructed by the [MRGT](@) - see