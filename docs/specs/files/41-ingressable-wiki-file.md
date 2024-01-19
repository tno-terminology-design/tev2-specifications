---
id: ingressable-wiki-file
sidebar_label: Ingressable Wiki File
date: 20240119
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import APITable from '@site/src/components/APITable';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ingressable Wiki File

An **Ingressable Wiki File** is a specific format of a GitHub Wiki designed to be compatible with the [Ingress Wiki](@) tool. This tool parses wiki entries into [curated texts](@), making them more accessible and organized. The structure of an ingressable wiki file is crucial for its functionality. Here's an expanded description of its components:

## Title

The title of an ingressable wiki file is critical. It should clearly state the word or phrase that is being added or defined. If the term has both a long form and a short form or acronym, the title should start with the long form, followed by the short form in parentheses. This ensures clarity and helps in indexing the term effectively.

## Sections with Matching Headers

The body of an ingressable wiki file is divided into specific sections, each marked with appropriate headers (using `#` or `##` for Markdown formatting). These sections include:

1. **Definition**: This section is the core of the wiki file. Here, the word or phrase is defined in a precise and detailed manner. The definition should include criteria that clearly delineate what the term means and what it does not. It's important to address common misunderstandings and clarify ambiguities. If the term is synonymous with another term already defined in the glossary, instead of rewriting, provide a hyperlink to the existing definition. This approach maintains consistency and avoids redundancy.

2. **Tags**: In this section, add relevant hash tags that facilitate grouping and categorization. Tags help in organizing the content and making it easily searchable. They should be chosen to reflect the key aspects of the term and how it relates to other concepts in the wiki.

## Additional Considerations

**Formatting and Style**: Maintain a consistent formatting and writing style throughout the wiki file. This consistency aids in readability and comprehension.

**Examples and Context**: Where applicable, include examples or context to illustrate how the term is used. This can be particularly helpful for complex or abstract concepts.

**References and Sources**: If the definition draws from specific sources or references, include them. This adds credibility and allows readers to delve deeper into the topic.

## Example

<details>
  <summary>Example of an ingressable wiki file.</summary>
  <div>

```md
## Definition

A balance of power in a [digital identity ecosystem](https://trustoverip.github.io/hxwg/glossary.html#digital-identity-ecosystem) is that 1) no single [party](https://essif-lab.github.io/framework/docs/essifLab-glossary#party) or group of [parties](https://essif-lab.github.io/framework/docs/essifLab-glossary#party) has control, authority or influence over all other [parties](https://essif-lab.github.io/framework/docs/essifLab-glossary#party) or [actors](https://essif-lab.github.io/framework/docs/essifLab-glossary#actor) in the [digital identity ecosystem](https://trustoverip.github.io/hxwg/glossary.html#digital-identity-ecosystem) and, 2) all [parties](https://essif-lab.github.io/framework/docs/essifLab-glossary#party) in the [digital identity ecosystem](https://trustoverip.github.io/hxwg/glossary.html#digital-identity-ecosystem) have a legitimate power base within the [jurisdiction](https://essif-lab.github.io/framework/docs/essifLab-glossary#jurisdiction) of the [digital identity ecosystem](https://trustoverip.github.io/hxwg/glossary.html#digital-identity-ecosystem).

### Purpose

One of four harms mitigation strategies implemented at the intersection of the [digital identity ecosystem](https://trustoverip.github.io/hxwg/glossary.html#digital-identity-ecosystem) and the [P2P decision context](https://trustoverip.github.io/hxwg/glossary.html#p2p-decision-context) focused on protecting from [contingent harm](https://trustoverip.github.io/hxwg/glossary.html#contingent-harm).

### Criterion

### Examples

A whistleblower policy is an example of a governance countermeasure to mitigate harms using a balance of power

### Related concepts

* [edge agency](https://trustoverip.github.io/hxwg/glossary.html#edge-agency)
* [vulnerability recognition](https://trustoverip.github.io/hxwg/glossary.html#vulnerability-recognition)
* [collective resiliency](https://trustoverip.github.io/hxwg/glossary.html#collective-resiliency)

## Tags  
 #harmstf

```

  </div>
</details>

