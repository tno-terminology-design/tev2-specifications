"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4069],{3905:function(t,e,i){i.d(e,{Zo:function(){return d},kt:function(){return u}});var o=i(7294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)i=a[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)i=a[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var c=o.createContext({}),l=function(t){var e=o.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},d=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var i=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=l(i),u=n,g=p["".concat(c,".").concat(u)]||p[u]||h[u]||a;return i?o.createElement(g,r(r({ref:e},d),{},{components:i})):o.createElement(g,r({ref:e},d))}));function u(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=i.length,r=new Array(a);r[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,r[1]=s;for(var l=2;l<a;l++)r[l]=i[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},7883:function(t,e,i){i.r(e),i.d(e,{assets:function(){return h},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var o=i(7462),n=i(3366),a=(i(7294),i(3905)),r=i(4996),s=["components"],c={id:"tev2-installation",date:20220303},l="Installation",d={unversionedId:"manuals/curator/tev2-installation",id:"manuals/curator/tev2-installation",title:"Installation",description:"<img",source:"@site/docs/manuals/curator/10-curator-tev2-installation.md",sourceDirName:"manuals/curator",slug:"/manuals/curator/tev2-installation",permalink:"/tev2-specifications/docs/manuals/curator/tev2-installation",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/curator/10-curator-tev2-installation.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1694174606,formattedLastUpdatedAt:"Sep 8, 2023",sidebarPosition:10,frontMatter:{id:"tev2-installation",date:20220303},sidebar:"tev2SideBar",previous:{title:"Curators",permalink:"/tev2-specifications/docs/manuals/curator/curator-overview"},next:{title:"Contributors",permalink:"/tev2-specifications/docs/manuals/contributor/contributor-overview"}},h={},p=[{value:"Structure of Scope Directories",id:"structure-of-scope-directories",level:3},{value:"Integrating Scope Directories and the ToIP Terminology Toolbox",id:"integrating-scope-directories-and-the-toip-terminology-toolbox",level:3},{value:"Integrating Scope Directories and Third Party Rendering Tools",id:"integrating-scope-directories-and-third-party-rendering-tools",level:3}],u={toc:p};function g(t){var e=t.components,i=(0,n.Z)(t,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,r.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,a.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section on 'Installation' can really be written only after the rest is complete. The contents of this page is just a set of ideas that may well have been deprecated already.")),(0,a.kt)("admonition",{title:"Editor's note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page should only document the generic stuff. Any installation details that are specific to a tool SHOULD be documented in the page(s) that document the particular tool. Obviously, this page could mention the tools for which that is the case, and link to the associated sections.")),(0,a.kt)("p",null,"TEv2 is a tool for ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curating")," ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"-related data from the perspective of a single ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". Installation comprises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"setting up, or appointing an (online) directory that will serve as a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopedir",title:"Scope-directory: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory"),";"),(0,a.kt)("li",{parentName:"ul"},"creating a ",(0,a.kt)("a",{parentName:"li",href:"docs/spec-files/saf"},"Scope Administration File (SAF)"),", and providing the configuration of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," and its ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),";"),(0,a.kt)("li",{parentName:"ul"},"installing the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tev2-toolbox"},"tev2-toolbox"),";"),(0,a.kt)("li",{parentName:"ul"},"integrating the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tev2-toolbox"},"tools")," with other tools, such as a CI/CD pipeline on github or gitlab, static site generators such as ",(0,a.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages")," or ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. See also: ",(0,a.kt)("a",{parentName:"li",href:"/docs/tev2-toolbox"},"Using the Tools"),".")),(0,a.kt)("h3",{id:"structure-of-scope-directories"},"Structure of Scope Directories"),(0,a.kt)("p",null,"Depending on the other tooling that is going to be used, a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopedir",title:"Scope-directory: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," has to be specified that is part of the (online) directory in which the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," has to be used. The ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scopes: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/saf",title:"SAF: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope."},"scope administration file (SAF)")," specifies whatever needs to be administered for that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"; this file is maintained by the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",title:"Curator: {(noRefs glossaryText)}"},"curators")," of the scope (using a regular text editor)."),(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",title:"Curator: {(noRefs glossaryText)}"},"Curators")," must also specify a location (directory) within the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopedir",title:"Scope-directory: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," where ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossary",title:"Glossaries: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossaries")," will be located. This directory, which is called the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossarydir",title:"Glossary-directory: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossary directory")," or ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," is located within the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),", and contains all ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossary",title:"Glossaries: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossaries")," that are generated by and/or needed within the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," - as well as perhaps some other stuff.",(0,a.kt)("h3",{id:"integrating-scope-directories-and-the-toip-terminology-toolbox"},"Integrating Scope Directories and the ToIP Terminology Toolbox"),(0,a.kt)("admonition",{title:"Editor's Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Content to be produced")),(0,a.kt)("h3",{id:"integrating-scope-directories-and-third-party-rendering-tools"},"Integrating Scope Directories and Third Party Rendering Tools"),(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/knowledge-artifact",title:"Knowledge-artifacts: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"Knowledge artifacts")," are intended to also be used by/within third party rendering tools, such as [github pages](https://pages.github.com/), [Docusaurus](https://docusaurus.io/docs/docs-introduction), or LaTeX",(0,a.kt)("admonition",{title:"Editor's Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Content to be produced")))}g.isMDXComponent=!0}}]);