"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[3271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=r(3117),n=(r(7294),r(3905)),a=r(4996);const i={id:"contributors-LaTeX",sidebar_label:"Using LaTeX",date:20220513},s="Using LaTeX source texts",c={unversionedId:"manuals/contributor/contributors-LaTeX",id:"manuals/contributor/contributors-LaTeX",title:"Using LaTeX source texts",description:"<img",source:"@site/docs/manuals/contributor/40-contributors-latex.md",sourceDirName:"manuals/contributor",slug:"/manuals/contributor/contributors-LaTeX",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-LaTeX",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributor/40-contributors-latex.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1699345195,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:40,frontMatter:{id:"contributors-LaTeX",sidebar_label:"Using LaTeX",date:20220513},sidebar:"tev2SideBar",previous:{title:"Using Wikis (Markdown)",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-wiki"},next:{title:"Overview",permalink:"/tev2-specifications/docs/spec-files/overview-spec-files"}},l={},u=[],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-latex-source-texts"},"Using LaTeX source texts"),(0,n.kt)("img",{alt:"This page is under construction",src:(0,a.Z)("images/wip/wip-under-construction.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"Editor's note:",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Text needs to be drafted to work out the idea that LaTeX is a raw text that can be highly configured. For starters, it would be helpful if LaTeX ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," could"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"specify ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," in their documents, and"),(0,n.kt)("li",{parentName:"ul"},"specify a location where a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",hovertext:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," could be inserted.")),(0,n.kt)("p",{parentName:"admonition"},"This hasn't been worked out. We may need to specify one or two ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/LaTeX/Macros"},"LaTeX Macros"),", and some specific plugins for the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," and ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/22-hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," may need to be created.")))}d.isMDXComponent=!0}}]);