---
id: term-identifiers
sidebar_label: Term Identifiers
date: 20230915
---
# Term Identifier

A **Term Identifier** is a [text](identifier@essif-lab) that is used for identifying a [semantic unit](@) within a designated [terminology](@). This means that it can be used for selecting an [MRG entry](@) that exists in the [MRG](@) associated with that [terminology](@). It does NOT mean that any such text will actually identify such an [MRG entry](@). [Term identifiers](@) can be ambiguous (refer to multiple [MRG entries](@)). It is also possible that a [term identifier](@) does not identify any such [MRG entry](@). 

Similarly, [term identifiers](@) can be used for identifying the [curated text](@) that describes the [semantic unit](@) within a designated [terminology](@). Here, too, [term identifiers](@) exist that are ambiguous, or do not refer to any [curated text](@).

## Syntax

The syntax for the most general form of a [term identifier](@) is:

`termType` : `term` @ `scopetag` : `vsntag`

where

```mdx-code-block
<APITable>
```

| Name      | Req'd | Description |
| --------- | :---: | :---------- |
| `term`      | Y | is a text that is used to refer to a [semantic unit](@) within the designated [terminology](@). It either appears in the (required) `term`-field of [curated texts](@) and [MRG entries](@), or it is one of the [form phrases](@) by which the [semantic unit](@) is referred to. |
| `termType`  | n | specifies the [kind of semantic unit](term-type@) that is to be identified. Typical values are `concept`, `relation`, `pattern` (or `mental-model`), or `use-case`.<br/>If not specified, the `:` (in front of the `term`) MUST NOT be present, and its value defaults to that of the `defaulttype`-field in the [scope section](/docs/specs/files/saf#scope-section) of the [SAF](@). |
| `scopetag`  | n | is the [scopetag](@) that identifies the [scope](@) of the [terminology](@).<br/>If `scopetag` is omitted, the [scope](@) defaults to the current [scope](@). |
| `vsntag`    | n | is the [versiontag](@) that identifies the  version of the [terminology](@) to be used.<br/>If not specified, the `:` preceding the `vsntag` MUST NOT be present, and its value defaults to the default version of the [terminology](@), as specified in the `defaultvsn` field in the [`scope`-section](/docs/specs/files/saf#scope-section) of the [SAF](@) of the [scope](@) in which the [terminology](@) is maintained. |

```mdx-code-block
</APITable>
```

## Examples

<details>
  <summary>Assumptions regarding the default values for optional parts</summary>

- `tev2` is a [scopetag](@) that identifies the [scope](@) in which the [TEv2](@) [terminology](@) is being [curated](@).
- the default kind of [semantic unit](@) documented within `tev2` is `concept`.
- `terms` is a [vsntag](@) that identifies the [terminology](@) within `tev2` that consists of all [terms](@) that are [defined](@) within `tev2`.
- `terms` is the [vsntag](@) for the default [terminology](@) of `tev2`.
- `myscope` is a [scopetag](@) that identifies the current [scope](@).
- `latest` is the [vsntag](@) for the default [terminology](@) of `myscope`.
- the default kind of [semantic unit](@) documented within `myscope` is `use-case`.

</details>

| Specified term-identifier | With filled-in defaults:       | What the term-identifier refers to |
| :------------------------ | :----------------------------- | :--------------------------------- |
| `party`                   | `use-case:party@myscope:latest | the [use-case](@) `party`, as defined in the default [terminology](@) of the [current scope](@) (i.e., `myscope`). |
| `party@tev2`              | `concept:party@tev2:terms      | the [concept](@) `party`, as defined in the default [terminology](@) of the scope `tev2`. |
| `pattern:pic@tev2:latest` | `pattern:pic@tev2:latest`      | the [pattern](@) ([mental model](@)) `pic`, as defined in the `latest` version of the `tev2` [terminology](@). |
| `atjar@:terms`            | `atjar@:terms`                 | the [use-case](@) `atjar`, as defined in the [terminology](@) with [versiontag](@) `terms` within `myscope`. |

## Semantics

[Term identifiers](@) represent [semantic units](@). Since [MRG entries](@) document [semantic units](@), we can also say that [term identifiers](@) refer to the [MRG entry](@) that documents their [semantic units](@).

This section describes how this dereferencing process works, i.e., how the [MRG entry](@) that corresponds to a [term identifier](@) can be found (if it exists).

1. First, the [term identifier](@) is split at the `@`-sign, where the part behind the `@`-sign is a [terminology identifier](@) that identifies the [terminology](@) and hence the [MRG](@) that contains all [MRG entries](@) thereof. This set of [MRG entries](@) is what we start out with.

2. Then, the part in front of the `@`-sign is processed, as follows:
    1. we only keep [MRG entries](@) whose `term` field equals the value specified by `term`;[^3]
    2. if `termType:` is specified, we only keep [MRG entries](@) whose `termType` field equals the value specified by `termType`;
    3. If the set of [MRG entries](@) that are kept includes more than one element, we only keep the [MRG entries](@) whose `termType` field contains the value specified by the `defaulttype` field as specifiedin the [MRG](@).

3. Now we're done with selecting. In case the number of elements in the set of [MRG entries](@) is
    - 0: the [term identifier](@) cannot be resolved; there is no matching [semantic unit](@).
    - 1: one [semantic unit](@) is identified; it is described by the selected [MRG entry](@);
    - 2: the [term identifier](@) is ambiguous, i.e., or more than one [semantic units](@) are a match. This can occur when there are 2 or more [MRG entries](@) that both have the same `term`-field, and each of them has a `termType` field that is not the default `termType` for its that [scope](@), and the [term identifier](@) did not contain a specification for the `termType`

[^3]: in some cases, this step works a bit different: first the `term` field is [regularized](@); then all [MRG entries](@) are kept that have this result as one of the elements in its `formPhrases` field.