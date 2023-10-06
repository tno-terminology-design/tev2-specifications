---
id: mrgt
sidebar_label: MR Glossary Generation
date: 20231006
---

# Machine Readable Glossary Generation Tool

import useBaseUrl from '@docusaurus/useBaseUrl'

The **Machine Readable Glossary generation Tool ([MRGT](@))** generates Machine Readable Glossaries ([MRGs](@)) for one specific, or all [terminology](@) versions that are [curated](@) within a specific [scope](@). [MRGs](@) come in a specific, well-defined [format](/docs/spec-files/mrg). They contain some meta-data, followed by a list of so-called [MRG entries](@), one for every [term](@) in its [scope](@), which represent [concepts](@) and other [semantic units](@) that are known within that [scope](@).

The (newly generated) [MRG(s)](@) are meant to be processed by the other tools in the [toolbox](/docs-toolbox), regardless of whether such tools are called from within the context of another [scope](@). As they contain every [term](@) that is used in the [scope](@), and include all the relevant meta-data, an [MRG](@) serves as the single, authoritative source of that (version of the) [scope's](@) [terminology](@).

There is currently one implementation of the tool (but not yet fully available), which will be built similar to the [TRRT](@) and [MRG Importer](@). [^previous]
- the repo is [here](https://github.com/tno-terminology-design/mrgt).
- the documentation is [<mark>provided in this web page</mark>].

[^previous]: An older (JAVA) implementation exists, but is not compatible with the current specifications:<br/>- the repo is [here](https://github.com/trustoverip/ctwg-toolkit-mrg/)<br/>- the documentation is [here](https://github.com/trustoverip/ctwg-toolkit-mrg#readme)<br/>- the (deprecated) specifications for this tool are [here](https://essif-lab.github.io/framework/docs/spec-tools/mrgt)

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install tno-terminology-design/mrgt -g
~~~

## Calling the Tool

The behavior of the [MRGT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
mrgt [ <paramlist> ]
~~~

where:
- `<paramlist>` (optional) is a list of key-value pairs

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Key`** is the text to be used as a key.
2. **`Value`** represents the kind of value to be used.
3. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter.
4. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Key            | Value         | Req'd | Description |
| :------------- | :------------ | :---: | :---------- |
| `config`       | `<path>`        | n | Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter MUST NOT appear in the configuration file itself. |
| `scopedir`     | `<path>`        | Y | Path of the [scope directory](@) from which the tool is called. It MUST contain the [SAF](@) for that [scope](@), which we will refer to as the 'current scope' for the [MRG importer](@). |
| `vsntag`       | `<vsntag>`      | n | [versiontag](@) for which the [MRG](@) needs to be (re)generated. When omitted, an [MRG](@) will be generated for every version of the [terminology](@) that is specified in the [`versions` section](/docs/spec-files/saf#versions) of the [SAF](@) |
| `onNotExist`   | `<action>`      | n | specifies the action to take in case a `vsntag` was specified, but wasn't found in the [SAF](@). Default is `'throw'`. |

The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

## Running the Tool

One run of the [MRGT](@) either
- generates an [MRG](@) for one specific [terminology](@) version within the current scope (which is the case when the `version` parameter was specified), or it
- generates multiple [MRGs](@), i.e., one for every version of the [terminology](@) that is [curated](@) within the current scope (which is the case when the `version` parameter is omitted).

Running the tool comprises the following phases:

1. In the first phase, a provisional [MRG](@) is created for all [terminology](@) versions that are to be created. Each [MRG](@) contains a provisional [MRG entry](@) for every [term](@) contained in its (version of the) [terminology](@). This provisional [MRG entry](@) either contains 
    - all fields in the [header](@) of the [curated text](@) that documents its [term](@), or 
    - all fields in the [MRG entry](@) that comes from another [MRG](@) (typically from another [scope](@)). How this works precisely is specified in the [Term Selection Instruction syntax](/docs/spec-syntax/mrg-term-selection-syntax).<br/>
    Note that in case the [MRG entry](@) is a copy of another [MRG entry](@), the `vsntag` [field](/docs/spec-files/mrg#mrg-entries) of that [MRG entry](@) must be given the value of the `vsntag` field that is found in the ['terminology' section](/docs/spec-files/mrg#mrg-terminology) of the [MRG](@) from which [MRG entry](@) contents was copied.

## Exceptions, Warnings, and Logging {#exceptions}

:::info Editor's note
This section needs to be reviewed/revised so as to enable a consistent way of error checking and logging, similar to what is done in the TRRT
:::

The general principle is that the [MRGT](@) helps its users to do their jobs. This means that errors that terminate the processing are limited to the max, that warnings (perhaps at different 'levels' of detail/severity) are given output whenever possible (yet may be limited by command-line options), and that texts are tailored for the envisaged users of the tool.

The [MRGT](@) logs conditions that prevent it from properly:

- obtaining the [scopedir](@) from a [scopetag](@);
- parsing a [curated text](@) (e.g. because it is not in the expected format);
- resolving [terms](@), [scope tags](@), [group tags](@), or [version tags](@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

Also, the [MRGT](@) provides suggestions that help tool-operators ([curators](@)) to not only identify, but also fix any problems.

The [MRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Notes

[^previous]: The algorithm ensures that an [MRG entry](@) for a [term](@) that is a [synonym](@) of another [term](@) identical to the [MRG entry](@) for that other [term](@), but if the [curated text](@) that specifies the [synonym](@) has additional front matter (e.g. a slightly modified `glossaryText` field), that front matter is retained in the [MRG entry](@). It is up to the [author](@) of the [curated text](@) to make sure this does not pose any problems, and up to the [ICT](@) to do appropriate checks.