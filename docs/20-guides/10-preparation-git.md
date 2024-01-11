---
id: preparation-git
date: 20231209
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Preparation (using Git)

This document tells you how to prepare for managing the [terminologies](@) you need for the work that you are already doing, and for which you have a git repository (e.g., on github or gitlab, or just local on your computer). The git repo can contain anything: code, documentation, as well as combinations. Also, it may, or may not contain stuff to generate static sites with, such as Jekyll, Docusaurus, etc.

We assume that you are familiar with git, as well as with any of the other tools (such as static site generators) that you might be using with your repo.

## Setting up the [scopedir](@) and a simple [SAF](@)

The directory in your git repo within which you will be managing your [terminologies](@) is called the [scopedir](@). Everything that is [TEv2](@)-related must be somewhere within (a subdirectory of) that [scopedir](@). Just pick one.

In the [scopedir](@) you just picked, you start with creating a [SAF](@) in that directory.

Here is an example. Suppose we have a person, John Doe, whose github username is `johndoe`. He has a repo `example` on github, of which the main branch is called `main`. The URL by which this (branch on the) repo is accessible, is `https://github.com/johndoe/example/tree/main`. 

### Setting up the [SAF](@)

Here is what John does to create the initial [SAF](@) so that he can use [TEv2](@) in his repo.

1. He decides to use `jdterms` as the [name/tag](scopetag@) he will use to refer to the [terminology](@) he will [curate](@) in this repo.
2. He creates a directory `docs` as the [scopedir](@) (so, the URL for the [scopedir](@) becomes: `https://github.com/johndoe/example/tree/main/docs`). If the directory already exists, he can simply use it.
3. Within the `docs` directory, he creates two new directories:
    - `terms` that will contain all files that contain the [curated texts](@) he will be [developing](curate@).
    - `glossaries`, that will contain all [machine readable glossaries](@) that will he will be importing from other scopes, or generate himself.

<details>
    <summary>Within the `docs` directory, he creates a new file called `saf.yaml`.</summary>

```yaml
scope:
  scopetag: jdterms # short name for what you call your scope.
  scopedir: https://github.com/johndoe/example/tree/main/docs  # URL of the scope-directory
  curatedir: terms # directory where all curated files are located. Full URL is `scopedir`/`curatedir`
  glossarydir: glossaries # directory where all glossary files are located. Full URL is `scopedir`/`glossarydir`
```
</details>

### Adding Configurations for Rendering

[TEv2](@) allows [TermRefs](@) to link to the rendered versions of the [(curated) texts](curated-text@) that describe, define or otherwise document what such [TermRefs](@) refer to.

Some static file generators allow for _front matter_, i.e., blocks of data on top of markdown files that are used to set custom variables for better content generation. One typical use is a variable (called something like `id`, `slug`, `permalink` or so) that is used in the URL to rendered pages.

In our example, John uses the static site generator "Docusaurus", and organizes it to generate a site that is accessible at `https://johndoe.github.io/example/docs`. Note that this has nothing to do with [TEv2](@). Docusaurus uses a front matter variable named `id`, which means that a file that sets this variable to `introduction` will be rendered at URL `https://johndoe.github.io/example/docs/path-to-file/introduction` (where `path-to-file` is the path to the file that contains `id: introduction` in its front matter).

<details>
    <summary>Here is the SAF that John created to accommodate for this:</summary>

```yaml
scope:
...
  website: https://johndoe.github.io/example/docs # base URL for rendered site.
  navpath: /terms # Path to the directory where Curated Texts are rendered.
  bodyFileID: id # Name of the front-matter field that provides a unique identifier for the file.
...
```
</details>

### Adding References to other [Scopes](@)

There are cases in which it is beneficial to use [terminologies](@) that are [curated](@) outside of the [scope](@). For example, if you would like to use one or more [terms](@) that we use here in this documentation, you can do so by adding a reference to the [scope](@) in which we [curate](@) these terms.

