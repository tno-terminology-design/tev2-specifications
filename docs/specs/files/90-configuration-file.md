---
id: configuration-file
sidebar_label: TEv2 Config Files
date: 20231129
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuration Files for TEv2 tools

Every [TEv2 tool](@) execution can be configured using a configuration file that specifies the parameters (arguments) that otherwise would need to be supplied on the command line. The file is supplied by using the command line parameter `-c <path>` or `--config <path>`, where `<path>` is the path (including the filename).

The configuration file is in a [YAML format](https://yaml.org/spec/). When the `-c` or `--config` option is specified when calling a [TEv2 tool](@), the tool attempts to read the specified file and evaluates all fields that are not in a specific section, as well as all fields that are in a tool-specific section. A field whose name is defined in the specifications for that tool will be interpreted. All other fields are ignored.

The options specified on the command line have precedence over the options specified in the configuration file. Similarly, the options specified in tool specific sections have precedence over the (general) options specified in the 'root' of the configuration file. The tool specific sections are specified in the configuration file by using the command line name of the tool as the section name.

<details>
  <summary>Example configuration file</summary>
The following file has been used in the context of developing this documentation. Some options like file paths are relative to the directory from which the tools are called, which in this case is the `docs` directory.

``` yaml
# TNO Terminology Design tools configuration file (yaml)

## General
scopedir: . # path of the scope directory where the SAF is located
onNotExist: warn # the action in case an MRG was specified, but wasn't found in the SAF
output: . # (root) directory for output files to be written to

## Machine Readable Glossary Tool
mrgt:
  vsntag: # versiontag for which the MRG needs to be (re)generated. Leave empty to process all versions
  macros: # macros to be used for formPhrases
    "{ss}": ["", "s", "'s", "(s)"]
    "{yies}": ["y", "y's", "ies"]

## Human Readable Glossary Tool
hrgt:
  interpreter: default          # Type of interpreter, i.e., a regex, or a predefined type (`default`)
  converter: markdown-section-3 # Type of converter, i.e., a mustache/handlebars template, or a predefined type (`markdown-table-row, `markdown-section-2`, `markdown-section-3`)
  input:
    - "*gloss*.md"

## Term Reference Resolution Tool
trrt:
  interpreter: default           # Type of interpreter, i.e., a regex, or a predefined type (`default`, `alt`)")
  converter: html-hovertext-link # Type of converter, i.e., a mustache/handlebars template, or a predefined type (`markdown-link`, `html-link`, `html-hovertext-link`, `html-glossarytext-link`)")
  input: # glob pattern strings for files to be processed by the TRRT
    - "**/*.md"
```

</details>

Below, you can find all of the possible options you can specify in the various configuration sections. These match the parameters that can be specified on the command line. 

If a parameter is specified on the command line, it must be preceded by the `--` (e.g., as in `--scopedir`), or the alternative short form can be used as described in the specifications of the individual tools.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Parameter`** specifies the parameter and further specifications.
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the parameter is required to be present when the tool is being called for actual processing (so not in case a `help` or `version` parameter is specified). If `Y`, the parameter MUST either be present in the configuration file, or as a command line parameter.
3. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

<Tabs
  defaultValue="generic"
  values={[
    {label: 'Generic', value: 'generic'},
    {label: 'MRG Import', value: 'mrg-import'},
    {label: 'MRGT', value: 'mrgt'},
    {label: 'HRGT', value: 'hrgt'},
    {label: 'TRRT', value: 'trrt'},
  ]}>

<TabItem value="generic">

Parameters that can be used by most, if not all tools can be put both in tool-specific sections, or in the 'root' of the YAML file.

| Generic Parameters      | Req'd | Description |
| :---------------------- | :---: | :---------- |
| `scopedir: <path>`      | Y | Path of the scope directory where the SAF is located. |
| `onNotExist: <action>`  | n | The action in case something that is necessary for further processing didn't exist. |

<details>
  <summary>`onNotExist` Actions</summary>

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

</details>

</TabItem>

<TabItem value="mrg-import">

Parameters that are specific to the [MRG Import tool](@) can be put in the YAML section `mrg-import`.

| MRG Import Parameters   | Req'd | Description |
| :---------------------- | :---: | :---------- |
| `onNotExist: <action>`  | n | The action in case an MRG file unexpectedly does not exist. |

<details>
  <summary>`onNotExist` Actions</summary>

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

</details>

</TabItem>

<TabItem value="mrgt">

Parameters that are specific to the [MRGT](mrgt@) can be put in the YAML section `mrgt`.

| Key                    | Req'd | Description |
| :--------------------- | :---: | :---------- |
| `onNotExist: <action>` | n | The action in case an MRG file unexpectedly does not exist. |
| `vsntag: <vsntag>`     | n | Versiontag for which the MRG needs to be (re)generated. |
| `macros: <macromap>`   | n | A [map of form-phrase macros](macro-map@) to be used to evaluate the `formPhrases` field of a [curated text](@). |

