---
id: fixing-links
date: 20240112
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fixing Links

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

After (raw) texts have been authored, they will be rendered into some other form, typically a static web site. Particularly when a set of such texts have been authored, it may happen that references turn out not to be properly resolvable at runtime. Also, after some time in which such texts evolve, 'link rot' may kick in, which means that due to changes in some places, links that used to be properly resolvable no longer are.

<details>
  <summary>[Term Refs](@) are not resolved - they link to `@`</summary>

1. The `showtext` part of the [term ref](@) is not a specified [form phrase](@). 
    1. Add an `id` part to the [term ref](@), i.e., add `<id>` in `[my showtext](<id>@)`, where `<id>` needs to be the [term](@) or a properly specified [form phrase](@).
    2. Specify a [form phrase](@) in the [curated text](@) of the [semantic unit](@) that you want `showtext` to link to.
2. There is no [curated text](@) for the [semantic unit](@) that you want `showtext` to reference.
    1. Add a [curated text](@) for that [semantic unit](@), ensuring its [header](@) contains appropriate [form phrases](@)
3. The [(machine readable) glossary](@) that the [term ref](@) uses (either implied, or explicitly specified), does not (yet) contain an [MRG entry](@) for the [semantic unit](@) that the [term ref](@) is expected to refer to.
    1. Make sure the implied, or explicitly specified [mrg](@) exists in the [glossarydir](@), and that it is up-to-date. For an [mrg](@) that is curated outside of the [current scope](@), you should [import](mrg-import@) it (again). For an [mrg](@) that is curated within the [current scope](@), you should [generate](mrgt@) it (again).

</details>

<details>
  <summary>[Term Refs](@) are not resolved to their [curated text](@)</summary>

1. You forgot to include the `@` character int the [term ref](@). 
2. The URLs and/or paths in the [SAF](@) are incorrect.
    - Check the [SAF](@), and ensure all URLs and paths that need to be configured have their correct values.
3. The static website generator that you use meddles with `id`s, or filenames.
    - Docusaurus, for example, uses markdown files (with extensions `.md`, or `.mdx`), and allows them to contain [front matter](@) in which an `id`-field can be specified that it uses for routing. In order for Docusaurus to route the links that the [TRRT](@) produces, the `id` field of [curated texts](@) MUST be identitical to the filename without its extension. You should make sure this is the case.

</details>

