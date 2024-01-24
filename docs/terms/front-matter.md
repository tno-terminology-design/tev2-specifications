---
# Docusaurus header
id: front-matter
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: front-matter
termType: concept
isa:
glossaryTerm: "Front Matter"
glossaryText: "a section at the top of a file that contains YAML (or similarly formatted) metadata, such as title, description, tags, and more. It is used in static site generators, as well as by [TEv2](@). The front-matter must be the first thing in the file and must be enclosed in triple-dashed lines for YAML."
# Curation status
status: proposed
created: 20240121
updated: 20240121
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Front Matter

Front-matter is a section at the top of a file that contains YAML, TOML, or JSON-formatted metadata. This metadata can include information such as title, description, date, tags, and more. It is used in static site generators like Docusaurus, Hugo and Jekyll to add additional information to the content files, which can then be used in generating the site. The front-matter must be the first thing in the file and must be enclosed in triple-dashed lines for YAML.

## TEv2 use of front matter

TEv2 uses front-matter for the [header](@) of [curated texts](@), and expects it to be in YAML format. This m akes TEv2 useable with, e.g., static site generators that also use YAML-formatted front matter.

## Front matter use in static site generators

Various static site generators use front matter to provide metadata:

1. In [Docusaurus, front matter](https://docusaurus.io/docs/create-a-doc) is used to provide additional metadata for documentation pages, enhancing the management and presentation of content. It is specified at the top of Markdown files, enclosed by triple-dashed lines, and parsed as YAML. The front matter is optional, as Docusaurus can infer essential metadata automatically. However, it's beneficial for defining specific attributes like document ID (`id`), title (`title`), tags (`tags`), and custom URL paths (`slug`). This flexibility allows for rich content creation and precise control over documentation structure and presentation. Additionally, Docusaurus supports custom front matter fields, enabling developers to tailor their documentation to specific needs, making it a powerful tool for creating structured, informative, and interactive documentation sites.

2. In [Hugo, front-matter](https://gohugo.io/content-management/front-matter/) can be written in YAML, TOML, or JSON format, and it allows you to keep metadata attached to an instance of a content type. This feature provides Hugo with its strength, making it possible to manage content efficiently. For example, front-matter in Hugo can be used to define predefined variables like date, title, or draft status, or you can create custom variables according to your needs.

3. In [Jekyll](https://jekyllrb.com/docs/front-matter/), any file containing a YAML front-matter block will be processed as a special file. The front-matter must be the first thing in the file and must be in the form of valid YAML set between triple-dashed lines. The variables defined within these lines will be available to access using Liquid tags throughout the file and any layouts or includes the page or post relies on.

For more detailed information, you can visit:
- [Docusaurus Front Matter Documentation](https://docusaurus.io/docs/create-a-doc).
- [Hugo Front Matter Documentation](https://gohugo.io/content-management/front-matter/)
- [Jekyll Front Matter Documentation](https://jekyllrb.com/docs/front-matter/)