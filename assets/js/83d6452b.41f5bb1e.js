"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,u=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(3117),a=(r(7294),r(3905));const o={id:"@",displayed_sidebar:"tev2SideBar",term:"at-character",termType:"error",excludeFromMRG:"yes",glossaryTerm:"@ (unresolvable reference)",glossaryText:"Error - the reference cannot be resolved.",sidebar_label:"Term ref not found"},i="ERROR - The reference cannot be resolved",s={unversionedId:"terms/@",id:"terms/@",title:"ERROR - The reference cannot be resolved",description:"When you are here, you have clicked on a term that hasn't been (properly) defined.",source:"@site/docs/terms/@.md",sourceDirName:"terms",slug:"/terms/@",permalink:"/tev2-specifications/docs/terms/@",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/@.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1709283640,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{id:"@",displayed_sidebar:"tev2SideBar",term:"at-character",termType:"error",excludeFromMRG:"yes",glossaryTerm:"@ (unresolvable reference)",glossaryText:"Error - the reference cannot be resolved.",sidebar_label:"Term ref not found"},sidebar:"tev2SideBar"},c={},l=[{value:"Explanation",id:"explanation",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error---the-reference-cannot-be-resolved"},"ERROR - The reference cannot be resolved"),(0,a.kt)("p",null,"When you are here, you have clicked on a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," that hasn't been (properly) defined."),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("p",null,"When a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," ",(0,a.kt)("inlineCode",{parentName:"p"},"someterm")," isn't defined, the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," ",(0,a.kt)("inlineCode",{parentName:"p"},"[someterm](@)")," will product a link to a term with ",(0,a.kt)("inlineCode",{parentName:"p"},"id=@"),". So when you click that ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef"),", your browser will navigate to this page, because it is a the location of where the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," would be."))}d.isMDXComponent=!0}}]);