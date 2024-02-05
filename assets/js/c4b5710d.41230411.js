"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4628],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||n;return a?r.createElement(u,s(s({ref:t},d),{},{components:a})):r.createElement(u,s({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(3117),i=(a(7294),a(3905));const n={id:"regularized-text",displayed_sidebar:"tev2SideBar",term:"regularized-text",termType:"concept",isa:null,glossaryTerm:"Regularized Text",glossaryText:"a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match [regex](@) `[a-z_0-9-]`, and doesn't end with a `-` character. In other words, every text that matches the [regex](@) `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text.",formPhrases:["regularized-text{ss}","regulariz{es}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Regularized Text",o={unversionedId:"terms/regularized-text",id:"terms/regularized-text",title:"Regularized Text",description:"A Regularized Text is a character string that starts with a lowercase character (a-z]), and has subsequent characters that match regex [a-z0-9-], and doesn't end with a - character. In other words, every text that matches the regex ^[a-z*(?<=)$ is a regularized text.",source:"@site/docs/terms/regularized-text.md",sourceDirName:"terms",slug:"/terms/regularized-text",permalink:"/tev2-specifications/docs/terms/regularized-text",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/regularized-text.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1707138540,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"regularized-text",displayed_sidebar:"tev2SideBar",term:"regularized-text",termType:"concept",isa:null,glossaryTerm:"Regularized Text",glossaryText:"a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match [regex](@) `[a-z_0-9-]`, and doesn't end with a `-` character. In other words, every text that matches the [regex](@) `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text.",formPhrases:["regularized-text{ss}","regulariz{es}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},l={},c=[{value:"Purpose",id:"purpose",level:2},{value:'Use of Regularized Texts within <a href="/tev2-specifications/docs/terms/tev2" title="TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes.">TEv2</a>',id:"use-of-regularized-texts-within-tev2",level:2},{value:"Regularizing Texts",id:"regularization-process",level:2},{value:"Notes",id:"notes",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"regularized-text"},"Regularized Text"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Regularized Text")," is a character string that starts with a lowercase character (",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z]"),"), and has subsequent characters that match ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex")," ",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z_0-9-]"),", and doesn't end with a ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," character. In other words, every text that matches the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex")," ",(0,i.kt)("inlineCode",{parentName:"p"},"^[a-z][a-z_0-9-]*(?<=[^-])$")," is a regularized text."),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text."},"Regularized texts")," are used primarily to ensure consistency and predictability in naming and referencing elements within ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),". It is used for several reasons:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ease of Processing"),": Regularized texts are easier to process and handle by various software systems, as they follow a predictable pattern. This uniformity is particularly important for tasks like sorting, searching, and indexing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoiding Conflicts"),": By following a strict pattern, regularized texts help prevent issues like naming conflicts or syntax errors that might arise from irregular naming conventions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interoperability"),": Standardized text formats ensure better interoperability between different systems and software components. When different systems follow the same naming conventions, it's easier to integrate and share data across them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Readability and Maintenance"),": For IT personnel, especially those who are not programmers, having a consistent naming convention (like regularized text) makes it easier to understand and maintain systems. It reduces the learning curve and aids in quicker identification of elements.")),(0,i.kt)("h2",{id:"use-of-regularized-texts-within-tev2"},"Use of Regularized Texts within ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")),(0,i.kt)("p",null,"Within ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),", ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text."},"regularized texts")," are used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to construct more complex ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/identifier",title:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used)."},"identifiers")," such as ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs"),", ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/termid",title:"Termid: a text of the form `<termType>:<term>` that serves as an unambiguous Identifier for a specific Semantic Unit in some given Scope."},"term ids"),", ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",title:"Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that Identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology. If `<scopetag>` and/or `:<vsntag>` is omitted, their values are taken be the current (or default) ones."},"terminology identifiers"),", URLs, etc."),(0,i.kt)("li",{parentName:"ul"},"as a class of texts, with members such as ",(0,i.kt)("inlineCode",{parentName:"li"},"termType"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"term"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"grouptags"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"scopetag"),"."),(0,i.kt)("li",{parentName:"ul"},"to represent ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," in ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," (note that the ",(0,i.kt)("inlineCode",{parentName:"li"},"formPhrases")," field of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts")," do not typically contain ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text."},"regularized texts"),")"),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("h2",{id:"regularization-process"},"Regularizing Texts"),(0,i.kt)("p",null,"The process that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tools")," use if they need to convert a normal, human readable text into a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text."},"regularized texts"),", consists of the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"convert the text to lowercase;"),(0,i.kt)("li",{parentName:"ol"},"remove all characters at the beginning of the text that do not match regex ",(0,i.kt)("inlineCode",{parentName:"li"},"[a-z]"),"."),(0,i.kt)("li",{parentName:"ol"},"replace all characters that may not appear in a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text."},"regularized text")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," character;"),(0,i.kt)("li",{parentName:"ol"},"replace all sequences of ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," characters with a single ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," character, such that in the resulting text there are no two consecutive ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," characters;"),(0,i.kt)("li",{parentName:"ol"},"remove any leading and/or trailing ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," characters.")),(0,i.kt)("p",null,"Here's a table that shows how a variety of input texts would be converted into ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^[a-z][a-z_0-9-]*(?<=[^-])$` is a regularized text."},"regularized texts"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"#"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Text"),(0,i.kt)("th",{parentName:"tr",align:null},"Regularized Text"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"example")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"example"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ex@mple")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ex-mple"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ex4mPLe 4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ex4mple-4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(example):")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"example"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EX(ample)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ex-ample"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1#-_23ex3mple")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ex3mple"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ex--am@#ple123")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ex-am-ple123"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"8"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"**e!x@a#m$p%l^e**")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"e-x-a-m-p-l-e"))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"))}h.isMDXComponent=!0}}]);