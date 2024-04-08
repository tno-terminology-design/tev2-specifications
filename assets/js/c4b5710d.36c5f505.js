"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4628],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return a?r.createElement(u,s(s({ref:t},d),{},{components:a})):r.createElement(u,s({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(3117),n=(a(7294),a(3905));const i={id:"regularized-text",displayed_sidebar:"tev2SideBar",term:"regularized-text",termType:"concept",isa:null,glossaryTerm:"Regularized Text",glossaryText:"a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match [regex](@) `[a-z_0-9-]`, and doesn't end with a `-` character.",glossaryNotes:["In other words, every text that matches the [regex](@) `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text."],formPhrases:["regularized-text{ss}","regulariz{es}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Regularized Text",o={unversionedId:"terms/regularized-text",id:"terms/regularized-text",title:"Regularized Text",description:"A Regularized Text is a character string that starts with a lowercase character (a-z]), and has subsequent characters that match regex [a-z0-9-], and doesn't end with a - character. In other words, every text that matches the regex ^[a-z*(?<=)$ is a regularized text.",source:"@site/docs/terms/regularized-text.md",sourceDirName:"terms",slug:"/terms/regularized-text",permalink:"/tev2-specifications/docs/terms/regularized-text",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/regularized-text.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1712566939,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"regularized-text",displayed_sidebar:"tev2SideBar",term:"regularized-text",termType:"concept",isa:null,glossaryTerm:"Regularized Text",glossaryText:"a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match [regex](@) `[a-z_0-9-]`, and doesn't end with a `-` character.",glossaryNotes:["In other words, every text that matches the [regex](@) `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text."],formPhrases:["regularized-text{ss}","regulariz{es}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},l={},c=[{value:"Purpose",id:"purpose",level:2},{value:'Use of Regularized Texts within <a href="/tev2-specifications/docs/terms/tev2" title="TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes.">TEv2</a>',id:"use-of-regularized-texts-within-tev2",level:2},{value:"Regularizing Texts",id:"regularization-process",level:2},{value:"Notes",id:"notes",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"regularized-text"},"Regularized Text"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Regularized Text")," is a character string that starts with a lowercase character (",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z]"),"), and has subsequent characters that match ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text."},"regex")," ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z_0-9-]"),", and doesn't end with a ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," character. In other words, every text that matches the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text."},"regex")," ",(0,n.kt)("inlineCode",{parentName:"p"},"^[a-z][a-z_0-9-]*(?<=[^-])$")," is a regularized text."),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"Regularized texts")," are used primarily to ensure consistency and predictability in naming and referencing elements within ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),". It is used for several reasons:",(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ease of Processing"),": Regularized texts are easier to process and handle by various software systems, as they follow a predictable pattern. This uniformity is particularly important for tasks like sorting, searching, and indexing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Avoiding Conflicts"),": By following a strict pattern, regularized texts help prevent issues like naming conflicts or syntax errors that might arise from irregular naming conventions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Interoperability"),": Standardized text formats ensure better interoperability between different systems and software components. When different systems follow the same naming conventions, it's easier to integrate and share data across them."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Readability and Maintenance"),": For IT personnel, especially those who are not programmers, having a consistent naming convention (like regularized text) makes it easier to understand and maintain systems. It reduces the learning curve and aids in quicker identification of elements.")),(0,n.kt)("h2",{id:"use-of-regularized-texts-within-tev2"},"Use of Regularized Texts within ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")),(0,n.kt)("p",null,"Within ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),", ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"regularized texts")," are used:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"to construct more complex identifiers such as ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs"),", ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/termid",title:"Termid: a text of the form `<termType>:<term>` that serves as an unambiguous identifier for a specific Semantic Unit in some given Scope."},"term ids"),", ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",title:"Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology."},"terminology identifiers"),", URLs, etc."),(0,n.kt)("li",{parentName:"ul"},"as a class of texts, with members such as ",(0,n.kt)("inlineCode",{parentName:"li"},"termType"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"term"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"grouptags"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"scopetag"),"."),(0,n.kt)("li",{parentName:"ul"},"to represent ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," in ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," (note that the ",(0,n.kt)("inlineCode",{parentName:"li"},"formPhrases")," field of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts")," do not typically contain ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"regularized texts"),")"),(0,n.kt)("li",{parentName:"ul"},"etc.")),(0,n.kt)("h2",{id:"regularization-process"},"Regularizing Texts"),(0,n.kt)("p",null,"The process that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tools")," use if they need to convert a normal, human readable text into a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"regularized texts"),", consists of the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"convert the text to lowercase;"),(0,n.kt)("li",{parentName:"ol"},"remove all characters at the beginning of the text that do not match regex ",(0,n.kt)("inlineCode",{parentName:"li"},"[a-z]"),"."),(0,n.kt)("li",{parentName:"ol"},"replace all characters that may not appear in a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"regularized text")," with the ",(0,n.kt)("inlineCode",{parentName:"li"},"-")," character;"),(0,n.kt)("li",{parentName:"ol"},"replace all sequences of ",(0,n.kt)("inlineCode",{parentName:"li"},"-")," characters with a single ",(0,n.kt)("inlineCode",{parentName:"li"},"-")," character, such that in the resulting text there are no two consecutive ",(0,n.kt)("inlineCode",{parentName:"li"},"-")," characters;"),(0,n.kt)("li",{parentName:"ol"},"remove any leading and/or trailing ",(0,n.kt)("inlineCode",{parentName:"li"},"-")," characters.")),(0,n.kt)("p",null,"Here's a table that shows how a variety of input texts would be converted into ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"regularized texts"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"#"),(0,n.kt)("th",{parentName:"tr",align:null},"Input Text"),(0,n.kt)("th",{parentName:"tr",align:null},"Regularized Text"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"example"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ex@mple")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ex-mple"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Ex4mPLe 4")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ex4mple-4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(example):")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"example"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EX(ample)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ex-ample"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1#-_23ex3mple")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ex3mple"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"7"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ex--am@#ple123")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ex-am-ple123"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"**e!x@a#m$p%l^e**")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"e-x-a-m-p-l-e"))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"notes"},"Notes"))}p.isMDXComponent=!0}}]);