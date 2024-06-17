---
id: body-file
sidebar_label: Body Files
date: 20231009
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Body Files

A [body file](@) contains the [body](@) of a [curated text](@), i.e. the text that documents a [semantic unit](@), but has no a-priori structure whatsoever (as that would be part of the [header](@) of that [curated text](@)).

Typically, body files are pieces of documentation about a particular [concept](@) (or other kind of [semantic unit](@)) that already serve a purpose in some documentation set. For example, a set of documents that constitute, e.g., an architecture, or a specification, would contain files that specify a particular entity (e.g., a component, or a protocol). The contents of these files could then serve as the [body](@) of a [curated text](@) that documents that particular entity.

## Where to store Body Files {#storage-location}

[Body files](@) are to be located within the [curatedir](@) of the [scope](@) of which they are part, so that the [TEv2 tools](@) can properly find and operate on them.

## How to reference Body Files in a Curated Text Header {#predefined-header-reference}

If a [curated text](@) only contains the [header](@), it needs to contain a reference to the associated [body file](@). This is done using the `bodyFile` field in the header. Its value should contain the path, relative to the [scopedir](@), that contains the [body](@) of this [curated text](@). See also [Predefined TEv2 Header Fields](/docs/specs/files/curated-text-file#predefined-header-fields).