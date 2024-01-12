---
id: trrt
sidebar_label: TRRT - Term Ref Resolution
date: 20220421
---

# Term Reference Resolution Tool (TRRT)

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Term Ref Resolution Tool ([TRRT](@))** is a [TEv2 text conversion tool](@) that takes files that contain so-called [TermRefs](@) as inputs, and that outputs (a copy of) these files in which these [TermRefs](@) are converted into [renderable refs](@).

While [TermRefs](@) have a [default syntax](/docs/specs/syntax/term-ref-syntax#default), alternative syntaxes can be used by choosing another (predefined) syntax, or creating your own syntax (i.e. an [interpreter](@) that conforms to the [TRRT inpterpreter profile](trrt#interpreter-profile@)) and configuring it for use by the [TRRT](@).

[Renderabe refs](@) do not have a default structure, but there are various predefined ([converters](@)) that can be chosen, specified and subsequently specified for use by the [TRRT](@).

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
  </a>,
~~~

which is code that will render the text `the purpose of actors` as a hyperlink, that, when clicked, will navigate to the `purpose` section of the page that documents (the [semantic unit](@) called) `actor`.

</TabItem>
<TabItem value="html-hovertext">

~~~ html
  <a href="https://essif-lab.github.io/framework/docs/terms/actor#purpose"
     title="Actor: an Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations">
    the purpose of actors
  </a>,
~~~

which is code that will render the text `the purpose of actors` as a hyperlink. When a user hovers over the hyperlink, a popup appears showing the text `Actor: an Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations`. When a user clicks on it, it will navigate to the `purpose` section of the page that documents (the [semantic unit](@) called `actor`.

</TabItem>
<TabItem value="customizing">

By devising one's own [converter](@), it is possible to create arbitrary customized [renderable refs](@). Suppose you have a React component that supports the use of the tags `<Term ...>` and `</Term>`, that support tooltip and linking functionality, you could create a [converter](@) that would produce the following:

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
    {label: 'PowerShell(Windows)', value: 'powershell'},
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

The behavior of the [TRRT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
trrt [ <paramlist> ] [ <globpattern> ]
~~~

where:

- `<paramlist>` is an (optional) list of parameters, as specified in the table below.
- [`globpattern`](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax) (optional) specifies a set of (input) files that are to be processed. If a configuration file is used, its contents may specify an additional set of input files to be processed.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Parameter`** specifies the parameter and further specifications
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter.
3. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

If a configuration file used, the long version of the parameter must be used (without the preceding `--`).
</details>

```mdx-code-block
<APITable>
```

| Parameter                                | Req'd | Description |
| :--------------------------------------- | :---: | :---------- |
| `-V`, `--version`                          | n | output the version number of the tool. |
| `-c`, `--config <path>`                    | n | Path (including the filename) of the tool's (YAML) configuration file. |
| `-o`, `--output <dir>`                     | Y | (Root) directory for output files to be written. |
| `-s`, `--scopedir <path>`                  | Y | Path of the scope directory where the SAF is located. |
| `-int`, `--interpreter <type> or <regex>`  | n | Specifies the [interpreter](@) to be used to detect [TermRefs](@). This can either be a predefined interpreter, or a [regex](@). See [TRRT Converters](#trrt-interpreters) for details.  |
| `-con`, `--converter <type> or <hexpr>`    | n | Specifies the [converter](@) to be used to produce the converted [TermRef](@). This can either be a predefined converter, or a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars). See [TRRT Converters](#trrt-converters) for details.  |
| `-f`, `--force`                            | n | Allow overwriting of existing files. |
| `-h`, `--help`                             | n | display help for command. |

```mdx-code-block
</APITable>
```

## Term Ref Resolution {#what-it-does}

All [text conversion tools](@), including the [TRRT](@), convert (input) text files into results (output text files) by locating particular text patterns, doing some processing, and constructing texts that are used to replace the located text patterns with. This is illustrated in the figure below, and further explained in the page [TEv2 Text Conversion](/docs/overview/tev2-text-conversion):

<p align="center">
<img
  alt="The generic text conversion pattern on which the toolbox is based"
  src={useBaseUrl('images/tev2-text-conversion-pattern.png')}
/><i>Figure 1: The (generic) parts of a Text Conversion</i>
</p>

The following subsections specify the particulars for the [TRRT](@) [interpreter profile](@), its predefined [interpreters](@), the construction of its [converter profile](@) and its predefined [converters](@).

### TRRT Interpreter Profile {#interpreter-profile}

The [interpreter profile](@) of the [TRRT](@) consist of the following [named capturing groups](@):

<details>
  <summary>Legend</summary>

1. **`Group`** name of the [capturing group](named-capturing-group@);
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the [group](named-capturing-group@) is required to have non-empty contents. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning (purpose) for which the contents of the [capturing group](named-capturing-group@) will be used.

</details>

| [Group](named-capturing-group@) | Req'd | Description |
| --------------- | :---: | ----------- |
| `showtext`  | Y | the text in a [TermRef](@) that the author expects to be rendered.  |
| `type`      | n | the [term type](@) of the [semantic unit](@) that `showtext` should refer to. |
| `term`      | n | the [term](@) of the [semantic unit](@) that `showtext` should refer to. |
| `trait`     | n | a text that is expected to correspond with one of the `headingids` in the [MRG entry](@) of the [semantic unit](@) that `showtext` should refer to. |
| `scopetag`  | n | the [scopetag](@) that [identifies](@) the [scope](@) that [curates](@) the [semantic unit](@) that `showtext` should refer to. |
| `vsntag`    | n | a [versiontag](@) that [identifies](@) the [terminology](@) that contains the [semantic unit](@) that `showtext` should refer to. |

:::info
Note that the names of some of these [capturing groups](@) do not correspond 1-1 with the names of [moustache variables](@) in the [converter profile](@) of the [TRRT](@). 
:::

### TRRT Predefined Interpreters {#predefined-interpreters}

The following sections specify the predefined [intepreters](@) for the [TRRT](@).

#### The `default` Interpreter {#default-syntax}

The most general form of the `default` [interpreter](@) syntax is:

\[ `show text` \]( `termType`:`term`#`trait`@`scopetag`:`vsntag` )

where: 
- `show text` (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters `@` or `]` (this is needed to distinguish [TermRefs](@) from regular [markdown links](https://www.markdownguide.org/basic-syntax/#links)).
- `termType` (optional) is a [term type](@). It need not be specified if the `term` field is (already) a unique [identifier](@) for the [semantic unit](@) that is being refered to.
- `term` (optional) is a [term](@). It need not be specified if the [term](@) can be derived from the `showtext`, as specified in the section on [Finding an MRG Entry](#finding-mrg-entry) (bullet 2.ii).
- `trait` (optional) refers to a particular characteristic of the [semantic unit](@). It need not be specified if the reference is not to a particular characteristic. If it is specified, it must be a [heading id](https://www.markdownguide.org/extended-syntax/#heading-ids) of the section in the [body](@) of a [curated text](@) that describes the characteristic.
- `scopetag`:`vsntag` (optional) is a [terminology-identifier](@). If not specified, its value is taken to be the default [terminology](@) of the [current scope](@).

For completeness, here is the [regex] that defines the `default` [interpreter](@) for the [TRRT](@):

~~~ regex
(?:(?<=[^`\\])|^)\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))(?<showtext>[^\n\]@]+)\]\((?:(?:(?<type>[a-z0-9_-]*):)?)(?:(?<id>[a-z0-9_-]*)?(?:#(?<trait>[a-z0-9_-]*))?)?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]*))?\)
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

For completeness, here is the [regex] that defines the `alt` [interpreter](@) for the [TRRT](@):

~~~ regex
(?:(?<=[^`\\])|^)\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)(?<showtext>[^\n\]@]+?)@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]*?))?\](?:\((?:(?:(?<type>[a-z0-9_-]+):)?)(?<id>[a-z0-9_-]*)(?:#(?<trait>[a-z0-9_-]*?))?\))
~~~

### Processing {#processing}

The purpose of the [TRRT](@) is to allow source texts to contain [TermRefs](@) that refer to a [semantic unit](@), and convert them into [renderable refs](@) that exhibit more information about such [semantic units](@). 

To do that, the [TRRT](@) uses the [interpreter](@) to locate subsequent [TermRefs](@) in its input files, and for each of them, processes the [named capturing groups](@) that the [interpreter](@) populates. Then, it will attempt to find the [MRG entry](@) that documents the [semantic unit](@) to which the [term ref](@) refers. When found (without ambiguities), it will populate [moustache variables](@) as specified in its [converter profile](@), and use the specified [converter](@) to produce the text by which the [TermRef](@) will be replaced.

#### Finding the [MRG entry](@) associated with a [TermRef](@) {#finding-mrg-entry}

1. Get the [MRG](@) file that is expected to contain the [MRG entry](@), by resolving the [terminology identifier](@) that consists of the [named capturing groups](@) `scopetag`:`vsntag`. Note that if `scopetag` wasn't populated, the [default scope](@) is assumed, and if `vsntag` isn't populated, the default version is used.
2. Locate the [MRG entry](@) in this [MRG](@), using the values of the [named capturing groups](@) `termtype` and `term`, as follows:
    1. Initialize this step by selecting all [MRG entries](@) from the [MRG](@) (the idea is to limit the number of selected entries step by step, until there is no more than one).
    2. Process the [named capturing groups](@), as follows:
        1. If `termtype` is specified, then remove all [entries](mrg-entry@) except those whose `termtype` field equals the specified value of `termtype`;
        2. Remove all [entries](mrg-entry@) except those that produce a match according to the following process:
            1. normalize the text in the [named capturing group](@) `term`, or, if that is not specified, the [named capturing group](@) `showtext`, as follows:
                1. convert the text to lowercase;
                3. remove any leading and/or trailing spaces.
            2. there is a match with an [MRG entry](@) if the result of this conversion is either a [form phrase](@) that appears in the `formPhrases` field of that [MRG entry](@), or if the result matches the `term` field of that [MRG entry](@).[^1]
        3. If the remaining set of [entries](mrg-entry@) includes more than one element, then keep only the [entries](mrg-entry@) whose `termType` field contains the value specified by the `defaulttype` field as specified in the [terminology section](/docs/specs/files/mrg#terminology) of the [MRG](@).
3. If the remaining set of [entries](mrg-entry@) is either empty (not found), or contains multiple [entries](mrg-entry@) (ambiguous [TermRef](@)), an appropriate exception must be raised (and logged), and conversion of (only!) this [TermRef](@) is discontinued
4. If the remaining set of [entries](mrg-entry@) contains precisely one element, its fields will be made available as [moustache variables](@) for further processing by the [converter](@).

[^1]: Matching with the `term` field enables one to specify [form phrases](@) that include a space, yet use a `term` that has replaced the space with a `-`.

:::info Editor's note
[The Porter Stemming Algorithm](https://tartarus.org/martin/PorterStemmer/) is a process for removing the commoner morphological and inflexional endings from words in English. Its main use is as part of a term normalisation process that is usually done when setting up Information Retrieval systems. The mentioned site links to lots of freely useable code that the TRRT might want to consider using.

Perhaps the [TRRT](@) may use this tool as a means for generating the `term` field from the `showtext` if necessary. However, we would need to first experiment with that to see whether or not, c.q. to what extent this conversion does what it is expected to do.
:::

### TRRT Converter Profile {#converter-profile}

The [converter profile](@) of the [TRRT](@) consists of a set of [moustache variables](@) that are populated from the following sources:

- the [named capturing groups](@) as specified by the [interpreter profile](@) of the [TRRT](@). Since only the [named capturing groups](@) `showtext` and `trait` are useful for a [converter](@), they are made available as [moustache variables](@) `{{showtext}}` and `{{trait}}` respectively.

- the fields in the [MRG entry](@) of the [semantic unit](@) that the [term ref](@) refers to. Each of the fields in that [MRG entry](@) is available as a [moustache variable](@).Note that [MRG entries](@) may have fields that are not required by the [TEv2](@) specifications, but by the [curator(s)](@) of the [terminology](@) to which the such [MRG entries](@) belong. For example, the [curator(s)](@) of the [TEv2](@) [terminologies](@) have specified that [MRG entries](@) could have the fields `glossaryTerm` and `glossaryText`. These fields are then also available as [moustache variables](@) as part of the [converter profile](@) for the [TRRT](@). 

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

The `markdown-link` [converter](@) is defined by the following [handlebars expression](@):

~~~ ts
 [{{showtext}}]({{navurl}}{{#if trait}}#{{trait}}{{/if}})
~~~

</TabItem>

<TabItem value="html-link">

#### The `html-link` Converter

The `html-link` [converter](@) is defined by the following [handlebars expression](@):

~~~ html
 <a href="{{navurl}}{{#if trait}}#{{trait}}{{/if}}">{{showtext}}</a>
~~~

</TabItem>

<TabItem value="html-hovertext-link">

#### The `html-hovertext-link` Converter

The `html-hovertext-link` [converter](@) is defined by the following [handlebars expression](@) (newlines and whitespaces have been added for better readability, and should be ignored):

~~~ html
 <a href="{{localize navurl}}{{#if trait}}#{{trait}}{{/if}}"
    title="{{#if hoverText}}{{hoverText}}{{else}}{{#if glossaryTerm}}{{glossaryTerm}}
           {{else}}{{capFirst term}}
           {{/if}}: {{noRefs glossaryText type='markdown'}}{{/if}}"
  >{{showtext}}</a>
~~~

This [converter](@) uses the following functions:
- `localize`: converts the URL of its argument (i.e., `navurl`) with a (shorter) version in case the resource is located on the same site.
- `capFirst`: capitalizes the first character of every word found in its argument.
- `noRefs`: replaces every [term ref](@) (default syntax) that it finds in the text of its argument (i.e., in the `glossaryText`) with `{{capFirst showtext}}`.

</TabItem>

<TabItem value="html-glossarytext-link">

#### The `html-glossarytext-link` Converter

The `html-glossarytext-link` [converter](@) is defined by the following [handlebars expression](@) (newlines and whitespaces have been added for better readability, and should be ignored):

~~~ html
 '<a href="{{localize navurl}}{{#if trait}}#{{trait}}{{/if}}"
     title="{{capFirst term}}: {{noRefs glossaryText type='markdown'}}"
     >{{showtext}}</a>'
~~~

This [converter](@) uses the following functions:
- `localize`: converts the URL of its argument (i.e., `navurl`) with a (shorter) version in case the resource is located on the same site.
- `capFirst`: capitalizes the first character of every word found in its argument.
- `noRefs`: replaces every [term ref](@) (default syntax) that it finds in the text of its argument (i.e., in the `glossaryText`) with `{{capFirst showtext}}`.

</TabItem>

</Tabs>

-----

## Processing, Errors and Warnings

The [TRRT](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalid conditions include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [TRRT](@) reads the specified input files (in arbitrary order), and for each of them, produces an output file that is the same as the input file except for the fact that all [TermRefs](@) have been replaced with regular [markdown links](https://www.markdownguide.org/basic-syntax/#links), and (optionally) with additional texts that are to be used by third-party rendering tools for enhanced rendering of such links. An example of this would be text that can be used to enhance a link with a popup that contains the definition, or a description of the [term](@) that is being referenced.

The [TRRT](@) logs every error- and/or warning condition that it comes across while processing its configuration file, command-line parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [TRRT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.
