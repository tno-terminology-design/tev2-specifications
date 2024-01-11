---
id: tev2-text-conversion
sidebar_label: "Text Conversions"
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Text Conversions

All [text conversion tools](@) in the [TEv2 toolbox](@) convert particular tools consists of the various ways in which texts can be converted. 

<details>
  <summary>Examples of text conversions</summary>

One example is the conversion of so-called [TermRefs](@) into [renderable refs](@), i.e., the conversion of texts such as this: `[TermRefs](@)`, i.e., the 'raw' texts that [authors](@) write, into "[TermRefs](@)", i.e., a nicely rendered version of that raw text, that has additional properties, in this case that it is **emphasized**, and if you hover your mouse over it, you'll get a popup with the definition of the term.

Another example is the conversion of a so-called [MRGRef](@) into (the body/contents of) a [human readable glossary]. The [MRGRef](@) points to a particular (version) of a [terminology](@), and the text conversion process sees to converting it to (the body/contents of) a [HRG](@). This is how the [TEv2 glossary](/docs/tev2-glossary) was generated.

</details>

Text conversions must work in different contexts. For example the context where (static) websites are generated from the raw, authored texts requires different conversions than when the same raw texts are to be rendered into a PDF, or LaTeX document. Also, it may be necessary to provide [authors](@) with different syntax options to mark text fragments for conversion.

## Text Conversion Tools {#tools}

The [text conversion tools](@) in the [TEv2 toolbox](@), such as the [TRRT](@) and [HRGT](@), operate in a context as described in the below figure:

<p align="center">
<img
  alt="Converting raw texts into formatted texts"
  src={useBaseUrl('images/tev2-overview-without-toolbox.png')}
/><i>Figure 1: Repeated conversions turn raw texts into formatted texts and/or curated texts</i>
</p>

Each such tool can be called to perform a [text conversion step](#steps), i.e. a process in which a specified set of (input, or source) files are converted into another set of (output, or target) files. While each [text conversion tool](@) has its particular way of working, they are all designed to follow a specific sequence of steps. This enables users to configure (customize) how the tool works whenever it is called. 

Thus, the [TRRT](@), whose task is to convert [term refs](@) into [renderable refs](@), can be configured to use your own, [customized term ref syntax](/docs/specs/syntax/term-ref-syntax#customize). It can also be configured to produce your own particular flavor of [renderable refs](@), by specifying custom [converters](@).

## Text Conversion Steps {#steps}

All [text conversion tools](@) convert (input) text files into results (output text files) by locating particular text patterns, doing some processing, and constructing texts that are used to replace the located text patterns with. This is illustrated in the figure below:

<p align="center">
<img
  alt="The generic text conversion pattern on which the toolbox is based"
  src={useBaseUrl('images/tev2-text-conversion-pattern.png')}
/><i>Figure 2: The generic parts of a Text Conversion Step</i>
</p>

A text conversion step works on a single source (file)[^1], as follows:

[^1]: If a tool is instructed to work on multiple files, they will be processed sequentially.

1. The first part consists of finding the locations of specific text patterns as specified by the [interpreter](@) that is configured for use. The [interpreter](@) is expected to populate the [named capturing groups](@) that are defined in the [interpreter profile](@) of the [TEv2 tool](@) in which it is used. This [interpreter profile](@) is defined in the specifications of each [TEv2 tool](@) that uses it.

2. The second part is a processing step, in which the [tool](tev2-tool@) collects (the values of) the [named capturing groups](@) as well as other resources, and creates a set of [moustache variables](@) as defined for the [converter profile](@) of that [tool](tev2-tool@). The kinds of resources that are used and the [converter profile](@) are particular to each [tool](tev2-tool@), and are defined in the specifications for that [tool](tev2-tool@).

3. The third part consists of replacing the found text patterns with (one or more[^2]) texts that the [tool](tev2-tool@) gets from invoking the [converter](@) that is configured for use. The [converter](@) is designed in such a way that it uses the values of the [moustache variables](@) in the [converter profile](@) to construct a text with. 

[^2]: the [TRRT](@) replaces every occurrence of a text that its [interpreter](@) finds - i.e., a [TermRef](@) - with one text that is constructed by its [converter](@) - a [renderable ref](@). The [HRGT](@), however, replaces every occurrence of a text that its [interpreter](@) finds - i.e., an [MRGRef](@) with a sequences of texts, each of which is constructed by its [converter](@) - a [HRG entry](@).

## What is specific for a Text Conversion Tool

Every [TEv2](@) [text conversion tool](@) has one particular

- [interpreter profile](@), i.e., a specification of the [named capturing groups](@) that an [interpreter](@) should populate if it is to be useable for that tool. The tool-specific [interpreter profile](@) is specified in the [documentation of that tool](/docs/category/specs/tools).

- [converter profile](@), i.e., a specification of the [moustache variables](@) that a [converter](@) can use for the construction of the replacement text. The tool-specific [converter profile](@) is specified in the [documentation of that tool](/docs/category/specs/tools).

## Configuration of a Text Conversion Tool

Every time a [TEv2](@) [text conversion tool](@) is executed, it will use a particular

- [interpreter](@), that it will use to find the text patterns that need to be replaced, and to populate the [named capturing groups](@) as defined in the [interpreter profile](@) of that [tool](tev2-tool@).

- [converter](@), that it will use to construct the replacement texts for the text patterns located by the [interpreter](@). The [converter](@) may use the [moustache variables](@) as defined in the [converter profile](@) of that [tool](tev2-tool@).

A [tool](tev2-tool@) can be instructed to use a particular [interpreter](@) and/or [converter](@) by:

- not specifying it, in which case the defaults are used that are specified for that [tool](tev2-tool@);
- specifying it in a [configuration file](/docs/specs/files/configuration-file) that is used when calling the [tool](tev2-tool@);
- specifying as a command-line argument that is used when calling the [tool](tev2-tool@) (this overrides any specifications in the [configuration file](/docs/specs/files/configuration-file) if that were also used).

Particular [text conversion tools](@) may have the option of specifying the [converter](@) to be used as part of the text pattern that is located by the [interpreter](@) of the tool. An example of this is the [HRGT](@).
