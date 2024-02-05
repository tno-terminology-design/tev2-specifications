"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9603],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),l=p(i),h=o,m=l["".concat(c,".").concat(h)]||l[h]||u[h]||a;return i?n.createElement(m,s(s({ref:t},d),{},{components:i})):n.createElement(m,s({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=l;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<a;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}l.displayName="MDXCreateElement"},3915:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=i(3117),o=(i(7294),i(3905)),a=i(4996);const s={id:"contributors-wiki",sidebar_label:"Using Wikis (Markdown)",date:20220513},r="Using Wikis",c={unversionedId:"manuals/contributor/contributors-wiki",id:"manuals/contributor/contributors-wiki",title:"Using Wikis",description:"<img",source:"@site/docs/manuals/contributor/20-contributors-wiki.md",sourceDirName:"manuals/contributor",slug:"/manuals/contributor/contributors-wiki",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-wiki",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributor/20-contributors-wiki.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1706684938,formattedLastUpdatedAt:"Jan 31, 2024",sidebarPosition:20,frontMatter:{id:"contributors-wiki",sidebar_label:"Using Wikis (Markdown)",date:20220513}},p={},d=[{value:"Users contributions",id:"users-contributions",level:2},{value:"Curators tasks",id:"curators-tasks",level:2}],u={toc:d};function l(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-wikis"},"Using Wikis"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,a.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"One way in which ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," may decide that people can contribute, is by providing a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wiki"},"wiki")," that the people are encouraged to edit, discuss, and evolve to a level of maturity that warrants the text to be ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/ingestion",title:"Ingestion (Process): the process that is run by a Terms-community, in which their members suggest, draft, and discuss Definitions (Terms + Criteria) that are relevant for a particular Scope, and converting such contributions into Curated Texts that accurately document the Concepts and other Semantic Units and that adhere to the TEv2-specifications."},"ingested")," into the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". The ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," SHOULD specify the procedures, the code of conduct, etc. that support and enable the maturing of these texts, and how it is decided that such texts can become part of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". That's outside the scope of this document."),(0,o.kt)("h2",{id:"users-contributions"},"Users contributions"),(0,o.kt)("p",null,"From the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," perspective, people may contribute by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages"},"creating or editing wiki-pages")," for a specific ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge). Examples include ideas, or Concepts, Properties of Concepts, Relations between Concepts, constraints over such Concepts and Relations, etc."},"semantic unit"),". The ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," would typically already have various wiki-pages, each of which serves as a template for e.g. the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"definition")," of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),", a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/use-case",title:"Use-Case: a Semantic Unit that captures a specific situation or example used to illustrate how a Mental Model (or other Semantic Units) can be used."},"use-case"),", a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental model"),", or any other kind of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge). Examples include ideas, or Concepts, Properties of Concepts, Relations between Concepts, constraints over such Concepts and Relations, etc."},"semantic unit")," that is relevant within the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,o.kt)("p",null,"A user can take the template, and follow the associated instructions (e.g. provide content for the various sections). That's basically it."),(0,o.kt)("p",null,"A user can use ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," to mark the terms that it wants to be linked to a specific meaning (",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge). Examples include ideas, or Concepts, Properties of Concepts, Relations between Concepts, constraints over such Concepts and Relations, etc."},"semantic unit"),")."),(0,o.kt)("h2",{id:"curators-tasks"},"Curators tasks"),(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"Curators")," that have decided to use a [wiki](https://en.wikipedia.org/wiki/Wiki) as a means for people to contribute to the development of it's ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),", should do the following:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you do not already have one, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"create a git account"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"Create a (git) repository"),", either a brand new one, or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template"},"from a template"),"."))),(0,o.kt)("admonition",{title:"Editor's note:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Additional steps need to be written here.\nThe idea is")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"(etc.)")))}l.isMDXComponent=!0}}]);