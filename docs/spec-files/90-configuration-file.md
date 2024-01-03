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
The following file has been used in the context of developing this documentation, and put in the root directory of the Github repository. In that root, there is a `docs` directory that contains the [curated texts](@).

``` yaml
# TNO Terminology Design tools configuration file (yaml)

## General
scopedir: . # path of the scope directory where the SAF is located
onNotExist: warn # the action in case an MRG was specified, but wasn't found in the SAF
output: . # (root) directory for output files to be written to

## Machine Readable Glossary Tool
mrgt:
  vsntag: # versiontag for which the MRG needs to be (re)generated. Leave empty to process all versions

## Human Readable Glossary Tool
hrgt:
  interpreter: default          # Type of interpreter, i.e., a regex, or a predefined type (`default`)
  converter: markdown-section-3 # Type of converter, i.e., a mustache/handlebars template, or a predefined type (`markdown-table-row, `markdown-section-2`, `markdown-section-3`)
  input:
    - "*glossar*.md"

## Term Reference Resolution Tool
trrt:
  interpreter: default           # Type of interpreter, i.e., a regex, or a predefined type (`default`, `alt`)")
  converter: html-hovertext-link # Type of converter, i.e., a mustache/handlebars template, or a predefined type (`markdown-link`, `html-link`, `html-hovertext-link`, `html-glossarytext-link`)")
  input: # glob pattern strings for files to be processed by the TRRT
    - "**/*.md"
```

</details>

Below, you can find all of the possible options you can specify in the various configuration sections. These match the parameters that can be specified on the command line. 

If a parameter is specified on the command line, it must be preceeded by the `--` (e.g., as in `--scopedir`), or the alternative short form can be used as described in the specifications of the individual tools.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Parameter`** specifies the parameter and further specifications.
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the parameter is required to be present when the tool is being called for actual processing (so not in case a `help` or `version` parameter is specified). If `Y`, the parameter MUST either be present in the configuration file, or as a command-line parameter.
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
| `version: <bool>`       | n | Specify whether or not the version number of the tool must be output. |
| `onNotExist: <action>`  | n | The action in case something that is necessary for further processing didn't exist. |

The `<action>` parameter can take the following values.

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | An error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | A message is displayed (and logged) and processing continues. |
| `'log'`    | A message is written to a log(file) and processing continues. |
| `'ignore'` | Processing continues as if nothing happened. |

</TabItem>

<TabItem value="mrg-import">

Parameters that are specific to the [MRG Import](/docs/spec-tools/mrg-import) tool can be put in the YAML section `mrg-import`.

| MRG Import Parameters   | Req'd | Description |
| :---------------------- | :---: | :---------- |
| `onNotExist: <action>`  | n | The action in case an MRG file unexpectedly does not exist. |
| `prune: <bool>`         | n | If `<bool>` is `true`, remove all [MRG](@) files in the [glossarydir](@) where the scopetag is not administered in the [SAF](@). |

The `<action>` parameter can take the following values.

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | An error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | A message is displayed (and logged) and processing continues. |
| `'log'`    | A message is written to a log(file) and processing continues. |
| `'ignore'` | Processing continues as if nothing happened. |

</TabItem>

<TabItem value="mrgt">

Parameters that are specific to the [mrgt](/docs/spec-tools/mrgt) can be put in the YAML section `mrgt`.

| Key                    | Req'd | Description |
| :--------------------- | :---: | :---------- |
| `onNotExist: <action>` | n | The action in case an MRG file unexpectedly does not exist. |
| `vsntag: <vsntag>`     | n | Versiontag for which the MRG needs to be (re)generated. |
| `prune: <bool>`        | n | If `<bool>` is `true`, remove all [MRG](@) files in the local scope from the [glossarydir](@) where the vsntag (or altvsntag) is not administered in the [SAF](@) |

The `<action>` parameter can take the following values.

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | An error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | A message is displayed (and logged) and processing continues. |
| `'log'`    | A message is written to a log(file) and processing continues. |
| `'ignore'` | Processing continues as if nothing happened. |

</TabItem>

<TabItem value="hrgt">

Parameters that are specific to the [hrgt](/docs/spec-tools/hrgt) can be put in the YAML section `hrgt`

