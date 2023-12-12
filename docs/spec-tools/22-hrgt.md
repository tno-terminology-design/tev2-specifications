---
id: hrgt
sidebar_label: Human Readable Glossary Tool (HRGT)
date: 20220421
---

# Human Readable Glossary Generator Tool (HRGT)

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Human Readable Glossary Generator Tool ([HRGT](@))** takes files that contain so-called [MRGRefs](@) and outputs a copy of these files in which these [MRGRefs](@) are converted into so-called [HRG lists](@), i.e. lists of alphabetically sorted [HRG entries](@) that can be further processed by tools such as the [TRRT](@), as well as rendering tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains one or more sections that help [readers](@) to quickly find [terms](@) and (summaries of) their intended meanings.

There is currently one implementation of the tool:

- the repo is [here](https://github.com/tno-terminology-design/tev2-tools).

## What the HRGT does

The [HRGT](@) operates on a set of files, as specified by its commandline arguments or configuration file, each of which is processed as follows:
1. Copy the file to its intended destination (as specified by its commandline arguments or configuration file), and use the latter for further processing;
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

If a configuration file used, the long version of the parameter must be used (without the preceeding `--`).
</details>

| Parameter                                | Req'd | Description |
| :--------------------------------------- | :---: | :---------- |
| `-V`, `--version`                          | n | output the version number of the tool. |
| `-c`, `--config <path>`                    | n | Path (including the filename) of the tool's (YAML) configuration file. |
| `-o`, `--output <dir>`                     | Y | (Root) directory for output files to be written. |
| `-s`, `--scopedir <path>`                  | Y | Path of the scope directory where the SAF is located. |
| `-int`, `--interpreter <type> or <regex>`  | n | Specifies the interpreter to be used to detect [MRGRefs](@). This can either be a predefined interpreter, or a [(PCRE) regex](https://www.debuggex.com/cheatsheet/regex/pcre). |
| `-con`, `--converter <type> or <hexpr>`    | n | Specifies the converter to be used to produce [HRG lists](@). This can either be a predefined converter, or a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars). |
| `-f`, `--force`                            | n | Allow overwriting of existing files. |
| `-h`, `--help`                             | n | display help for command. |

## MRG Ref Handling

All input files are processed as follows:
1. Find the [MRGRef](@) as defined by the `interpreter` parameter.
2. Interpret the [MRGRef](@), which may include processing parameters, such as `converter="<converter>` that have been provided 
2. Create an empty [HRG list](@);
3. Sort the [MRG entries](@) alphabetically (using the `glossaryTerm` field as a sorting key);[^1]
4. Convert each [MRG entry](@) into an [HRG entry](@), and add it to the [HRG list](@);
5. Overwrite the [MRGRef](@) with a new [MRGRef](@), replacing it with (a) the leader text, (b) the contents of the [HRG list](@), and (c) the trailer text.

[^1]: Ideally, sorting should be done on the [HRG list](@), because these are the entries that should appear in a sorted form. However, as there is no a priori fixed structure for [HRG entries](@), it is difficult to sort the [HRG list](@) after it has been generated. Therefore, sorting is done on the [MRG entries](@), using the `glossaryTerm` field, which may, or may not exist. For [MRG entries](@) that do not have a `glossaryTerm` field, we suggest to use the `term`-field instead.

[MRGRefs](@) themselves specify how [HRG entries](@) are formatted. Please refer to the [MRGRef Syntax specifications](/docs/spec-syntax/mrg-ref-syntax) for the details.

By cleanly separating [MRGRef](@) interpretation from the part where it is converted into a [HRG](@), it becomes easy to extend the capabilities of the [HRGT](@) to include ways for rendering [HRG entries](@), e.g. for LaTeX, PDF, docx, odt and other formats, as well as for formats that we currently do not even know we would like to have.

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

The [HRGT](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalidities include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [HRGT](@) reads the specified input files (in arbitrary order), and for each of them, produces an output file that is the same as the input file except for the fact that all [TermRefs](@) have been replaced with regular [markdown links](https://www.markdownguide.org/basic-syntax/#links), and (optionally) with additional texts that are to be used by third-party rendering tools for enhanced rendering of such links. An example of this would be text that can be used to enhance a link with a popup that contains the definition, or a description of the [term](@) that is being referenced.

The [HRGT](@) logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [HRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.
