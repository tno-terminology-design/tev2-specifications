"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6854],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(7294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var c=n.createContext({}),m=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(i),h=s,u=d["".concat(c,".").concat(h)]||d[h]||l[h]||a;return i?n.createElement(u,r(r({ref:t},p),{},{components:i})):n.createElement(u,r({ref:t},p))}));function h(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=i.length,r=new Array(a);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var m=2;m<a;m++)r[m]=i[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},5525:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var n=i(3117),s=(i(7294),i(3905));const a={id:"semantics",displayed_sidebar:"tev2SideBar",term:"semantics",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning.",grouptags:[],formPhrases:["semantics"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},r="Semantics",o={unversionedId:"terms/semantics",id:"terms/semantics",title:"Semantics",description:"Summary",source:"@site/docs/terms/semantics.md",sourceDirName:"terms",slug:"/terms/semantics",permalink:"/tev2-specifications/docs/terms/semantics",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/semantics.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1707117745,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"semantics",displayed_sidebar:"tev2SideBar",term:"semantics",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning.",grouptags:[],formPhrases:["semantics"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},m=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3}],p={toc:m};function l(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"semantics"},"Semantics"),(0,s.kt)("h3",{id:"summary"},"Summary"),(0,s.kt)("p",null,"We use the term ",(0,s.kt)("strong",{parentName:"p"},"semantics")," to refer to the mapping between (tangible) ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," and (intangible) ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (their meaning, the ideas behind it). Semantics are scoped, i.e. every ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," has its own semantic mapping. This implies that every ",(0,s.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",title:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," has - and maintains - its own (subjective) semantics, which is its subjective mapping of a set of terms onto the concepts/ideas in its ",(0,s.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/knowledge",title:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge"),". The (erroneous) assumption that ",(0,s.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",title:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"parties")," would (automagically) share a semantics is the cause of many misunderstandings, and hence should be identified and deleted as soon as possible."),(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/patterns/terminology",title:"Terminology Pattern: a Mental Model that describes the relations between a Community, its (intangible) Knowledge, and the artifacts we use to document that Knowledge, such as Terms, Definitions, Mental Models, Glossaries, etc."},"terminology pattern"),", the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/relation",title:"Relation (between Concepts): a (significant) connection or association between two or more Concepts. These connections define the way these Concepts are interrelated, providing insights into how they interact and influence each other."},"relation")," ",(0,s.kt)("inlineCode",{parentName:"p"},"refers to")," from ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",title:"Scoped Term: a Term that represents (and Identifies) a specific Semantic Unit of a particular Community (or Party)."},"scoped term")," to ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," represents the semantics of ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",title:"Scoped Term: a Term that represents (and Identifies) a specific Semantic Unit of a particular Community (or Party)."},"scoped terms"),"."),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"The ability to distinguish between (non)semantics helps us to better understand one another, because it makes one aware of the fact that semantics is subjective, and its owner can update it. This allows such an owner to (temporarily) use terms in the same meaning as another ",(0,s.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",title:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", specifically if they agree to use ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"good definitions"),"."),(0,s.kt)("h3",{id:"criteria"},"Criteria"),(0,s.kt)("p",null,"A semantics is a mapping, in a specific ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", between (tangible) ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," and (intangible) ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (their meaning, the ideas behind it)."))}l.isMDXComponent=!0}}]);