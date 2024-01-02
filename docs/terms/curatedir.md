---
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
created: 2022-07-29
updated: 2022-07-29
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Curatedir

A **Curatedir** is a directory within a [scopedir](@) within which every file contains a [curated text](@) for that [scope](@).

The [curatedir](@) may contain subdirectories to organize the various kinds of [curated texts](@).

The location of the [curatedir](@) of a [scope](@) is specified in the `curatedir` field of the [scope section](/docs/spec-files/saf#scope-section) of the [SAF](@) of that [scope](@) (which is located in the root of the [scopedir](@)).

Note that files that are not in the [curatedir](@) may nevertheless be [curated](@), e.g., because they contain [body files](@) to which [headers](@) of a [curated text](@) refer.
