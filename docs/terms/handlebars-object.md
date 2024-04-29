---
# Docusaurus header
id: handlebars-object
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: handlebars-object
termType: concept
isa:
glossaryTerm: "Handlebars Object"
glossaryText: "a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a [Handlebars template](@)."
glossaryNotes:
- "The [converter profile](@) of a [text conversion tool](@) specifies the structure (type) of the data objects that it will pass to its [converters](@)"
formPhrases: [ "handlebar{ss}-object{ss}", "converter-profile-object{ss}" ]
# Origins/Acknowledgements
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Handlebars Objects

A **Handlebars Object** is a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a [Handlebars template](@).

Within [TEv2](@), [Handlebars objects](@) are used by the [text conversion tools](@). The [converter profile](@) of each such tool [specifies the type (classes)](converter-profile#object-spec@) of the [objects](handlebars-object@) that will be presented to the [converter](@).

## Example:

```yaml title="Handlebars object"
term: curator
termType: concept
glossaryTerm: "Curator (of a Scope)"
glossaryText: "the person(s) responsible for curating the [terminologies](@) of that [scope](@)."
```

You can use this object in a template with [Handlebars expressions](https://handlebarsjs.com/guide/expressions.html#basic-usage) to render its data:

```markdown title="Handlebars template"
- <bold>{{glossaryTerm}}</bold>: {{glossaryText}}
```

The object serves as the data source for the template, providing the context in which the template is rendered. The properties of this object can be accessed in the template using [Handlebars expressions](https://handlebarsjs.com/guide/expressions.html#basic-usage), allowing you to dynamically fill the template with specific data.

```markdown title="Result of applying the template to the object"
- <bold>Curator (of a Scope)</bold>: the person(s) responsible for curating the [terminologies](@) of that [scope](@).
```