---
# Docusaurus header
id: moustache-profile
# TEv2 Curated Text Header
term: moustache-profile
termType: concept
glossaryTerm: Moustache Profile
glossaryText: "a set of [moustache variables](@) that specify the expected results or executing a particular [interpreter](@). For example, the moustache profile for [TRRT](@) [interpreters](@) consists of the [variables](moustache-variable@) `{{showtext}}`, `{{termType}}`, `{{term}}`, `{{trait}}`, `{{scopetag}}`, and `{{vsntag}}`."
grouptags:
formPhrases: [ moustache-profile{ss}, profile{ss} ]
# Curation status
status: proposed
created: 2023-12-18
updated: 2023-12-18
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Moustache Profile

A **moustache variable** is a set of [moustache variables](@) that specify the expected results or executing a particular [interpreter](@). 

For example, the moustache profile for [TRRT](@) [interpreters](@) consists of the [variables](moustache-variable@) `{{showtext}}`, `{{termType}}`, `{{term}}`, `{{trait}}`, `{{scopetag}}`, and `{{vsntag}}`. This means that every [interpreter](@)

Every [TEv2 tool](@) that converts files, such as the [TRRT](@) or the [HRGT](@), have defined a moustache profile in their documentation (in the section on *XXX Interperters* where <XXX> is the name of the tool.