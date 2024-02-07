---
id: using-termrefs
date: 20240109
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using TermRefs

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

:::info Editor's note
This page currently only uses basic TermRef syntax. Do we also want to show alt(ernative) syntax?  
If so, there are two options: (1) do so in a separate page, or (2) use (synchronized) Tabs. 
:::

A [TermRef](@) is a construct that [authors](@) can use to help their readers to better understand particular [words or phrases](terms@) they use in their texts.

:::tip The text below has three examples of a [TermRef](@):
A **`[TermRef](@)`** is a construct that **`[authors](@)`** can use to help their readers to better understand particular **`[words or phrases](terms@)`** they use in their texts.
:::

When texts that an [author](@) writes are processed, e.g., to become part of a static website such as the one you are now accessing as you read this, the [TermRefs](@) therein are converted into something that helps readers: in this case, a [TermRef](@) is highlighted; also, if the reader hovers over the [TermRef](@), it shows a popup with some short information about that concept; and finally, it is also turned into a hyperlink that readers can click on to navigate to a page that contains more information about the [concept](@) that the [TermRef](@) references.

This page shows you:

1. How you can create basic [TermRefs](@);
2. How [TermRefs](@) are converted (into so-called [RenderableRefs](@))
3. How you can customize the [TermRef](@) syntax;
4. How you can determine what the [TermRef](@) will look like after it is converted.

## Basic [TermRefs](@)

The most common [TermRefs](@) that you will encounter are of the form 

``` markdown
[<word or phrase>](@)
```
where `<word or phrase>` is the the [showtext](@) part of the [TermRef](@), i.e., the part that - when the texts are converted - typically shows up in some highlighed fashion, links to the documentation of the [concept](@) that it references, and might have a pop-up text with a short description.

This most common variety works if the [showtext](@) is a [term](@) that is defined, or a common derivative form. For example if the [term](@) `showtext` is defined, you can use `[showtext](@)` but you should also be able to use `[showtexts](@)` (plural form), and even `[showtext(s)](@)` (to signify 'one or more showtexts').

This also holds for nouns that have different endings. For example, if the [term](@) 'party' is defined, you can use `[party](@)` but you should also be able to use `[parties](@)` (plural form), and even `[party's](@)` (as in `this is that [party's](@) perogative`)).

### Explicitly mentioning the [term](@)

If this doesn't work (which may happen), but you are sure the [term](@) is defined, then you can use the syntax:

``` markdown
[<showtext>](<term>@)
```

where

- `<showtext>` is the (required) [showtext](@) part of the [TermRef](@), and
- `<term>` is the term to which you want `<showtext>` to refer.

For example, `[organizations or individuals](party@)` will render as [organizations or individuals](party@) (if you hover over it, or click the link, you will see that it will link to the documentation of [party](@)).

Of course, all this relies on that the `<term>` has been properly defined.

### Explicitly mentioning the [term type](@)

Sometimes, a single [term](@) is used to refer to [semantic units](@) of different types. For example, the term 'terminology' can refer to a [concept](@), but it could also refer to a [mental model](pattern@) that shows how a set of related [concepts](@), [relations](@) etc. work together in a coherent fashion. 

You need to be able to refer to both, and the [TermRefs](@) you use should be unambiguous. You can do that by specifying the [term type](@) in the [TermRef](@), as follows

- [terminology](concept:terminology@) (i.e.: `[terminology](concept:terminology@)`) refers to the [concept](@) named `terminology`.
- [terminology](pattern:terminology@) (i.e.: `[terminology](pattern:terminology@)`) refers to the [pattern](@) named `terminology`.

The texts that are used to identify a term type are not standardized. It is up to the [curators](@) of a [scope](@) to determine what they can be, and to ensure that they are correctly specified in the [headers](@) of the [curated texts](@) that describe the corresponding [semantic units](@).

### Refering to a [term](@) that is defined in another [scope](@)

You can also refer to a [term](@) that wasn't defined in the [scope](@) within which you are creating your [TermRef](@). For example, if would want to refer to the [term](@) `party` as it is defined in the [scope](@) (that is identified by the [scopetag](@)) `essif-lab`, you simply add that [scopetag](@) behind the `@` character, as in [party](@essif-lab) (`[party](@essif-lab)`).

You may also refer to a [term](@) that is defined in a particular version of a [terminology](@), as illustrated by the general syntax

``` markdown
[<showtext>](@<scopetag>:<vsntag>)
```

where

- `<showtext>` is the (required) [showtext](@) part of the [TermRef](@).
- `<scopetag>` is the (optional) [scopetag](@) that specifies the [scope](@) from which the [terminology](@) is to be used; if `<scopetag>` isn't specified, the [current scope](@) is assumed.
- `<vsntag>` is the (optional) [versiontag](@) that specifies the version of the [terminology](@) that is to be used. If `<vsntag>` isn't specified, then the default version of the [terminology](@) is used, the [vsntag](@) of which is defined in the [SAF](@).

## How [TermRefs](@) are Converted (into [RenderableRefs](@))

