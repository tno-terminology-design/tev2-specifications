---
id: mrg-import
sidebar_label: MRG Import
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

The **[MRG](@) Import Tool ([MRG importer](@))** ensures that the [scope](@) within which it is run, obtains a local copy of all [MRGs](@) that are available in the [scopes](@) that are mentioned in the [`scopes` section](/docs/specs/files/saf#scopes) of its [SAF](@). This makes life easy for various tools, e.g., the [MRGT](@) and the [TRRT](@), that can now assume that all [MRGs](@) that they may need to consult in order to do their job, are readily available.

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install -g @tno-terminology-design/mrg-import
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

The behavior of the [MRG importer](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
mrg-import [ <paramlist> ]
~~~

where `<paramlist>` is an (optional) list of parameters.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Parameter`** specifies the parameter and further specifications
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter.
3. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

If a configuration file used, the long version of the parameter must be used (without the preceding `--`).
</details>

| Key                          | Req'd | Description |
| :--------------------------- | :---: | :---------- |
| `-c`, `--config <path>`        | n | Path (including the filename) of the tool's (YAML) configuration file. |
| `-s`, `--scopedir <path>`      | Y | Path of the scope directory from which the tool is called. |
| `-e`, `--onNotExist <action>`  | n | The action in case an MRG file unexpectedly does not exist. |
| `-V`, `--version`              | n | output the version number of the tool. |
| `-h`, `--help`                 | n | display help for command. |

The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

## Running the Tool

The current version of the tool simply reads all [MRG](@) files from all [scopes](@) that are specifeid in the [SAF](@).

It does so by reading the [`scopes` section](/docs/specs/files/saf#scopes) of its [SAF](@) (of the [current scope](@)). This section contains entries, each of which specifies a `scopetag` field and a `URL` field. We will use `<my-stag>` and `<url>` to refer to the values of these fields respectively.

For each such entry, the tool obtains the [SAF](@) of that [scope](@), which is located at `<url>`, and from there, it determines the path of the (remote) [glossarydir](@), as well as the [scopetag](@) `<stag>` that it uses to refer to itself, and is used as part of the [filenames](/docs/specs/files/mrg#file-naming-conventions) that contain [MRGs](@) that are generated within that [scope](@).

Then, it copies all files from the remote [glossarydir](@) that are named `mrg.<stag>*.yaml` to the [glossarydir](@) of the [current scope](@), and replaces the `<stag>` part with `<my-stag>` (as the [scope](@) that calls itself `<stag>` is called `<my-stag>` in the [current scope](@)).

## Exceptions, Warnings, and Logging {#exceptions}

:::info Editor's note
This section needs to be reviewed/revised so as to enable a consistent way of error checking and logging, similar to what is done in the TRRT
:::

The general principle is that the [MRG importer](@) helps its users to do their jobs. This means that errors that terminate the processing are limited to the max, that warnings (perhaps at different 'levels' of detail/severity) are given output whenever possible (yet may be limited by command-line options), and that texts are tailored for the envisaged users of the tool.

Also, the [MRGT](@) provides suggestions that help tool-operators ([curators](@)) to not only identify, but also fix any problems.
