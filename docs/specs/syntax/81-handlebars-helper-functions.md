---
id: handlebars-helper-functions
sidebar_label: Handlebars Helpers
date: 20240301
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import APITable from '@site/src/components/APITable';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Helper functions {#helpers}

In order to facilitate the writing and use of [converters](@), a number of [handlebars helper functions](https://handlebarsjs.com/guide/expressions.html) are available in the context of [TEv2](@), that extend the [built-in helper functions](https://handlebarsjs.com/guide/builtin-helpers.html) of [Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars). 

Helper functions would typically use variables as specified in the [converter profile](converter-profile#object-spec@) for the [TEv2 tool](@) that they are used in.

Helper functions can be used within [handlebars expressions](https://handlebarsjs.com/guide/expressions.html). Their input is the evaluated value of the expression that follows the call, possibly with extra options.

```ts title="helper function syntax format"
// highlight-next-line
{{<helperfunction> <element> <argument>="<value>"}}
{{capFirst entry.term}}
{{noRefs entry.glossaryText type="markdown"}}
```
<details>
  <summary>List of built-in helpers</summary>

Here is a summary of the handlebar helpers that can always be used; you can click on the helper to navigate to a more detailed description of how they work (with examples):

| Helper | Functional summary |
| :----- | :----------------- |
| [`#if`](https://handlebarsjs.com/guide/builtin-helpers.html#if)         | conditionally render a text block. |
| [`#unless`](https://handlebarsjs.com/guide/builtin-helpers.html#unless) | this is the inverse of `#if`. |
| [`#each`](https://handlebarsjs.com/guide/builtin-helpers.html#each)     | Iterates over a list of elements. Inside the block, you can use `this` to reference the element being iterated over. |
| [`#with`](https://handlebarsjs.com/guide/builtin-helpers.html#with)     | Enables you to change the evaluation context of template-parts. |
| [`lookup`](https://handlebarsjs.com/guide/builtin-helpers.html#lookup) | Allows for dynamic parameter resolution using Handlebars variables. |

</details>

## `capFirst` {#capfirst}

The function of the helper `capFirst` is to capitalize every first character from every word in a string.

```ts title="Examples for 'capFirst'"
{{capFirst entry.glossaryTerm}}   // e.g. "converter profile" becomes "Converter Profile"
{{capFirst entry.glossaryText}}   // e.g. "This is a description; for SOME TERM" becomes "This Is A Description; For SOME TERM"
```

The helper `capFirst` replaces the first character of every word of its argument with the capitalized equivalent. 
Words are obtained by splitting the input on space characters.<br/>
*It takes a string as input, splits the string at spaces, capitalizes the first character of every split item,
reconstructs the input string fomr the split items, and returns the result.*

## `log` {#log}

The function of the helper `log` is to output a text string to the log of a tool that uses a [converter](@) from which it is called. This allows users to enhance debugging output.

This helper extends the [functionality of the `log` helper that is built into [Handlebars itself]https://handlebarsjs.com/guide/builtin-helpers.html#log). The helper is based on [tslog](https://tslog.js.org), which has [lots of other features](https://tslog.js.org/#/?id=all-features).

Particular to our `log` helper is the feature that allows users to suppress log messages. This is useful, for example, when using a [converter](@) in the [HRGT](@) that determines whether or not to allow an [MRG entry](@) to appear in the [HRG](@) that is being created. In such cases, the log would be littered with log messages that no output is being generated, which can now be suppressed.

This feature is implemented through the log level `silent`. [Other log level values are provided by tslog](https://tslog.js.org/#/?id=default-log-level). When a log level isn't specified, it defaults to `warn`.

```ts title="Examples for 'log'"
// The following logs a warning of the form '<path>/<file>@<line>:pos', which specifies where an error occurred.
{{log '<errmsg>:' err.dir '/' err.file '@' err.line ':' err.pos level='warn'}}"

// The following logs the text 'This is an informational message'
{{log level='info' 'This is an informational message'}}

// Examples below will prevent errors caused by the conversion call from being logged
{{log level='silent' 'This message will not be logged'}}
{{regularize entry.term}}{{log level='silent'}}
```

## `noRefs`{#norefs}

The function of the helper `noRefs` is to replace all [TermRefs](@) from a string, with its (capitalized) `showtext`. Capitalization is done by the helper `capFirst`.

:::warning
The usefulness of the `noRefs` helper has its limits.
For example, in a context that allows two or more (customized) [syntaxes](/docs/specs/syntax/term-refs) for [TermRefs](@), the `noRefs` helper can miss one or more of these (custom) syntaxes, producing a result that will not be rendered as expected by the static site generator.
One way to deal with such situations is to identify where it may occur, and try to provide input to the `noRefs` helper that does not contain (such) [TermRefs](@).
In the concrete situation of popups, for which typically `glossaryText` fields are used that might produce such erroneous renderings, a workaround would be to add a `popupText` field (or so) whose value is manually constructed from the `glossaryText`, and is void of (such) [TermRefs](@).
:::

The following tabs show how this helper works on the following input:

-----

``` txt
  [Markdown](link), <a href="link">HTML</a>, `[showtext](someterm@somescope)`
```

<Tabs
  defaultValue="default"
  values={[
    {label: '(No type specified)',                                 value: 'default'},
    {label: 'type="markdown"',                                     value: 'single'},
    {label: 'type="markdown, html, interpreter"',                  value: 'multiple'},
    {label: 'type="/\[(?<showtext>[^\]]+)\]\((?:[^)]+)\)/, html"', value: 'multiple-with-regex'},
  ]}>

<TabItem value="default">

Calling `{{noRefs entry.glossaryText}}` results in:

``` txt
  [Markdown](link), <a href="link">HTML</a>, Showtext
```

</TabItem>

<TabItem value="single">

Calling `{{noRefs entry.glossaryText type="markdown"}}` results in:

```txt
  Markdown, <a href="link">HTML</a>, Showtext
```

</TabItem>

<TabItem value="multiple">

Calling `{{noRefs entry.glossaryText type="markdown, html, interpreter"}}` results in:

```txt
  Markdown, HTML, Showtext
```

Note that the [TermRef](@) is also seen as a markdown link, and hence remo

</TabItem>

<TabItem value="multiple-with-regex">

Calling `{{noRefs entry.glossaryText type="/\[(?<showtext>[^\]]+)\]\((?:[^)]+)\)/, html"}}` results in:

```txt
  Markdown, HTML, Showtext
```

</TabItem>

</Tabs>

-----

The helper `noRefs` uses the configured `type` to convert all references to the `showtext` property of the interpreted reference.
It also capitalizes the `showtext` replacement using the [`capFirst` helper](#capfirst).<br/>
*It takes the input, finds matches using the configured syntax-`type`, and uses the capitalized interpreted `showtext` property as a replacement, after which the output is returned.*

Three standard values are available to be used as the value for the `type` option. Multiple values may be provided, in which case the values are interpreted in order from left to right. If no value is provided, '`interpreter`' is used as the default `type`. If a `type` is provided that does not match any of the standard `type` values, the value is assumed to be a custom [regex](@).

Available `type` values:

```mdx-code-block
<APITable>
```

| `type`        | Description |
| :------------ | :---------- |
| `interpreter` | Uses the [regex](@) of the configured [interpreter](#interpreter) to find matches. |
| `html`        | Uses the [regex](@) `<a\b[^>]*?>(?<showtext>.*?)<\/a>` to find HTML `<a>` tags and uses the value in between the opening and closing tag as `showtext`. |
| `markdown`    | Uses the [regex](@) `\[(?<showtext>[^\]]+)\]\((?:[^)]+)\)` to find Markdown hyperlinks and uses the link text as `showtext`. |
| `custom`      | A value for `type` that does not match any of the standard `type` values is assumed to be a custom [regex](@). |

```mdx-code-block
</APITable>
```

## `regularize` {#regularize}

The function of the helper `regularize` is convert human readable text into a [regularized text](@), which is a common text format within [TEv2](@) (particularly in [MRG entries](@)) for automated processing.

```ts title="Examples for 'Regularize'"
// Input (entry.term): "EX(ample)"
{{regularize entry.term}}
// Output: "ex-ample"
```
The helper `regularize` converts the input string into a [regularized text](@), according to the [regularization process](regularized-text#regularization-process@).

## `localize` {#localize}

The function of the helper `localize` is to convert an absolute URL to a relative path within a particular website context, enhancing internal navigation efficiency and consistency.

The website context is specified by the `website` value of the [MRG](@) in the converter profile.

<Tabs
  values={[
    {label: '`website` = `https://github.com/tno-terminology-design/tev2-specifications/tree/master`', value: 'tev2-specs'},
    {label: '`website` is something else', value: 'something-else'},
  ]}>

<TabItem value="tev2-specs">

```ts title="Examples for 'localize'"
// Input (entry.navurl): "https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/specs/syntax/handlebars-helper-functions"
{{regularize entry.navurl}}
// Output: "/docs/specs/syntax/handlebars-helper-functions"
```

</TabItem>

<TabItem value="something-else">

```ts title="Examples for 'localize'"
// Input (entry.navurl): "https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/specs/syntax/handlebars-helper-functions"
{{regularize entry.navurl}}
// Output: "https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/specs/syntax/handlebars-helper-functions"
```

</TabItem>

</Tabs>

The helper `localize` parses the value it was given as a URL and compares it to the `website` value of the [MRG](@) in the converter profile. If both the `host` values (e.g., tno-terminology-design.github.io) match, the `pathname` of the URL is returned. If the given value cannot be interpreted as a URL, or the `host` values do not match, the input value is returned. This can be useful in situations where external links (URL's pointing to a website other than the current `host`) are handled differently from internal links.

## `ifValue` {#ifvalue}

The function of the helper `ifValue` is to test whether a text equals a specific value. This enables us to conditionally have particular texts (or leave such texts out).

```ts title="Examples for 'ifValue'"
// Input (entry.status): "deprecated"
{{#ifValue entry.status equals="deprecated"}}**Warning**: this term is deprecated!{{/ifValue}}
// output: **Warning**: this term is deprecated!
```
This sequence outputs the text "**Warning**: this term is deprecated!" when the [MRG entry](@) had a `status` field whose value was `deprecated`.
