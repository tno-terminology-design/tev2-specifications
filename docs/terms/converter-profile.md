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

A **converter profile** is a data object, of a type that is specific for a [text conversion tool](@), that [converters](@) use to create texts by which the [tool](text-conversion-tool@) will replace the text constructs that are located by its [interpreter](@).

The generic workings of [converter profiles](@) is documented in the [TEv2 Text Conversion pattern](/docs/overview/tev2-text-conversion).

# Converter Profile Object {#object}

The converter profile object can be envisaged as a YAML object, that has a number of sections. Every converter profile object has the following sections, but individual [text-conversion-tool](@) may specify additional sections (or fields), which can be found in the section "Converter Profile" of their specifications.

| Section | Description |
| ------- | ----------- |
| `ir`    | (interpreter regex): the [regex](@) that was used to interpret the text for which the [converter](@) is called. This is used for <mark>**@Ca5e**: pls tell readers why this is needed</mark>. |
| `me`    | (MRG entry): all fields from the [MRG entry](@) that was selected. | 
| `mrg`   | all fields from the [terminology section](mrg#terminology@) of the [mrg](@) from which the [MRG entry](@) was taken |
| `err`   | (error): various fields, as specified below, that can be used to construct output that helps users identify an error, and fix it. |

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
| `filename`        | Y | Name of the file in which the conversion |
| `line`            | Y | Linenumber in the file where the input text was found. |
| `pos`             | Y | Position on the line of the start of the input text that was found. |

```mdx-code-block
</APITable>
```

<mark>**@Ca5e**: Please add additional stuff, as appropriate.</mark>
