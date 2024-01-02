---
# Docusaurus header
id: converter
# TEv2 Curated Text Header
term: converter
termType: concept
isa:
glossaryTerm: Converter
glossaryText: "a specification for constructing a text, for which it can use texts that are the values of [moustache variables](@)."
synonymOf:
grouptags: 
formPhrases: [ "converter{ss}" ]
# Curation status
status: proposed
created: 2023-07-31
updated: 2023-07-31
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Converter

A **converter** is a specification for constructing a text, for which it can use texts that are the values of [moustache variables](@).

Converters are used in different contexts, e.g., in
- the [TRRT](@), where it converts [TermRefs](@) into [renderable refs](@),  as specified in the [TRRT documentation](/docs/spec-tools/trrt#trrt-converters);
- the [HRGT](@), where it converts [MRGRefs](@) into a sequence of [hrg entries](@), as specified in the [HRGT documentation](/docs/spec-tools/hrgt#hrgt-converters);
- etc. (there may be more contexts).

The context in which a converter is used specifies what [moustache variables](@) it can expect to be available. These specifications can be found in the documentation of the respective tools.

Converters are specified as mustache/handlebars templates ([handlebar expressions](https://handlebarsjs.com/guide/#what-is-handlebars)).
