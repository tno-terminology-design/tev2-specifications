"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[7087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,u=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(u,a(a({ref:t},f),{},{components:r})):n.createElement(u,a({ref:t},f))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(3117),i=(r(7294),r(3905));const o={term:"terminology-identifier",termType:"concept",isa:"identifier",bodyFile:"/40-specs/syntax/31-terminology-identifier-syntax.md",glossaryTerm:"Terminology Identifier",glossaryText:"a [text](identifier@), of the form `<scopetag>:<vsntag>`, that [identifies](@) a [terminology](@) from within a particular [scope](@), and can also be used to find the [MRG](@) file (in the [glossarydir](@) of that same [scope](@)) that contains [entries](mrg-entry@) for every [term](@) contained in that [terminology](@). If `<scopetag>` and/or `:<vsntag>` is omitted, their values are taken be the current (or default) ones.",hoverText:"a text (identifier), of the form `<scopetag>:<vsntag>`, that identifies a terminology from within a particular scope. If `<scopetag>` and/or `:<vsntag>` is omitted, their values are taken be the current (or default) ones.",synonymOf:null,grouptags:null,formPhrases:["terminology-identifier{ss}"],status:"proposed",created:20230929,updated:20230929,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},a=void 0,s={unversionedId:"terms/terminology-identifier",id:"terms/terminology-identifier",title:"terminology-identifier",description:"",source:"@site/docs/terms/terminology-identifier.md",sourceDirName:"terms",slug:"/terms/terminology-identifier",permalink:"/tev2-specifications/docs/terms/terminology-identifier",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/terminology-identifier.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704966390,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{term:"terminology-identifier",termType:"concept",isa:"identifier",bodyFile:"/40-specs/syntax/31-terminology-identifier-syntax.md",glossaryTerm:"Terminology Identifier",glossaryText:"a [text](identifier@), of the form `<scopetag>:<vsntag>`, that [identifies](@) a [terminology](@) from within a particular [scope](@), and can also be used to find the [MRG](@) file (in the [glossarydir](@) of that same [scope](@)) that contains [entries](mrg-entry@) for every [term](@) contained in that [terminology](@). If `<scopetag>` and/or `:<vsntag>` is omitted, their values are taken be the current (or default) ones.",hoverText:"a text (identifier), of the form `<scopetag>:<vsntag>`, that identifies a terminology from within a particular scope. If `<scopetag>` and/or `:<vsntag>` is omitted, their values are taken be the current (or default) ones.",synonymOf:null,grouptags:null,formPhrases:["terminology-identifier{ss}"],status:"proposed",created:20230929,updated:20230929,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},l=[],f={toc:l};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);