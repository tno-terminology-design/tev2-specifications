"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9545],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4345:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},mark:function(){return f},metadata:function(){return p},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(4996),s=["components"],c={id:"hrdt",sidebar_label:"HR Dictionary Generation",date:20220801},l="Human Readable Dictionary Generation Tool",p={unversionedId:"spec-tools/hrdt",id:"spec-tools/hrdt",title:"Human Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/spec-tools/32-hrdt.md",sourceDirName:"spec-tools",slug:"/spec-tools/hrdt",permalink:"/tev2-specifications/docs/spec-tools/hrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/32-hrdt.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1692021704,formattedLastUpdatedAt:"Aug 14, 2023",sidebarPosition:32,frontMatter:{id:"hrdt",sidebar_label:"HR Dictionary Generation",date:20220801},sidebar:"tev2SideBar",previous:{title:"MR Dictionary Generation",permalink:"/tev2-specifications/docs/spec-tools/mrdt"},next:{title:"TEv2 - Glossary and Mental Models",permalink:"/tev2-specifications/docs/tev2-glossary"}},u={},d=[],f=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},m={toc:d,mark:f};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"human-readable-dictionary-generation-tool"},"Human Readable Dictionary Generation Tool"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,a.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Human Readable Dictionary generation Tool (",(0,a.kt)("a",{parentName:"strong",href:"@"},"HRDT"),")")," generates a Human Readable ",(0,a.kt)("a",{parentName:"p",href:"@"},"Dictionary")," (",(0,a.kt)("a",{parentName:"p",href:"@"},"HRD"),"), that renders the ",(0,a.kt)("a",{parentName:"p",href:"@"},"terms")," from a ",(0,a.kt)("a",{parentName:"p",href:"mrd@"},"machine readable dictionary (MRD)")," into one of several formats, e.g. HTML, or PDF. This rendering may be subject to further processing by third-party rendering tools, such as ",(0,a.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. (see also: ",(0,a.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"Using the Tools"),")."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"@"},"HRDs")," can be created for different purposes, e.g. to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"compare ",(0,a.kt)("a",{parentName:"li",href:"@"},"terminologies")," between different ",(0,a.kt)("a",{parentName:"li",href:"@"},"scopes"),", which helps e.g. when aligning ",(0,a.kt)("a",{parentName:"li",href:"@"},"terminologies")," between them."),(0,a.kt)("li",{parentName:"ul"},"provide an overview of what various ",(0,a.kt)("a",{parentName:"li",href:"@"},"scopes")," utilize specific ",(0,a.kt)("a",{parentName:"li",href:"@"},"terms")," for (education).")),(0,a.kt)("p",null,"And there's certainly going to be more such purposes."),(0,a.kt)("admonition",{title:"Editor's note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Before this tool can really be properly specified, it may help to do some experiments to see what is really needed in order to keep it as simple as possible, and only then start proper specifications.")))}h.isMDXComponent=!0}}]);