"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,u=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(3117),a=(r(7294),r(3905)),o=r(4996);const i={id:"mrdt",sidebar_label:"MR Dictionary Generation",date:20220801},s="Machine Readable Dictionary Generation Tool",c={unversionedId:"spec-tools-envisaged/mrdt",id:"spec-tools-envisaged/mrdt",title:"Machine Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/spec-tools-envisaged/31-mrdt.md",sourceDirName:"spec-tools-envisaged",slug:"/spec-tools-envisaged/mrdt",permalink:"/tev2-specifications/docs/spec-tools-envisaged/mrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools-envisaged/31-mrdt.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1698762855,formattedLastUpdatedAt:"Oct 31, 2023",sidebarPosition:31,frontMatter:{id:"mrdt",sidebar_label:"MR Dictionary Generation",date:20220801},sidebar:"tev2SideBar",previous:{title:"TermRef Selector",permalink:"/tev2-specifications/docs/spec-tools-envisaged/termref-selector"},next:{title:"HR Dictionary Generation",permalink:"/tev2-specifications/docs/spec-tools-envisaged/hrdt"}},p={},l=[],d={toc:l};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"machine-readable-dictionary-generation-tool"},"Machine Readable Dictionary Generation Tool"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,a.kt)("a",{parentName:"strong",href:"@"},"MRDT"),")")," generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRD"),") of ",(0,a.kt)("a",{parentName:"p",href:"@"},"terms")," that originate from different (versions of) ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminologies"),", from various ",(0,a.kt)("a",{parentName:"p",href:"@"},"scopes"),". The inventory has a specific, well-defined ",(0,a.kt)("a",{parentName:"p",href:"/docs/spec-files/mrd"},"format"),". Like ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRGs"),", the contents of ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRDs")," is determined by a list of ",(0,a.kt)("a",{parentName:"p",href:"@"},"term selection instructions"),", which specify the (sets of) terms that are to be included."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"@"},"MRDs")," are meant to be processed by the other tools in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"toolbox"),", specifically by one of the ",(0,a.kt)("a",{parentName:"p",href:"@"},"HRDTs"),", which would then create a ",(0,a.kt)("a",{parentName:"p",href:"@"},"Human Readable Dictionary")," (or ",(0,a.kt)("a",{parentName:"p",href:"@"},"HRD"),")."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"@"},"MRDs")," can typically used to enable the creation of ",(0,a.kt)("a",{parentName:"p",href:"@"},"HRDs")," that are fit for specific purposes, e.g. for comparing ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminologies")," between different ",(0,a.kt)("a",{parentName:"p",href:"@"},"scopes"),", which helps e.g. when aligning ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminologies")," between them. Also they can be used to provide an overview of what various ",(0,a.kt)("a",{parentName:"p",href:"@"},"scopes")," utilize specific terms for (education). And there's certainly going to be more such purposes."),(0,a.kt)("admonition",{title:"Editor's note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The specifications of this tool need to be authored.\nIt is suggested to look at the MRGT-specs, and adapt that text.")))}f.isMDXComponent=!0}}]);