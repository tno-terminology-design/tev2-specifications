"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[188],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},789:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(4996),s=["components"],c={id:"mrdt",sidebar_label:"MR Dictionary Generation",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20220801},p="Machine Readable Dictionary Generation Tool",l={unversionedId:"tev2/spec-tools/mrdt",id:"tev2/spec-tools/mrdt",title:"Machine Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/tev2/spec-tools/31-mrdt.md",sourceDirName:"tev2/spec-tools",slug:"/tev2/spec-tools/mrdt",permalink:"/tev2-specifications/docs/tev2/spec-tools/mrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/spec-tools/31-mrdt.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1689924373,formattedLastUpdatedAt:"Jul 21, 2023",sidebarPosition:31,frontMatter:{id:"mrdt",sidebar_label:"MR Dictionary Generation",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20220801},sidebar:"tev2SideBar",previous:{title:"HR Glossary Generation",permalink:"/tev2-specifications/docs/tev2/spec-tools/hrgt"},next:{title:"HR Dictionary Generation",permalink:"/tev2-specifications/docs/tev2/spec-tools/hrdt"}},f={},d=[],u={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"machine-readable-dictionary-generation-tool"},"Machine Readable Dictionary Generation Tool"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,a.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,a.kt)("a",{parentName:"strong",href:"@"},"MRDT"),")")," generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRD"),") of ",(0,a.kt)("a",{parentName:"p",href:"@"},"terms")," that originate from different (versions of) ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminologies"),", from various ",(0,a.kt)("a",{parentName:"p",href:"@"},"scopes"),". The inventory has a specific, well-defined ",(0,a.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/mrd"},"format"),". Like ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRGs"),", the contents of ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRDs")," is determined by a list of ",(0,a.kt)("a",{parentName:"p",href:"@"},"term selection criteria"),", which specify the (sets of) terms that are to be included."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"@"},"MRDs")," are meant to be processed by the other tools in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"toolbox"),", specifically by one of the ",(0,a.kt)("a",{parentName:"p",href:"@"},"HRDTs"),", which would then create a ",(0,a.kt)("a",{parentName:"p",href:"@"},"Human Readable Dictionary")," (or ",(0,a.kt)("a",{parentName:"p",href:"@"},"HRD"),")."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"@"},"MRDs")," can typically used to enable the creation of ",(0,a.kt)("a",{parentName:"p",href:"@"},"HRDs")," that are fit for specific purposes, e.g. for comparing ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminologies")," between different ",(0,a.kt)("a",{parentName:"p",href:"@"},"scopes"),", which helps e.g. when aligning ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminologies")," between them. Also they can be used to provide an overview of what various ",(0,a.kt)("a",{parentName:"p",href:"@"},"scopes")," utilize specific terms for (education). And there's certainly going to be more such purposes."),(0,a.kt)("admonition",{title:"Editor's note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The specifications of this tool need to be authored.\nIt is suggested to look at the MRGT-specs, and adapt that text.")))}m.isMDXComponent=!0}}]);