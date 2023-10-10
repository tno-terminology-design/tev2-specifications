---
id: terminology-identifier-syntax
sidebar_label: Terminology Identifiers
date: 20230929
---

# Terminology Identifiers

A **Terminology Identifier** a [text](identifier@) that [identifies](@) a [terminology](@) from within a particular [scope](@), and can also be used to find the [MRG](@) file (in the [glossarydir](@) of that same [scope](@)) that contains [entries](mrg-entry@) for every [term](@) contained in that [terminology](@).

## Syntax

The syntaxes that can be used for a [terminology identifier](@) are as follows (note that such syntax is typically preceeded by the `@`-character): 

- (empty string, null)
- `scopetag`
- `scopetag`:`vsntag`
- `:vsntag`

where

- the empty string (null) [identifies](@) the [terminology](@) that is being used by default in the context in which the [terminology identifier](@) is being used. Typically, that would be the default version of the [terminology](@) in the current [scope](@). [^1]

[^1]: When a [terminology](@) [is being constructed](/docs/spec-tools/terminology-construction), the empty string [identifies](@) the [terminology that is under construction](terminology-under-construction)(@).

- **`scopetag`** is a [scopetag](@) that [identifies](@) the [scope](@) of the [terminology](@). If `scopetag` is omitted, the [scope](@) defaults to the current [scope](@).

- **`vsntag`** is a [versiontag](@) that [identifies](@) the  version of the [terminology](@) to be used. If `:vsntag` (including the `:`) is omitted, the default version of the [terminology](@) is assumed, as specified in the `defaultvsn` field in the [`scope`-section](/docs/spec-files/saf#scope-section) of the [SAF](@) of the [scope](@) in which the [terminology](@) is maintained.


## Examples

In the following examples, we assume that 
- `tev2` is a [scopetag](@) that [identifies](@) the [scope](@) in which the [TEv2](@) [terminology](@) is being [curated](@). 
- `terms` is a [vsntag](@) that [identifies](@) the [terminology](@) that consists of all [terms](@) that are [defined](@) within the [scope](@) identified by `tev2`.
- `myscope` is a [scopetag](@) that [identifies](@) the current [scope](@).

| terminology-identifier | refers to |
| :--------------------- | :-------- |
| `@`                    | the default terminology of the [current scope](@) (i.e., `myscope`). |
| `@tev2`                | the default terminology of the scope `tev2` |
| `@tev2:terms`          | the terminology that contains all [terms](@) that are defined within the scope `tev2` |
| `@:terms`              | the terminology that contains all [terms](@) that are defined within the [current scope](@) (i.e.: `myscope`). |