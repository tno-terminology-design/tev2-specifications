---
id: trrt
sidebar_label: TRRT - Term Ref Resolution
date: 20220421
---

# Term Reference Resolution Tool (TRRT)

import useBaseUrl from '@docusaurus/useBaseUrl'
import APITable from '@site/src/components/APITable';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Term Ref Resolution Tool ([TRRT](@))** is a [TEv2 text conversion tool](@). It takes files that contain so-called [TermRefs](@) as inputs, and  outputs (a copy of) these files in which these [TermRefs](@) are converted into [renderable refs](@).

While [TermRefs](@) have a [default syntax](/docs/specs/syntax/term-refs#default), alternative (predefined) syntaxes are available for use. Alternative [syntaxes](interpreters@) can be defined that conform to the [TRRT interpreter profile](trrt#interpreter-profile@). They can be used by configuring them as the [interpreter](@) of choice for the [TRRT](@) (as a command-line parameter, or in the [configuration file](/docs/specs/files/configuration-file) that the [TRRT](@) uses).

[Renderable refs](@) do not have a default structure. They are constructed by so-called [converters](@), of which a number are [predefined](#predefined-converters). The [converter](@) of choice must be configured for use, by specifying it as a command-line parameter or in the [configuration file](/docs/specs/files/configuration-file) that the [TRRT](@) uses.

<details>
  <summary>Examples of TermRef conversions</summary>

Consider the [TermRef](@) `[the purpose of actors](actor#purpose@essif-lab)`. The following table shows some of the predefined methods that they can be converted into:

<Tabs
  defaultValue="markdown"
  values={[
    {label: 'Markdown', value: 'markdown'},
    {label: 'HTML', value: 'html'},
    {label: 'HTML with hovertext', value: 'html-hovertext'},
    {label: 'Customizing', value: 'customizing'},
  ]}>

<TabItem value="markdown">

~~~ markdown
[the purpose of actors](https://essif-lab.github.io/framework/docs/terms/actor#purpose)
~~~

which is text that a markdown [interpreter](@) will render into a text `the purpose of actors` that hyperlinks to the path `https://essif-lab.github.io/framework/docs/terms/actor#purpose`.

</TabItem>
<TabItem value="html">

~~~ html
<a href="https://essif-lab.github.io/framework/docs/terms/actor#purpose">
  the purpose of actors
</a>
~~~

which is code that will render the text `the purpose of actors` as a hyperlink, that, when clicked, will navigate to the `purpose` section of the page that documents (the [semantic unit](@) called) `actor`.

</TabItem>
<TabItem value="html-hovertext">

~~~ html
<a href="https://essif-lab.github.io/framework/docs/terms/actor#purpose"
    title="Actor: an Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations">
  the purpose of actors
</a>
~~~

which is code that will render the text `the purpose of actors` as a hyperlink. When a user hovers over the hyperlink, a popup appears showing the text `Actor: an Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations`. When a user clicks on it, it will navigate to the `purpose` section of the page that documents the [semantic unit](@) called `actor`.

</TabItem>
<TabItem value="customizing">

By devising one's own [converter](@), it is possible to create arbitrary customized [renderable refs](@). Suppose you have a React component that supports the use of the tags `<Term ...>` and `</Term>` that support tooltip and linking functionality. You could create a [converter](@) that would produce the following:

~~~ html
<Term popup="An Actor is someone or something that can act, i.e. actually do things, execute actions, such as people or machines." reference="actor">
  the purpose of actors
</Term>
~~~

</TabItem>
</Tabs>

</details>

## Installing the Tool {#install}

The tool can be installed from the command line and made globally available by executing

~~~
npm install -g @tno-terminology-design/trrt
~~~

<details>
  <summary>Before running the tool from the command line, make sure you have met the necessary prerequisites depending on your operating environment.</summary>

<Tabs
  defaultValue="cmd.exe"
  values={[
    {label: 'CMD.exe (Windows)', value: 'cmd.exe'},
    {label: 'PowerShell (Windows)', value: 'powershell'},
    {label: 'Bash (Linux/Mac)', value: 'bash'},
  ]}>

<TabItem value="cmd.exe"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: If you have installed the package globally, confirm the global NPM modules path by running `npm config get prefix`. The global modules are usually stored under `<prefix>/node_modules`.
3. **Environment Variables**: Add the path to global NPM binaries to your system's PATH environment variable. This should be `<prefix>` on Windows. To add to PATH, you can edit your environment variables or run `set PATH=%PATH%;<prefix>` in the CMD.

</TabItem>
<TabItem value="powershell"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: Check the global NPM modules path as in CMD.
3. **Environment Variables**: Update the PATH environment variable as in CMD. You can also use `$env:Path += ";<prefix>"` to update the PATH temporarily in the current PowerShell session.

</TabItem>
<TabItem value="bash"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: If globally installed, run `npm config get prefix` to get the global modules path, usually `<prefix>/lib/node_modules`.
3. **Environment Variables**: Add the `<prefix>/bin` directory to your `PATH` if it's not already. You can do this by adding `export PATH=$PATH:<prefix>/bin` to your `~/.bashrc` or `~/.zshrc` file.

</TabItem>
</Tabs>
</details>

## Calling the Tool {#calling-the-tool}

The behavior of the [TRRT](@) can be configured per call e.g. by a [configuration file](/docs/specs/files/configuration-file) and/or command line parameters. The command line syntax is as follows:

~~~
trrt [ <paramlist> ] [ <globpattern> ]
~~~

where:

- `<paramlist>` is an (optional) list of parameters, as specified in the table below.
- [`globpattern`](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax) (optional) specifies a set of (input) files that are to be processed. If a [configuration file](/docs/specs/files/configuration-file) is used, its contents may specify an additional set of input files to be processed.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Parameter`** specifies the parameter and further specifications
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If required, it MUST either be present in the [configuration file](/docs/specs/files/configuration-file), or as a command line parameter.
3. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

If a [configuration file](/docs/specs/files/configuration-file) is used, the long version of the parameter must be used (without the preceding `--`).
</details>

```mdx-code-block
<APITable>
```

| Parameter                                | Req'd | Description |
| :--------------------------------------- | :---: | :---------- |
| `-V`, `--version`                          | n | Output the version number of the tool. |
| `-c`, `--config <path>`                    | n | Path (including the filename) of the tool's (YAML) [configuration file](/docs/specs/files/configuration-file). |
| `-o`, `--output <dir>`                     | Y | (Root) directory for output files to be written. |
| `-s`, `--scopedir <path>`                  | Y | Path of the scope directory where the SAF is located. |
| `-int`, `--interpreter <type> or <regex>`  | n | Specifies the [interpreter](@) to be used to detect [TermRefs](@). This can either be a predefined interpreter, or a [regex](@). See [TRRT Interpreters](#trrt-interpreters) for details. |
| `-con[n]`, `--converter[n] <type> or <hexpr>`[^1] | n | Specifies the [converter](@) to be used to produce the converted [TermRef](@). This can either be a predefined converter, or a [handlebars template](@). See [TRRT Converters](#trrt-converters) for details.  |
| `-con[error]`, `--converter[error] <type> or <hexpr>` | n | Specifies the [converter](@) to be used to produce the converted [TermRef](@) in case of an error. This can either be a predefined converter, or a [handlebars template](@). See [TRRT Converters](#trrt-converters) for details.  |
| `-f`, `--force`                            | n | Allow overwriting of existing files. |
| `-h`, `--help`                             | n | Display help for command. |

[^1]: Multiple converters may be specified by appending a number to the parameter key, e.g., `converter[1]: <template1>` `converter[2]: <template2>`, where `<template<n>>` is a predefined converter or a [handlebars template](@). You MUST specify `converter[1] <template1>` (or `converter <template1>`, which is equivalent). You MAY specify one or more `converter[<n>]`s, where `<n>` is any number. The [TRRT](@) keeps track of the number of times a [TermRef](@) was used for some [termid](@). When the [TRRT](@) converts a [TermRef](@) for a particular [termid](@) for the `<n>`th time, it will use the converter as specified in parameter `converter[<n>]`, or, if that does not exist, it will use the converter that it used for the `<n-1>`th conversion.

```mdx-code-block
</APITable>
```

## Term Ref Resolution {#what-it-does}

All [text conversion tools](@), including the [TRRT](@), convert (input) text files into results (output text files) by locating particular text patterns, doing some processing, and constructing texts that are used to replace the located text patterns. This process is illustrated in the figure below, and further explained in the page [TEv2 Text Conversion](/docs/overview/tev2-text-conversion):

<p align="center">
<img
  alt="The generic text conversion pattern on which the toolbox is based"
  src={useBaseUrl('images/tev2-text-conversion-pattern.png')}
/><i>Figure 1: The (generic) parts of a Text Conversion</i>
</p>

The following subsections specify the particulars of the [TRRT](@): the [interpreter profile](@), its predefined [interpreters](@), the intermediate processing, the construction of its [converter profile](@) and its predefined [converters](@).

### TRRT Interpreter Profile {#interpreter-profile}

The [interpreter profile](@) of the [TRRT](@) consists of the following [named capturing groups](@) that are to be populated by the [predefined interpreters](#predefined-interpreters), as well as by any custom [interpreter](@).

<details>
  <summary>Legend</summary>

1. **`Group`** name of the [capturing group](named-capturing-group@);
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the [group](named-capturing-group@) is required to have non-empty contents. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning (purpose) for which the contents of the [capturing group](named-capturing-group@) will be used.

</details>

| [Group](named-capturing-group@) | Req'd | Description |
| --------------- | :---: | ----------- |
| `showtext`  | Y | The text in a [TermRef](@) that the author expects to be rendered.  |
| `type`      | n | The [term type](@) of the [semantic unit](@) that is referred to. |
| `term`      | n | The [term](@) of the [semantic unit](@) that is referred to. |
| `trait`     | n | A text that is expected to correspond with one of the `headingids` in the [MRG entry](@) of the [semantic unit](@) that is referred to. |
| `scopetag`  | n | The [scopetag](@) that identifies the [scope](@) that [curates](@) the [semantic unit](@) that is referred to. |
| `vsntag`    | n | A [versiontag](@) that identifies the [terminology](@) that contains the [semantic unit](@) that is referred to. |

:::info
Note that the values of these specified [capturing groups](@) will be [regularized](regularize@) before they are used for [processing](#processing).
:::

### TRRT Predefined Interpreters {#predefined-interpreters}

The following sections specify the [interpreters](@) that are predefined for the [TRRT](@).

#### The `default` Interpreter {#default-syntax}

The most general form of the `default` [interpreter](@) syntax is:

\[`show text`\](`termType`:`term`#`trait`@`scopetag`:`vsntag`)

where: 
- `show text` (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters `@` or `]` (this is needed to distinguish [TermRefs](@) from regular [markdown links](https://www.markdownguide.org/basic-syntax/#links)).
- `termType` (optional) is a [term type](@). It need not be specified if the `term` field is (already) a unique identifier for the [semantic unit](@) that is being refered to.
- `term` (optional) is a [term](@). It need not be specified if the [term](@) can be derived from the `showtext`, as specified in the section on [Finding an MRG Entry](#finding-mrg-entry) (bullet 2.ii).
- `trait` (optional) refers to a particular characteristic of the [semantic unit](@). It need not be specified if the reference is not to a particular characteristic. If it is specified, it must be a [heading id](https://www.markdownguide.org/extended-syntax/#heading-ids) of the section in the [body](@) of a [curated text](@) that describes the characteristic.
- `scopetag`:`vsntag` (optional) is a [terminology-identifier](@). If not specified, its value is taken to be the default [terminology](@) of the [current scope](@).

For completeness, below is the [regex](@) that defines the `default` [interpreter](@) for the [TRRT](@).

~~~ regex
(?:(?<=[^`\\])|^)\[(?=[^@\n\]]+\]\([^@)]*@[:a-z0-9_-]*\))(?<showtext>[^@\n\]]+)\]\((?:(?:(?<type>[a-z0-9_-]*):)?)(?:(?<term>[^@\n:#)]*?)?(?:#(?<trait>[^@\n:#)]*))?)?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]*))?\)
~~~

#### The `alt` (alternative) Interpreter {#alt-syntax}

It is convenient for [authors](@) to be able to use the '@`scopetag`' part of a (`default`) [TermRef](@) immediately behind the `show text` within the square brackets (`[` and `]`), and leave out the parentheses and the text in between if all the other items are omitted.

This is particularly useful in the vast majority of cases, where the default processing of `showtext` results in `term` and `trait` is absent. Examples of this are `[definition](@)`, or `[TermRef](@)`.

The usefulness becomes even greater as the [TRRT](@) also implements more sophisticated ways to derive a `term` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).

:::info
This alternative notation will assume that the `showtext` part of a [TermRef](@) won't contain the `@` character. However, it is likely that some [authors](@) will want to use an email address as the `showtext` part of a *regular* link, e.g. as in `[rieks.joosten@tno.nl](mailto:rieks.joosten@tno.nl)`. However, since [scopetags](@) should not contain `.`-characters, `[rieks.joosten@tno.nl]` does not qualify as a `showtext` in our syntax. [Authors](@) should [use angle brackets to link to email addresses](https://www.markdownguide.org/basic-syntax/#urls-and-email-addresses), as in `<rieks.joosten@tno.nl>`.
:::

This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:

| `alt` syntax | Equivalent `default` syntax |
| :----------------: | :-----------------------: |
| \[`show text`@\] | \[`show text`\](@) |
| \[`show text`@`scopetag`\] | \[`show text`\](`showtext`@`scopetag`) |
| \[`show text`@`scopetag`:`vsntag`\](`term`#`trait`) | \[`show text`\](`term`#`trait`@`scopetag`:`vsntag`) |

In the last row of the above table, `term` and `#trait` are optional. Thus, `[definition@]()` is equivalent with the `alt` syntax `[definition@]` and with the `default` syntax `[definition](@)`.

For completeness, below is the [regex](@) that defines the `alt` [interpreter](@) for the [TRRT](@).

~~~ regex
(?:(?<=[^`\\])|^)\[(?=[^@\n\]]+?@[:a-z0-9_-]*\](?:\([#:a-z0-9_-]+\))?)(?<showtext>[^@\n\]]+?)@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]*?))?\](?:\((?:(?:(?<type>[a-z0-9_-]+):)?)(?<term>[^@\n:#)]*?)(?:#(?<trait>[^@\n:#)]+?))?\))?
~~~

### Interpreter Customization {#interpreter-customization}

It may happen that an [interpreter](@) is needed that is not predefined. Fortunately, [interpreters](@) can be added by specifying a [regex](@) that populates the [named capturing groups](@) as specified by the [interpreter profile](trrt#interpreter-profile@).

This [regex](@) can be specified:
- as a [command-line argument](trrt#-int@)
- in (the `trrt`-section of) the [configuration file](/docs/specs/files/configuration-file) that the [TRRT](@) is specified to use.

:::info Editor's note
In future, it may become possible to specify [interpreters](@) and [converters](@) in the [SAF](@), in whcih case they will have a name that will then be required for identifying an [interpreter](@) or [converter](@) of one's choice.
:::

### Processing {#processing}

The purpose of the [TRRT](@) is to allow input texts to contain [TermRefs](@) that refer to a [semantic unit](@), and convert them into [renderable refs](@) that exhibit more information about such [semantic units](@). 

To do that, the [TRRT](@) uses the [interpreter](@) to locate subsequent [TermRefs](@) in its input files, and for each of them, processes the [named capturing groups](@) that the [interpreter](@) populates. Then, it will attempt to find the [MRG entry](@) that documents the [semantic unit](@) to which the [term ref](@) refers. When found (without ambiguities), it will populate [moustache variables](@) as specified in its [converter profile](@), and use the specified [converter](@) to produce the text by which the [TermRef](@) will be replaced.

#### Finding the [MRG entry](@) associated with a [TermRef](@) {#finding-mrg-entry}

1. Get the [MRG](@) file that is expected to contain the [MRG entry](@), by resolving the [terminology identifier](@) that consists of the [named capturing groups](@) `scopetag`:`vsntag`. Note that if `scopetag` wasn't populated, the [current scope](@) is assumed, and if `vsntag` isn't populated, the default version is used.
2. Locate the [MRG entry](@) in this [MRG](@), using the values of the [named capturing groups](@) `termtype` and `term`, as follows.
    1. Initialize this step by selecting all [MRG entries](@) from the [MRG](@) (the idea is to limit the number of selected entries step by step, until there is no more than one).
    2. Process the [named capturing groups](@), as follows.
        1. If `termtype` is specified, then remove all [entries](mrg-entry@) except those whose `termtype` field equals the specified value of `termtype`.
        2. Remove all [entries](mrg-entry@) except those that produce a match according to the following process:
            1. normalize the text in the [named capturing group](@) `term`, or, if that is not specified, the [named capturing group](@) `showtext`, as follows:
                1. convert the text to lowercase;
                3. remove any leading and/or trailing spaces.
            2. there is a match with an [MRG entry](@) if the result of this conversion is either a [form phrase](@) that appears in the `formPhrases` field of that [MRG entry](@), or if the result matches the `term` field of that [MRG entry](@).[^2]
        3. If the remaining set of [entries](mrg-entry@) includes more than one element, then keep only the [entries](mrg-entry@) whose `termType` field contains the value specified by the `defaulttype` field as specified in the [terminology section](mrg#terminology@) of the [MRG](@).
3. If the remaining set of [entries](mrg-entry@) is either empty (not found), or contains multiple [entries](mrg-entry@) (ambiguous [TermRef](@)), an appropriate exception must be raised (and logged), and conversion of (only!) this [TermRef](@) is discontinued.
4. If the remaining set of [entries](mrg-entry@) contains precisely one element, its fields will be made available as [moustache variables](@) for further processing by the [converter](@).

[^2]: Matching with the `term` field enables one to specify [form phrases](@) that include a space, yet use a `term` that has replaced the space with a `-`.

:::info Editor's note
[The Porter Stemming Algorithm](https://tartarus.org/martin/PorterStemmer/) is a process for removing the commoner morphological and inflexional endings from words in English. Its main use is as part of a term normalisation process that is usually done when setting up Information Retrieval systems. The mentioned site links to lots of freely useable code that the TRRT might want to consider using.

Perhaps the [TRRT](@) may use this tool as a means for generating the `term` field from the `showtext` if necessary. However, we would need to first experiment with that to see whether or not, c.q. to what extent this conversion does what it is expected to do.
:::

#### Using Converters {#trrt-converters}

The [TRRT](@) requires its users to specify at least one [converter](@), yet allows it to specify multiple ones. Optionally, a [converter](@) can be specified (using the `-con[error]` option) that will be used when a [TermRef](@) could not be resolved to an [MRG entry](@).

##### Using Multiple Converters

When specifying multiple [converters](@) they should be numbered, e.g., as in `converter[1]`, `[converter[2]`, etc. The [section on calling parameters](#calling-the-tool) tells you how such [converters](@) are to be specified.

The [TRRT](@) keeps track of the number of times a [TermRef](@) is referring to particular [semantic units](@) (i.e., when it resolves to a particular [termid](@)). So for every [TermRef](@) it converts within a file that it is processing, there is a number `<n>` (that the [TRRT](@) keeps track of) that says that this is the `<n>`th time that the [semantic unit](@) is being referred to. 

So for `<n>`=1, the [TRRT](@) uses `converter[1]`. When `<n>`=`<m>` (`<m>`>`<n>`), then the [TRRT](@) uses `converter[<m>]` if that were specified. If it wasn't specified it uses the [converter](@) that it used for `<n>`=`<m>`-1.

So, if you want to use an elaborate conversion for the first occurrence of a [term](@) in your document, and a simpler conversion for any of the following ones, you should specify `converter[1]` as the [converter](@) that does the elaborate things, and `converter[2]` as one that does the simpler conversions.

##### Error Converter {#error-converter}

Whenever a [TermRef](@) is identified, yet cannot be resolved to an [MRG entry](@), this results in an error message being logged. Also, the [TermRef](@) itself isn't changed.

However, in such cases, users of the [TRRT](@) may want to do particular conversions with the [TermRef](@). For example, the [TermRef](@) might need to be highlighted, or it may need to be turned into regular text (without any particular markup).

Here is an examples for a [converters](@) that can be used to remove the reference itself, and create (an additional) log line:

```markdown
"{{ref.showtext}}{{log 'TRRT error converter:' err.dir '/' err.file '@' err.line ':' err.pos '[' ref.showtext ']' level='warn'}}"
```

Whenever a [TermRef](@) cannot be resolved this [converter](@) will replace the [TermRef](@) with the `showtext` text, and output a line in the tool's log saying:

```txt
TRRT error converter: <path>/<file>@<line><pos> [<showtext>]
```

thereby providing all information users will need to see wehre undefined references are being used.

### TRRT Converter Profile {#converter-profile}

The [converter profile](@) of the [TRRT](@) specifies the structure of the [data objects](handlebars-object@) that its [converters](@) can use, i.e., in which its [converters](@) find the actual (context dependent) data that they need to produce a [renderable ref](@).

The [TRRT](@) [converter profile](@) contains the [specifications for the data object](converter-profile#object-spec@) that the [converters](@) used by the [TRRT](@) can use. This says that such [converters](@) know:

1. the [interpreter](@) that is used (i.e., its name as well as the [regex](@)).
2. the values of each of the [named capturing groups](@), as defined by the [TRRT](@) [interpreter profile](#interpreter-profile), and populated by that [interpreter](@).
3. all fields in the [MRG entry](@) of the [term](@) that was referenced - that is: if it was found.
4. all fields from the [terminology section](mrg#terminology@) of the [mrg](@) from which the [MRG entry](@) was taken.
5. various fields that can be used to construct logging/error messages, such as the filename, linenumber etc. of the [TermRef](@).

### TRRT Predefined Converters {#predefined-converters}

The following tabs specify the predefined [converters](@) for the [TRRT](@).

<Tabs
  values={[
    {label: 'markdown-link',          value: 'markdown-link'},
    {label: 'html-link',              value: 'html-link'},
    {label: 'html-hovertext-link',    value: 'html-hovertext-link'},
    {label: 'html-glossarytext-link', value: 'html-glossarytext-link'},
  ]}>

<TabItem value="markdown-link">

#### The `markdown-link` Converter

The `markdown-link` [converter](@) is defined by the following [handlebars template](@).

~~~ ts
[{{showtext}}]({{navurl}}{{#if trait}}#{{trait}}{{/if}})
~~~

</TabItem>

<TabItem value="html-link">

#### The `html-link` Converter

The `html-link` [converter](@) is defined by the following [handlebars template](@).

~~~ ts
<a href="{{navurl}}{{#if trait}}#{{trait}}{{/if}}">{{showtext}}</a>
~~~

</TabItem>

<TabItem value="html-hovertext-link">

#### The `html-hovertext-link` Converter

The `html-hovertext-link` [converter](@) is defined by the following [handlebars template](@) (newlines and whitespaces have been added for better readability, and should be ignored).

~~~ ts
<a href="{{localize navurl}}{{#if trait}}#{{trait}}{{/if}}" 
  title="{{#if hoverText}}
           {{hoverText}}
         {{else}}
           {{#if glossaryTerm}}
             {{glossaryTerm}}
           {{else}}
             {{capFirst term}}
           {{/if}}
           : {{noRefs glossaryText type='markdown'}}
         {{/if}}"
>{{showtext}}</a>
~~~

This [converter](@) uses the following functions.
- `localize`: converts the URL of its argument (i.e., `navurl`) with a (shorter) version by removing the protocol and host parts in case the resource is located on the same site.
- `capFirst`: capitalizes the first character of every word found in its argument.
- `noRefs`: replaces every reference (in this case all markdown links) that it finds in the text of its argument (i.e., in the `glossaryText`) with `{{capFirst showtext}}`.

</TabItem>

<TabItem value="html-glossarytext-link">

#### The `html-glossarytext-link` Converter

The `html-glossarytext-link` [converter](@) is defined by the following [handlebars template](@) (newlines and whitespaces have been added for better readability, and should be ignored):

~~~ ts
<a href="{{localize navurl}}{{#if trait}}#{{trait}}{{/if}}"
    title="{{capFirst term}}: {{noRefs glossaryText type='markdown'}}"
  >{{showtext}}
</a>
~~~

This [converter](@) uses the following functions.
- `localize`: converts the URL of its argument (i.e., `navurl`) with a (shorter) version by removing the protocol and host parts in case the resource is located on the same site.
- `capFirst`: capitalizes the first character of every word found in its argument.
- `noRefs`: replaces every reference (in this case all markdown links) that it finds in the text of its argument (i.e., in the `glossaryText`) with `{{capFirst showtext}}`.

</TabItem>

</Tabs>

-----

### Converter Customization {#converter-customization}

It may happen that a [converter](@) is needed that is not predefined. Fortunately, [converters](@) can be added by specifying a [handlebars template](@) that constructs the [renderable refs](@) that are to replace the [TermRefs](@), based on the [converter profile](#converter-profile) of the [TRRT](@). Examples are given in the section about [predefined converters](#predefined-converters)

A [converter](@) can be specified:
- as a [command-line argument](hrgt#-con@)
- in (the `hrgt`-section of) the [configuration file](/docs/specs/files/configuration-file) that the [HRGT](@) is specified to use.

:::info Editor's note
In future, it may become possible to specify [interpreters](@), [converters](@) and [sorters](@) in the [SAF](@), in whcih case they will have a name that will then be required for identifying an [interpreter](@), [converter](@), or [sorter](@) of one's choice.
:::

## Errors and Warnings

The [TRRT](@) starts by reading its command line and optional [configuration file](/docs/specs/files/configuration-file). If the command line has a key that is also found in the [configuration file](/docs/specs/files/configuration-file), the command line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalid conditions include non-existing directories or files, lack of write-permissions where needed, etc.

The [TRRT](@) logs every error- and/or warning condition that it comes across while processing its [configuration file](/docs/specs/files/configuration-file), command line parameters, and input files, in a way that helps tool operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [TRRT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.
