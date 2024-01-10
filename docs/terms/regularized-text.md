---
# Docusaurus header
id: regularized-text
# TEv2 Curated Text Header
term: regularized-text
termType: concept
isa:
glossaryTerm: Regularized Text
glossaryText: "a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match [regex](@) `[a-z]_[0-9]-`, and doesn't end with a `-` character. In other words, every text that matches the [regex](@) `^[a-z]([a-z]_[0-9]-)*(?<=[^-])$` is a regularized text."
formPhrases: [ "regularized-text{ss}" ]
# Curation status
status: proposed
created: 20230731
updated: 20230731
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Regularized Text

A **Regularized Text** is a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match [regex](@) `[a-z]_[0-9]-`, and doesn't end with a `-` character. In other words, every text that matches the [regex](@) `^[a-z]([a-z]_[0-9]-)*(?<=[^-])$` is a regularized text.

## Purpose

[Regularized texts](@) are used primarily to ensure consistency and predictability in naming and referencing elements within [TEv2](@). It is used for several reasons:

- **Ease of Processing**: Regularized texts are easier to process and handle by various software systems, as they follow a predictable pattern. This uniformity is particularly important for tasks like sorting, searching, and indexing.
- **Avoiding Conflicts**: By following a strict pattern, regularized texts help prevent issues like naming conflicts or syntax errors that might arise from irregular naming conventions.
- **Interoperability**: Standardized text formats ensure better interoperability between different systems and software components. When different systems follow the same naming conventions, it's easier to integrate and share data across them.
- **Readability and Maintenance**: For IT personnel, especially those who are not programmers, having a consistent naming convention (like regularized text) makes it easier to understand and maintain systems. It reduces the learning curve and aids in quicker identification of elements.

## Use of Regularized Texts within [TEv2](@)

Within [TEv2](@), [regularized texts](@) are used:
- to construct more complex [identifiers](@) such as [term refs](@), [term ids](@), [terminology identifiers](@), URLs, etc.
- as a class of texts, with members such as `termType`, `term`, `grouptags`, and `scopetag`.
- to represent [form phrases](@) in [MRG entries](@) (note that the `formPhrases` field of [curated texts](@) do not typically contain [regularized texts](@))
- etc.

## Regularizing Texts (#regularization-process)

The process that [TEv2 tools](@) use if they need to convert a normal, human readable text into a [regularized texts](@), consists of the following steps:

1. convert the text to lowercase;
2. remove all characters at the beginning of the text that do not match regex `[a-z]`.
3. replace all sequences of characters that may not appear in a [regularized text](@) with the `-`-character;
4. replace all sequences of `-`characters with a single `-` character, such that in the resulting text there are no two consecutive `-` characters;
5. remove any leading and/or trailing `-` characters.

Here's a table that shows how a variety of input texts would be converted into [regularized texts](@):

| # | Input Text          | Regularized Text |
|:-:|---------------------|------------------|
| 1 | `example`           | `example`        |
| 2 | `ex@mple`           | `ex-mple`        |
| 3 | `Ex4mPLe 4`         | `ex4mple-4`      |
| 4 | `(example):`        | `example`        |
| 5 | `EX(ample)`         | `ex-ample`       |
| 6 | `1#-_23ex3mple`     | `ex3mple`        |
| 7 | `ex--am@#ple123`    | `ex-am-ple`      |
| 8 | `**e!x@a#m$p%l^e**` | `e-x-a-m-p-l-e`  |

-----

## Notes