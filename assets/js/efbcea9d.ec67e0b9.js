"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return r?o.createElement(d,s(s({ref:t},u),{},{components:r})):o.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(3117),n=(r(7294),r(3905));const a={id:"converter",term:"converter",termType:"concept",isa:null,glossaryTerm:"Converter",glossaryText:"a software component that takes the output of an [interpreter](@), i.e., the set of moustache variables it has produced, and processes these, possibly with other data from e.g. a [MRG](@), to generate a new, converted text in a different format. The converter uses the values assigned to the moustache variables to produce the transformed output.",synonymOf:null,grouptags:null,formPhrases:"converter{ss}",status:"proposed",created:new Date("2023-07-31T00:00:00.000Z"),updated:new Date("2023-07-31T00:00:00.000Z"),contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Converter",i={unversionedId:"terms/converter",id:"terms/converter",title:"Converter",description:"A converter is a software component that takes the output of an interpreter, i.e., the set of moustache variables it has produced, and processes these, possibly with other data from e.g. a MRG, to generate a new, converted text in a different format. The converter uses the values assigned to the moustache variables to produce the transformed output.",source:"@site/docs/terms/converter.md",sourceDirName:"terms",slug:"/terms/converter",permalink:"/tev2-specifications/docs/terms/converter",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/converter.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1696597068,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{id:"converter",term:"converter",termType:"concept",isa:null,glossaryTerm:"Converter",glossaryText:"a software component that takes the output of an [interpreter](@), i.e., the set of moustache variables it has produced, and processes these, possibly with other data from e.g. a [MRG](@), to generate a new, converted text in a different format. The converter uses the values assigned to the moustache variables to produce the transformed output.",synonymOf:null,grouptags:null,formPhrases:"converter{ss}",status:"proposed",created:"2023-07-31T00:00:00.000Z",updated:"2023-07-31T00:00:00.000Z",contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"converter"},"Converter"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"converter")," is a software component that takes the output of an ",(0,n.kt)("a",{parentName:"p",href:"@"},"interpreter"),", i.e., the set of moustache variables it has produced, and processes these, possibly with other data from e.g. a ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG"),", to generate a new, converted text in a different format. The converter uses the values assigned to the moustache variables to produce the transformed output."),(0,n.kt)("p",null,"Converters are used, e.g., by the ",(0,n.kt)("a",{parentName:"p",href:"@"},"TRRT")," to create ",(0,n.kt)("a",{parentName:"p",href:"@"},"renderable refs")," from the ",(0,n.kt)("a",{parentName:"p",href:"@"},"moustache variables")," produced by ",(0,n.kt)("a",{parentName:"p",href:"@"},"TermRefs"),"."))}l.isMDXComponent=!0}}]);