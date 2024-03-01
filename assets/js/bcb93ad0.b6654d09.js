"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4069],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var o=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=l(i),u=a,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||n;return i?o.createElement(m,s(s({ref:t},d),{},{components:i})):o.createElement(m,s({ref:t},d))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,s=new Array(n);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var l=2;l<n;l++)s[l]=i[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},7883:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=i(3117),a=(i(7294),i(3905)),n=i(4996);const s={id:"tev2-installation",date:20220303},r="Installation",c={unversionedId:"manuals/curator/tev2-installation",id:"manuals/curator/tev2-installation",title:"Installation",description:"<img",source:"@site/docs/manuals/curator/10-curator-tev2-installation.md",sourceDirName:"manuals/curator",slug:"/manuals/curator/tev2-installation",permalink:"/tev2-specifications/docs/manuals/curator/tev2-installation",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/curator/10-curator-tev2-installation.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1709283640,formattedLastUpdatedAt:"Mar 1, 2024",sidebarPosition:10,frontMatter:{id:"tev2-installation",date:20220303},sidebar:"tev2SideBar",previous:{title:"Curator Overview",permalink:"/tev2-specifications/docs/manuals/curator/curator-overview"},next:{title:"Terminology Construction",permalink:"/tev2-specifications/docs/manuals/curator/terminology-construction"}},l={},d=[{value:"Structure of Scope Directories",id:"structure-of-scope-directories",level:3},{value:"Integrating Scope Directories and the ToIP Terminology Toolbox",id:"integrating-scope-directories-and-the-toip-terminology-toolbox",level:3},{value:"Integrating Scope Directories and Third Party Rendering Tools",id:"integrating-scope-directories-and-third-party-rendering-tools",level:3}],p={toc:d};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,n.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section on 'Installation' can really be written only after the rest is complete. The contents of this page is just a set of ideas that may well have been deprecated already.")),(0,a.kt)("admonition",{title:"Editor's note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page should only document the generic stuff. Any installation details that are specific to a tool SHOULD be documented in the page(s) that document the particular tool. Obviously, this page could mention the tools for which that is the case, and link to the associated sections.")),(0,a.kt)("p",null,"TEv2 is a tool for ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of Objectives."},"curating")," ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"-related data from the perspective of a single ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". Installation comprises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"setting up, or appointing an (online) directory that will serve as a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory"),";"),(0,a.kt)("li",{parentName:"ul"},"creating a ",(0,a.kt)("a",{parentName:"li",href:"docs/specs/files/saf"},"Scope Administration File (SAF)"),", and providing the configuration of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," and its ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),";"),(0,a.kt)("li",{parentName:"ul"},"installing the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications. These tools assist Curators in various tasks related to the curation, creation, and maintenance of terminological assets."},"tev2-toolbox"),";"),(0,a.kt)("li",{parentName:"ul"},"integrating the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications. These tools assist Curators in various tasks related to the curation, creation, and maintenance of terminological assets."},"tools")," with other tools, such as a CI/CD pipeline on github or gitlab, static site generators such as ",(0,a.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages")," or ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. See also: ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications. These tools assist Curators in various tasks related to the curation, creation, and maintenance of terminological assets."},"Using the Tools"),".")),(0,a.kt)("h3",{id:"structure-of-scope-directories"},"Structure of Scope Directories"),(0,a.kt)("p",null,"Depending on the other tooling that is going to be used, a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," has to be specified that is part of the (online) directory in which the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," has to be used. The ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,a.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"scope administration file (SAF)")," specifies whatever needs to be administered for that ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"; this file is maintained by the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," of the scope (using a regular text editor)."),(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"Curators")," must also specify a location (directory) within the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," where ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossaries")," will be located. This directory, which is called the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossary directory")," or ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," is located within the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),", and contains all ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossaries")," that are generated by and/or needed within the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," - as well as perhaps some other stuff.",(0,a.kt)("h3",{id:"integrating-scope-directories-and-the-toip-terminology-toolbox"},"Integrating Scope Directories and the ToIP Terminology Toolbox"),(0,a.kt)("admonition",{title:"Editor's Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Content to be produced")),(0,a.kt)("h3",{id:"integrating-scope-directories-and-third-party-rendering-tools"},"Integrating Scope Directories and Third Party Rendering Tools"),(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge). Examples include ideas, or Concepts, Properties of Concepts, Relations between Concepts, constraints over such Concepts and Relations, etc."},"Semantic units")," are intended to also be used by/within third party rendering tools, such as [github pages](https://pages.github.com/), [Docusaurus](https://docusaurus.io/docs/docs-introduction), or LaTeX",(0,a.kt)("admonition",{title:"Editor's Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Content to be produced")))}h.isMDXComponent=!0}}]);