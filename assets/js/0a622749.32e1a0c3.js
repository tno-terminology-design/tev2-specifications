"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6205],{3905:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return u}});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},h=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),l=d(i),u=r,p=l["".concat(c,".").concat(u)]||l[u]||f[u]||o;return i?a.createElement(p,n(n({ref:t},h),{},{components:i})):a.createElement(p,n({ref:t},h))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var d=2;d<o;d++)n[d]=i[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}l.displayName="MDXCreateElement"},7188:function(e,t,i){i.r(t),i.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var a=i(7462),r=i(3366),o=(i(7294),i(3905)),n=(i(4996),["components"]),s={id:"body-file",sidebar_label:"Body Files",date:20231009},c="Body Files",d={unversionedId:"spec-files/body-file",id:"spec-files/body-file",title:"Body Files",description:"A body file contains the body of a curated text, i.e. the text that documents a semantic unit, but has no a-priori structure whatsoever (as that would be part of the header of that curated text).",source:"@site/docs/spec-files/01-body-file.md",sourceDirName:"spec-files",slug:"/spec-files/body-file",permalink:"/tev2-specifications/docs/spec-files/body-file",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-files/01-body-file.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1698084607,formattedLastUpdatedAt:"Oct 23, 2023",sidebarPosition:1,frontMatter:{id:"body-file",sidebar_label:"Body Files",date:20231009},sidebar:"tev2SideBar",previous:{title:"Curated Text Files",permalink:"/tev2-specifications/docs/spec-files/curated-text-file"},next:{title:"SAF (Scope Admin File)",permalink:"/tev2-specifications/docs/spec-files/saf"}},h={},f=[],l={toc:f};function u(e){var t=e.components,i=(0,r.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"body-files"},"Body Files"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/body-file",hovertext:"Body File: a file that is located somewhere within the Scopedir, and that contains the Body of a Curated Text. The Header of that Curated Text has a field `bodyFile` that specifes its location within the Scopedir."},"body file")," contains the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/body",hovertext:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents. Bodies live either in Curated Text Files (behind the Header), or in separate so-called Body Files."},"body")," of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),", i.e. the text that documents a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),", but has no a-priori structure whatsoever (as that would be part of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/curated-text-file",hovertext:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrance of such a line. Headers live in Curated Text Files."},"header")," of that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),")."),(0,o.kt)("p",null,"Typically, body files are pieces of documentation about a particular ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," (or other kind of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),") that already serve a purpose in some documentation set. For example, a set of documents that constitute, e.g., an architecture, or a specification, would contain files that specify a particular entity (e.g., a component, or a protocol). The contents of these files could then serve as the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/body",hovertext:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents. Bodies live either in Curated Text Files (behind the Header), or in separate so-called Body Files."},"body")," of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that documents that particular entity."),(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/body-file",hovertext:"Body File: a file that is located somewhere within the Scopedir, and that contains the Body of a Curated Text. The Header of that Curated Text has a field `bodyFile` that specifes its location within the Scopedir."},"Body files")," are to be located within the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curatedir",hovertext:"Curatedir: a directory within a Scopedir within which every file contains a Curated Text for that Scope."},"curatedir")," of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," of which they are part, so that the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",hovertext:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tools")," can properly find and operate on them.")}u.isMDXComponent=!0}}]);