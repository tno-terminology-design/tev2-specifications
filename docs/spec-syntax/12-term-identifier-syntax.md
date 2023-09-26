---
id: term-identifier-syntax
sidebar_label: Term Identifiers
date: 20230915
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Term Identifiers - Syntax

The synaxes that can be used for a [term identifier](@) are: 

- `term`
- `term`@`scopetag`
- `term`@`scopetag`:`vsntag`

where

**`term`** is the [(scoped) term](@) that [identifies](@) the [semantic unit](@) that is identified. It must satisfy the regex `[a-z0-9_-]+`.

**`scopetag`** is a [tag](@) that [identifies](@) the [scope](@) of the [terminology](@) that contains the [semantic unit](@) that is identified It must satisfy the regex `[a-z0-9_-]+`. Also, it must either be mentioned in the `scopes` section of the [SAF](@) of the current [scope](@), or it must be the [scopetag](@) of the current [scope](@) itself.

**`vsntag`** is a [versiontag](@) that [identifies](@) the  version of the [terminology](@) to be used. It must satisfy the regex `[a-z0-9_-\.]+`.

The syntax `term`@`scopetag`:`vsntag` is an unambigous identifier, there are no defaults to take into account.

The syntax `term`@`scopetag` assumes that the [term](@) exists in the default [MRG](@) of the [scope](@) identified by [scopetag](@).

The syntax `term` assumes that the [term](@) exists in the default or current [MRG](@) of the current [scope](@).