---
# Docusaurus header
id: curated-text
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: curated-text
termType: concept
isa:
glossaryTerm: Curated Text
glossaryText: a text that documents a [concept](@) or other [semantic unit](@) of a particular [party](@), and specifies, e.g., the [term(s)](@) by which the [party](@) refers thereto, its [definition](@), and any other relevant information.
grouptags:
formPhrases: [ "curated-text{ss}", "ctext{ss}" ]
# Curation status
status: proposed
created: 20220602
updated: 20220804
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Curated Text

A **[curated text](@)** is a text that documents a [concept](@) or other [semantic unit](@) of a particular [party](@), and specifies, e.g., the [term(s)](@) by which the [party](@) refers thereto, its [definition](@), and any other relevant information.

A [curated text](@) consists of two parts: 

- a [header](@), which is a set of key-value pairs that are designed to facilitate automated processing;
- a [body](@), that contains texts that are designed for human interpretation.

[Curated texts](@) live in [curated files](@), that may have been generated, e.g. from [ingress tools](docs/overview/tev2-architecture#ingress-tools), or may have been constructed manually (using a text editor).

[Curated texts](@) are used for a variety of purposes, as they (may) contain texts that:

- are included in [MRGs](@) (one [MRG entries](@) for each [curated text](@));
- are included in [HRGs](@), and (in future), [dictionaries](@);
- help [readers](@) get a more in-depth understanding of the [semantic unit](@) that is being documented
- help [readers](@) to find out other, related [concepts](@) or other [semantic units](@) related to that which is being described,
etc.

The (technical) structure and syntax for files that contain [curated texts](@) is specified [here](/docs/specs/files/curated-text-file).

The manuals for [contributors](/docs/manuals/contributor/contributor-overview), [authors](/docs/manuals/author/author-overview) and [curators](/docs/manuals/curator/curator-overview) will provide guidance for people that act in these respective roles as they work with [curated texts](@).

:::info Editor's Note
Text needs to be revised from here onward. Here are some ideas to mention:

- contributors can suggest contents as per the curators instructions;
- [authors](@) can write the [body](@) of [curated texts](@);
- curators update the header of [curated texts](@) (conforming to the [ctext specifications](/docs/specs/files/curated-text-file);
- curators specify the process by which [curated texts](@) progress/mature, and get statuses assigned;
- curators generate artifacts from 'decided on' [curated texts](@), so that
  - rendering tools or generation tools used in other scopes can generate artifacts and
  - people can subsequently access nicely rendered, human readable versions
:::

The [terminology pattern](pattern:terminology@) provides an overview of how this concept fits in with related concepts.

## Purpose

[Curated texts](@) are intended to be processable by a variety of tools, that are chosen by the [curators](@). Together, these tools not only enable the [curation](@) of the [scope's](@) [terminology](@), but also the generation of [glossaries](@), and a better handling of [terms](@) in documentation, whitepapers and the like.

The precise conditions that [headers](@) and [bodies](@) of [curated texts](@) must satisfy will differ across [scopes](@) as [curators](@) are autonomous in choosing their tools and ways of working. To support other participants of their [terms community](@) in making contributions, they will define an [ingestion process](@) for the [scope(s)](@) they [curate](@), enabling such participants to contribute in ways that are easy for them.

## Notes

The intention of [curated texts](@) is to document a [semantic unit](@), which is something that has a place in the way of thinking within a [scope](@). Ways of working (e.g. installation procedures), reports on research to be published in papers, etc., are NOT thought of as part of the [scope's](@) [terminology](@), and hence should not be documented as a [curated text](@). Having said that, this is not a closed discussion; we can think of arguments to the opposite, so who knows...