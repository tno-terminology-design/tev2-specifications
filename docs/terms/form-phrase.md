---
# Docusaurus header
id: form-phrase
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: form-phrase
termType: concept
isa:
glossaryTerm: "Form Phrase (for a Semantic Unit)"
glossaryText: "a word or phrase that refers to a particular [semantic unit](@), yet is not (necessarily) the [term](@) that is used in the [definition](@) of that [semantic unit](@). Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."
glossaryNotes:
- "The set of [form phrases](@) that [TEv2 tools](@) can recognize, is specified in the [curated text](@) that documents that [unit](semantic-unit@). Such specifications may contain [form-phrase macros](@)."
- "For looking up the [semantic unit](@) (documentation, as specified in its corresponding [MRG entry](@)), [TEv2 tools](@) can match words or phrases they encounter with the [regularized texts](@) that are listed in the `formPhrases` field of [MRG entries](@). Such [regularized texts](@) do not contain [form-phrase macros](@)."
- "The [MRGT](@) ensures that the texts in the `formPhrases` field of a [curated text](@) are [properly converted](mrgt#processing-form-phrases@), and listed in the `formPhrases` field of the corresponding [MRG entry](@)."
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

<details>
    <summary>Examples</summary>

[TermRefs](@) such as `[party](@)`, `[parties](@)` or `[party(s)](@)` should all refer to the same [semantic unit](@). This is achieved by specifiying "party", "parties", and "party(s)" as [form phrases](@) for that [semantic unit](@) in the [curated text](@) that documents that [unit](semantic unit@).

</details>

## Purpose

[Form phrases](@) serve as (standardized, human readable) identifiers for [semantic units](@), enabling consistent and unambiguous references across various texts such as manuals, specifications, and guidelines. This is particularly useful (if not vital) in fields where precise terminology is key, ensuring that all stakeholders have a common understanding of the [terms](@) used and thereby reducing the potential for misinterpretation or confusion.

## Specifying Form Phrases in Curated Texts {#specifying}

[Form phrases](@) are to be specified in (the `formPhrases` field of) the [header](@) of the [curated text](@) that describes the [semantic unit](@) to which it refers. Here is an example:

~~~ yaml
formPhrases: [ "actor", "actors", "actor's", "actor(s)", "human actor", "machine actor" ]
~~~

This specifies that whenever a [TermRef](@) is being converted by the [TRRT](@), and the `showtext` or the `term` parts of that [TermRef](@) are any of these [formPhrases](@), then the [TermRef](@) refers to the [semantic unit](@) that is documented by that [curated text](@). 

Note that the specification of a [form phrase](@) may include a [form-phrase-macro](@), for which several are [predefined](/docs/terms/form-phrase-macro#predefineds). The example below is the equivalent specification as above:

~~~ yaml
formPhrases: [ "actor{ss}", "human actor", "machine actor" ]
~~~

The same varieties can easily be added for the human and machine actors, as follows

~~~ yaml
formPhrases: [ "actor{ss}", "human actor{ss}", "machine actor{ss}" ]
~~~

## Matching Form Phrases {#matching}

Using (or: matching) [form phrases](@) is the process in which for a given word or phrase, it is determined whether or not it refers to a particular [semantic unit](@). This is done, e.g., by the [TRRT](@) as it [tries to find](trrt#finding-mrg-entry@) an [MRG entry](@) that corresponds with the [`showtext`](trrt#interpreter-profile@) field of a [TermRef](@).

This matching process uses the contents of the `formPhrases` field of [MRG entries](@), which are [derived from](mrgt#processing-form-phrases) the contents of the `formPhrases` field of [curated texts](@), and proceeds as follows:

1. [Regularize](regularized-form-phrase#regularization-process@) the given word or phrase;
2. Find all [MRG entries](@) that have the result an an entry in its `formPhrases`-field;
3. If there is a single such an [MRG entry](@), then the text is a [form phrase](@) for the [semantic unit](@) described by that [MRG entry](@).

It is possible that there is no matching [MRG entries](@).

If multiple [MRG entries](@) match, that is an error condition - that should not happen. Such conditions are typically flagged, e.g., as an error by the [MRGT](@), and they need to be resolved.

## Guidance for Specifying Form Phrases in Curated Texts {#guidance}

1. **Character Composition**: A form phrase is composed of a sequence of characters that may include letters, numbers, and spaces. Spaces are permissible if they are a standard part of the term (e.g., "hard drive").

2. **Limited Special Characters**: Generally, a form phrase should not contain special characters like punctuation marks (.,;:!? etc.), except for hyphens, underscores, or other characters if they are an integral part of the term (e.g., "non-refundable", "e-mail").

3. **Case Sensitivity**: While a form phrase may include uppercase or lowercase letters, it is typically treated as case-insensitive during the matching process. This ensures that variations in capitalization do not affect the identification of the term.

4. **Adherence to Language Rules**: A form phrase should conform to the grammatical and morphological rules of the language it's used in, including correct spelling and, where applicable, pluralization or possessive forms.

5. **Uniqueness within Context**: Each form phrase must be unique within its context or domain to avoid ambiguities. It should not overlap with or be a substring of another form phrase within the same set of terms.

6. **Contextual Relevance**: The form phrase should be relevant to its context and accurately represent the term or concept it's associated with, aligning with domain-specific terminology and usage.
