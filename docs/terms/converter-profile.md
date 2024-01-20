---
# Docusaurus header
id: converter-profile
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: converter-profile
termType: concept
glossaryTerm: Converter Profile
glossaryText: "a data object, of a type that is specific for a [text conversion tool](@), that [converters](@) use to create texts by which the [tool](text-conversion-tool@) will replace the text constructs that are located by its [interpreter](@)."
grouptags:
formPhrases: [ "converter-profile{ss}", "profile{ss}" ]
# Curation status
status: proposed
created: 20231218
updated: 20240108
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import APITable from '@site/src/components/APITable';

# Converter Profile

A **converter profile** is a data object, of a type that is specific for a [text conversion tool](@). The replacement texts that a [text conversion tool](@) creates, are compiled according to the information in the converter profile object. The object defines the available information that [converters](@) and their helper functions can use to create texts.

The generic workings of [converter profiles](@) is documented in the [TEv2 Text Conversion pattern](/docs/overview/tev2-text-conversion).

# Converter Profile Object {#object}

The converter profile object can be envisaged as a YAML object, that has a number of sections. Every converter profile object has the following sections, but individual [text-conversion-tool](@) may specify additional sections (or fields), which can be found in the section "Converter Profile" of their specifications.

| Section | Description |
| ------- | ----------- |
| `int`    | (interpreter): includes information about the interpreter type `int.type`, and the regex used to locate the reference `int.regex`. The `noRefs` helper accesses the `int.regex` to be used as the default type. |
| `ref`   | (reference): the set of properties derived from the [named capturing groups](@) by the [interpreter](@). |
| `entry`    | (MRG entry): all fields from the specific [MRG entry](@) that was selected. | 
| `mrg`   | all fields from the [terminology section](mrg#terminology@) of the [mrg](@) from which the [MRG entry](@) was taken. |
| `err`   | (error): various fields, as specified below, that can be used to construct output that helps users identify an error, and fix it. |

Fields from the `entry` section may also be used in [converters](@) without specifying `entry` as a prefix. Properties of the `entry` with identical names to sections of the converter profile object are overwritten.

When a file is being processed by a [text conversion tool](@), it can happen that an input structure is found that cannot be associated with an [MRG entry](@). The `err` section in a converter profile object contains fields that can help construct outputs that help users to identify, and fix, such errors, as follows:

<details>
  <summary>Legend</summary>

1. **`Field`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is always populated, or optional.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

```mdx-code-block
<APITable>
```

| Field           | Req'd | Description |
| --------------- | :---: | :---------- |
| `filename`      | Y | Name of the file where the specific reference was found. |
| `line`          | Y | Linenumber in the file where the reference was found. |
| `pos`           | Y | Position on the line of the start of the reference that was found. |
| `cause`         | n | A description of the cause of a possible error. |

```mdx-code-block
</APITable>
```
