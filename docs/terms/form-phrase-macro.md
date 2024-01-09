---
# Docusaurus header
id: form-phrase-macro
# TEv2 Curated Text Header
term: form-phrase-macro
termType: concept
isa:
glossaryTerm: Form Phrase Macro
glossaryText: "a sequence of characters (the macro name) that [identifies](@) a set of character strings that specify typical variations of a [form phrase](@), such as plural forms, possessie extensions, verb-conjugation forms, etc."
formPhrases: [ "formphrase macro{ss}", "form-phrase macro{ss}" ]
# Curation status
status: proposed
created: 20240108
updated: 20240108
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Form Phrase Macro

A **Form Phrase Macro** is a sequence of characters (the macro name) that [identifies](@) a set of character strings that specify typical variations of a [form phrase](@), such as plural forms, possessie extensions, verb-conjugation forms, etc. For example, when the macro `{ss}` is used in a [form phrase](@) specification `"actor{ss}"`, or `act`, this is a shorthand for the set `"actor", "actors", "actor's", "actor(s)"`, or the set `"act", "acts", "act's", "act(s)"` respectively. 

## Purpose

[Form phrase macros](@) facilitate the specification of [form phrases](@), by enabling efficient ways of representing plural forms, possessive extensions, verb-conjugation forms, etc.

## Predefined [Form phrase macros](@) {#predefineds}

The following table specifies the [form phrase](@) macros that can be used by default. The table shows 
1. the [form phrase macro](@) name,
2. the list of character strings that is used to create a set of [form phrases](@) from the [form phrase](@) that includes the macro,
3. an example that could appear as a [form phrase](@) in a `formPhrases`-field of a [curated text](@),
4. the set of (simplified) `showtext`s that would match that [form phrase](@):

| macro    | character string map      | specified [form phrase](@) | resulting [form phrases](@) |
| -------- | :------------------------ | :-------------: | :----------------------------- |
| `{ss}`   | "", "s", "'s", "(s)"      | `actor{ss}`     | "actor", "actors", "actor's", and "actor(s)" |
| `{yies}` | "y", "y's", "ies"         | `part{yies}`    | "party", "party's", and "parties" |
| `{ying}` | "y", "ying", "ies", "ied" | `identif{ying}` | "identify", "identifying", "identifies", and "identified" |
| `{es}`   | "e", "es", "ed", "ing"    | `manag{es}`     | "manage", "manages", "managed", "managing" |
| `{able}` | "able", "ability"         | `cap{able}`     | "capable", "capability" |

:::tip Use macro's with care.
The above macro's should be used with care. Here are some tips:

1. Use `{ss}` macro only for **nouns** whose plural is constructed by adding an `s`.
2. Use `{yies}` only for **nouns** that end with a `y`.
3. Use `{yies}` only for **verbs** that end with a `y`.
4. Use `{es}` only for **regular verbs** that conjugate as specified.
:::

<!-- The following are suggestions (by chatGPT) for similar macros.
They are currently not included because we have not found any terms that would benefit from them.
| `{ing}`  | <code>(s?\|ing\|ed)</code>            | `play{ing}`     | "play", "plays", "playing", "played" |
| `{ion}`  | <code>(ion\|ions\|ional)</code>       | `organizat{ion}`| "organization", "organizations", "organizational" |
| `{eror}` | <code>(er\|or\|ers\|ors)</code>       | `advis{eror}`   | "adviser", "advisor", "advisers", "advisors" |
| `{ment}` | <code>(ment\|ments\|mental)</code>    | `develop{ment}` | "development", "developments", "developmental" |
| `{ful}`  | <code>(ful\|fully\|fulness)</code>    | `hope{ful}`     | "hopeful", "hopefully", "hopefulness" |
| `{less}` | <code>(less\|lessly\|lessness)</code> | `care{less}`    | "careless", "carelessly", "carelessness" |
-->

## Custom [Form Phrase Macros](@)

:::info Editor's note
There is currently an issue that calls for the ability to use custom form phrases, that could be specified somewhere in the SAF or as an MRGT option. The contents of this section can be written when that issue has come to a resolution.
:::