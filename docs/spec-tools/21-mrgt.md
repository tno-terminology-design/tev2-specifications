---
id: mrgt
sidebar_label: MRG Generation (MRGT)
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
- generates an [MRG](@) for one specific [terminology](@) version within the [current scope](@) (which is the case when the `version` parameter was specified), or it
- generates multiple [MRGs](@), i.e., one for every version of the [terminology](@) that is [curated](@) within the [current scope](@) (which is the case when the `version` parameter is omitted).

Running the tool comprises the following phases:
1. Consturcting a [provisional MRG](@);
2. Post-processing the [entries](provisional-mrg-entry@) in that [provisional MRG](@);
3. Creating/overwriting [MRG](@) file(s) in the [glossarydir](@) of the [current scope](@), and creating/overwriting symbolic links, as appropriate.

### Phase 1: constructing a [provisional MRG](@) {#mrgt-constructing-provisional-mrg}

Generating an [MRG](@) for a particular version of a [terminology](@) starts by reading the [SAF](@) of the [scope](@) within which that [terminology](@) is curated, which exists in the [scopedir](@) that was provided as one of the calling parameters. If a `vsntag` argument is provided, it will search the [versions section](/docs/spec-files/saf#versions) of the [SAF](@) to find the corresponding entry. This corresponding entry will have the value of the `vsntag` parameter either in its `vsntag` field, or it is one of the elements in the `altvsntags` field. If the [SAF](@) does not have a corresponding entry, the action specified in the `onNotExist` parameter will determine whether or not (and how) to proceed.

In this phase, for every [terminology](@) version that is to be created, one [provisional MRG](@) is created, that contains a [provisional MRG entry](@) for every [term](@) contained in the particular version of the [terminology](@). This [provisional MRG entry](@) either contains:
- all fields in the [header](@) of the [curated text](@) that documents its [term](@), or 
- all fields in the [MRG entry](@) that comes from another [MRG](@) (typically from another [scope](@)). 

The [Term Selection Instruction syntax](/docs/spec-syntax/mrg-term-selection-syntax) specifies precisely how [provisional MRGs](@) are created.

#### Storing a [provisional MRG](@) in the [glossarydir](@) {#mrgt-mrg-filenames}

When the creation of a [provisional MRG](@) is complete, a filename `mrg.<scopetag>.<vsntag>.yaml` is constructed, where:
- `<scopetag>` is the [scopetag](@) that is used within the [current scope](@) to refer to itself. Its value can be found in the `scopetag`-field in the [`scope` section](docs/spec-files/saf#terminology) of the [SAF](@).
- `<vsntag>` is the [versiontag](@) that [identifies](@) the version of the [terminology](@) for which the [MRG](@) contains [entries](mrg-entry@). Its value must be equal to that found in the `vsntag`-field of the element in the [versions section](/docs/spec-files/saf#versions) of the [SAF](@) from which the [MRG](@) was generated.

If a file with that name already exists in the [glossarydir](@) of the [current scope](@), it will be deleted. Then, a new file with that name will be created, which will contain:
- a [`terminology` section](/docs/spec-files/mrg#mrg-terminology), the contents of which is obtained by copying relevant fields from the [`terminology` section](/tev2-specifications/docs/spec-files/saf#terminology) in the [SAF](@);
- a [`scopes` section](/docs/spec-files/mrg#mrg-scopes), the contents of which is obtained by copying relevant fields from the [`scopes` section](/tev2-specifications/docs/spec-files/saf#scopes) in the [SAF](@);
- an [`entries` section]((/docs/spec-files/mrg#mrg-terminology)), the contents of which consists of the [provisional MRG entries](@) of the [provisional MRG](@).

Then, if the `<vsntag>` part of the filename equals the value of the `defaultvsn` field in the [`scope` section](docs/spec-files/saf#terminology) of the [SAF](@), a [symbolic link](https://en.wikipedia.org/wiki/Symbolic_link) is created in the [glossarydir](@) whose filename is `mrg.<scopetag>.yaml`, which is the name by which the default [MRG](@) of the [current scope](@) is referred to.

Next, the [MRGT](@) will create a [symbolic link](https://en.wikipedia.org/wiki/Symbolic_link) for every [versiontag](@) that exists in the `altvsntags`-field of the element in the [versions section](/docs/spec-files/saf#versions) of the [SAF](@) from which the [MRG](@) was generated. The symbolic link will point to the file that has just been written and contains the [MRG](@) that has just been generated. The name of this symbolic link is `mrg.<scopetag>.<altvsntag>.yaml`, which is the same name as the [MRG](@) file, except that the `<vsntag>` part of that filename is replaced with the value of the [versiontag](@) found in the `altvsntags`-field.

### Phase 2: post processing Synonyms {#mrgt-post-processing}

This phase starts only after all [provisional MRGs](@) are created that the [MRGT](@) was instructed to build in this run, and the corresponding files and symbolic links have been added to the [glossarydir](@) of the [current scope](@). This allows post processing, e.g. of synonyms, to use the newly generated [provisional MRG entries](@)

When a [provisional MRG entry](@) in (one of) the created [provisional MRGs](@) has a `synonymOf` field that contains a [term identifier](@), this will now refer to either
- an [MRG entry](@) in one of the [MRGs](@) that either already existed, or
- a [provisional MRG entry](@) in a [provisional MRG] that has just been created.
This (possibly [provisional](provisional-mrg-entry@)) [MRG entry](@) is then copied, after which all fields in the [provisional MRG entry](@) that contained the [term identifier](@) are added thereto, overwriting any already existing fields, or adding fields that did not yet exist. Then, the resulting data is used to replace the [provisional MRG entry](@) that contained the [term identifier](@).

Effectively, this means that whenever a [term](@) is defined as a `synonym of` some other [term](@), the corresponding [MRG entry](@) will have all fields of this other [term](@), except for those that were specified in the [header](@) of the [term](@) that is defined as a synonym of that other [term](@).

### Phase 3: post processing other fields

Now, all [provisional MRG entries](@) in all [provisional MRGs] are processed so as to become useable from the context within which they have been selected. This means that every field in such a [provisional MRG entry](@) is discarded if the fieldname (when converted into lowercase), matches any of the field names in the table below, after which the fields in the below table are added with the contents as specified:

| Field          | Value(s) that are assigned to the fields |
| -------------- | :---------- |
| `scopetag`     | overwrite the `scopetag` field with the `scopetag` field as found in the `scope` section of the [SAF](@). |
| `locator`      | path, relative to `scopedir`/`curatedir`/, of the [curated text](@). |
| `navurl`       | path, relative to the URL as specified in the `website` field in the [`scope` section](/docs/spec-files/saf#terminology) of the [SAF](@), where the rendered version of the [curated text](@) is located. |
| `headingids`   | a list of the [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids) that are found in the [body](@) of the [curated text](@). Note that this [body](@) can be either in the [curated text file](@) or in a separate [body file](@). |

The [MRGT](@) run is concluded after all these modifications have been written to their appropriate [MRG](@) files.

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