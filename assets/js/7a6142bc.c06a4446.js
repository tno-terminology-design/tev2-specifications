"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4055],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(a),f=n,m=h["".concat(l,".").concat(f)]||h[f]||p[f]||s;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(3117),n=(a(7294),a(3905));const s={id:"handlebars-template",displayed_sidebar:"tev2SideBar",term:"handlebars-template",termType:"concept",isa:null,glossaryTerm:"Handlebars Template",glossaryText:"a blueprint/template that uses the [Handlebars language](https://handlebarsjs.com/guide/#what-is-handlebars) to define where and how variable information can be inserted into a predetermined text structure.",glossaryNotes:["TEv2 [converters](@) are Handlebars templates.","Handlebars templates ([converters](@)) allow for the creation of customizable texts that automatically update with specific data.","Handlebars templates ([converters](@)) are characterized by their use of Handlebars expressions within the templates."],grouptags:[],formPhrases:["handlebar{ss} template{ss}","handlebar{ss}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},i="Handlebars Templates",o={unversionedId:"terms/handlebars-template",id:"terms/handlebars-template",title:"Handlebars Templates",description:"A handlebars template is a blueprint that uses the Handlebars language to define where and how variable information can be inserted into a predetermined text structure. This allows for the creation of customizable texts that automatically update with specific data. Handlebars templates are characterized by their use of Handlebars expressions within the templates.",source:"@site/docs/terms/handlebars-template.md",sourceDirName:"terms",slug:"/terms/handlebars-template",permalink:"/tev2-specifications/docs/terms/handlebars-template",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/handlebars-template.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1710761327,formattedLastUpdatedAt:"Mar 18, 2024",frontMatter:{id:"handlebars-template",displayed_sidebar:"tev2SideBar",term:"handlebars-template",termType:"concept",isa:null,glossaryTerm:"Handlebars Template",glossaryText:"a blueprint/template that uses the [Handlebars language](https://handlebarsjs.com/guide/#what-is-handlebars) to define where and how variable information can be inserted into a predetermined text structure.",glossaryNotes:["TEv2 [converters](@) are Handlebars templates.","Handlebars templates ([converters](@)) allow for the creation of customizable texts that automatically update with specific data.","Handlebars templates ([converters](@)) are characterized by their use of Handlebars expressions within the templates."],grouptags:[],formPhrases:["handlebar{ss} template{ss}","handlebar{ss}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},l={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Examples",id:"examples",level:2},{value:"Handlebars template for generating a Markdown link for a TermRef",id:"handlebars-template-for-generating-a-markdown-link-for-a-termref",level:3},{value:"Handlebars template for generating a HRG entry",id:"handlebars-template-for-generating-a-hrg-entry",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"handlebars-templates"},"Handlebars Templates"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars template")," is a blueprint that uses the ",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"Handlebars language")," to define where and how variable information can be inserted into a predetermined text structure. This allows for the creation of customizable texts that automatically update with specific data. Handlebars templates are characterized by their use of Handlebars expressions within the templates."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"Handlebars")," is a simple templating language. It uses a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars template")," and an input object to generate output texts, in any format you like. ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"Handlebars templates")," look like regular text with embedded handlebars expressions, which consist of a ",(0,n.kt)("inlineCode",{parentName:"p"},"{{"),", followed by some contents, and a closing ",(0,n.kt)("inlineCode",{parentName:"p"},"}}"),". When a template is executed, these expressions are replaced with values from an input object."),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The purpose of Handlebars templates is to separate the logic of data manipulation from the presentation layer, facilitating maintainability and readability. This approach enables developers to create templates that can be reused with different data, leading to more efficient code and a clearer separation of concerns within web applications."),(0,n.kt)("p",null,"Within the context of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),", ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," are typically specified as (predefined, or custom) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars templates"),". The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of Data Objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," specifies the class of objects that a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," for that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"tool")," works on."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of Data Objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," for a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," is specified in the documentation for that tool. See, e.g., the ",(0,n.kt)("a",{parentName:"p",href:"/docs/specs/tools/trrt#converter-profile"},"TRRT converter profile"),", or the ",(0,n.kt)("a",{parentName:"p",href:"/docs/specs/tools/hrgt#converter-profile"},"HRGT converter profile"),"."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Here are some (simple) examples for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars templates")," that are used within the context of ","[TEv2]"),(0,n.kt)("h3",{id:"handlebars-template-for-generating-a-markdown-link-for-a-termref"},"Handlebars template for generating a Markdown link for a TermRef"),(0,n.kt)("p",null,"Resolving ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," (which is what the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," does) requires the creation of a text that, in the case of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," static website, can be rendered by Docusaurus. So the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars template")," might generate, e.g., HTML, or markdown. Here is an example of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," that is used to convert a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," into a markdown-link:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-handlebars"},"[{{showtext}}]({{navurl}}{{#if trait}}#{{trait}}{{/if}})\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," handlebars object specifies the variables ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"navurl"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"trait")," (and quite a few more). This template will thus prorivide a markdown link to the location pointed to by ",(0,n.kt)("inlineCode",{parentName:"p"},"navurl"),", "),(0,n.kt)("h3",{id:"handlebars-template-for-generating-a-hrg-entry"},"Handlebars template for generating a HRG entry"),(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"Human readable glossaries")," are created by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),", which uses ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," to generate entries for that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary"),". The data object on which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," works includes the data that is availble in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," for which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg-entry",title:"HRG Entry: A specific kind of (human-readable) rendering of the combination of a Term and a means that helps Readers to understand the meaning of that Term when it is used in a sentence."},"HRG entry")," is to be generated.",(0,n.kt)("p",null,"Here is a simple ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars template")," that generates a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg-entry",title:"HRG Entry: A specific kind of (human-readable) rendering of the combination of a Term and a means that helps Readers to understand the meaning of that Term when it is used in a sentence."},"HRG entry")," that is a level-2 markdown section of which the title is taken from the ",(0,n.kt)("inlineCode",{parentName:"p"},"glossaryTerm")," field in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),", and that contains a paragraph that contains the text that is available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"glossaryText")," field of that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"entry"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-handlebars"},"## [{{glossaryTerm}}]({{localize navurl}})\\n\\n{{glossaryText}}\\n\\n\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"\\n")," is a newline (line break)."),(0,n.kt)("p",null,"Notes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"users can click on the text generated by ",(0,n.kt)("inlineCode",{parentName:"li"},"{{glossaryTerm}}"),", as it is also a link to the page that documents the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," for which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg-entry",title:"HRG Entry: A specific kind of (human-readable) rendering of the combination of a Term and a means that helps Readers to understand the meaning of that Term when it is used in a sentence."},"HRG entry")," was generated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{{localize navurl}}")," is a handlebars expression that uses the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/handlebars-helper-functions#localize",title:"Handlebars Helper Function: a function that can be used in a Handlebars Expression to manipulate or format the data before displaying it within a template."},"helper function")," ",(0,n.kt)("inlineCode",{parentName:"li"},"localize"),".")))}p.isMDXComponent=!0}}]);