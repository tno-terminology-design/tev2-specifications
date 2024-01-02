---
# Docusaurus header
id: interpreter
# TEv2 Curated Text Header
term: interpreter
termType: concept
isa:
glossaryTerm: Interpreter
glossaryText: "a [(PCRE) regex](https://www.debuggex.com/cheatsheet/regex/pcre) that is used to locate a particular text construct (such as a [TermRef](@) or [MRGRef](@)) in a text, and that uses (PCRE) named groups to provide the values for the [moustache variables](@) in the [moustache profile](@) for which it is designed."
grouptags:
formPhrases: [ "interpreter{ss}" ]
# Curation status
status: proposed
created: 2023-07-31
updated: 2023-12-18
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Interpreter

An **interpreter** is a [(PCRE) regex](https://www.debuggex.com/cheatsheet/regex/pcre) that is used to locate a particular text construct (such as a [TermRef](@) or [MRGRef](@)) in a text, and that uses (PCRE) named groups to provide the values for the [moustache variables](@) in the [moustache profile](@) for which it is designed.

Interpreters are used in different contexts, e.g., in
- the [TRRT](@), where it locates [TermRefs](@), and populates the associated [profile](@) as specified in the [TRRT documentation](/docs/spec-tools/trrt#trrt-interpreters);
- the [HRGT](@), where it converts [MRGRefs](@) into a sequence of [hrg entries](@), as specified in the [HRGT documentation](/docs/spec-tools/hrgt#hrgt-interpreters);
- etc. (there may be more contexts).

The context in which an interpreter is used specifies the [moustache variables](@) that are to be populated as the result of finding a particular text construct. These specifications can be found in the documentation of the respective tools.

Interpreters are specified as [(PCRE) regular expressions](https://www.debuggex.com/cheatsheet/regex/pcre). They are expected to use named groups, the names of which correspond with the names of [moustache variables](@) for which they provide the values.