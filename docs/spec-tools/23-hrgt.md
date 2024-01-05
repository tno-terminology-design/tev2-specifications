---
id: hrgt-deprecated
sidebar_label: Human Readable Glossary Tool (HRGT)
date: 20220421
---

# Human Readable Glossary Generator Tool (HRGT)

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Human Readable Glossary Generator Tool ([HRGT](@))** takes files that contain so-called [MRGRefs](@) and outputs a copy of these files in which these [MRGRefs](@) are converted into so-called [HRG lists](@), i.e. lists of alphabetically sorted [HRG entries](@) that can be further processed by tools such as the [TRRT](@), as well as rendering tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains one or more sections that help [readers](@) to quickly find [terms](@) and (summaries of) their intended meanings.

## What the HRGT does

The [HRGT](@) operates on a set of files, as specified by its command-line arguments or configuration file, each of which is processed as follows:
1. Copy the file to its intended destination (as specified by its command-line arguments or configuration file), and use the latter for further processing;
2. Find every [MRGRef](@), and replace each of them with the [HRG](@) that contains the (alphabetically sorted) [terms](@) of the [terminology](@) as specified by the [MRGRef](@).

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

The behavior of the [TRRT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
hrgt [ <paramlist> ] [ <globpattern> ]
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

| Parameter                                | Req'd | Description |
| :--------------------------------------- | :---: | :---------- |
| `-V`, `--version`                          | n | output the version number of the tool. |
| `-c`, `--config <path>`                    | n | Path (including the filename) of the tool's (YAML) configuration file. |
| `-o`, `--output <dir>`                     | Y | (Root) directory for output files to be written. |
| `-s`, `--scopedir <path>`                  | Y | Path of the scope directory where the SAF is located. |
| `-int`, `--interpreter <type> or <regex>`  | n | Specifies the interpreter to be used to detect [MRGRefs](@). This can either be a predefined interpreter, or a [regex](@). |
| `-con`, `--converter <type> or <hexpr>`    | n | Specifies the converter to be used to produce [HRG lists](@). This can either be a predefined converter, or a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars). See [HRG Converters](#hrgt-converters) for details. |
| `-sort`, `--sort <type> or <hexpr>`        | n | Specifies the value to be used to sort [HRG lists](@). This can either be a predefined value, or a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars). |
| `-f`, `--force`                            | n | Allow overwriting of existing files. |
| `-h`, `--help`                             | n | display help for command. |

## Human Readable Glossary Generation {#what-it-does}

All [text conversion tools](@), including the [HRGT](@), convert (input) text files into results (output text files) by locating particular text patterns, doing some processing, and constructing texts that are used to replace the located text patterns with. This is illustrated in the figure below, and further explained in the page [TEv2 Text Conversion](/docs/overview/tev2-text-conversion):

<p align="center">
<img
  alt="The generic text conversion pattern on which the toolbox is based"
  src={useBaseUrl('images/tev2-text-conversion-pattern.png')}
/><i>Figure 1: The (generic) parts of a Text Conversion</i>
</p>

The following subsections specify the particulars for the [HRGT](@) [interpreter profile](@), its predefined [interpreters](@), the construction of its [converter profile](@) and its predefined [converters](@).

### HRGT Interpreter Profile {#interpreter-profile}

### HRGT Predefined Interpreters {#predefined-interpreters}

[hier moet nog tekst]
[MRGRefs](@) themselves specify how [HRG entries](@) are formatted. Please refer to the [MRGRef Syntax specifications](/docs/spec-syntax/mrg-ref-syntax) for the details.

Default interpreter: `{%\s*hrg="(?<hrg>[^"]*)"\s*(?:converter="(?<converter>[^"]*)"\s*)?(?:sorter="(?<sorter>[^"]*)"\s*)?%}`

### HRGT Converter Profile (and its construction) {#converter-profile}

The [converter profile](@) of the [HRGT](@) consists of 
- a set of variables that are given values based on the [named capturing groups](@) of the [interpreter](@) that was used.

:::info Editor's note
possibly, other variables can be populated from other sources
:::

The [variables](@) are given the following values:

### HRGT Predefined Converters {#predefined-converters}

Onderstaande tekst komt uit de sources
      "markdown-table-row":
        "| [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}}) | {{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}} |\n",
      "markdown-section-2":
        "## [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n",
      // 'markdown-section-2': "## [{{#if glossaryTerm}}{{noRefs glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n",
      "markdown-section-3":
        "### [{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n"
      // 'markdown-section-3': "### [{{#if glossaryTerm}}{{noRefs glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]({{localize navurl}})\n\n{{#if glossaryText}}{{glossaryText}}{{else}}no `glossaryText` was specified for this entry.{{/if}}\n\n"

## HRG Generation

