"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||l[f]||s;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const s={term:"semantics",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning.",synonymOf:null,grouptags:null,formPhrases:"semantics",status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-06-06T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},i="Semantics",o={unversionedId:"terms/semantics",id:"terms/semantics",title:"Semantics",description:"Summary",source:"@site/docs/terms/semantics.md",sourceDirName:"terms",slug:"/terms/semantics",permalink:"/tev2-specifications/docs/terms/semantics",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/semantics.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1695661048,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{term:"semantics",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning.",synonymOf:null,grouptags:null,formPhrases:"semantics",status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-06-06T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},p={},c=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3}],m={toc:c};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semantics"},"Semantics"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"We use the term ",(0,a.kt)("strong",{parentName:"p"},"semantics")," to refer to the mapping between (tangible) ",(0,a.kt)("a",{parentName:"p",href:"@"},"terms")," and (intangible) ",(0,a.kt)("a",{parentName:"p",href:"@"},"concepts")," (their meaning, the ideas behind it). Semantics are scoped, i.e. every ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope")," has its own semantic mapping. This implies that every ",(0,a.kt)("a",{parentName:"p",href:"@"},"party")," has - and maintains - its own (subjective) semantics, which is its subjective mapping of a set of terms onto the concepts/ideas in its ",(0,a.kt)("a",{parentName:"p",href:"@"},"knowledge"),". The (erroneous) assumption that ",(0,a.kt)("a",{parentName:"p",href:"@"},"parties")," would (automagically) share a semantics is the cause of many misunderstandings, and hence should be identified and deleted as soon as possible."),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern"),", the ",(0,a.kt)("a",{parentName:"p",href:"@"},"relation")," ",(0,a.kt)("inlineCode",{parentName:"p"},"refers to")," from ",(0,a.kt)("a",{parentName:"p",href:"@"},"scoped term")," to ",(0,a.kt)("a",{parentName:"p",href:"@"},"concept")," represents the semantics of ",(0,a.kt)("a",{parentName:"p",href:"@"},"scoped terms"),"."),(0,a.kt)("h3",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"The ability to distinguish between (non)semantics helps us to better understand one another, because it makes one aware of the fact that semantics is subjective, and its owner can update it. This allows such an owner to (temporarily) use terms in the same meaning as another ",(0,a.kt)("a",{parentName:"p",href:"@"},"party"),", specifically if they agree to use ",(0,a.kt)("a",{parentName:"p",href:"@"},"good definitions"),"."),(0,a.kt)("h3",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,"A semantics is a mapping, in a specific ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope"),", between (tangible) ",(0,a.kt)("a",{parentName:"p",href:"@"},"terms")," and (intangible) ",(0,a.kt)("a",{parentName:"p",href:"@"},"concepts")," (their meaning, the ideas behind it)."))}l.isMDXComponent=!0}}]);