<!--
The following table-line documents the `prune` feature, but as this isn't yet supported.
See https://github.com/tno-terminology-design/tev2-tools/issues/6
| `prune: <bool>`        | n | If `<bool>` is `true`, remove all [MRG](@) files in the local scope from the [glossarydir](@) where the vsntag (or altvsntag) is not administered in the [SAF](@) |
-->

<details>
  <summary>`onNotExist` Actions</summary>

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

</details>

The `<macromap>` parameter is a (YAML) list of [form phrase macros](@) (it is a [form phrase macro map](@)). 

Here is an example of the `mrgt` section of the config file that contains a [macro map](@).

~~~ yaml
## Machine Readable Glossary Tool
mrgt:
  vsntag: # versiontag of MRG to generate. Default: all MRGs
  macros: # macros to be used for formPhrases
    "{ss}": ["", "s", "'s", "(s)"]
    "{yies}": ["y", "y's", "ies"]
~~~

</TabItem>

<TabItem value="hrgt">

Parameters that are specific to the [hrgt](hrgt@) can be put in the YAML section `hrgt`:

| Parameter                       | Req'd | Description |
| :------------------------------ | :---: | :---------- |
| `output: <dir>`                   | Y | (Root) directory for output files to be written. |
| `input: <glob-pattern>`           | Y | Glob pattern string for files to be processed by the HRGT. |
| `interpreter: <regex> or <predeftype>`  | n | Type of [MRGRef](@) interpreter, i.e., a [(PCRE) regex](https://www.debuggex.com/cheatsheet/regex/pcre), or a [predefined type](/docs/specs/syntax/mrg-refs#predefined-mrgref-interpreters) (`default`). |
| `converter: <template> or <predeftype>` | n | Type of [MRGRef](@) converter, i.e., a [handlebars template](@), or a [predefined type](/docs/specs/tools/hrgt#predefined-converters) ( `markdown-table-row`, `markdown-section-2`, `markdown-section-3`). |
| `converter[<n>]: <template> or <predeftype>` | n | Type of [MRGRef](@) converter, i.e., a [handlebars template](@), or a [predefined type](/docs/specs/tools/hrgt#predefined-converters) ( `markdown-table-row`, `markdown-section-2`, `markdown-section-3`). |
| `converter[error]: <template> or <predeftype>` | n | Specifies the [converter](@) to be used to replace the [MRGRef](@) with in case the associated [MRG](@) file could not be found.  |
| `sorter: <template> or <predeftype>` | n | Value to use for sorting, i.e., a [handlebars template](@), or a [predefined type](/docs/specs/tools/hrgt#predefined-sorters) ( `default`). |
| `force: <bool>`                   | n | If `<bool>` is `true`, allow files in the output directory to be overwritten. If `<bool>` is `false` or unspecified, output files will not overwrite existing files. |

Multiple [converters](@) can be specified, as `converter[1]`, `converter[2]`, etc.
All [converters](@) that are specified will be executed for every [MRG entry](@)
in the [MRG](@) for which the [HRG](@) is created.

</TabItem>

<TabItem value="trrt">

Parameters that are specific to the [TRRT](trrt@) can be put in the YAML section `trrt`:

| TRRT Parameters                 | Req'd | Description |
| :------------------------------ | :---: | :---------- |
| `output: <dir>`                   | Y | (Root) directory for output files to be written. |
| `input: <glob-pattern>`           | Y | Glob pattern string for files to be processed by the TRRT. |
| `interpreter: <regex> or <predeftype>`  | n | Type of [TermRef](@) interpreter, i.e., a [regex](@), or a [predefined type](/docs/specs/tools/trrt#predefined-interpreters). |
| `converter[n]: <template> or <predeftype>`[^1] | n | Type of [TermRef](@) converter, i.e., a [handlebars template](@) template, or a [predefined type](/docs/specs/tools/trrt#predefined-converters))(`markdown-link`, `html-link`, `html-hovertext-link`, `html-glossarytext-link`). |
| `converter[error]: <template> or <predeftype>` | n | Specifies the [converter](@) to be used to replace the [TermRef](@) with in case the associated [MRG entry](@) could not be found.  |
| `force: <bool>`                   | n | If `<bool>` is `true`, allow files in the output directory to be overwritten. If `<bool>` is `false` or unspecified, output files will not overwrite existing files. |

[^1]: Multiple converters may be specified by appending a number to the parameter key, e.g., `converter[1]: <template>` `converter[2]: <template>`, where `n` is the [termid](@) occurrence count from which to start using a specific converter during resolution of a file. Using `converter`, without a number, is equal to using `converter[0]`

</TabItem>

</Tabs>

---
