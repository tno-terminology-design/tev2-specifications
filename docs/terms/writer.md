---
# TEv2 Curated Text Header
term: writer
glossaryTerm: Writer
synonymOf: author
formPhrases: [ "riter{ss}" ]
---

This text should not show anywhere, as it is a Synonym.

However [termrefs](@) that use `writer` should be resolved. If they are not, that should produce an error.

Let's see what [writer](@) does, 
Or, the [writer's](@) block...

The term must have all properties of [author](@), except for the `formPhrases`.

Therefore, this term should also [appear in the glossary](/docs/tev2-glossary#writer), where the `glossaryText` should be that of `author`.