"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[3271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(3117),o=(r(7294),r(3905)),a=r(4996);const i={id:"contributors-LaTeX",sidebar_label:"Using LaTeX",date:20220513},s="Using LaTeX source texts",c={unversionedId:"manuals/contributor/contributors-LaTeX",id:"manuals/contributor/contributors-LaTeX",title:"Using LaTeX source texts",description:"<img",source:"@site/docs/manuals/contributor/40-contributors-latex.md",sourceDirName:"manuals/contributor",slug:"/manuals/contributor/contributors-LaTeX",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-LaTeX",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributor/40-contributors-latex.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1731663339,formattedLastUpdatedAt:"Nov 15, 2024",sidebarPosition:40,frontMatter:{id:"contributors-LaTeX",sidebar_label:"Using LaTeX",date:20220513},sidebar:"tev2SideBar",previous:{title:"Using Wikis (Markdown)",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-wiki"},next:{title:"Manuals for Curators",permalink:"/tev2-specifications/docs/categories/manuals-curator"}},l={},u=[],p={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-latex-source-texts"},"Using LaTeX source texts"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,a.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"Editor's note:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Text needs to be drafted to work out the idea that LaTeX is a raw text that can be highly configured. For starters, it would be helpful if LaTeX ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," could"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"specify ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," in their documents, and"),(0,o.kt)("li",{parentName:"ul"},"specify a location where a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," could be inserted.")),(0,o.kt)("p",{parentName:"admonition"},"This hasn't been worked out. We may need to specify one or two ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/LaTeX/Macros"},"LaTeX Macros"),", and some specific plugins for the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," and ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," may need to be created.")))}d.isMDXComponent=!0}}]);