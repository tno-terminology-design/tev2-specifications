---
id: tev2-spec-files
date: 20220819
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# TEv2 - Files (Structure, Specs)

[TEv2](@) expects [communities](@) to have directory that is easily accessible by IT tools, and in which - apart from other stuff it may keep there - is designated to contain all sorts of curated documentation. Thus, this directory (or one or more of its subdirectories) can be designated as [scope directories](@) for the [scopes](@) that the [community](@) owns.

The [scopedir](@) may contain may contain lots of directories and files that are of no relevance for [TEv2](@), but it also contains files that are, such as:
- the **[Curated Texts](/docs/spec-files/ctext-file)**, which contain documentation on [semantic units](@) ([concepts](@), [mental models](@), etc.);
- the **[Scope Administration File (SAF)](/docs/spec-files/saf)**, which contains data about the [scope](@) itself, pointers to (the [scopedirs](@) of) other [scopes](@) that it relates to, and specifications of various versions of managed [glossaries](@);
- the **[Profile Templates](/docs/spec-files/profile-templates)**, i.e. templates that play a role in [text conversion steps](/docs/overview/tev2-design-principles#text-conversion-steps);
- the **[Machine Readable Glossary (MRG)](/docs/spec-files/mrg)**, which contains (machine readable) [MRG entries](@) that contain the various [terms](@) of a [scope](@) and pointers to the documentation of the [semantic units](@) that they refer to;
- the **[Human Readable Glossary (HRG)](/docs/spec-files/hrg)**, i.e. human readable equivalents of the [MRGs](@);
