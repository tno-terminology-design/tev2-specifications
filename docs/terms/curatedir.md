# Docusaurus header
id: curatedir
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: curatedir
termType: concept
isa:
glossaryTerm: Curatedir
glossaryText: "a directory within a [scopedir](@) within which every file contains a [curated text](@) for that [scope](@)."
synonymOf:
grouptags:
formPhrases: [ "curatedir{ss}", "curate-director{yies}" ]
# Curation status
status: proposed
created: 20220729
updated: 20220729
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Curatedir

A **Curatedir** is a directory within a [scopedir](@) within which every file contains a [curated text](@) for that [scope](@).

The [curatedir](@) may contain subdirectories to organize the various kinds of [curated texts](@).

The location of the [curatedir](@) of a [scope](@) is specified in the `curatedir` field of the [scope section](/docs/specs/files/saf#scope-section) of the [SAF](@) of that [scope](@) (which is located in the root of the [scopedir](@)).

Note that files that are not in the [curatedir](@) may nevertheless be [curated](@), e.g., because they contain [body files](@) to which [headers](@) of a [curated text](@) refer.
