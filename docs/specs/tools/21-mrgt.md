---
id: mrgt
sidebar_label: MRGT - MRG Generation
date: 20231006
---

# Machine Readable Glossary Generation Tool

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Editor's note
Documentation needs to be adjusted for:
- Converting formPhrases: MRGT will write expanded formPhrase macros into MRGEntry `formPhrases` field
:::

The **Machine Readable Glossary generation Tool ([MRGT](@))** generates Machine Readable Glossaries ([MRGs](@)) for one specific, or all [terminology](@) versions that are [curated](@) within a specific [scope](@). [MRGs](@) come in a specific, well-defined [format](/docs/specs/files/mrg). They contain some meta-data, followed by a list of so-called [MRG entries](@), one for every [term](@) in its [scope](@), which represent [concepts](@) and other [semantic units](@) that are known within that [scope](@).

The (newly generated) [MRG(s)](@) are meant to be processed by the other tools in the [toolbox](toolbox@), regardless of whether such tools are called from within the context of another [scope](@). As they contain every [term](@) that is used in the [scope](@), and include all the relevant meta-data, an [MRG](@) serves as the single, authoritative source of that (version of the) [scope's](@) [terminology](@).

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install -g @tno-terminology-design/mrgt
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

The behavior of the [MRGT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
mrgt [ <paramlist> ]
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

| Key                         | Req'd | Description |
| :-------------------------- | :---: | :---------- |
| `-h`, `--help`                | n | display help for command. |
| `-c`, `--config <path>`       | n | Path (including the filename) of the tool's (YAML) configuration file. |
| `-s`, `--scopedir <path>`     | Y | Path of the scope directory where the SAF is located. |
| `-v`, `--vsntag <vsntag>`     | n | Version tag for which the MRG needs to be (re)generated. If omitted, MRGs for all versions will be generated. |
| `-V`, `--version`             | n | Output the version number of the tool. |
| `-o`, `--outputdir <path>`    | n | Directory where the generated MRG files will be stored. Defaults to the `glossarydir` of the `scopedir` if not provided. |
| `--altvsntag <vsntag>`        | n | Create additional MRGs with alternative version tag (overrides settings in the SAF). |
| `-e`, `--onNotExist <action>` | n | The action to take if a specified MRG file does not exist. Possible values are `throw`, `warn`, `log`, and `ignore`. |
| `-d`, `--debug`               | n | Enable debug mode to provide more detailed output and logging for troubleshooting purposes. |

<details>
  <summary>Debug Levels</summary>

:::warning The `-d` (`--debug`) option may not yet work as specified.
:::

| Debug Level | Description                                                                                           |
| :---------- | :----------------------------------------------------------------------------------------------------- |
| **info**    | General informational output about the tool's operation, such as high-level actions. *(Default)*        |
| warn        | Shows warning messages indicating potential issues or non-critical problems.                           |
| debug       | Provides detailed output, including internal variables, stack traces, and low-level function calls.     |
| error       | Displays error messages for critical problems that prevent the tool from running correctly.             |
| trace       | The most verbose output, including trace-level logs for in-depth debugging and step-by-step details.    |

</details>

<details>
  <summary>`-e`, `--onNotExist` Actions</summary>

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

</details>

:::info
Some parameters may only be configurable through the use of a [configuration file](/docs/specs/files/configuration-file). In this case `macros`, for use in [form phrases](@), is an example. See the [configuration file](/docs/specs/files/configuration-file) page for details.
:::

## Running the Tool

One run of the [MRGT](@) either

- generates an [MRG](@) for one specific [terminology](@) version within the [current scope](@) (which is the case when the `version` parameter was specified), or it
- generates multiple [MRGs](@), i.e., one for every version of the [terminology](@) that is [curated](@) within the [current scope](@) (which is the case when the `version` parameter is omitted).

Running the tool comprises the following phases:[^1]
1. Constructing a [provisional MRG](@);
2. Post-processing the [entries](provisional-mrg-entry@) in that [provisional MRG](@);
3. Creating/overwriting [MRG](@) file(s) in the [glossarydir](@) of the [current scope](@).

[^1]: The [MRGT](@) does NOT overwrite files that contain an [MRG](@), until all content has been constructed. Thus, the 'old' [MRGs](@) remain available as a (possible) source for copying [MRG entries](@) from during the construction of one or more [provisional MRGs](@).

### Phase 1: Constructing a [provisional MRG](@) {#constructing-provisional-mrg}

During Phase 1, the [MRGT](@) tool constructs a **[provisional MRG](@)** for each specified version of a [terminology](@). This step involves reading the [Scope Analysis File (SAF)](SAF@) and gathering all relevant [entries](mrg-entry@) to form an initial, provisional [MRG](@). The goal is to prepare an intermediate representation of the [MRG](@) that will be refined and finalized in subsequent phases.

#### Step-by-Step Process

1. **Reading the [SAF](@):**
   - The tool begins by reading the [SAF](@) file from the specified `--scopedir` directory. The [SAF](@) contains metadata and configuration details about the [scope](@), [terminology](@) versions, and their corresponding tags (`vsntag` and `altvsntags`).
   - If a `--vsntag` parameter is provided, the tool looks for the corresponding version in the [`versions` section](/docs/specs/files/saf#versions@) of the [SAF](@) and extracts relevant information, such as the `vsntag`, `altvsntags`, and the list of [term selection instructions](@).

2. **Processing the `vsntag` Argument:**
   - If the `vsntag` argument is provided on the command line, the tool searches for the entry in the [SAF](@)'s [`versions` section](/docs/specs/files/saf#versions@) with a matching `vsntag` or one of the elements in its `altvsntags` field.
   - If the `vsntag` is not found, the action specified by the `--onNotExist` parameter (`throw`, `warn`, `log`, or `ignore`) determines how the tool handles this situation.

3. **Determining the [MRG Entries](@) Using [Term Selection Instructions](@):**
   - The tool processes a list of **[term selection instructions](@)** found in the [SAF](@)'s [`versions` section](/docs/specs/files/saf#versions@) for the corresponding `vsntag` (or `altvsntag`, as may be the case).
   -  These instructions specify which [entries](mrg-entry@) are added to, removed from, or modified in the [provisional MRG](@).
   - [Term selection instructions](/docs/specs/syntax/term-selection) include:
     - **[Adding Entries](/docs/specs/syntax/term-selection#add-terms)**: specify the source from which a new [provisional MRG entry](@) is to be created (see next bullet). This can either be a particular [curated texts](@) or a particular [MRG entry](@) from an [MRGs](@) that already exists.
     - **[Removing Entries](/docs/specs/syntax/term-selection#remove-terms)**: specify which [MRG entries](@) that exist in the [provisional MRG](@) are to be removed therefrom.
     - **[Modifying Attributes](/docs/specs/syntax/term-selection#rename-terms)** specify the specific [MRG entries](@) that exist in the [provisional MRG](@) are to have fields modified, and specify which fields (and how they) are to be modified. This allows, e.g., for renaming terms or adjusting other metadata fields.

4. **Creating a [Provisional MRG](@) for Each Version:**.
   - For every version of the [terminology](@) that is to be generated (based on the presence or absence of `vsntag`), the tool creates a [provisional MRG](@). This [provisional MRG](@) is essentially a collection of **[provisional MRG entries](@)**.
   - Creating a **[provisional MRG entry](@)** is done as a result of a [term selection instruction](@) that specifies its source. This can be :
     - A [curated text](@) (that documents a [term](@)). The [provisional MRG entry](@) will then consist of all fields from the [header](@) of the [curated text](@).
     - An [MRG entry](@) from an existing [MRG](@) (often, but not necessarily, from a different [scope](@)). The [provisional MRG entry](@) will then consist of all fields from that [MRG entry](@).
   - **NOTE**: Two (or more) [MRG entries](@) cannot have the same value in their `termid` fields. Therefore, if an [MRG entry](@) is added whose `termid` value  exists in an [MRG entry](@) that is already in the [provisional MRG](@), then this latter [entry](mrg-entry@) will be discarded, after which the new [entry](mrg-entry@) is added.

5. **Normalizing [MRG Entries](@):**
   After adding entries to the [provisional MRG](@), each entry is normalized, which means that various fields are modified, to ensure consistency and standardization when they are further processed. Normalization consists of:
   - **[regularization](@) of fields** that are meant to be processed by tools. They include `term`, `termType`, `formPhrases`.
   - **Expansion of [Form Phrase Macros](@)**, which consists of replacing such [macros](form-phrase-macro@) with their expanded equivalents, resulting in multiple possible alternatives. The tool [recursively processes](form-phrase-macro##expansion-process@) the [form phrases](@) until every of their [macros](form-phrase-macro@) is expanded. This results in a list of **[regularized form phrases](@)** that replaces the original list of [formPhrases](@).

:::tip
An [MRG](@) SHOULD NOT have two (or more) [MRG entries](@) that have a same element in their `formPhrases` field, because that would mean that the form phrase is ambiguous, as it refers to two different [semantic units](@).
:::

6. **Resulting [Provisional MRG](@):**
   - The output of Phase 1 is a **[provisional MRG](@)** for each version specified. These [provisional MRGs](@) serve as intermediate representations that will be refined, validated, and finalized in subsequent phases.

### Phase 2: Post-Processing [Synonyms](#post-processing-synonyms)

In Phase 2, the [MRGT](@) tool processes [synonyms](@) in the [provisional MRG](@) to ensure that terms defined as synonyms of other terms are correctly handled and represented. This phase **can only begin** after all [provisional MRGs](@) have been fully constructed and stored in the [glossarydir](@) of the [current scope](@) during Phase 1, because only then all (provisional) MRG entries will be available that `synonymOf` fields refer to.

#### Step-by-Step Process

1. **Identifying [Synonyms](@):**
   - The tool searches through all [provisional MRG entries](@) in each [provisional MRG](@) and identifies those that have a `synonymOf` field containing a [term identifier](@).
   - The `synonymOf` field indicates that the [term](@) in this [MRG entry](@) is a synonym of another [term](@), and its entry should be derived from that [term's](@) entry.

2. **Locating the Original [MRG Entry](@):**
   - For each [provisional MRG entry](@) with a `synonymOf` field, the tool locates the original [MRG entry](@) that it refers to. This entry could be:
     - An [MRG entry](@) in one of the existing [MRGs](@).
     - A [provisional MRG entry](@) in the current [provisional MRG](@) that was just created.

3. **Copying and Merging Fields:**
   - Once the original [MRG entry](@) is located, its data is copied into the [provisional MRG entry](@) that has the `synonymOf` field, but
   - Any fields already present in the [provisional MRG entry](@) that contained the `synonymOf` reference will overwrite the corresponding fields copied from the original [MRG entry](@).
   - This ensures that the resulting [MRG entry](@) for the synonym has all the fields of the original [term](@) it is synonymous with, except for the fields explicitly defined in its own entry.

4. **Ensuring Consistency and Avoiding Ambiguity:**
   - The tool checks to ensure that no two (or more) [MRG entries](@) in the same [MRG](@) have the same [regularized form phrase](@) in their `formPhrases` field. If two [entries](mrg-entry@) end up having the same form phrase, an exception is raised to avoid ambiguity in referencing [semantic units](@).

5. **Resulting [Provisional MRG](@) after Synonym Processing:**
   - After processing synonyms, the [provisional MRG](@) contains updated entries where all synonyms are correctly linked to their originals. This is crucial for maintaining a consistent and unambiguous [terminology](@) within the [scope](@).
   - These refined [provisional MRGs](@) are ready for further processing in the next phases, where other fields and checks will be finalized.

### Phase 3: Storing a [provisional MRGs](@) in the [glossarydir](@) {#mrg-filenames}

In Phase 3, the [MRGT](@) tool finalizes the [provisional MRG](@) by ensuring that all necessary fields for each [MRG entry](@) are correctly populated, standardized, and consistent. This phase comes after all [synonyms](@) have been processed in **Phase 2** and ensures that the [provisional MRG entries](@) are fully prepared for storage as the final [MRG](@) files.

#### Step-by-Step Process

1. **Populating and Validating Fields:**
   - Each [provisional MRG entry](@) must have specific fields populated and validated to conform to the required structure. The tool ensures that these fields are either filled with correct values or generated if missing:
     - **`scopetag`**: This field is filled with the value from the `scopetag` field in the [`scope` section](/docs/specs/files/saf#scope-section@) of the [SAF](@). It uniquely identifies the [scope](@) within which the [terminology](@) is curated.
     - **`vsntag`**: This field is set to the [versiontag](@) that identifies the version of the [terminology](@) for which the [MRG entry](@) is generated. If the entry is derived from a [curated text](@), its value is taken from the `vsntag` field in the [`terminology` section](#mrg-terminology@) of the [MRG](@).
     - **`termType`**: The `termType` field must exist and be [regularized](@). If it does not exist, it is created with a value equal to the `defaulttype` field in the [`scope` section](/docs/specs/files/saf#scope-section@) of the [SAF](@), or `concept` if `defaulttype` is absent.
     - **`term`**: This field is [regularized](@) and must exist. If not, an exception is raised as this is a critical field.
     - **`termid`**: The value of this field is set as "`<termType>`:`<term>`", combining the regularized values of `termType` and `term`. Each [MRG entry](@) must have a unique `termid` within the [MRG](@) to avoid conflicts.
   
2. **Setting Up Navigation and Locators:**
   - The `locator` and `navurl` fields are populated to ensure correct referencing and navigation within the documentation system:
     - **`locator`**: This field contains the path (relative to `scopedir`/`curatedir`) of the file that contains the [header](@) of the [curated text](@). It ensures traceability back to the original curated document.
     - **`navurl`**: The `navurl` is constructed by concatenating `website`/`navpath`/`curatedir`/`id`, where these elements are defined in the [`scope` section](/docs/specs/files/saf#terminology@) of the [SAF](@). If the [`bodyFile` field](/docs/specs/files/curated-text-file#predefined-header-fields) in the [header](@) of the [curated text file](@) is set, `navurl` becomes `website`/`bodyFile`. The `id` part is determined based on the presence of a `navid` field:
       - If `navid` is specified in the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@), it specifies which field from the [curated text](@) or [body file](@) is used for `id`.
       - If `navid` is not specified, `id` defaults to the name of the [curated text file](@) or [body file](@).

3. **Generating `formPhrases` and `headingids`:**
   - The tool completes the setup of all [MRG entries](@) by processing fields that support additional navigation and search capabilities:
     - **`formPhrases`**: This field is populated with an array of [regularized form phrases](form-phrase#conversion@). One of the elements must be the same as the `term` field, ensuring that tools can find all relevant forms.
     - **`headingids`**: This field is constructed by extracting all [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) found in the [body-file](@) or [curated text file](@), and normalizing them into a list. Custom heading IDs, if present, are also included as-is. This supports both default headers and custom-defined ones, ensuring accurate navigation.

4. **Final Consistency Check:**
   - Before concluding this phase, the [MRGT](@) performs a final consistency check to ensure the integrity of the [MRG entries](@):
     - All `termid` values must be unique within the [MRG](@).
     - No two [MRG entries](@) should have the same [regularized form phrase](@) in their `formPhrases` field to avoid ambiguity.

5. **Resulting [MRG](@) Ready for Storage:**
   - After Phase 3 is complete, each [provisional MRG](@) has all required fields accurately populated and validated. The entries are consistent, standardized, and ready to be stored as final [MRG](@) files in the [glossarydir](@) of the [current scope](@).

#### Key Points to Remember:
- Phase 3 ensures that all fields necessary for [MRG entries](@) are correctly set up, validated, and standardized.
- The `termid`, `locator`, `navurl`, `formPhrases`, `headingids`, and other fields are crucial for the correct functionality of the generated [MRG](@) files.
- A final consistency check ensures the uniqueness of identifiers and prevents any ambiguities in the glossary.

By the end of Phase 3, the [MRG](@) is complete and ready for storage or use by other tools in the [toolbox](toolbox@).

## Exceptions, Warnings, and Logging {#exceptions}

:::info Editor's note
This section needs to be reviewed/revised so as to enable a consistent way of error checking and logging, similar to what is done in the TRRT
:::

The [MRGT](@) tool is designed to assist its users—primarily curators and developers—by providing informative feedback that aids in both identifying and resolving issues encountered during the generation of [MRGs](@). The tool follows a principle of minimizing errors that halt processing, instead favoring warnings and informative messages whenever possible. These messages can be adjusted based on verbosity levels set by command-line options.

### Error Handling Strategy

The [MRGT](@) employs a robust error-handling strategy that focuses on:

- **Limiting Terminating Errors**: Errors that stop the entire process are kept to a minimum. They only occur in critical scenarios where further processing would lead to invalid results or corrupt data. Examples include missing required parameters, encountering unreadable files, or insufficient write permissions for output directories.
  
- **Providing Warnings with Varying Severity Levels**: Warnings are issued to inform users of potential problems that do not immediately stop the process but may affect the output or require user attention. These warnings can be controlled through the `--debug` flag, which allows users to choose between `info`, `warn`, `debug`, `error`, and `trace` levels of verbosity, based on their needs. For example:
  - `info`: General information about the processing.
  - `warn`: Non-critical issues that need attention.
  - `debug`: Detailed output for diagnosing problems.
  - `error`: Critical errors that prevent proper execution.
  - `trace`: Most verbose output for step-by-step troubleshooting.

:::warning The `-d` (`--debug`) option may not yet work as specified.
:::

- **Helpful Suggestions for Resolution**: Whenever an error or warning is generated, the [MRGT](@) provides context and actionable suggestions to help the user resolve the issue. This includes potential fixes for file format errors, missing fields, and configuration issues.

### Common Logging Scenarios

The [MRGT](@) logs conditions that prevent it from properly executing tasks, such as:

- **Obtaining the `scopedir` from a `scopetag`**: If the `scopetag` does not resolve to a valid directory, a warning or error is logged.
- **Parsing a curated text**: Issues may arise if the text is not in the expected format (e.g., invalid YAML front matter or markdown errors), which will be logged with details to assist the user in correcting the format.
- **Resolving terms, scope tags, group tags, or version tags**: If these elements cannot be resolved due to mismatches or missing entries in the [SAF](@), warnings or errors are logged.
- **Writing the output**: Problems such as lacking write permissions for the designated location are logged as errors.

### Leveraging Logging for Troubleshooting

- **Adjust Logging Levels**: Use the `--debug` flag to set the desired verbosity level when running the tool. For detailed debugging, use `debug` or `trace` levels to see internal state information, variable values, and detailed stack traces.
- **Review Log Messages**: Analyze the log messages to pinpoint where issues occur. For example, a message like "Failed to parse curated text at `path/to/file`" not only indicates the file but often provides the line or character position where the parsing failed.
- **Follow Suggestions**: Each warning or error message includes suggestions for resolving the problem. These may involve correcting file paths, adjusting configurations, or ensuring dependencies are met.

### Developer Support and Continuous Integration (CI)

- The [MRGT](@) comes with comprehensive documentation that enables developers to verify its correct functioning. This includes guidelines for setting up test environments, using test scripts to validate parameter handling, and examples of common use cases.
- The tool is designed to be easily integrated into a CI/CD pipeline, allowing for automated testing and deployment in git repositories. Developers can configure CI pipelines to run the [MRGT](@) with various configurations and ensure that any updates or changes do not introduce new issues.

By effectively using the error handling, warnings, and logging mechanisms provided by the [MRGT](@), users can efficiently identify and resolve issues, ensuring smooth and reliable generation of [MRGs](@).
