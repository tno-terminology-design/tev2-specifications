---
id: term-identifier-syntax
sidebar_label: Term Identifiers
date: 20230915
---
# Term Identifier

A **Term Identifier** is a [text](identifier@) that [identifies](@) a [semantic unit](@) within a particular [scope](@), and hence also the [curated text](@) that describes it, which includes its [definition](@). 

Term identifiers are typically used to [identify](@) the [scoped term](@) to which a [TermRef](@) refers. Thus, the [`term`-field](/docs/spec-syntax/term-ref-syntax#term) of any [TermRef](@) that refers to (the [curated text](@) of) this [semantic unit](@) must match the value of the `term`-field in the [frontmatter](@) of the [curated text](@) that describes th [semantic unit](@).

## Syntax

The syntaxes that can be used for a [term identifier](@) are: 

- `term`
- `term`@`terminology-identifier`

where

- **`term`** is the value of the `term` field in the [MRG entry](@) of the [terminology](@) [identified](@) by `terminology-identifier`. This value can also be found in the `term` field of the [curated text](@) that documents the associated [semantic unit](@).

- **`terminology-identifier`** is the combination of a `scopetag`:`vsntag`, where

  - **`scopetag`** is a [scopetag](@) that [identifies](@) the [scope](@) of the [terminology](@). If `scopetag` is omitted, the [scope](@) defaults to the current [scope](@).
  - **`vsntag`** is a [versiontag](@) that [identifies](@) the  version of the [terminology](@) to be used. If `:vsntag` (including the `:`) is omitted, the default version of the [terminology](@) is assumed, as specified in the `defaultvsn` field in the [`scope`-section](/docs/spec-files/saf#scope-section) of the [SAF](@) of the [scope](@) in which the [terminology](@) is maintained.

## Examples

In the following examples, we assume that 
- `tev2` is a [scopetag](@) that [identifies](@) the [scope](@) in which the [TEv2](@) [terminology](@) is being [curated](@). 
- `terms` is a [vsntag](@) that [identifies](@) the [terminology](@) that consists of all [terms](@) that are [defined](@) within the [scope](@) identified by `tev2`.
- `myscope` is a [scopetag](@) that [identifies](@) the current [scope](@).

| terminology-identifier | refers to |
| :--------------------- | :-------- |
| `scope`                | the [term](@) `scope`, as defined in the default [terminology](@) of the [current scope](@) (i.e., `myscope`). |
| `concept@tev2`         | the [term](@) `concept`, as defined in the default [terminology](@) of the scope `tev2` |
| `pic@tev2:terms`       | the [term](@) `pic`, as defined in the [terminology](@) that contains all [terms](@) that are defined within the scope `tev2` |
| `atjar@:terms`         | the [term](@) `atjar`, as defined in the [terminology](@) that contains all [terms](@) that are defined within the [current scope](@) (i.e.: `myscope`). |