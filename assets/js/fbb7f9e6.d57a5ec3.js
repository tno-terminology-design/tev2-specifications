"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6464],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),f=o,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||n;return a?i.createElement(h,r(r({ref:t},d),{},{components:a})):i.createElement(h,r({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<n;l++)r[l]=a[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=a(3117),o=(a(7294),a(3905)),n=a(4996);const r={id:"mrdt",sidebar_label:"MR Dictionary Generation",date:20220801},s="Machine Readable Dictionary Generation Tool",c={unversionedId:"specs/tools-envisaged/mrdt",id:"specs/tools-envisaged/mrdt",title:"Machine Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/specs/tools-envisaged/31-mrdt.md",sourceDirName:"specs/tools-envisaged",slug:"/specs/tools-envisaged/mrdt",permalink:"/tev2-specifications/docs/specs/tools-envisaged/mrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/tools-envisaged/31-mrdt.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1706819196,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:31,frontMatter:{id:"mrdt",sidebar_label:"MR Dictionary Generation",date:20220801},sidebar:"tev2SideBar",previous:{title:"TermRef Selector",permalink:"/tev2-specifications/docs/specs/tools-envisaged/termref-selector"},next:{title:"HR Dictionary Generation",permalink:"/tev2-specifications/docs/specs/tools-envisaged/hrdt"}},l={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"machine-readable-dictionary-generation-tool"},"Machine Readable Dictionary Generation Tool"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,n.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrdt",title:"Machine Readable Dictionary Tool: a software tool designed to create, manage, and process Machine Readable Dictionaries (MRDs)."},"MRDT"),")")," generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",title:"Machine Readable Dictionary: a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their meanings."},"MRD"),") of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that originate from different (versions of) ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies"),", from various ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),". The inventory has a specific, well-defined ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/files/mrd"},"format"),". Like ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs"),", the contents of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",title:"Machine Readable Dictionary: a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their meanings."},"MRDs")," is determined by a list of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-selection-instruction",title:"Term Selection Instruction: an instruction that is used to select one or more Terms for the purpose of processing their documentation, e.g., to create an MRG."},"term selection instructions"),", which specify the (sets of) terms that are to be included."),(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",title:"Machine Readable Dictionary: a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their meanings."},"MRDs")," are meant to be processed by the other tools in the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications. These tools assist Curators in various tasks related to the curation, creation, and maintenance of terminological assets."},"toolbox"),", specifically by one of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrdt",title:"Human Readable Dictionary Tool: a software tool designed to create, manage, and process Human Readable Dictionaries (HRDs)."},"HRDTs"),", which would then create a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",title:"Human Readable Dictionary: a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"Human Readable Dictionary")," (or ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",title:"Human Readable Dictionary: a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRD"),").",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",title:"Machine Readable Dictionary: a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their meanings."},"MRDs")," can typically used to enable the creation of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",title:"Human Readable Dictionary: a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRDs")," that are fit for specific purposes, e.g. for comparing ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between different ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", which helps e.g. when aligning ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between them. Also they can be used to provide an overview of what various ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," utilize specific terms for (education). And there's certainly going to be more such purposes.",(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The specifications of this tool need to be authored.\nIt is suggested to look at the MRGT-specs, and adapt that text.")))}m.isMDXComponent=!0}}]);