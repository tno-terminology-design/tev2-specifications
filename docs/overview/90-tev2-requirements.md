---
id: tev2-requirements
sidebar_label: Initial Requirements
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Towards a usable Terminology Tool

Referencing terms and concepts within and from outside of eSSIF-lab

Author: Hidde-Jan Jongsma

:::note 
This text has been created prior to the specification and further development of TEv2. 
We leave it here so that we can look back and see what has come of all this (or not).
:::

## Introduction
We want a good tool for terminology for a number of reasons, such as

1. sharing a single, good terminology within a group of people, is that it enables them to use its terms in a single meaning that is understood by all members of the group. It helps coming to grips with, e.g., conflation of terms which is an all too common cause of misunderstandings, inefficiencies, etc.
2. terms that are defined using criteria that enable readers to determine whether or not something is an instance (example) of the concept to which the term refers, enables such concepts to be referenced in documents - even if within the context of that document, another term would be used to refer to that concept.
3. …

We need a technical solution that

- is helpful for readers
- is easy to write for non-technical users
- provides immediate feedback
- has sane defaults
- supports separation of concerns
- enables reuse of existing tools
- is extensible

Note: in this document we assume the use of a docusaurus project, in combination with MDX (markdown with JSX).

Note: we use the [eSSIF-Lab Terminology Pattern](https://essif-lab.github.io/framework/docs/terms/pattern-terminology) as the conceptual basis for this tool. In short, this means that:
every document is considered part of a scope, the terminology of which it uses by default.
a document may also use terms defined in another scope (to be explicitly annotated as such)

## Helpful for readers

The main reason for using terminology tooling is to improve the process of a reader that attempts to understand the meanings that the document (s)he is reading attempts to convey. It is beneficial to a reader to quickly determine the meaning of a term in a document, especially when reading a highly technical document or a document that concerns complex conceptual models.

To this end, we need a terminology tool to enable a user to quickly identify a technical term, to instantly obtain a summary or short description of the term, and to be able to easily reach a place where the term is described in more detail.

The most straightforward solution, that builds on established UI components, is some kind of combination of a (distinctly colored) hyperlink in combination with some popup or modal component.

## Easy to write for non-technical users

A solution should minimize the amount of new things users need to learn before being able to use the terminology stack. For a docusaurus-based project, this could mean a few things:

1. Use a syntax that looks very similar to existing markdown markup. For example, use a link-like syntax `[like this](%some-term@scope)` or `%[like that](scope@v1/some-other-term)`.

2. Use a React component with a minimal interface, for example

``` react
import Term from “some-package”

Use it in MDX <Term label=”some-term”>like this</Term>
```

Both options have positive and negative aspects. The first option would probably be more suitable for people who are unfamiliar with React. However, the second option is more easily implemented, since it does not introduce new markdown syntax. A first step would be to support option 2, then add markdown parsing functionality enabling option 1.

What should be clear is that there should be only one syntax that can be used in any context that “normal” markdown input is acceptable.

The syntax should also try to reduce friction and be ergonomic for the writer. For instance, if the referenced term can be inferred from the content of the link, a reader should be allowed to omit an explicit label for the term. The table below gives examples of what such a normalization step could look like:

| Content | Possible inferred label |
| ------- | ----------------------- |
| document | document |
| Mental model | mental-model |
| Mental Models | mental-model |
| DID Document | did-document |
| DID-Documents | did-document |
| DID-Document(s) | did-document |
| DID | did |
| ... | ... |

Terms should also be able to specify multiple equivalent labels that point to a single term, allowing much used aliases, synonyms or irregular plurals to be used as the content of a reference without needing to add an explicit label. For instance “person” and “people”, or “DID” and “decentralized identifier”. See https://respec.org/docs/#definitions-and-linking for inspiration.

## Immediate feedback

An important feature of docusaurus projects is the ability to (hot-)reload a page after a writer has updated the corresponding markdown file. The change is immediately presented back to the writer, providing a very short write-view-revision feedback loop.

This means if a term is added to a markdown page, the term should immediately resolve (to the final version) and be visible to the writer. The only thing a writer should have to do is save the markdown file (and possibly) reload the corresponding page.

A process that modifies the markdown files or does not work in development mode is unacceptable. Necessary reindexing of terms or regeneration of glossary pages should be done in the background of the development server and should not require extra user interaction.

If a term cannot be resolved (a wrong label or typo) then the writer should notice this immediately, without breaking the rendering of the rest of the markdown page. This could mean logging an error in the terminal of the development server and visual feedback on the rendered markdown page (red color, highlighting, or something similar).

## Sane defaults

When adding the tool to a new (or existing) docusaurus project, the terminology stack “should just work”, preferring convention over configuration. This means looking for term definitions in sensible default locations and publishing glossary pages at paths that are unlikely to lead to conflicts with existing pages.

It should also behave as other docusaurus plugins, being configurable in docusaurus.config.js, in the plugin section. Here a technical savvy user could replace default term locations, glossary page paths, used react components, etc.

## Separation of concerns

The terminology plugin should have a modular design that separates the different components and functions into different modules, each with a well defined purpose and boundary. These functions include, but are not limited to:
Extending markdown syntax and parsing into new AST nodes
Converting AST nodes to some terminology based react component(s)
Building an index of terms, labels and summaries
Resolving a term from the index and returning needed data for term components
Generating glossary related pages from the term index
Generating dictionaries from glossaries of different scopes

## Reuse of existing tools

This document assumes that we are working on a docusaurus project. This means that there is a certain tool available already, providing Link components, and possibly popup or modal components. We should not reinvent the wheel and rely on these existing libraries and packages.

Furthermore, the current version of docusaurus relies on (an older version of) remark.js for markdown parsing and rendering. Anything dealing with markdown should probably be written as a plugin for that system.

## Extensibility

The first version of this tool should aim to reproduce and improve upon the capabilities of the existing @docusaurus-terminology/parser package created by GrNet. However, in the future, we would like to support functionality such as external terminology references/glossaries, namespaces and versioning of term/glossaries.