A reference to another [scope](@) is an entry in the [`scopes` section](/docs/specs/files/saf#scopes) of the [SAF](@), which consists of:

- a `scopetag` field, that contains a single [scopetag](@) that you choose to represent this [scope](@) with (from within your own [scope](@))
- a `scopedir` field, that contains the URL to the [scopedir](@) where the [SAF](@) of this other [scope](@) is located.

<details>
    <summary>Example of References to other Scopes:</summary>

```yaml
...
scopes:
- scopetag: tev2
  scopedir: https://github.com/tno-terminology-design/tev2-specifications/tree/main/docs
- scopetag: essif-lab
  scopedir: https://github.com/essif-lab/framework/tree/master/docs
...
```
</details>

### Adding Configurations for [Terminologies](@)

Within a [scope](@), there can be multiple [terminologies](@), each of which is identified within that [scope](@) through [versiontags](@). The specification of the [versiontags](@), as well as the contents of a [terminology](@), is done within the [SAF](@). The actual contents of a [terminology](@) can be found in an associated [MRG](@), that is located in the [glossarydir](@) of the [scope](@), and that adheres to the [MRG file naming conventions](/docs/specs/files/mrg#file-naming-conventions@).

The [versiontags](@) and the contents of a [terminology](@) are specified as an entry in the [`versions` section](/docs/specs/files/saf#versions) of the [SAF](@). This section must contain at least:

- a `vsntag` field, that contains the (main) [versiontag](@) of the [terminology](@).
- a `termselection` field, that consists of [instructions for composing the contents](/docs/specs/syntax/mrg-term-selection-syntax) of the [terminology](@).

Every [scope](@) has one default [terminology](@), whose [versiontag](@) must be specified in the `defaultvsn` field in the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@).

Here are some example terminology-configurations:

<Tabs
  defaultValue="default"
  values={[
    {label: 'Default terminology',       value: 'default'},
    {label: 'Altvsntags',                value: 'altvsntags'},
    {label: 'Term selection',            value: 'term-selection'},
  ]}>

<TabItem value="default">

Every [scope](@) has a default [terminology](@) (and associated default [MRG](@)), which is in the file `mrg.<scopetag>.yaml`. It is also in the file `mrg.<scopetag>.<defaultvsn>.yaml`, where `<defaultvsn>` is the [versiontag](@) that is used within that scope to identify the default [terminology](@)/[MRG](@).

John starts simple, and decides to use `latest` as the [versiontag](@) for his default [terminology](@).
This [terminology](@) will consist of all the [terms](@) defined by any of his [curated texts](@).

```yaml
scope:
...
  defaultvsn: latest # vsntag that identifies the default terminology.
...
versions:
- vsntag: latest
  termselection:
  - "*" # import all terms as defined/described in the curated text of this scope.
...
```
If you do not want the default [MRG](@) to contain an [entry](mrg-entry@) for every [curated text](@), you can [add instructions for this](/docs/specs/syntax/mrg-term-selection-syntax) to the `termselection` field.

</TabItem>

<TabItem value="altvsntags">

There are cases in which it is beneficial that a [terminology](@) can be referred to with multiple  [versiontags](@), each of which is used for a particular purpose. This can be done by placing any additional [versiontags](@) in the `altvsntags` field of the `versions` section of the [SAF](@).

John wants his default [terminology](@) to also be known under the alternative [versiontag](@) `v1.0.0`. He does that by adding the `altvsntags` field, as follows:

```yaml
scope:
...
versions:
- vsntag: latest
  altvsntags: [ v1.0.0 ] # list of alternative verstiontags
  termselection:
  - "*" # import all terms as defined/described in the curated text of this scope.
...
```
Notes:

- The `altvsntag` field expects you to specify a list of alternative [versiontags](@); not just one.
- For every alternative [versiontag], an [mrg](@) is created in the [glossarydir](@) with the [appropriate name](/docs/specs/files/mrg#file-naming-conventions@).
- If you do not want the default [MRG](@) to contain an [entry](mrg-entry@) for every [curated text](@), you can [add instructions for this](/docs/specs/syntax/mrg-term-selection-syntax) to the `termselection` field.

</TabItem>

<TabItem value="term-selection">

The contents of a [terminology](@) does not necessarily consist of all [terms] defined/described in the [curated texts](@). The contents of a [terminology](@) is constructed by a process that sequentially interprets instructions provided in the `termselection` field. This process allows, e.g., for 

- adding [terms](@) to a [terminology](@), either from [curated texts](@), or from [MRGs](@) that are imported from other [scopes](@);
- removing [terms](@) from a [terminology](@), e.g. to compensate for a previous addition of too many terms;

This process of constructing a [terminology](@) is described as part of the [MRGT](@) tool, in the section [Running the Tool](/docs/specs/tools/mrgt#running-the-tool).

The syntax for adding and removing entries in a [terminology](@) can be found [here](/docs/specs/syntax/mrg-term-selection-syntax).

To give you a flavor of what this entails, here is an example:

```yaml
...
versions:
- vsntag: latest
  termselection:
  - "*" # import all terms as defined/described in the curated text of this scope.
  - -termType[pattern,use-case] # remove all terms of type `pattern` and type `use-case`.
  - term[concept,semantic-unit]@tev2" # import terms `concept`, `semantic-unit` from scope `tev2`.
...
```

</TabItem>

</Tabs>

---

<details>
    <summary>Example: the SAF used in repo for these specifications</summary>

The below text was the contents of the [saf.yaml](https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/saf.yaml) file in the TEv2-specifications repo at the time this text was authored.

```yaml
#
# This is a Scope Administration File that can be used in conjunction with [Terminology Engine v2](https://tno-terminology-design.github.io/tev2-specifications/docs/category/introduction-overview).
#
# The first section defines meta-data concerning the scope itself, both for technical use and human use.
# It shows where directories and files live that ar part of the scope, and also
# ways in which people can contribute, raise issues, see what's going on, discuss, etc.
#
scope:
  scopetag: tev2 # identifier that curators have determined for this terminology
  scopedir: https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs  # URL of the scope-directory
  curatedir: terms # directory where all curated files are located. Full URL is `scopedir`/`curatedir`
  glossarydir: glossaries # directory where all glossary files and GDFs are located. Full URL is `scopedir`/`glossarydir`
  defaultvsn: documentation # vsntag that identifies the default terminology. MRG is located at `scopedir`/`glossarydir`/mrg.tev2.latest.yaml
  website: https://tno-terminology-design.github.io/tev2-specifications/docs # base URL for creating links to rendered versions of Curated Texts. It should also serve as the home page of the Terminology.
  navpath: /terms # Path to the directory where Curated Texts are rendered. What `curatedir` is for Curated Texts is, `navpath` is for the rendered versions of Curated Texts.
  bodyFileID: id # Name of the field in the front matter of a [body file](@) used by your static site generator in a URL, to uniquely identify that file (e.g., "id", "slug", "permalink"). If not specified, the filename of the [body file](@) will be used. | 
  license: LICENSE.md # file that contains the (default) licensing conditions. Full URL is `scopedir`/`license`
  statuses: [ proposed, approved, deprecated ] # list of status tags that are defined for semantic units in this scope
  issues: https://github.com/tno-terminology-design/tev2-specifications/issues # URL where issues can be raised and handled
  curators: # contacting individual curators
  - name: RieksJ
    email: # we split up the email address to reduce the likelihood of the address being harvested for spamming
      id: rieks.joosten
      at: tno.nl
#
# The second section contains a mapping between scopetags that are used within the scope, and the associated scopedirs.
# This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc.
# that live within them, e.g. to use/import their data.
#
scopes:  #
- scopetag: essif-lab # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology
  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory
- scopetag: essiflab # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology
  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory
#
# The third section specifies the versions that are actively maintained by the curators.
# For each version, the set of terms is selected that constitute the terminology.
# See the Glossary Generation Tool (GGT) for details about the syntax and semantics.
#
versions:
- vsntag: terms # this version contains all terms that are curated within this scope
  termselection:
  - "*" # import all tev2 terms.
  - "-term[@]" # exclude the `@` (which is only used for debugging purposes)
- vsntag: patterns # this version contains all patterns we need within this scope
  termselection:
  - termType[pattern]
  - termType[pattern]@essif-lab
- vsntag: documentation # terms that are needed for this specification
  altvsntags: [ latest ] # alternative verstiontags
  termselection:
  - "term[action]@essif-lab"
  - "rename action [id:act, term:act, formPhrases:'act{ss}']"
  - "term[party,actor,onboarding,action,organization,community,entity,legal-entity]@essif-lab"
  - "term[ssi,assertion,claim,credential,issue,verify,validate,transaction]@essif-lab"
  - "term[manage,management,governance,risk,owner,owned]@essif-lab" 
  - "term[jurisdiction,objective,control,expectation,obligation]@essif-lab"
  - "term[control-objective,risk-objective,compliance-objective]@essif-lab" 
  - "term[identity,partial-identity,identifier,identify,identification]@essif-lab"
  - "term[concept,relation,property,pattern,semantic-unit,terminology,vocabulary,knowledge]@essif-lab"
  - "termType[concept,acronym,abbreviation]" # import all of our own stuff (except patterns)
```
</details>

---
