---
# Docusaurus header
id: regularized-form-phrase
# TEv2 Curated Text Header
term: regularized-form-phrase
termType: concept
isa:
glossaryTerm: Regularized Form Phrase
glossaryText: "a [regularized text](@) that is derived from, and represents a [form phrase](@). They typically appear in the `formPhrases` field of an [MRG entry](@)."
formPhrases: [ "regularized-formphrase{ss}", "regularized-form-phrase{ss}" ]
# Curation status
status: proposed
created: 20230731
updated: 20230731
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Regularized Form Phrase

A **Regularized Form Phrase** is a [regularized text](@) that is derived from, and represents a [form phrase](@). They typically appear in the `formPhrases` field of an [MRG entry](@).

## Purpose

The purpose of having [regularized form phrases](@) is that they

1. facilitate machine lookups of [MRG entries](@) in an [MRG](@), and
2. can be used as part of a [markdown link](https://www.markdownguide.org/basic-syntax/#links), particularly as a part of a [term identifier](@) that is used in [term refs](@).

## Need for Regularizing Form Phrases

There are two situation in which a [form phrase](@) needs to be converted into a [regularized text](@) (i.e., a [regularized form phrase](@)):

1. When constructing an [MRG entry](@) from a [curated text](@). In this case, the [form phrases](@) thjat are the elements of the `formPhrases` field of the [header](@) of a [curated text](@) must be converted into [regularized form phrases](@) that before putting them into the `formPhrases` field of the corresponding [MRG entry](@). Details are given in [Constructing a Provisional MRG](/docs/specs/tools/mrgt#constructing-provisional-mrg).
2. When resolving a [term ref](@). In this case, the [named capturing group](@) `term` or `showtext` of the [term ref](@) are expected to be [form phrases](@) that need to be converted into [regularized form phrases](@) so that they can be used as search key to find the [MRG entry](@) to which the [term ref](@) refers.

## Regularizing Form Phrases {#regularization-process}

The process of regularizing [form phrases](@) is capable of handling both [form phrases](@), and texts that contain [form phrase macros](@) (that can be considered 'shorthand' for a set of related [form phrases](@)):

1. any [form phrase macros](@) that are present are processed, thereby expanding the set of [form phrases](@);
2. the resulting texts are [converted](regularized-text#regularization-process@) into a [regularized text](@)

The result is a (expanded) set of [regularized texts](@) that represent the [form phrases](@) as specified in the [curated text](@). The `formPhrases` field in the [MRG entry](@) is then made as an array of these [regularized texts](@).
