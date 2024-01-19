---
id: ingress-wiki
sidebar_label: Ingress Wiki
date: 20240119
---

# Ingress Wiki Tool

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Ingress Wiki Tool** is a [TEv2 text conversion tool](@) that takes Github Wikis that contain [Ingressable Wiki Files](@) and converts them into [curated text](@).

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install -g @tno-terminology-design/ingress-wiki
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

The behavior of the [Ingress Wiki Tool](@) can be configured per call e.g. by a [configuration file](/docs/specs/files/configuration-file) and/or command line parameters. The command line syntax is as follows:

~~~
ingress-wiki [ <paramlist> ]
~~~

where:

- `<paramlist>` is an (optional) list of parameters, as specified in the table below.

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
| `-c`, `--config <path>`                    | n | Path (including the filename) of the tool's (YAML) [configuration file](/docs/specs/files/configuration-file). |
| `-w`, `--wikiPath <path>`                  | n | Path of the local filesystem for the wiki folder to be created |
| `-r`, `--githubRepo <path>`                | Y | Path of the github repo the wiki lives in |
| `-o`, `--output <dir>`                     | Y | (Root) directory for output files to be written. |
| `-s`, `--scopedir <path>`                  | Y | Path of the scope directory where the SAF is located. |
| `-t`, `--termselcriteria`                  | n | List of term selection criteria that are used to generate |
| `-h`, `--help`                             | n | display help for command. |

## Ingress Wiki {#what-it-does}

The Ingress Wiki tool is specifically designed to convert Ingressable Wiki Files into curated text. This process involves extracting, organizing, and refining the content of these specially formatted wiki files to produce coherent, well-structured documents. 
