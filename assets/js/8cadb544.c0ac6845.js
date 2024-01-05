"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(3117),n=(r(7294),r(3905));const a={term:"dictionary",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"an alphabetically sorted list of [terms](@) with various meanings that they may have in different contexts.",synonymOf:null,grouptags:null,formPhrases:["dictionar{yies}"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},o="Dictionary",s={unversionedId:"terms/dictionary",id:"terms/dictionary",title:"Dictionary",description:"Summary",source:"@site/docs/terms/dictionary.md",sourceDirName:"terms",slug:"/terms/dictionary",permalink:"/tev2-specifications/docs/terms/dictionary",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/dictionary.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704463230,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{term:"dictionary",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"an alphabetically sorted list of [terms](@) with various meanings that they may have in different contexts.",synonymOf:null,grouptags:null,formPhrases:["dictionar{yies}"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},l=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dictionary"},"Dictionary"),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("p",null,"A Dictionary is an alphabetically sorted list of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," with explanations. Each term may have multiple such explanations, which come from different ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes/contexts"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern")," provides an overview of how this ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," fits in with related ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),"."),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"A dictionary helps people to get introduced in the domain for which the dictionary is created. Usually, this is a larger domain e.g. of some language, or about computer security."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"an alphabetical list of words or phrases with possibly multiple, short explanations, that exists for the purpose of helping people to find out what a word may mean in various ",(0,n.kt)("a",{parentName:"p",href:"@"},"scopes/contexts"),"."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples include the ",(0,n.kt)("a",{parentName:"p",href:"https://csrc.nist.gov/glossary"},"NIST Computer Security Resource Center"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.merriam-webster.com/dictionary/"},"Merriam-Webster"),"."))}m.isMDXComponent=!0}}]);