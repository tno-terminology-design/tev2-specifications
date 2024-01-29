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

A [TermRef](@) is a construct that [authors](@) can use to help their readers to
better understand particular [words or phrases](terms@) they use in their texts.

:::tip Here are three examples of a [TermRef](@):
A **`[TermRef](@)`** is a construct that **`[authors](@)`** can use to help their readers to
better understand particular **`[words or phrases](terms@)`** they use in their texts.
:::

When texts that an [author](@) writes are processed, e.g., to become part of a static website such as the one you are now accessing as you read this, the [TermRefs](@) therein are converted into something that helps readers: in this case, a [TermRef](@) is highlighted; also, if the reader hovers over the [TermRef](@), it shows a popup with some short information about that concept; and finally, it is also turned into a hyperlink that readers can click on to navigate to a page that contains more information about the [concept](@) that the [TermRef](@) references.

This page shows you:

1. How you can create basic [TermRefs](@);
2. How [TermRefs](@) are Converted (into [RenderableRefs](@))
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

- `<showtext>` is the the [showtext](@) part of the [TermRef](@), and
- `<term>` is the term to which you want `<showtext>` to refer.

For example, `[organizations or individuals](party@)` will render as [organizations or individuals](party@) (if you hover over it, or click the link, you will see that it will link to the documentation of [party](@)).

Of course, all this relies on that the `<term>` has been properly defined.

### Refering to a [term](@) that is defined in another [scope](@)






## How [TermRefs](@) are Converted (into [RenderableRefs](@))

