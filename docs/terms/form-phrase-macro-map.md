---
# Docusaurus header
id: form-phrase-macro-map
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: form-phrase-macro-map
termType: concept
isa:
glossaryAbbr: "Macro Map"
glossaryTerm: "Form Phrase Macro Map"
glossaryText: "a list of [form phrase macros](@) that the [MRGT](@) will use to expand [form phrases](@) as specified for [curated texts](@) into [form phrases](@) as specified for [MRGs](@)."
glossaryNotes:
- "Form-phrase macro maps can be specified in the `scope` section of a [SAF](@)" 
- "Form-phrase macro maps can be specified in (the `mrgt` section) of a [configuration file](/docs/specs/files/configuration-file) that is used when  calling the [MRGT](@)." 
formPhrases: [ "formphrase macro map{ss}", "formphrase macromap{ss}", "form-phrase macro map{ss}", "form-phrase macromap{ss}", "macro map{ss}", "macromap{ss}" ]
# Origins/Acknowledgements
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Form Phrase Macro Maps

A **Form Phrase Macro Map** is a list of [form phrase macros](@) that the [MRGT](@) will use to expand [form phrases](@) as specified for [curated texts](@) into [form phrases](@) as specified for [MRGs](@).

[Form phrase macros](@) are typically useful for [scopes](@) in which [terms](@) are used that exist in particular languages, such as English, French, Dutch, etc. For every such language, particular sets of [form phrase macros](@) would be useful, which can be specified as [form-phrase macro maps](@).

## Purpose

A [form phrase macro map](@) enables [curators](@) to define a set of [form phrase macros](@) that is particularly suited for creating [form phrases](@) for the language that is used within the [scope](@) they [curate](@).

## Specifying and Using Form Phrase Macro Maps {#usage}

[Form phrase macro maps](@) can be specified in

- the `scope` section of the [SAF](@) of such [scopes](@), or
- a [configuration file](/docs/specs/files/configuration-file) that is used when calling the [MRGT](@).

Whenever a [TEv2 tool](@) (e.g., the [MRGT](@)) needs a [form phrase macro map](@), this [macro map](@) is constructed as follows:

1. An initial [macro map](@) consists of the default one, which is specified in the [example section](#example) below.
2. If the (the scope section of) the [SAF](@) contains a [form phrase macro map](@), this replaces the initial [macro map](@). So, all [form phrase macros](@) that are used within the scope must then appear in the [macro map](@) of that [SAF](@).
3. If the [configuration file](/docs/specs/files/configuration-file) that is used to call the [TEv2 tool](@) contains a [form phrase macro map](@), the contents of this [macro map](@) overwrites the [macro map](@) that is being constructed. This means that when a [macro map](@) in the [configuration file](/docs/specs/files/configuration-file) contains a [macro](form-phrase-macro@):
    - that doesn't yet exist, it will be added to the [macro map](@);
    - that already exists, it will overwrite the [macro](form-phrase-macro@) that existed;
    - whose value is `""` (empty), this means that the [macro](form-phrase-macro@) is rendered ineffective (it doesn't do anything).

## Example

Here is an example of a [macro map](@) that specifies a set of [form phrase macros](@) that were designed to support English [form phrases](@):

~~~ yaml
macros:
  "{ss}":   ["", "s", "'s", "(s)"],      # "act{ss}" --> "act", "acts", "act's", "act(s)"
  "{ess}":  ["", "es", "'s", "(es)"],    # "regex{es}" --> "regex", "regexes", "regex's", "regex(es"
  "{yies}": ["y", "y's", "ies"],         # "part{yies}" --> "party", "party's", "parties"
  "{ying}": ["y", "ying", "ies", "ied"], # "identif{ying}" --> "identify", "identifying", "identifies", "identified"
  "{es}":   ["e", "es", "ed", "ing"],    # "mangag{es}" --> "manage", "manages", "managed", "managing"
  "{able}": ["able", "ability"]          # "cap{able}" --> "capable", "capability"
~~~