| Parameter                       | Req'd | Description |
| :------------------------------ | :---: | :---------- |
| `output: <dir>`                   | Y | (Root) directory for output files to be written. |
| `interpreter: <regex> or <predeftype>`  | n | Type of [MRGRef](@) interpreter, i.e., a [(PCRE) regex](https://www.debuggex.com/cheatsheet/regex/pcre), or a predefined type (`default`). |
| `converter: <template> or <predeftype>` | n | Type of [MRGRef](@) converter, i.e., a mustache/[handlebars](https://handlebarsjs.com/guide/#what-is-handlebars) template, or a predefined type ( `markdown-table-row`, `markdown-section-2`, `markdown-section-3`). |
| `sorter: <template> or <predeftype>`      | n | Value to use for sorting, i.e., a mustache/[handlebars](https://handlebarsjs.com/guide/#what-is-handlebars) template, or a predefined type ( `default`). |
| `force: <bool>`                   | n | If `<bool>` is `true`, allow files in the output directory to be overwritten. If `<bool>` is `false` or unspecified, output files will not overwrite existing files. |

## Predefined HRGT interpreters

There is only one predefined HRGT interpreter (called `default`). It need not be specified (as it is default). 

It is described in section [MRG References syntax](/docs/spec-syntax/mrg-ref-syntax)

## Predefined HRGT converters

Each of the predefined HRGT converters produces an alphabetically sorted list of some of the contents of the [MRG entries](@) that are in the [terminology](@) ([MRG](@)) as detected by the HRGT interpreter.The below table lists the predefined converters, and specifies what each such [MRG entry](@) is converted into.

The moustache-variables `{{glossaryTerm}}` and `{{glossaryText}}` will be replaced with the contents of their corresponding fields from the [MRG entry](@). The `{{glossaryTerm}}` is typically converted into a link to the rendered version of the [curated text](@) of the [semantic unit](@) to which the [TermRef](@) refers.

| converter | Convert every [MRG entry](@) into: |
| :-------- | :------ |
| `markdown-table-row` | A markdown table row of two cells, the first containing `{{glossaryTerm}}` and the second `{{glossaryText}}`. Of course, this will only work if the [MRGref](@) is preceeded by a markdown table header. |
| `markdown-section-2` | A level 2 markdown section, using `{{glossaryTerm}}` as the header, and `{{glossaryText}}` as the (textual) contents of that section. |
| `markdown-section-3` | Same as `markdown-section-2`, except that it is a level 3 markdown section. |

## Predefined sorting values

There is only one predefined HRGT sorting value (called `default`). It need not be specified (as it is default). 

It is described in section [HRG Sorting](/docs/spec-tools/hrgt#hrg-sorting).

</TabItem>

<TabItem value="trrt">

Parameters that are specific to the [TRRT](/docs/spec-tools/trrt) can be put in the YAML section `trrt`:

| TRRT Parameters                 | Req'd | Description |
| :------------------------------ | :---: | :---------- |
| `output: <dir>`                   | Y | (Root) directory for output files to be written. |
| `interpreter: <regex> or <predeftype>`  | n | Type of [MRGRef](@) interpreter, i.e., a [(PCRE) regex](https://www.debuggex.com/cheatsheet/regex/pcre), or a predefined type (`default`, `alt`). |
| `converter: <template> or <predeftype>` | n | Type of [MRGRef](@) converter, i.e., a mustache/[handlebars](https://handlebarsjs.com/guide/#what-is-handlebars) template, or a predefined type (`markdown-link`, `html-link`, `html-hovertext-link`, `html-glossarytext-link`). |
| `force: <bool>`                   | n | If `<bool>` is `true`, allow files in the output directory to be overwritten. If `<bool>` is `false` or unspecified, output files will not overwrite existing files. |

## Predefined TRRT interpreters

The predefined TRRT interpreter types are described elsewhere in the documentation, as follows:
- `default`: section on [Default syntax](/docs/spec-syntax/term-ref-default-syntax)
- `alt`: section on [Alternative syntax](/docs/spec-syntax/term-ref-alt-syntax)

## Predefined TRRT converters

Each of the predefined TRRT converters produces some kind of link to the rendered version of the [curated text](@) of the [semantic unit](@) to which the [TermRef](@) refers, as follows:

| converter | Convert a TermRef into a link of the form: |
| :-------- | :------ |
| `markdown-link`          | `[{{showtext}}](<url>)` |
| `html-link`              | `<a href="<url>">{{showtext}}</a>` |
| `html-hovertext-link`    | `<a href="<url>" title="<hoverText>" >{{showtext}}</a>`,<br/>where `<hoverText>` is created from the `hoverText`-field in the corresponding [MRG entry](@). |
| `html-glossarytext-link` | `<a href="<url>" title="<glossaryText>" >{{showtext}}</a>`,<br/>where `<glossaryText>` is created from the `glossaryText`-field in the corresponding [MRG entry](@).  |

</TabItem>

</Tabs>

---
