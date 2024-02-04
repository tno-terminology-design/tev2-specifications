---
# Docusaurus header
id: converter-profile
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: converter-profile
termType: concept
glossaryTerm: Converter Profile
glossaryText: "a data object, of a type that is specific for a [text conversion tool](@), that [converters](@) use to create texts by which the [tool](text-conversion-tool@) will replace the text constructs that are located by its [interpreter](@)."
grouptags: [ ]
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

## Converter Profile Object {#object}

The converter profile object can be envisaged as a YAML object, that has a number of sections. Every converter profile object has the following sections, but individual [text-conversion-tool](@) may specify additional sections (or fields), which can be found in the section "Converter Profile" of their specifications.

| Section | Description |
| ------- | ----------- |
| `int`    | (interpreter): includes information about the interpreter type `int.type`, and the regex used to locate the reference `int.regex`. The `noRefs` helper accesses the `int.regex` to be used as the default type. |
| `ref`   | (reference): the set of properties derived from the [named capturing groups](@) by the [interpreter](@). |
| `entry`    | (MRG entry): all fields from the specific [MRG entry](@) that was selected. | 
| `mrg`   | (MRG): all fields from the [terminology section](mrg#terminology@) of the [mrg](@) from which the [MRG entry](@) was taken. |
| `err`   | (error): various fields, as specified below, that can be used to construct output that helps users identify an error, and fix it. |

Fields from the `entry` section may also be used in [converters](@) without specifying `entry` as a prefix (e.g., `entry.term` becomes `term`). Properties of `entry` with identical names to sections of the converter profile object, are overwritten by the defined sections.

### `err` fields

When a file is being processed by a [text conversion tool](@), it can happen that an input structure is found that cannot be associated with an [MRG entry](@). The `err` section in a converter profile object contains fields that can help construct outputs that help users to identify, and fix, such errors, as follows.

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
| `file`          |   Y   | Name of the file where the specific reference was found. |
| `line`          |   Y   | Linenumber in the file where the reference was found. |
| `pos`           |   Y   | Position on the line of the start of the reference that was found. |
| `cause`         |   n   | A description of the cause of a possible error. |

```mdx-code-block
</APITable>
```

## Helper functions
Multiple custom [helper functions](https://handlebarsjs.com/guide/expressions.html#helpers) have been specified in addition to the [built-in helper functions](https://handlebarsjs.com/guide/builtin-helpers.html) of [Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars), which can be used within [handlebars expressions](@) to modify the [converter](@) output. The input given to a helper function is always the evaluated value of the expression that follows the call, possibly with extra options.

```ts title="Mustache expression format"
// highlight-next-line
{{<helper> <element> <argument>="<value>"}}
{{capFirst entry.term}}
{{noRefs entry.glossaryText type="markdown"}}
```


### `capFirst`
This simple helper with identifier `capFirst` replaces every word's first character with the capitalized equivalent. Words are obtained by splitting the input on space characters.<br/>
*It takes the input, splits the input at spaces, and capitalizes the first character of every split item, after which the output is returned.*

### `noRefs`
This helper with identifier `noRefs` attempts to use the configured `type` to convert all references to the `showtext` property of the interpreted reference. It also capitalizes the `showtext` replacement using the `capFirst` helper.<br/>
*It takes the input, finds matches using the configured syntax-`type` and uses the capitalized interpreted `showtext` property as a replacement, after which the output is returned.*

Three standard values are available to be used as the value for the `type` option. Multiple values may be provided, in which case the values are interpreted in order from left to right. If no value is provided, '`interpreter`' is used as the default `type`. If a `type` is provided that does not match any of the standard `type` values, the value is assumed to be a custom [regex](@).

Available `type` values:

```mdx-code-block
<APITable>
```

| `type` | Description |
| :------------ | :---------- |
| `interpreter` | Uses the [regex](@) of the configured [interpreter](#interpreter) to find matches. |
| `html` | Uses the [regex](@) `<a\b[^>]*?>(?<showtext>.*?)<\/a>` to find HTML `<a>` tags and uses the value in between the opening and closing tag as `showtext`. |
| `markdown` | Uses the [regex](@) `\[(?<showtext>[^\]]+)\]\((?:[^)]+)\)` to find Markdown hyperlinks and uses the link text as `showtext`. |
| `custom` | A value for `type` that does not match any of the standard `type` values is assumed to be a custom [regex](@). |

```mdx-code-block
</APITable>
```

```ts title="NoRefs example"
{{noRefs entry.glossaryText}}
{{noRefs entry.glossaryText type="markdown"}}
{{noRefs entry.glossaryText type="markdown, html, interpreter"}}
{{noRefs entry.glossaryText type="/\[(?<showtext>[^\]]+)\]\((?:[^)]+)\)/, html"}}
```

### `ifValue`
This helper with identifier `ifValue` allows for equality checking by comparing the first value with the value specified as the `equals` argument. Pay attention to the use of a `#` character in front of the opening helper tag (`#ifValue`) and a `/` character at the closing (`/ifValue`) tag in the example.<br/>
 *It compares the input given as the value trailing the opening helper identifier (`ifValue`) and the value of the `equals` option, and returns the value inbetween the opening and closing helper tag if the values are equal.*

```ts title="ifValue example"
{{#ifValue entry.termType equals="concept"}}Artifact is a concept{{/ifValue}}
{{#ifValue entry.termType equals="image"}}Artifact is an image{{/ifValue}}
```

### `localize`
This helper with identifier `localize` attempts to parse the value it was given as a URL and compares it to the `website` value of the [MRG](@) in the converter profile. If both the `host` values (e.g., tno-terminology-design.github.io) match, the `pathname` of the URL is returned. If the given value cannot be interpreted as a URL, or the `host` values do not match, the input value is returned. This can be useful in situations where external links (URL's pointing to a website other than the current `host`) are handled differently from internal links.

```ts title="localize example"
{{localize entry.navurl}}
// using the localize helper, converts
"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author"
// into
"/tev2-specifications/docs/terms/author"
// when the `host` value of the URL matches the MRG website's `host` value
```
