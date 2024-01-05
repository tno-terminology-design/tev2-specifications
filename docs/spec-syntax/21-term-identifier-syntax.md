---
id: term-identifier-syntax
sidebar_label: Term Identifiers
date: 20230915
---
# Term Identifier

A **Term Identifier** is a [text](identifier@) that is used for [identifying](@) a [semantic unit](@) within a designated [terminology](@). This means that it can be used for selecting an [MRG entry](@) that exists in the [MRG](@) associated with that [terminology](@). It does NOT mean that any such text will actually [identify](@) such an [MRG entry](@). [Term identifiers](@) can be ambiguous (refer to multiple [MRG entries](@)). It is also possible that a [term identifier](@) does not [identify](@) any such [MRG entry](@). 

Similarly, [term identifiers](@) can be used for [identifying](@) the [curated text](@) that describes the [semantic unit](@) within a designated [terminology](@). Here, too, [term identifiers](@) exist that are ambiguous, or do not refer to any [curated text](@).

## Syntax

The syntax for a [term identifier](@) is: 

`termType`:`term`@`terminology-identifier`

where:

- **`termType`:** (optional) specifies the [kind of semantic unit](term-type@) that is to be [identified](@). Typical values are `concept:`, `relation:`, `pattern:` (or `mental-model:`), or `use-case:`. If not specified, its value defaults to that of the `defaulttype`-field in the [scope section](/docs/spec-files/saf#scope-section) of the [SAF](@).

- **`term`** is required (must satisfy [regex](@) `[a-z0-9_-]+`). It is a text that is used to [identify](@) a [semantic unit](@) within the designated [terminology](@). It appears in the (required) `term`-field of [curated texts](@) and [MRG entries](@).

- **@`terminology-identifier`** (optional) specifies the [terminology](@) withi which the [semantic unit](@) is to be [identified](@). The `terminology-identifier` (without the `@` part) is the combination of a `scopetag`:`vsntag`, where

  - **`scopetag`** is a [scopetag](@) that [identifies](@) the [scope](@) of the [terminology](@). If `scopetag` is omitted, the [scope](@) defaults to the current [scope](@).
  - **`vsntag`** is a [versiontag](@) that [identifies](@) the  version of the [terminology](@) to be used. If `:vsntag` (including the `:`) is omitted, the default version of the [terminology](@) is assumed, as specified in the `defaultvsn` field in the [`scope`-section](/docs/spec-files/saf#scope-section) of the [SAF](@) of the [scope](@) in which the [terminology](@) is maintained.

## Semantics - Looking for MRG entries {#term-identifiers-mrg-semantics}

A [term identifier](@) can be used to refer to an [MRG entry](@) in the [MRG](@) that documents a particular [terminology](@). This is done as follows:

1. First, the [term identifier](@) is split at the `@`-sign, where the part behind the `@`-sign identifies the [terminology](@) and hence the [MRG](@) that contains all [MRG entries](@) thereof. This set of [MRG entries](@) is what we start out with.
2. Then, we process the part in front of the `@`-sign, as follows:
    1. we only keep [MRG entries](@) whose `term` field equals the value specified by `term`;
    2. if `termType:` is specified, we only keep [MRG entries](@) whose `termType` field equals the value specified by `termType`;
    3. If the set of [MRG entries](@) that are kept includes more than one element, we only keep the [MRG entries](@) whose `termType` field contains the value specified by the `defaulttype` field as specifiedin the [MRG](@).
3. Now we're done with selecting. In case the number of elements in the set of [MRG entries](@) is
    - 0: the [term identifier](@) cannot be resolved; there is no matching [semantic unit](@).
    - 1: one [semantic unit](@) is [identified](@); it is described by the selected [MRG entry](@);
    - 2: the [term identifier](@) is ambiguous, i.e., or more than one [semantic units](@) are a match. This can occur when there are 2 or more [MRG entries](@) that both have the same `term`-field, and each of them has a `termType` field that is not the default `termType` for its that [scope](@), and the [term identifier](@) did not contain a specification for the `termType`

## Examples

In the following examples, we assume that 

- `tev2` is a [scopetag](@) that [identifies](@) the [scope](@) in which the [TEv2](@) [terminology](@) is being [curated](@).
- the default kind of [semantic unit](@) documented within `tev2` is `concept`.
- `terms` is a [vsntag](@) that [identifies](@) the [terminology](@) within `tev2` that consists of all [terms](@) that are [defined](@) within `tev2`.
- `terms` is the [vsntag](@) for the default [terminology](@) of `tev2`.

- `myscope` is a [scopetag](@) that [identifies](@) the current [scope](@).
- `latest` is the [vsntag](@) for the default [terminology](@) of `myscope`.
- the default kind of [semantic unit](@) documented within `myscope` is `use-case`.

| terminology-identifier    | full terminology-identifier: |
| :------------------------ | :--------------------------- |
| `party`                   | `use-case:party@myscope:latest | the [use-case](@) `party`, as defined in the default [terminology](@) of the [current scope](@) (i.e., `myscope`). |
| `party@tev2`              | `concept:party@tev2:terms      | the [concept](@) `party`, as defined in the default [terminology](@) of the scope `tev2`. |
| `pattern:pic@tev2:latest` | `pattern:pic@tev2:latest`      | the [pattern](@) ([mental model](@)) `pic`, as defined in the `latest` version of the `tev2` [terminology](@). |
| `atjar@:terms`            | `atjar@:terms`                 | the [use-case](@) `atjar`, as defined in the [terminology](@) with [versiontag](@) `terms` within `myscope`. |

