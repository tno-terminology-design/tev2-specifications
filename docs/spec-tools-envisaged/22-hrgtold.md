---
id: hrgt-deprecated
sidebar_label: Previous HRGT spec
date: 20230103
---

# Human Readable Glossary Generation Tool

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <mark>text to mark</Mark?-->
export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::warning This document will soon be deprecated
There is a [new specification of the HRGT](/docs/spec-tools-envisaged/hrgt).
:::

The **Human Readable Glossary generation Tool ([HRGT](@))** generates a Human Readable [Glossary](@) ([HRG](@)) that consists of (a selection of) the [terms](@) that are part of one [terminology](@) within a specific [scope](@).

The [HRGT](@) takes one specific [MRG](@) as its input, and converts (a selection of) its [MRG entries](@) into one of the supported output formats, e.g. HTML, or PDF. The file that contains the [MRG](@) is named following the [MRG file naming conventions](/docs/spec-files/mrg#mrg-file-naming-conventions).

The selection of the [MRG entries](@) that are to be included in the [HRG](@), as well as the specification of the output format, headers, footers, etc., can be configured as well as customized. Thus, the [HRGT](@) provides a flexible means for creating all sorts of outputs that are either already human readable or can be processed further by third-party rendering tools, such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), etc.

There is currently one implementation of the tool underway:
- the repo in which the tool is being developed is [<mark>tbd</mark>].
- the documentation is [<mark>tbd</mark>].

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

<details>
  <summary><Mark>This section is written when there's an actual tool to install</Mark></summary>

We expect that it will be something like

~~~
npm install -g @tno-terminology-design/hrgt
~~~

</details>

<details>
  <summary>Before running the tool from the command line, make sure you have met the necessary prerequisites depending on your operating environment.
</summary>

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

The behavior of the [HRGT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

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

| :--------------------------------------- | :---: | :---------- |
| `-V`, `--version`                          | n | output the version number of the tool. |
| `-c`, `--config <path>`                    | n | Path (including the filename) of the tool's (YAML) configuration file. |
| `-o`, `--output <dir>`                     | Y | (Root) directory for output files to be written. |
| `-s`, `--scopedir <path>`                  | Y | Path of the scope directory where the SAF is located. |
| `-int`, `--interpreter <type> or <regex>`  | n | Type of interpreter, either: a regex, alt, or basic. |
| `-con`, `--converter <type> or <mustache>` | n | Type of converter, either: a mustache template, http, or markdown. |
| `-f`, `--force`                            | n | Allow overwriting of existing files. |
| `-h`, `--help`                             | n | display help for command. |


:::info Editor's Note:
Various `method`s are envisaged, yet remain to be properly specified. A method may specify:
- what a single entry contains
- that the contents of particular files are to be used as header or footer;
- that a particular kind of navigation bar is to be inserted at specific places (e.g. between two subsequent entries that start with a different character);
- ...
:::

## Processing, Errors and Warnings

The [HRGT](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalidities include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [HRGT](@) reads the specified input files (in arbitrary order), and processes each of them, as follows:
- select the actual [MRG](@) that is to be used as an input;
- select the (subset of) [MRG entries](@) from that [MRG](@) that must appear in the [HRG](@) - see [HRG Term Selection](/docs/spec-syntax/hrg-termselection-syntax) for details. Conceptually, this will result in an [MRG](@) that only contains [MRG entries](@) that need to appear in the [HRG](@) as well;
- (alphabetically) sort these entries;
- convert each entry into a specific 'rendered' format (as specified by the user), thereby resolving any [TermRefs](@) (by appropriately calling the [TRRT](@))[^1], adding hyperlinks to the [curated text](@) that the entry relates to, 'meta-data' (e.g. the associated [grouptags](@), contributors, etc.), and anything else, as required for the particular kind of [HRG](@) that is being generated;
:::info Editor's note
The [TRRT](https://github.com/tno-terminology-design/trrt) has a nice setup for implementing [text conversion steps](/docs/overview/tev2-design-principles#text-conversion-steps). We should check that out and adapt the specifications text in this section so that this stuff can be reused as much as possible.
:::
- construct the [HRG](@) by adding (rendered) header- and footer-material and (optionally) licensing information;
- write the [HRG](@) to the designated output file.

[^1]: if the rendered output is such that [TermRefs](@) can still be recognized by the [TRRT](@), it may be more efficient to defer the resolution of [TermRefs](@) until after the [HRG](@) is completely generated.

:::info Editor's Note:
A special case of [HRG](@) generation is when the default [HRG](@) is created for a particular [MRG](@), which typically consists of all [MRG entries](@) of that [MRG](@). In that case, the contents of the `hrgfile` field in `versions` section of the [SAF](@) whose `mrgfile` field [identifies](@) the [MRG](@) should become the name of the file that contains the generated [HRG](@). Additionally, if the [MRG](@) happens to be the default one for the scope (as can be seen by comparing its filename with the contents of the `mrgfile` field in the `scope` section of the [SAF](@)), then the contents of the `hrgfile` field in `scope` section of the [SAF](@) must also become the name of the file that contains the generated [HRG](@). Whether or not the [HRGT](@) is expected to operate in this mode is an option that can be provided at the commandline or in the configuration file.
:::

The [HRGT](@) logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [HRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Discussion Notes

This section contains some notes of a discussion between Daniel and Rieks on these matters of some time ago, which pertains to glossaries in the context of ToIP.

- A ToIP [glossary](@) will be put by default at `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community](@). This allows every  [terms-community](@) to have its own [glossary](@). However, the above specifications allow [terms-communities](terms-community@) to [curate](@) multiple [scopes](scope@).
- Storing [glossaries](glossary@) elsewhere was seen to break the (basic workings of the postprocessing tool, but the above specifications would fix that.
- Entries, e.g. 'foo' can be referenced as `http://trustoverip.github.io/<community>/[glossary](@)#foo` (in case of a standalone glossary), and `http://trustoverip.github.io/<community>/document-that-includes-glossary-fragment#foo` (in case of a fragmented glossary).
- We could also see GGT and TRRT to be extended, e.g. to work in conjunction with LaTeX or word-processor documents. This needs some looking into, but [pandoc](https://pandoc.org/) may be useful here.
