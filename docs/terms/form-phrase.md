---
# Docusaurus header
id: form-phrase
# TEv2 Curated Text Header
term: form-phrase
termType: concept
isa:
glossaryTerm: Form Phrase (for a Term)
glossaryText: "a word or phrase that occurs in oral or written texts and that refers to a particular [semantic unit](@), yet is not (necessarily) the  [term](@) that is used in the [definition](@) of that [semantic unit](@). Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."
formPhrases: [ "formphrase{ss}", "form-phrase{ss}" ]
# Curation status
status: proposed
created: 20230731
updated: 20230731
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Form Phrase

A **Form Phrase** is a word or phrase that occurs in oral or written texts and that refers to a particular [semantic unit](@), yet is not (necessarily) the  [term](@) that is used in the [definition](@) of that [semantic unit](@). Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations.

## Purpose

[Form phrases](@) act as (standardized, human readable) [identifiers](@) for [semantic units](@), enabling consistent and unambiguous references across various texts such as manuals, specifications, and guidelines. This is particularly useful (if not vital) in fields where precise terminology is key, ensuring that all stakeholders have a common understanding of the terms used and thereby reducing the potential for misinterpretation or confusion.

## Specifying Form Phrases

[Form phrases](@) are to be specified in (the `formPhrases` field of) the [header](@) of the [curated text](@) that describes the [semantic unit](@) to which it refers. Here is an example:

~~~ yaml
formPhrases: [ "actor", "actors", "actor's", "actor(s)", "human actor", "machine actor" ]
~~~

This specifies that whenever a [TermRef](@) is being converted by the [TRRT](@), and the `showtext` or the `term` parts of that [TermRef](@) are any of these [formPhrases](@), then the [TermRef](@) refers to the [semantic unit](@) that is documented by that [curated text](@). 

Note that the specification of a [form phrase](@) may include a [form-phrase-macro](@), for which several are [predefined](form-phrase macro#predefineds@). The example below is the equivalent specification as above:

~~~ yaml
formPhrases: [ "actor{ss}", "human actor", "machine actor" ]
~~~

The same varieties can easily be added for the human and machine actors, as follows

~~~ yaml
formPhrases: [ "actor{ss}", "human actor{ss}", "machine actor{ss}" ]
~~~

## Form Phrases in [MRGs](@)

When creating an [MRG](@), the [MRGT](@) will normalize the [form phrases](@) it encounters in the [headers](@) of [curated texts](@). This means that it will:

1. convert the specified set of [form phrases](@) to lowercase;
2. expand any [form phrase macros](@) that are present, which typically adds  [form phrases](@) to the specified set;
3. trim any leading/trailing whitespace from the resulting set;
4. create a `formPhrases` field in the [MRG entry](@) that contains the resuling set of [form phrases](@).

:::tip
An [MRG](@) SHOULD NOT have two (or more) [MRG entries](@) that have a same element in their `formPhrases` field, because that would mean that the form phrase is ambiguous, as it refers to two different [semantic units](@).
:::

## Using Form Phrases

Form phrases are used to refer to a particular [semantic unit](@) as known in a particular [terminology]. In other words, they must [identify](@) the [MRG entry](@) that documents this [semantic unit](@).

[Identification](@) of the [MRG entry](@) is straightforward: the form phrase must match 

Form phrases are to be resolved by matching them with the elements of the `formPhrases` fields of [MRG entries](@) of the specified (or default) [terminology](@).

## Guidance for choosing Form Phrases

1. **Character Composition**: A form phrase is composed of a sequence of characters that may include letters, numbers, and spaces. Spaces are permissible if they are a standard part of the term (e.g., "hard drive").

2. **Limited Special Characters**: Generally, a form phrase should not contain special characters like punctuation marks (.,;:!? etc.), except for hyphens, underscores, or other characters if they are an integral part of the term (e.g., "non-refundable", "e-mail").

3. **Case Sensitivity**: While a form phrase may include uppercase or lowercase letters, it is typically treated as case-insensitive during the matching process. This ensures that variations in capitalization do not affect the identification of the term.

4. **Adherence to Language Rules**: A form phrase should conform to the grammatical and morphological rules of the language it's used in, including correct spelling and, where applicable, pluralization or possessive forms.

5. **Uniqueness within Context**: Each form phrase must be unique within its context or domain to avoid ambiguities. It should not overlap with or be a substring of another form phrase within the same set of terms.

6. **Contextual Relevance**: The form phrase should be relevant to its context and accurately represent the term or concept it's associated with, aligning with domain-specific terminology and usage.
