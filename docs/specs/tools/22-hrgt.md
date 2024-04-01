---
id: hrgt
sidebar_label: HRGT - HRG Generation
date: 20220421
---

# Human Readable Glossary Generator Tool (HRGT)

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Human Readable Glossary Generator Tool ([HRGT](@))** is a [TEv2 text conversion tool](@) that takes files that contain so-called [MRGRefs](@) as inputs, and that outputs (a copy of) these files in which these [MRGRefs](@) are converted into [hrg-lists](@), i.e. lists of alphabetically sorted [HRG entries](@) that can be further processed by tools such as the [TRRT](@), as well as rendering tools such as GitHub pages, Docusaurus, etc.

While [MRGRefs](@) have a [default syntax](/docs/specs/syntax/term-refs), alternative syntaxes can be used by choosing (or specifying) the [interpreter](@) that the [HRGT](@) should be using.

[Hrg-lists](@) do not have a default structure, but there are various [predefined converters](#predefined-converters) (and [sorters](#predefined-sorters)) that can be chosen (or specified) for the [HRGT](@) to use.

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install -g @tno-terminology-design/hrgt
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

## Calling the Tool

The behavior of the [TRRT](@) can be configured per call e.g. by a [configuration file](/docs/specs/files/configuration-file) and/or command line parameters. The command line syntax is as follows:

~~~
hrgt [ <paramlist> ] [ <globpattern> ]
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

If a [configuration file](/docs/specs/files/configuration-file) used, the long version of the parameter must be used (without the preceding `--`).
</details>

| Parameter                                | Req'd | Description |
| :--------------------------------------- | :---: | :---------- |
| `-V`, `--version`                          | n | output the version number of the tool. |
| `-c`, `--config <path>`                    | n | Path (including the filename) of the tool's (YAML) [configuration file](/docs/specs/files/configuration-file). |
| `-o`, `--output <dir>`                     | Y | (Root) directory for output files to be written. |
| `-s`, `--scopedir <path>`                  | Y | Path of the scope directory where the SAF is located. |
| `-int`, `--interpreter <type> or <regex>`  | n | Specifies the [interpreter](@) to be used to detect [MRGRefs](@). This can either be a predefined interpreter, or a [regex](@). |
| `-con[n]`, `--converter[n] <type> or <hexpr>`[^1] | n | Specifies the [converter](@) to be used to produce [HRG lists](@). This can either be a predefined converter, or a [handlebars template](@). See [HRGT Converters](#hrgt-converters) for details.  |
| `-con[error]`, `--converter[error] <type> or <hexpr>` | n | Specifies the [converter](@) to be used to replace the [MRGRef](@) with in case the associated [MRG](@) file could not be found. |
| `-sort`, `--sort <type> or <hexpr>`        | n | Specifies the value to be used to sort [HRG lists](@). This can either be a predefined value, or a [handlebars template](@). |
| `-f`, `--force`                            | n | Allow overwriting of existing files. |
| `-h`, `--help`                             | n | display help for command. |

[^1]: Multiple converters may be specified by appending a number to the parameter key, e.g., `converter[1]: <template>` `converter[2]: <template>`, where `n` specifies the order in which converters are applied to every [MRG entry](@). Using `converter`, without a number, is equal to using `converter[1]`.

## HRG Generation {#what-it-does}

All [text conversion tools](@), including the [HRGT](@), convert (input) text files into results (output text files) by locating particular text patterns, doing some processing, and constructing texts that are used to replace the located text patterns with. This is illustrated in the figure below, and further explained in the page [TEv2 Text Conversion](/docs/overview/tev2-text-conversion):

<p align="center">
<img
  alt="The generic text conversion pattern on which the toolbox is based"
  src={useBaseUrl('images/tev2-text-conversion-pattern.png')}
/><i>Figure 1: The (generic) parts of a Text Conversion</i>
</p>

The following subsections specify the particulars of the [HRGT](@): the [interpreter profile](@), its predefined [interpreters](@), the intermediate processing, the construction of its [converter profile](@), its predefined [converters](@), and the predefined sorters.

### HRGT Interpreter Profile {#interpreter-profile}

The [interpreter profile](@) of the [HRGT](@) consists of the following [named capturing groups](@) that are to be populated by the [predefined interpreters](#predefined-interpreters), as well as by any custom [interpreter](@).

<details>
  <summary>Legend</summary>

1. **`Group`** name of the [capturing group](named-capturing-group@);
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the [group](named-capturing-group@) is required to have non-empty contents. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning (purpose) for which the contents of the [capturing group](named-capturing-group@) will be used.

</details>

| [Group](named-capturing-group@) | Req'd | Description |
| --------------- | :---: | ----------- |
| `hrg`           | n | A [terminology-identifier](@) that specifies the [MRG](@) for which a [HRG](@) is to be generated. |
| `converter`     | n | Specifies the [converter](@) to be used to produce [HRG entries](@). This can either be a predefined [converter](@), or a [handlebars template](@). See [HRG Converters](#hrgt-converters) for details. |
| `sorter`        | n | Specifies the [sorter](@) to be used for sorting the [HRG list](@). This can either be a predefined [sorter](@), or a [handlebars template](@). See [HRG Sorters](#predefined-sorters) for details. |

:::info
Note that the values of these specified [capturing groups](@) will be [regularized](regularize@) before they are used for [processing](#processing).
:::

:::warning ([issue #25](https://github.com/tno-terminology-design/tev2-tools/issues/25))
When the `hrg` identifies a [terminology](@) that is not part of the [current scope](@), the [TermRefs](@) that appear in the generated glossary must be resolved using the [MRG](@) that contains the identified [terminology](@). Currently, the tools do not support a mechanism for doing this. 
:::

### HRGT Predefined Interpreters {#predefined-interpreters}

The [HRGT](@) has only one predefined [interpreter](@), which is called `default`, the syntax of which is:

~~~ markdown
{% hrg="<hrg>" converter="<converter>" sorter="<sorter>" %}
~~~

where: 
- `hrg` (optional) is a [terminology-identifier](@) that specifies the [MRG](@) for which a [HRG](@) is to be generated.
- `converter` (optional) specifies the [converter](@) to be used to produce the [HRG list](@). This can either be a predefined [converter](@), or a [handlebars template](@). See [HRG Converters](#hrgt-converters) for details.
- `sorter` (optional) specifies the [sorter](@) to be used for sorting the [HRG list](@). This can either be a predefined [sorter](@), or a [handlebars template](@). See [HRG Sorters](#predefined-sorters) for details.

:::warning
If you specify a converter as part of this syntax, that's the only one that will be used.<br/>
There is currently no provision for having multiple converters in this syntax<br/>
If you want multiple converters, you MUST use the commandline or a configuration file.
:::

For completeness, here is the [regex] that defines the `default` [interpreter](@) for the [HRGT](@).

~~~ regex
{%\s*hrg="(?<hrg>[^"]*)"\s*(?:converter="(?<converter>[^"]*)"\s*)?(?:sorter="(?<sorter>[^"]*)"\s*)?%}
~~~

### Interpreter Customization {#interpreter-customization}

It may happen that an [interpreter](@) is needed that is not predefined. Fortunately, [interpreters](@) can be added by specifying a [regex](@) that populates the [named capturing groups](@) as specified by the [interpreter profile](hrgt#interpreter-profile@).

This [regex](@) can be specified:
- as a [command-line argument](hrgt#-int@)
- in (the `hrgt`-section of) the [configuration file](/docs/specs/files/configuration-file) that the [HRGT](@) is specified to use.

:::info Editor's note
In future, it may become possible to specify [interpreters](@) and [converters](@) in the [SAF](@), in whcih case they will have a name that will then be required for identifying an [interpreter](@) or [converter](@) of one's choice.
:::

### Processing {#processing}

The purpose of the [HRGT](@) is to allow source texts to contain [MRGRefs](@) that are to be converted into [hrg-lists](@). 

To do that, the [HRGT](@) uses the specified [interpreter](@) to locate subsequent [MRGRefs](@) in its input files, and replaces it with a [HRG](@) that is constructed as follows:

- For each [MRGRef](@), the associated [MRG](@) is located, and an empty [hrg list](@) is created.
- Then, for every [MRG entry](@) in the [MRG](@):
  - a corresponding [converter profile object](@) is created
  - this [converter profile object](@) is fed to all [converter](@) that the [HRGT](@) was configured to use.  If the result of a [converter](@) does not produce an empty string, that result is added as a [HRG entry](@) to the [hrg list](@).
- Finally, the [HRG entries](@) in the [hrg list] are sorted according to the [sorter](@) that is specified.

#### Finding the [MRG](@) associated with an [MRGRef](@) 

The [MRG](@) file associated with an [MRGRef](@) is found by resolving the [terminology identifier](@) that is specified in the [named capturing group](@) `hrg`, which leads to a valid [scopetag](@) and [versiontag](@). 

Since all [MRGs](@) follow the [MRG naming conventions](/docs/specs/files/mrg#file-naming-conventions), it follows that the [MRG](@) that corresponds with a [terminology identifier](@) is in the file `mrg.<scopetag>.<versiontag>.yaml` in the [glossarydir](@) of the [current scope](@).

If that file does not exist, the [converter](@) that was specified in the argument `con[error]` (or `converter[error]`) is executed, and will replace the [MRGRef](@). This ensures that readers can be provided with an adequate error message, or whatever else the [curators](@) find useful to replace the [MRGRef](@) with.

#### Using Converters {#hrgt-converters}

The [HRGT](@) requires its users to specify at least one [converter](@), yet allows it to specify multiple ones. Optionally, a [converter](@) can be specified (using the `-con[error]` option) that will be used when a [MRGRef](@) could not be resolved to an (existing) [MRG](@) (file).

##### Using Multiple Converters

:::info
Note that currently, configuring the [HRGT](@) to use multiple [converters](@) can onlybe done through the command-line or a [configuration file](/docs/specs/files/configuration-file).
:::

When specifying multiple [converters](@) they should be numbered, e.g., as in `converter[1]`, `[converter[2]`, etc. The [section on calling parameters](#calling-the-tool) tells you how such [converters](@) are to be specified. The ordering/numbering of such [converters](@) is irrelevant for the [HRGT](@), as in the end, the [HRG entries](@) that they provide as their results, are being sorted.

Having multiple [converters](@) allows one to create multiple [HRG entries](@) for a single [MRG entry](@). This can be usefule, e.g., if the [MRG entry](@) specifies aliases, or abbreviations. In such cases, one [converter](@) can create an [HRG entry](@) for the [MRG entry](@) itself, and another one can create an [HRG entry](@) for the alias or abbreviation, and refer to the actual entry.

<details>
  <summary>Example: a converter that adds abbreviations</summary>

The following [converter](@) adds an [HRG entry](@) for an abbreviation. The [HRG entry](@) assumes that the [HRG](@) will be formatted as a markdown table.

~~~markdown title="Creating an HRG entry for an abbreviation"
"{{#if glossaryAbbr}}| {{glossaryAbbr}} | [{{glossaryTerm}}]({{termid}}@) |\n{{/if}}"
~~~
</details>

##### Error Converter {#error-converter}

Whenever a [MRGRef](@) is identified, yet cannot be resolved to an [MRG](@) (file), this results in an error message being logged. Also, the [MRGRef](@) itself isn't changed.

Here is an examples for a [converter](@) that adds a line to the log that the tool produces:

```markdown
"{{log 'HRGT error converter:' err.dir '/' err.file '@' err.line ':' err.pos ' - Cannot find a corresponding MRG' level='warn'}}"
```

#### Sorting the [HRG list](@)

The [HRG list](@) contains elements that are assocated with one [MRG entry](@), one [HRG entry](@), and one value that is used for sorting. This value is the result from evaluating (the [handlebars template](@) specified by) the [sorter](@), using [moustache variables](@) that come from the [converter profile](@) of the [HRGT](@). See [HRG Sorters](#predefined-sorters) for details.

### HRGT Converter Profile {#converter-profile}

The [converter profile](@) of the [HRGT](@) specifies the structure of the [data objects](handlebars-object@) that its [converters](@) can use, i.e., in which its [converters](@) find the actual (context dependent) data that they need to produce a [HRG entry](@).

The [HRGT](@) [converter profile](@) contains the [specifications for the data object](converter-profile#object-spec@) that the [converters](@) used by the [HRGT](@) can use. This says that such [converters](@) know:

1. the [interpreter](@) that is used (i.e., its name as well as the [regex](@)) that finds the [MRGRef](@).
2. the values of each of the [named capturing groups](@), as defined by the [HRGT](@) [interpreter profile](#interpreter-profile), and populated by that [interpreter](@).
3. all fields in the [MRG entry](@) for which the [converter](@) is being called.
4. all fields from the [terminology section](mrg#terminology@) of the [mrg](@) from which that [MRG entry](@) was taken.
5. various fields that can be used to construct logging/error messages, such as the filename, linenumber etc. of the [MRGRef](@).

### HRGT Predefined Converters {#predefined-converters}

The following tabs specify the predefined [converters](@) for the [TRRT](@).

<Tabs
  values={[
    {label: 'markdown-table-row',  value: 'markdown-table-row'},
    {label: 'markdown-section-2',  value: 'markdown-section-2'},
    {label: 'markdown-section-3',  value: 'markdown-section-3'},
  ]}>

<TabItem value="markdown-table-row">

The **`markdown-table-row`** [converter](@) is defined by the following [handlebars template](@).

~~~ ts
| [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}}) | {{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}} |\n
~~~

</TabItem>

<TabItem value="markdown-section-2">

The **`markdown-section-2`** [converter](@) is defined by the following [handlebars template](@).

~~~ ts
## [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n
~~~

</TabItem>

<TabItem value="markdown-section-3">

The **`markdown-section-3`** [converter](@) is defined by the following [handlebars template](@).

~~~ ts
### [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n
~~~

This [converter](@) uses the following functions.
- `localize`: converts the URL of its argument (i.e., `navurl`) with a (shorter) version by removing the protocol and host parts in case the resource is located on the same site.
- `capFirst`: capitalizes the first character of every word found in its argument.

</TabItem>

</Tabs>

-----

### Converter Customization {#converter-customization}

It may happen that [HRG entries](@) must be formatted in a way that hasn't been foreseen, requiring a  [converter](@) that wasn't predefined. Fortunately, [converters](@) can be added by specifying a [handlebars template](@) that constructs the appropriate [HRG Entries](@) from the values that are available in the [converter profile](#converter-profile) of the [HRGT](@). Examples of what such [converters](@) might look like are given in the section about [predefined converters](#predefined-converters)

A [converter](@) can be specified:
- as a [command-line argument](hrgt#-con@)
- in (the `hrgt`-section of) the [configuration file](/docs/specs/files/configuration-file) that the [HRGT](@) is specified to use.

:::info Editor's note
In future, it may become possible to specify [interpreters](@), [converters](@) and [sorters](@) in the [SAF](@), in whcih case they will have a name that will then be required for identifying an [interpreter](@), [converter](@), or [sorter](@) of one's choice.
:::

curl -H "Accept: application/vnd.github+json" https://api.github.com/repos/:tno-terminology-design/:tev2-tools/issues/events

### HRGT Predefined Sorters {#predefined-sorters}

A [HRG](@) is a sorted list of [HRG entries](@), where sorting can be done in various ways. By default (i.e. when the `sort` option isn't specified), this is done as specified by the (predefined) `default` sorting option. 

The predefined sorting options are as follows:

| Predefined option | What it does |
| :---: | :--- |
| `default` | Sorting of [HRG entries](@) is done by using the `term` field of their corresponding [MRG entries](@) as sort value. If multiple [entries](mrg-entry@) with the same `term` field contents, exist, these [entries](mrg-entry@) are then sorted according to their `termType` field, making the sort unique.[^1] |
| `glossaryterm` | Sorting of [HRG entries](@) is done by using the `glossaryTerm` field of their corresponding [MRG entries](@) as sort value. If the `glossaryTerm` field does not exist, sorting value is computed using the `default` sorting methods. |

[^1]: Note that the value of the `termid` field of an [MRG entry](@) is unique within the [MRG](@) that holds the [MRG entry](@) - it serves as a 'primary key'. That's why sorting first on the `term` field and then on the `termType` field makes the sort unique. Also note that this sorting differs from sorting on the `termid` field itself, as this would result in an [HRG](@) in which the [entries](hrg-entry@) are grouped according to their `termType` - thus [concepts](@), [patterns](@), and other kinds of [semantic units](@) are then grouped.

Alternatively, you can specify a [handlebars template](@). Every field in the [MRG entry](@) that is being converted can be used as a variable. So, specifying `--sorter "{{glossaryText}}"` would sort the [HRG](@) according to the contents of the `glossaryText` field in the [MRG entries](@).

### Sorter Customization {#sorter-customization}

It may happen that a [sorter](@) is needed that is not predefined. Fortunately, [sorters](@) can be added by specifying a [handlebars template](@) that constructs a text that will be used as the value (key) on which sorting takes place.

A [sorter](@) can be specified:
- as a [command-line argument](hrgt#-con@)
- in (the `hrgt`-section of) the [configuration file](/docs/specs/files/configuration-file) that the [HRGT](@) is specified to use.

:::info Editor's note
In future, it may become possible to specify [interpreters](@), [converters](@) and [sorters](@) in the [SAF](@), in whcih case they will have a name that will then be required for identifying an [interpreter](@), [converter](@), or [sorter](@) of one's choice.
:::

## Example

Suppose that within the current [scope](@):
- `myterms:test` is the [terminology identifier](@) for the [terminology](@) that contains [definitions](@) for the terms [Glossary](@), [Curator](@) and [Definition](@);
- the associated [MRG](@) for that [terminology](@) has been imported, making that [terminology](@) available within the [current scope](@);
- we have a regular markdown file, within which we want to embed a [markdown table](https://www.markdownguide.org/extended-syntax/#tables) which lists all [definitions](@) from that [terminology](@).

The table would then be specified as follows:

~~~ markdown
| Term | Description |
| :--- | :---------- |
{% hrg="myterms:test" converter="markdown-table-row" %}
~~~

When this markdown file is processed by the [HRGT](@), a new file is created where the above text has been converted into the following:

~~~ markdown
| Term | Description |
| :--- | :---------- |
| Glossary | an alphabetically sorted list of [terms](@) with the (single) meaning it has in (at least) one context. |
| Curator (of a Scope) | a person responsible for curating, managing, and maintaining the [terminologies](@), to ensure shared understanding among a [community](@) working together on a particular set of [objectives](@essif-lab). |
| Definition | the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@). |
~~~

Further examples are provided on the [Glossary Generation Demo page](/docs/tev2-glossaries-demo)

## Errors and Warnings

The [HRGT](@) starts by reading its command line and optional [configuration file](/docs/specs/files/configuration-file). If the command line has a key that is also found in the [configuration file](/docs/specs/files/configuration-file), the command line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalid conditions include non-existing directories or files, lack of write-permissions where needed, etc.

The [HRGT](@) logs every error- and/or warning condition that it comes across while processing its [configuration file](/docs/specs/files/configuration-file), command line parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [HRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.
