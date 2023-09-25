"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9545],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),h=r,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||i;return o?n.createElement(u,a(a({ref:t},p),{},{components:o})):n.createElement(u,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4345:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},mark:function(){return h},metadata:function(){return p},toc:function(){return m}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=o(4996),s=["components"],c={id:"hrdt",sidebar_label:"HR Dictionary Generation",date:20220801},l="Human Readable Dictionary Generation Tool",p={unversionedId:"spec-tools/hrdt",id:"spec-tools/hrdt",title:"Human Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/spec-tools/32-hrdt.md",sourceDirName:"spec-tools",slug:"/spec-tools/hrdt",permalink:"/tev2-specifications/docs/spec-tools/hrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/32-hrdt.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1695661048,formattedLastUpdatedAt:"Sep 25, 2023",sidebarPosition:32,frontMatter:{id:"hrdt",sidebar_label:"HR Dictionary Generation",date:20220801},sidebar:"tev2SideBar",previous:{title:"MR Dictionary Generation",permalink:"/tev2-specifications/docs/spec-tools/mrdt"},next:{title:"TEv2 - Glossary and Mental Models",permalink:"/tev2-specifications/docs/tev2-glossary"}},d={},m=[],h=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},u={toc:m,mark:h};function f(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"human-readable-dictionary-generation-tool"},"Human Readable Dictionary Generation Tool"),(0,i.kt)("img",{alt:"This page is under construction",src:(0,a.Z)("images/wip/wip-under-construction.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Human Readable Dictionary generation Tool (",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrdt",hovertext:"Human Readable Dictionary Tool (HRDT): a software tool designed to create, manage, and process Human Readable Dictionaries (HRDs)."},"HRDT"),")")," generates a Human Readable ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/dictionary",hovertext:"Dictionary: an alphabetically sorted list of Terms with various meanings that they may have in different contexts."},"Dictionary")," (",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRD"),"), that renders the ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," from a ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"machine readable dictionary (MRD)")," into one of several formats, e.g. HTML, or PDF. This rendering may be subject to further processing by third-party rendering tools, such as ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. (see also: ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"Using the Tools"),")."),(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRDs")," can be created for different purposes, e.g. to - compare ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between different ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", which helps e.g. when aligning ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between them. - provide an overview of what various ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," utilize specific ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," for (education).",(0,i.kt)("p",null,"And there's certainly going to be more such purposes."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Before this tool can really be properly specified, it may help to do some experiments to see what is really needed in order to keep it as simple as possible, and only then start proper specifications.")))}f.isMDXComponent=!0}}]);