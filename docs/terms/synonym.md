---
# Docusaurus header
id: synonym
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: synonym
termType: concept
isa: term
glossaryTerm: Synonym (of a term)
glossaryText: "a [term](@) that has the same (or sufficiently similar) meaning as another [term](@) (i.e., the [term](@) of which it is a [synonym](@)."
grouptags: [ ]
formPhrases: [ "synonym{ss}, synonym (of a term)" ]
# Origins/Acknowledgements
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Synonym

## Summary
A **synonym** is a [term](@) that has the same (or sufficiently similar) meaning as another [term](@) (i.e., the [term](@) of which it is a [synonym](@)).

While from a theoretical point of view a [term](@) and its [synonyms](@) are identical, in practice they are more 'equivalent', i.e. while they have the same meaning, when using one or the other in a sentence, there is often one term that is preferred over the other.

## Purpose
Within the context of [TEv2](@), the ability to [define](@) [synonyms](@) for a [term](@) is needed so that [HRGs](@) can be made better readable without taking away control over the structure of an [HRG](@) entry.

## The `synonymOf` field {#synonym-of}

[Curated texts](@) can specify that they are a synonym of some other term by placing a reference to that other term in the `synonymOf`-field in their [headers](@). The contents of this field can be

- a [form phrase](@), such as `Machine Readable Glossary`, or
- a [term identifier](@), such as `risk management@essif-lab:latest`. 

### How Synonyms Work in TEv2 {#synonym-processing}

[Ccurated texts](@), or [MRG-entries](@) from external [MRGs](@) can be added as [provisional MRG-entries](@) to a [provisional MRG](@). Those that contain a non-empty `synonymOf` field will be further processed when the [provisional MRG](@) is complete (because only then can we be sure that the [term](@) that is being referred to by the contents of the `synonymOf` field actually exists).

This processing consists of creating a new [MRG entry](@) whose contents is identical with that of the [term](@) being referred to, and overwriting any fields therein with the contents of the [MRG entry](@) that contains the (non-empty) `synonym` field. After that, the usual post-processing happens.

A more detailed description is given in the [MRGT documentation](mrgt#synonym-processing@).

This way of working allows [curators](@) to tailor specific fields, such as the [glossary texts](@) field, or the [form phrases](@) fields for the `synonym`.

:::warning Synonyms are not Aliases

An 'Alias' (of a [Term](@)) is another name for that [term](@). It resembles a synonym, but it could equally well be an abbreviation, or a nickname.

One might like to be able to specify one or more aliases for a [term](@) (in the [header](@) of its [curated text](@)), such that it would then 'automagically' appear in a [HRG](@). 

This is currently not supported. Of course, one may create a [HRG](@) using two [converters](@), the first adding [HRG entries](@) for the term itself, and another one that loops over the contents of an `alias` field, adding a [HRG entry](@) for every name it encounters there. However, the HRGT supports only one sorter, which is typically `glossaryTerm` (or whatever the name of the field is that contains the name of the [term](@) in a human readable form). This means that the glossary wouldn't be properly sorted, as the `alias` would sit adjacent to the [term](@) that it is an alias for.
:::
