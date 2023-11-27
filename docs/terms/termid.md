---
# TEv2 Curated Text Header
term: termid
termType: concept
isa: identifier
glossaryTerm:
glossaryText: "a text of the form `<termtype>:<term>` that serves as an unambiguous [identifier](@) for a specific [semantic unit](@) in some given [scope](@)."
synonymOf:
grouptags:
formPhrases: termid{ss}, term-id{ss}
# Curation status
status: proposed
created: 2022-06-06
updated: 2022-08-09
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Term-ID

A **Term-ID** is a text of the form `<termtype>:<term>` that serves as an unambiguous [identifier](@) for a specific [semantic unit](@) in some given [scope](@), where `<termtype>` represents a [term type](@), and `<term>` is a [term](@).

The reason for having term-ids is that a [term](@) may be ambiguous within (a [terminology](@)) of some [scope](@). For example, terms such as `jurisdiction`, `identifier`, etc. could refer to a [concept](@), but equally well to a [mental model](@), or a [relation](@) that links some [concepts](@).

Every [MRG entry](@) in an [MRG](@) has a field `termid` that contains the [term-ID](@) of the [semantic unit](@) that the [MRG entry](@) is about. Its value is constructed by the [MRGT](@) - see