All input files that are specified for processing are individually processed, as follows:
1. If the input and output files are
    - in different locations, copy the input file to its output location. All changes will be made in the output file.
    - in the same location, raise an exception if the `-f` option is not set (false). This is to prevent accidental overwrites of the input file.
2. In the output file, find the [MRGRef](@) as defined by the `interpreter` parameter (see [HRG Interpreters](#hrgt-interpreters) for details).
3. Interpret the [MRGRef](@). When the `default` interpreter is found, this includes the identifying parameters, such as `converter="<converter>"` or `sort="<sort_value>"`, and using their values to override those found in the config file or command line.
4. Create an empty [HRG list](@);
5. Sort the [MRG entries](@), using the specified `sort` method, or the `default` sort method if that method isn't specified. See [HRG sorting](#sorter) for details.
6. Convert each [MRG entry](@) into an [HRG entry](@), using the specified converter method, and add it to the [HRG list](@);
7. In the output file, replace the [MRGRef](@) with the contents of the [HRG list](@).

By cleanly separating [MRGRef](@) interpretation from the part where it is converted into a [HRG](@), it becomes easy to extend the capabilities of the [HRGT](@) to include ways for rendering [HRG entries](@), e.g. for LaTeX, PDF, docx, odt and other formats, as well as for formats that we currently do not even know we would like to have.




### HRGT Sorting {#sorter}

A [HRG](@) is a sorted list of [HRG entries](@), where sorting can be done in various ways. By default (i.e. when the `sort` option isn't specified), this is done as specified by the (predefined) `default` sorting option. 

The predefined sorting options are as follows:

| Predefined option | What it does |
| :---: | :--- |
| `default` | Sorting of [HRG entries](@) is done by using the `term` field of their corresponding [MRG entries](entry@) as sort value. If multiple [entries](mrg-entry@) with the same `term` field contents, exist, these [entries](mrg-entry@) are then sorted according to their `termType` field, making the sort unique.[^1] |
| `glossaryTerm` | Sorting of [HRG entries](@) is done by using the `glossaryTerm` field of their corresponding [MRG entries](@) as sort value. If the `glossaryTerm` field does not exist, the `default` value is taken. |

[^1]: Note that the value of the `termid` field of an [MRG entry](@) is unique within the [MRG](@) that holds the [MRG entry](@) - it serves as a 'primary key'. That's why sorting first on the `term` field and then on the `termType` field makes the sort unique. Also note that this sorting differs from sorting on the `termid` field itself, as this would result in an [HRG](@) in which the [entries](hrg-entry@) are grouped according to their `termType` - thus [concepts](@), [patterns](@), and other kinds of [semantic units](@) are then grouped.

Alternatively, you can specify a mustache/[handlebars](https://handlebarsjs.com/guide/#what-is-handlebars) template. Every field in the [MRG entry](@) that is being converted can be used as a variable. So, specifying `--sort "{{glossaryText}}"` would sort the [HRG](@) according to the contents of the `glossaryText` field in the [MRG entries](@).

## Example

Suppose that within the current [scope](@):
- `myterms:test` is the [terminology identifier](@) for the [terminology](@) that contains [definitions](@) for the terms [Glossary](@), [Curator](@) and [Definition](@);
- the associated [MRG](@) for that [terminology](@) has been imported, making that [terminology](@) available within the current scope;
- we have a regular markdown file, within which we want to embed a [markdown table](https://www.markdownguide.org/extended-syntax/#tables) which lists all [definitions](@) from that [terminology](@).

The table would then be specified as follows:

~~~ markdown
| Term | Description |
| :--- | :---------- |
{% hrg="myterms:test" interpreter="basic" converter="markdowntable" %}
~~~

When this markdown file is processed by the [HRGT](@), a new file is created where the above text has been converted into the following:

| Term | Description |
| :--- | :---------- |
| Glossary | an alphabetically sorted list of [terms](@) with the (single) meaning it has in (at least) one context. |
| Curator (of a Scope) | a person responsible for curating, managing, and maintaining the [terminologies](@), to ensure shared understanding among a [community](@) working together on a particular set of [objectives](@). |
| Definition | the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@). |

## Processing, Errors and Warnings

The [HRGT](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalid conditions include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [HRGT](@) reads the specified input files (in arbitrary order), and for each of them, produces an output file that is the same as the input file except for the fact that all [TermRefs](@) have been replaced with regular [markdown links](https://www.markdownguide.org/basic-syntax/#links), and (optionally) with additional texts that are to be used by third-party rendering tools for enhanced rendering of such links. An example of this would be text that can be used to enhance a link with a popup that contains the definition, or a description of the [term](@) that is being referenced.

The [HRGT](@) logs every error- and/or warning condition that it comes across while processing its configuration file, command-line parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [HRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.
