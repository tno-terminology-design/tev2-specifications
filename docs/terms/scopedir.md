---
# Docusaurus header
id: scopedir
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: scopedir
termType: concept
isa:
glossaryTerm:
glossaryText: "a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@)."
grouptags: [ ]
formPhrases: [ "scopedir{ss}", "scope-director{yies}" ]
# Curation status
status: proposed
created: 20220729
updated: 20220729
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Scope Directory

### Summary
A **scope directory** is a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@).

Specifically, every [scope directory](@) contains at least:

- a [Scope Administration File](saf@) or [SAF](@), that specifies details about the [scope](@) itself, identifies other [scopes](@) that it will be using, and the various [terminologies](@) that are maintained within the [scope](@);
- a so-called [curatedir](@), i.e. some subdirectory within the [scopedir](@) where all [curated texts](@) live;
- a so-called [glossarydir](@), i.e. some subdirectory within the [scopedir](@) where all ([machine-readable](mrg@) and [human readable](hrg@)) [glossaries](@) live.

Typically, a [scopedir](@) might also contain other files, e.g. for generating e.g. a statical website, whitepapers, and other kinds of documentation.

From the perspective of a group of people that want to do something together, and that have agreed to put their files in one place, e.g. a github or gitlab repository, it may be convenient to add documentation for their [terminologies](@) in (a subdirectory of) that directory, and organize it as a [scopedir](@), by adding a [SAF](@), a [curatedir](@) and a [glossarydir](@) in it.

### Purpose
The purpose of [scopedirs](@) is to have all artifacts related to a particular [scope](@) in a single location, so that they can be easily used by [tools](@), and there is a basis for sharing terminological work between [scopes](@)

### Criteria
A **scope directory** is a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@).
