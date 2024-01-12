"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return o?i.createElement(f,r(r({ref:t},c),{},{components:o})):i.createElement(f,r({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<n;p++)r[p]=o[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5577:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=o(3117),a=(o(7294),o(3905));o(4996);const n={id:"tool-development",date:20221111},r="Tool Development",s={unversionedId:"miscellaneous/tool-development",id:"miscellaneous/tool-development",title:"Tool Development",description:"This page intends to provide (lots of pointers to) information that people may need in order to decide whether or not to contribute to the construction of the Terminology Engine v2 (TEv2) toolbox, and if so, determine where to help out.",source:"@site/docs/miscellaneous/tool-development.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/tool-development",permalink:"/tev2-specifications/docs/miscellaneous/tool-development",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/miscellaneous/tool-development.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1705045272,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{id:"tool-development",date:20221111},sidebar:"tev2SideBar",previous:{title:"Notations and Conventions",permalink:"/tev2-specifications/docs/miscellaneous/notations-and-conventions"}},l={},p=[{value:"What it is about",id:"what-it-is-about",level:2},{value:"Pointers to what you need to know",id:"pointers-to-what-you-need-to-know",level:3},{value:"Tooling status as of ...",id:"tooling-status-as-of-",level:2},{value:"Under development",id:"under-development",level:3},{value:"High priority",id:"high-priority",level:3},{value:"Medium priority:",id:"medium-priority",level:3},{value:"Lower priority:",id:"lower-priority",level:3},{value:"Starting to contribute",id:"starting-to-contribute",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tool-development"},"Tool Development"),(0,a.kt)("p",null,"This page intends to provide (lots of pointers to) information that people may need in order to decide whether or not to contribute to the construction of the Terminology Engine v2 (",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),") toolbox, and if so, determine where to help out."),(0,a.kt)("h2",{id:"what-it-is-about"},"What it is about"),(0,a.kt)("p",null,"At the core of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," is ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/tev2-text-conversion"},"text conversion"),": every ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications. These tools assist Curators in various tasks related to the curation, creation, and maintenance of terminological assets."},"tool in the toolbox")," takes one or more input files, does some textual processing, and produces outputs. The basic ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/tev2-text-conversion#steps"},"conversion pattern")," that individual ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications. These tools assist Curators in various tasks related to the curation, creation, and maintenance of terminological assets."},"tools")," are expected to follow ensures that they can be easily extended, e.g., to operate on different input formats, or to produce alternative output formats."),(0,a.kt)("p",null,"There are various things that make the further development of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," challenging:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the interop between individual tools: outputs of one tool must be fit for processing by another tool (which may include existing third party tools, such as static website generators), as described in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/tev2-architecture"},"TEv2 Architecture"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"designing actual tools such that they can be easily extended (also by others) to accept different input formats, and/or produce different output formats, as described in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/tev2-text-conversion#steps"},"text conversion steps pattern"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"designing tools such that they can be easily used in different contexts (e.g. whether or not to dockerize a tool)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"collaborating with other people that work on the tools such that the coherence and consistent working of tools that different people develop is guaranteed. We may need to better organize this.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"making the tools automatically testable, e.g. by running test suites as part of the CI/CD street we envisage that tools would have.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"making the tools easy to integrate in CI/CD streets or other strategies that projects or working groups use to publish their documentation and whitepapers.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"for certain tools: making them easy to use in authoring processes, e.g. by enabling them to be used in real-time authoring processes (authors that type texts can immediately see, e.g. in a browser, what the effects are of what they have typed).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Specifications may not exist, or need modification, which may impact other tools as well.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tools should not use unnecessary resources (processing time, memory).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"... (there are likely to be other challenges)"))),(0,a.kt)("h3",{id:"pointers-to-what-you-need-to-know"},"Pointers to what you need to know"),(0,a.kt)("admonition",{title:"Reading Materials",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In order to appreciate and come to grips with these challenges, it will definitely help if you read up on some more backgrounds of what we try to do. Here are some pointers:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/docs/category/introduction-overview"},"TEv2 Overview")," (and its sub-documents) will provide you with with such backgrounds."),(0,a.kt)("li",{parentName:"ul"},"Other documented topics include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tev2-spec-files"},"file structure spec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tev2-syntax"},"syntax specifications")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications. These tools assist Curators in various tasks related to the curation, creation, and maintenance of terminological assets."},"specifications of individual tools")," - not all specifications hare already been drafted/checked."))))),(0,a.kt)("h2",{id:"tooling-status-as-of-"},"Tooling status as of ..."),(0,a.kt)("p",null,'For the date of the tooling status, see the "',(0,a.kt)("i",null,"last updated on"),'" text at the bottom right on this page'),(0,a.kt)("h3",{id:"under-development"},"Under development"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2. MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT"),", which is in [this toip repo](https://github.com/trustoverip/ctwg-toolkit-mrg). The tool works, but still has some [bugs/issues](https://github.com/trustoverip/ctwg-toolkit-mrg/issues) that need to be fixed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", which is currently actively developed by TNO in [this repo](https://github.com/tno-terminology-design/trrt).")),(0,a.kt)("h3",{id:"high-priority"},"High priority"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ingress tools that convert wiki-files (and perhaps some other formats) into ",(0,a.kt)("a",{parentName:"li",href:"/docs/specs/files/curated-text-file"},"curated texts"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),", so that we can actually generate human-readable glossaries. For this tool, specifications need to be further drafted (and agreed on).")),(0,a.kt)("h3",{id:"medium-priority"},"Medium priority:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/specs/tools-envisaged/ict"},"ICT"),", which allows for integrity checking. The current specifications are outdated and first need to be revised.")),(0,a.kt)("h3",{id:"lower-priority"},"Lower priority:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extensions for the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", and perhaps other tools, so that they can be used in ",(0,a.kt)("a",{parentName:"li",href:"https://dev.w3.org/2008/video/mediaann/ReSpec.js/documentation.html"},"ReSpec")," environments, such as often used for W3C standards."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/specs/tools-envisaged/mrdt"},"MRDT")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/specs/tools-envisaged/hrdt"},"HRDT"))),(0,a.kt)("h2",{id:"starting-to-contribute"},"Starting to contribute"),(0,a.kt)("p",null,"If you are eager to contribute, then ping ",(0,a.kt)("inlineCode",{parentName:"p"},"rieks")," ",(0,a.kt)("inlineCode",{parentName:"p"},".")," ",(0,a.kt)("inlineCode",{parentName:"p"},"joosten")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<at>")," ",(0,a.kt)("inlineCode",{parentName:"p"},"tno")," ",(0,a.kt)("inlineCode",{parentName:"p"},".")," ",(0,a.kt)("inlineCode",{parentName:"p"},"nl"),", or attend a ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.trustoverip.org/display/HOME/CTWG+Meeting+Pages"},"ToIP CTWG meeting"),", where you express your interest and/or questions, and we'll take it from there."))}d.isMDXComponent=!0}}]);