---
# Docusaurus header
id: body
# TEv2 Curated Text Header
term: body
termType: concept
isa:
glossaryTerm: Body (of a Curated Text)
glossaryText: "the part of a [curated text](@) that contains arbitrarily structured documentation about the [semantic unit](@) that the [curated text](@) documents. Bodies live either in [curated text files](@) (behind the [header](@)), or in separate so-called [body files](@)."
synonymOf:
grouptags:
formPhrases: [ bod{yies} ]
# Curation status
status: proposed
created: 20230723
updated: 20230723
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Body

A [body](@) is the part of a [curated text](@) that contains arbitrarily structured documentation about the [semantic unit](@) that the [curated text](@) documents.

Bodies live either in [curated text files](@) (behind the [header](@)), or in separate so-called [body files](@).

<details>
  <summary>Example of a [curated text](@) that contains a [body](@), that is located immediately behind the [header](@).</summary>
  <div>

~~~ yaml
---
# here is where the header-stuff of the curated text goes.
# the body of the curated text starts below the next line.
---

# Curated Text
A curated text starts with three dashes `---`.
This indicates the start of its (YAML) header.
Typically, the [header](@) consists of a sequence of key-value pairs.
The [header](@) is terminated with onother three dashes and a new line.

The [body](@) of the [curated text](@) 

- either starts behind the header block.
  It is typically markdown, but other constructs may be inserted
  that contribute to the rendering of these texts in a (static) website.
  An example of this is [MDX](https://mdxjs.com/).
  A discussion on these other constructs is outside the scope of this document.
- or it is located in a separate `[body file](@)`
  that is located somewhere within the [scopedir](@).
  In this case, the [header](@) must contain a field `bodyFile`
  that specifies the location (relative to the [scopedir](@)) of that file.
~~~

  </div>
</details>

The [body](@) of a [curated text](@) can either be stored 

- in the [curated text file](@), which would then contain the entire [curated text](@), or
- as a separate [file](body-file@) (somewhere within the [scopedir](@)), in which case the [header](@) (that is in the [curated text file](@)) must contain a field `bodyFile` that specifies the location of the [body file](@).