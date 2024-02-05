"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8572],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,h=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(3117),i=(r(7294),r(3905));const o={id:"trrt",term:"trrt",termType:"concept",isa:null,bodyFile:"/specs/tools/12-trrt.md",glossaryTerm:"TermRef Rendering Tool",glossaryAbbr:"TRRT",glossaryText:"a [TEv2 tool](@) that is designed to facilitate the visualization and rendering of [TermRefs](@).",grouptags:["tev2-tool","tev2-toolbox"],formPhrases:["trrt{ss}","termref-rendering-tool{ss}","term-ref-rendering-tool{ss}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},a="TRRT - TermRef Rendering Tool",s={unversionedId:"terms/trrt",id:"terms/trrt",title:"TRRT - TermRef Rendering Tool",description:"The TRRT (TermRef Rendering Tool) is an essential component of the TEv2 toolbox, designed to facilitate the visualization and rendering of semantic units and their interrelationships within a specific terminology. The TRRT takes a TermRef as input, finds the MRG and the entry therein that is being referenced, and replaces that with a renderable ref, thus enabling the term to be rendered with various decorations and other characteristics.",source:"@site/docs/terms/trrt.md",sourceDirName:"terms",slug:"/terms/trrt",permalink:"/tev2-specifications/docs/terms/trrt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/trrt.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1707138540,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"trrt",term:"trrt",termType:"concept",isa:null,bodyFile:"/specs/tools/12-trrt.md",glossaryTerm:"TermRef Rendering Tool",glossaryAbbr:"TRRT",glossaryText:"a [TEv2 tool](@) that is designed to facilitate the visualization and rendering of [TermRefs](@).",grouptags:["tev2-tool","tev2-toolbox"],formPhrases:["trrt{ss}","termref-rendering-tool{ss}","term-ref-rendering-tool{ss}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},l=[],d={toc:l};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trrt---termref-rendering-tool"},"TRRT - TermRef Rendering Tool"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"TRRT")," (",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," Rendering Tool) is an essential component of the TEv2 toolbox, designed to facilitate the visualization and rendering of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge). Examples include ideas, or Concepts, Properties of Concepts, Relations between Concepts, constraints over such Concepts and Relations, etc."},"semantic units")," and their interrelationships within a specific ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),". The TRRT takes a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," as input, finds the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," and the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"entry")," therein that is being referenced, and replaces that with a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable ref"),", thus enabling the term to be rendered with various decorations and other characteristics."))}f.isMDXComponent=!0}}]);