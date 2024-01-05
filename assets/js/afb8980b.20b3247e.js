"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),h=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=h(r),u=i,l=d["".concat(c,".").concat(u)]||d[u]||f[u]||o;return r?a.createElement(l,s(s({ref:t},p),{},{components:r})):a.createElement(l,s({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:i,s[1]=n;for(var h=2;h<o;h++)s[h]=r[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>n,toc:()=>h});var a=r(3117),i=(r(7294),r(3905));const o={term:"term-ref",termType:"concept",isa:null,glossaryTerm:"TermRef",glossaryText:"a word or phrase that is [marked up (in a specific way)](/docs/spec-syntax/term-ref-syntax) so that it refers to a particular [concept](@) (or other [semantic unit](@)), enabling it to be rendered in a variety of ways for the purpose of helping [readers](@) to (better) understand the intention of its [author](@).",synonymOf:null,grouptags:null,formPhrases:["term-ref{ss}","termref{ss}","term-reference{ss}"],status:"proposed",created:20220606,updated:20220804,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Term Ref",n={unversionedId:"terms/term-ref",id:"terms/term-ref",title:"Term Ref",description:"A Term Ref is a word or phrase that is marked up (in a specific way) so that it refers to a particular concept (or other semantic unit), enabling it to be rendered in a variety of ways for the purpose of helping readers to (better) understand the intention of its author.",source:"@site/docs/terms/term-ref.md",sourceDirName:"terms",slug:"/terms/term-ref",permalink:"/tev2-specifications/docs/terms/term-ref",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/term-ref.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704463230,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{term:"term-ref",termType:"concept",isa:null,glossaryTerm:"TermRef",glossaryText:"a word or phrase that is [marked up (in a specific way)](/docs/spec-syntax/term-ref-syntax) so that it refers to a particular [concept](@) (or other [semantic unit](@)), enabling it to be rendered in a variety of ways for the purpose of helping [readers](@) to (better) understand the intention of its [author](@).",synonymOf:null,grouptags:null,formPhrases:["term-ref{ss}","termref{ss}","term-reference{ss}"],status:"proposed",created:20220606,updated:20220804,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},h=[{value:"Purpose",id:"purpose",level:2},{value:"Example Characteristic",id:"example",level:2}],p={toc:h};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"term-ref"},"Term Ref"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Term Ref")," is a word or phrase that is ",(0,i.kt)("a",{parentName:"p",href:"/docs/spec-syntax/term-ref-syntax"},"marked up (in a specific way)")," so that it refers to a particular ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," (or other ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),"), enabling it to be rendered in a variety of ways for the purpose of helping ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," to (better) understand the intention of its ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"author"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," consists of two parts. The first part is the word or phrase that is marked up (the so-called ",(0,i.kt)("inlineCode",{parentName:"p"},"show text"),"). The second part is the actual reference that specifies the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," (or other ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),") to which the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," refers. This second part is called a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",title:"Term Identifier: a Text, of the form `<termid>@<terminology-identifier>`, that is used for Identifying a Semantic Unit within a designated Terminology. If `@<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifier"),"."),(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"Authors")," need to know the [TermRef syntax](/docs/spec-syntax/term-ref-syntax) that they are expected to use.",(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"@"},"Curators"),", which are expected to control the ways in which authored texts are further processed (into rendered texts), will need to know the options provided by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt"},"TRRT tool")," in order to ensure that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," that are used in in authored text are rendered in the way(s) that are envisaged."),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," make it easy for ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to associate some word(s) or phrase(s) with a specific ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),", c.q. the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that (authoritatively) documents it. Also, ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," enable authored texts to be rendered in various ways, each of which is capable of converting such ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," into effects that help ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," to (better) understand what the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"author(s)")," of the text intended when using a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," or phrase.",(0,i.kt)("h2",{id:"example"},"Example Characteristic"),(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," can be used to refer to particular characteristics associated with the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," to which they refer. This section exists as an illustration that it can be referenced by the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," [Example characteristic of TermRefs](term-ref#example)")}f.isMDXComponent=!0}}]);