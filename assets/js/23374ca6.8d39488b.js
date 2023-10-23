"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8421],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?o.createElement(d,a(a({ref:t},l),{},{components:n})):o.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"tev2-readme",sidebar_label:"Contributing",date:20220402},c="Contributing to TEv2 Tools",u={unversionedId:"tev2-readme",id:"tev2-readme",title:"Contributing to TEv2 Tools",description:"This documentation is based on the ToIP TT-Tools Proposal memo, which we currently keep as a reference.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/tev2-specifications/docs/",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/README.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1698084607,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{id:"tev2-readme",sidebar_label:"Contributing",date:20220402}},l={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-tev2-tools"},"Contributing to TEv2 Tools"),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This documentation is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/toip-terminology-toolbox"},"ToIP TT-Tools Proposal")," memo, which we currently keep as a reference.")),(0,i.kt)("p",null,"The '",(0,i.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2-overview"},"Terminology Engine v2 (TEv2)"),"' consists of two parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2-toolbox"},"Terminology Toolbox")," is a set of (extendable) command-line tools that can be used for generic purposes, such as resolving ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermReferences"),", and creating glossaries."),(0,i.kt)("li",{parentName:"ol"},"The use of these, and other tools (in our case: ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://resources.github.com/ci-cd/"},"github CI/CD"),"), for facilitating the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curation")," of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," by ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms communities"),".")),(0,i.kt)("p",null,"We are seeking parties that can contribute to the development of these (extendable) command-line tools, and do so in close collaboration with the eSSIF-Lab consortium. Please express your interest as an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/tev2-specifications/issues"},"issue in the eSSIF-Lab repo"),"."))}f.isMDXComponent=!0}}]);