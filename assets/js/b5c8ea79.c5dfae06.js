"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2506],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return p}});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(o),p=n,f=m["".concat(c,".").concat(p)]||m[p]||h[p]||a;return o?i.createElement(f,r(r({ref:t},d),{},{components:o})):i.createElement(f,r({ref:t},d))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<a;l++)r[l]=o[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5291:function(e,t,o){o.r(t),o.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var i=o(7462),n=o(3366),a=(o(7294),o(3905)),r=o(4996),s=["components"],c={id:"mrdt",sidebar_label:"MR Dictionary Generation",date:20220801},l="Machine Readable Dictionary Generation Tool",d={unversionedId:"miscellaneous/mrdt",id:"miscellaneous/mrdt",title:"Machine Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/miscellaneous/31-mrdt.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/mrdt",permalink:"/tev2-specifications/docs/miscellaneous/mrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/miscellaneous/31-mrdt.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1696932200,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:31,frontMatter:{id:"mrdt",sidebar_label:"MR Dictionary Generation",date:20220801},sidebar:"tev2SideBar",previous:{title:"HR Glossary Generation (previous version)",permalink:"/tev2-specifications/docs/miscellaneous/hrgt-old"},next:{title:"HR Dictionary Generation",permalink:"/tev2-specifications/docs/miscellaneous/hrdt"}},h={},m=[],p={toc:m};function f(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"machine-readable-dictionary-generation-tool"},"Machine Readable Dictionary Generation Tool"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,r.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrdt",hovertext:"Machine Readable Dictionary Tool (MRDT): a software tool designed to create, manage, and process Machine Readable Dictionaries (MRDs).",target:"_self"},"MRDT"),")")," generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings.",target:"_self"},"MRD"),") of ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms")," that originate from different (versions of) ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminologies"),", from various ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scopes"),". The inventory has a specific, well-defined ",(0,a.kt)("a",{parentName:"p",href:"/docs/spec-files/mrd"},"format"),". Like ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems.",target:"_self"},"MRGs"),", the contents of ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings.",target:"_self"},"MRDs")," is determined by a list of ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-selection-instruction",hovertext:"Term Selection Instruction: an instruction that is used to select one or more Terms for the purpose of processing their documentation, e.g., to create an MRG.",target:"_self"},"term selection instructions"),", which specify the (sets of) terms that are to be included."),(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings.",target:"_self"},"MRDs")," are meant to be processed by the other tools in the [toolbox](/docs/tev2-toolbox), specifically by one of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrdt",hovertext:"Human Readable Dictionary Tool (HRDT): a software tool designed to create, manage, and process Human Readable Dictionaries (HRDs).",target:"_self"},"HRDTs"),", which would then create a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically.",target:"_self"},"Human Readable Dictionary")," (or ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically.",target:"_self"},"HRD"),").",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings.",target:"_self"},"MRDs")," can typically used to enable the creation of ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically.",target:"_self"},"HRDs")," that are fit for specific purposes, e.g. for comparing ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminologies")," between different ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scopes"),", which helps e.g. when aligning ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminologies")," between them. Also they can be used to provide an overview of what various ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scopes")," utilize specific terms for (education). And there's certainly going to be more such purposes.",(0,a.kt)("admonition",{title:"Editor's note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The specifications of this tool need to be authored.\nIt is suggested to look at the MRGT-specs, and adapt that text.")))}f.isMDXComponent=!0}}]);