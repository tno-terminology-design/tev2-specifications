"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6063],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return f}});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(o),f=n,u=d["".concat(c,".").concat(f)]||d[f]||h[f]||s;return o?i.createElement(u,r(r({ref:t},p),{},{components:o})):i.createElement(u,r({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var l=2;l<s;l++)r[l]=o[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6911:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return h}});var i=o(7462),n=o(3366),s=(o(7294),o(3905)),r=(o(4996),["components"]),a={id:"tev2-spec-files",date:20220819},c="TEv2 - Files (Structure, Specs)",l={unversionedId:"tev2-spec-files",id:"tev2-spec-files",title:"TEv2 - Files (Structure, Specs)",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2-spec-files.md",sourceDirName:".",slug:"/tev2-spec-files",permalink:"/tev2-specifications/docs/tev2-spec-files",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2-spec-files.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1694956703,formattedLastUpdatedAt:"Sep 17, 2023",frontMatter:{id:"tev2-spec-files",date:20220819},sidebar:"tev2SideBar",previous:{title:"Using LaTeX",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-LaTeX"},next:{title:"Curated Texts",permalink:"/tev2-specifications/docs/spec-files/ctext"}},p={},h=[],d={toc:h};function f(e){var t=e.components,o=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tev2---files-structure-specs"},"TEv2 - Files (Structure, Specs)"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,s.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,s.kt)("br",null),(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",hovertext:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",hovertext:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," expects ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/@",hovertext:"Error - the reference cannot be resolved."},"communities")," to have directory that is easily accessible by IT tools, and in which - apart from other stuff it may keep there - is designated to contain all sorts of curated documentation. Thus, this directory (or one or more of its subdirectories) can be designated as ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopedir",hovertext:"Scope-directories: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directories")," for the ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scopes: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," that the ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/@",hovertext:"Error - the reference cannot be resolved."},"community")," owns.",(0,s.kt)("p",null,"The ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir")," may contain may contain lots of directories and files that are of no relevance for ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",hovertext:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),", but it also contains files that are, such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-files/ctext"},"Curated Texts")),", which contain documentation on ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/knowledge-artifact",hovertext:"Knowledge-artifacts: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"knowledge artifacts")," (",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/concept",hovertext:"Concepts: a Knowledge Artifact that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),", ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mental-model",hovertext:"Mental-models: A Knowledge Artifact that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental models"),", etc.);"),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-files/saf"},"Scope Administration File (SAF)")),", which contains data about the ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," itself, pointers to (the ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedirs: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedirs")," of) other ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scopes: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," that it relates to, and specifications of various versions of managed ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossary",hovertext:"Glossaries: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossaries"),";"),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-files/profile-templates"},"Profile Templates")),", i.e. templates that play a role in ",(0,s.kt)("a",{parentName:"li",href:"/docs/overview/tev2-design-principles#text-conversion-steps"},"text conversion steps"),";"),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-files/mrg"},"Machine Readable Glossary (MRG)")),", which contains (machine readable) ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",hovertext:"Mrg-entries: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," that contain the various ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," of a ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," and pointers to the documentation of the ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/knowledge-artifact",hovertext:"Knowledge-artifacts: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"knowledge artifacts")," that they refer to;"),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-files/hrg"},"Human Readable Glossary (HRG)")),", i.e. human readable equivalents of the ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs"),";")))}f.isMDXComponent=!0}}]);