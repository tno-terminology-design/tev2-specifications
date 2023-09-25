"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2943],{3905:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},p=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},l=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),l=u(o),h=r,f=l["".concat(c,".").concat(h)]||l[h]||d[h]||i;return o?n.createElement(f,s(s({ref:e},p),{},{components:o})):n.createElement(f,s({ref:e},p))}));function h(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,s=new Array(i);s[0]=l;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:r,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}l.displayName="MDXCreateElement"},5997:function(t,e,o){o.r(e),o.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),s=o(4996),a=["components"],c={id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",date:20220513},u="Using Markdown files in a Git Repo",p={unversionedId:"manuals/contributor/contributors-repo",id:"manuals/contributor/contributors-repo",title:"Using Markdown files in a Git Repo",description:"<img",source:"@site/docs/manuals/contributor/10-contributors-repo.md",sourceDirName:"manuals/contributor",slug:"/manuals/contributor/contributors-repo",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-repo",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributor/10-contributors-repo.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1695642045,formattedLastUpdatedAt:"Sep 25, 2023",sidebarPosition:10,frontMatter:{id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",date:20220513},sidebar:"tev2SideBar",previous:{title:"Contributors",permalink:"/tev2-specifications/docs/manuals/contributor/contributor-overview"},next:{title:"Using Wikis (Markdown)",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-wiki"}},d={},l=[{value:"Users contributions",id:"users-contributions",level:2},{value:"Curators tasks",id:"curators-tasks",level:2}],h={toc:l};function f(t){var e=t.components,o=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-markdown-files-in-a-git-repo"},"Using Markdown files in a Git Repo"),(0,i.kt)("img",{alt:"This page is under construction",src:(0,s.Z)("images/wip/wip-under-construction.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",hovertext:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"One way in which ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," may decide that ",(0,i.kt)("a",{parentName:"p",href:"@"},"users")," can contribute, is by enabling them to ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.com/article/19/7/create-pull-request-github"},"create pull requests")," to the repository that contains the ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/corpus",hovertext:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". The ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," SHOULD specify the procedures, the code of conduct, etc. that support and enable the maturing of these texts, and how it is decided that such texts can become part of the ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/corpus",hovertext:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". That's outside the scope of this document."),(0,i.kt)("h2",{id:"users-contributions"},"Users contributions"),(0,i.kt)("p",null,"From the ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",hovertext:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," perspective, ",(0,i.kt)("a",{parentName:"p",href:"@"},"users")," contribute by creating and changing the markdown pages that describe the various ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/knowledge-artifact",hovertext:"Knowledge Artifact: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"knowledge artifacts"),", such as  ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Knowledge Artifact that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," , ",(0,i.kt)("a",{parentName:"p",href:"@"},"use-cases"),", ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mental-model",hovertext:"Mental Model: A Knowledge Artifact that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental models"),", etc."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"user")," can use ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Knowledge Artifact), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," to mark the ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," that it wants to be linked to a specific meaning (",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/knowledge-artifact",hovertext:"Knowledge Artifact: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"knowledge artifact"),")."),(0,i.kt)("h2",{id:"curators-tasks"},"Curators tasks"),(0,i.kt)("admonition",{title:"Editor's note:",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Text has to be provided here")))}f.isMDXComponent=!0}}]);