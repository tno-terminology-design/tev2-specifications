---
id: mrg-importer
sidebar_label: MRG Importer
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20230731
---

# MRG Import Tool

import useBaseUrl from '@docusaurus/useBaseUrl'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <mark>text to mark</Mark?-->
export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

:::info Editor's Note
This section is still under development. You'll see further editor's notes where issues exist.
:::

The **[MRG](@) Import Tool ([MRG importer](@))** ensures that the [scope](@) within which it is run, obtains a local copy of all [MRGs](@) that are available in the [scopes](@) that are mentioned in the [scopes section](/docs/tev2/spec-files/saf#scopes) of its [SAF](@). This makes life easy for various tools, e.g., the [MRGT](@) and the [TRRT](@), that can now assume that all [MRGs](@) that they may need to consult in order to do their job, are readily available. 

There will shortly be an implementation of the tool:
- the repo for the code of the tool is [here](https://github.com/tno-terminology-design/mrg-import).
- the documentation is [<mark>tbd</mark>].

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install tno-terminology-design/mrg-import -g
~~~

## Calling the Tool

The behavior of the [MRG importer](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
mrg-import [ <paramlist> ]
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
| `onNotExist`   | `<action>`      | n | specifies the action to take in case an MRG file that was expected to exist, does not exist. Default is `'throw'`. |

The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

## Processing, Errors and Warnings

The [MRG importer](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalidities include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [MRG importer](@) reads the [SAF](@) of the [scope](@) from which the [MRG importer](@) is called. We will use the following names for values that are in the [SAF](@):
- `{my-own-scopetag}` = `scopetag`-field from the `scope`-section
- `{my-own-scopedir}` = `scopedir`-field from the `scope`-section
- `{my-own-glossarydir}` = `glossarydir`-field from the `scope`-section

The [MRG importer](@) also reads the [scopes section](/tev2-specifications/docs/tev2/spec-files/saf#scopes) of the [SAF](@), which specifies the 'other' [scopes](@) from which the actively maintained [MRGs](@) have to be imported. This [scopes section](/tev2-specifications/docs/tev2/spec-files/saf#scopes) contains elements that consist of two parts, whose values we will refer to by the following names:
- `{import-scopetag}` = `scopetag`-field from the `scopes`-section of the [SAF](@)
- `{import-scopedir}` = `scopedir`-field from the `scopes`-section of the [SAF](@)

For every `{import-scopedir}`, the [MRG importer](@) will read its [SAF](@) to find out which [terminologies](@) are being actively maintained (we will use `{import-saf}` to refer to the contents of this [SAF](@)).

:::info Editor's note
Reading a SAF may require authentication, e.g. when the scopedir of the other scope is in a private or enterprise repo. How the MRG importer will be dealing with this remains to be specified.
:::

We will use:
- `{other-scopetag}` = the `scopetag`-field in the `scope` section of `{import-saf}`;
- `{other-glossarydir}` = the `glossarydir`-field in the `scope` section of `{import-saf}`;

The [versions-section](/tev2-specifications/docs/tev2/spec-files/saf#versions) in `{import-saf}` specifies which [terminologies](@) are actively maintained within the other [scope](@), and hence have to be imported. Every such [terminology](@) is specified by an entry in this section, and must hence be processed to import the associated [MRGs](@). 

To specify one such process, we will use:
- `{other-vsntag}` = `vsntag`-field in the element of the `versions` section of `{import-saf}`
- `{other-altvsntags}` = `altvsntags`-field in an element of the `versions` section of `{import-saf}`

To import the associated [MRGs](@), here is what we do:
- read the file `{import-scopedir}/{import-glossarydir}/mrg.{other-scopetag}.{other-vsntag}.yaml`, which is the file that contains the [MRG](@) that needs to be imported. If that file doesn't exist, this results in the bahaviour as specified by the `<action>` value of the `onNotExist` parameter. Default is `throw`.
:::info Editor's note
It may well be possible that contents of the mrg may need to be processed.
This is due to the fact that `scopetag`s are 'local' names for referring to scopes and every scope gets to decide on its own scoptag names. So the meaning of 'scopetags' cannot be transferred across scopes. We have to use universal/fixed identifiers, such as a `scopedir`-URL to identify scopes. Still, local names can be useful (and are necessary), so we'll have to figure out what the impact of this is.
ed:::
- write the contents to `{my-scopedir}/{my-glossarydir}/mrg.{import-scopetag}.{other-vsntag}.yaml`, overwriting a file that has the same name if that were to exist.
- for every [versiontag](@) in `{other-altvsntags}` (which we call `{other-altvsntag}`), a symbolic link `mrg.{import-scopetag}.{other-altvsntag}.yaml` is created in the `{my-scopedir}/{my-glossarydir}/` directory, that links to the `mrg.{import-scopetag}.{other-vsntag}.yaml` file that was just created in that same directory.

:::note NOTE the change of the `scopetag` part in the filename!
The name of the [MRG](@) in the [scope](@) from which it is imported may differ from the name of the [MRG](@) that is imported. The reason for this is that the names ([scopetags](@) that are used in these [scopes](@) to refer to the [scope](@) from where [MRGs](@) are imported, may differ.
:::

The [MRG importer](@) logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [MRG importer](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.
