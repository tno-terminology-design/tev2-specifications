"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=d(a),p=r,u=f["".concat(c,".").concat(p)]||f[p]||h[p]||o;return a?i.createElement(u,n(n({ref:t},l),{},{components:a})):i.createElement(u,n({ref:t},l))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var d=2;d<o;d++)n[d]=a[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7318:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(3117),r=(a(7294),a(3905));a(4996);const o={id:"body-file",sidebar_label:"Body Files",date:20231009},n="Body Files",s={unversionedId:"specs/files/body-file",id:"specs/files/body-file",title:"Body Files",description:"A body file contains the body of a curated text, i.e. the text that documents a semantic unit, but has no a-priori structure whatsoever (as that would be part of the header of that curated text).",source:"@site/docs/specs/files/11-body-file.md",sourceDirName:"specs/files",slug:"/specs/files/body-file",permalink:"/tev2-specifications/docs/specs/files/body-file",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/files/11-body-file.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1731663339,formattedLastUpdatedAt:"Nov 15, 2024",sidebarPosition:11,frontMatter:{id:"body-file",sidebar_label:"Body Files",date:20231009},sidebar:"tev2SideBar",previous:{title:"Curated Text Files",permalink:"/tev2-specifications/docs/specs/files/curated-text-file"},next:{title:"SAF (Scope Admin File)",permalink:"/tev2-specifications/docs/specs/files/saf"}},c={},d=[{value:"Where to store Body Files",id:"storage-location",level:2},{value:"How to reference Body Files in a Curated Text Header",id:"predefined-header-reference",level:2}],l={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"body-files"},"Body Files"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/body-file",title:"Body File: a file that is located somewhere within the Scopedir, and that contains the Body of a Curated Text."},"body file")," contains the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body")," of a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),", i.e. the text that documents a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),", but has no a-priori structure whatsoever (as that would be part of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"header")," of that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),")."),(0,r.kt)("p",null,"Typically, body files are pieces of documentation about a particular ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," (or other kind of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),") that already serve a purpose in some documentation set. For example, a set of documents that constitute, e.g., an architecture, or a specification, would contain files that specify a particular entity (e.g., a component, or a protocol). The contents of these files could then serve as the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body")," of a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that documents that particular entity."),(0,r.kt)("h2",{id:"storage-location"},"Where to store Body Files"),(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/body-file",title:"Body File: a file that is located somewhere within the Scopedir, and that contains the Body of a Curated Text."},"Body files")," are to be located within the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curatedir",title:"Curatedir: a directory within a Scopedir within which every file contains a Curated Text for that Scope."},"curatedir")," of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," of which they are part, so that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tools")," can properly find and operate on them.",(0,r.kt)("h2",{id:"predefined-header-reference"},"How to reference Body Files in a Curated Text Header"),(0,r.kt)("p",null,"If a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," only contains the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"header"),", it needs to contain a reference to the associated ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/body-file",title:"Body File: a file that is located somewhere within the Scopedir, and that contains the Body of a Curated Text."},"body file"),". This is done using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bodyFile")," field in the header. Its value should contain the path, relative to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),", that contains the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body")," of this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),". See also ",(0,r.kt)("a",{parentName:"p",href:"/docs/specs/files/curated-text-file#predefined-header-fields"},"Predefined TEv2 Header Fields"),"."))}h.isMDXComponent=!0}}]);