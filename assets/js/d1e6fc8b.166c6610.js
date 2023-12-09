"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(3117),r=a(7294),i=a(6010),o=a(2466),s=a(6775),l=a(1980),p=a(7392),c=a(12);function h(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??h(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,p]=m({queryString:a,groupId:n}),[h,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=l??h;return u({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),f(e)}),[p,f,i]),tabValues:i}}var g=a(2389);const k="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==s&&(h(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:u,onClick:d},o,{className:(0,i.Z)("tabs__item",y,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},6310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var n=a(3117),r=(a(7294),a(3905)),i=(a(4996),a(4866)),o=a(5162);const s={id:"preparation-git",date:20231209},l="Preparation (using Git)",p={unversionedId:"guides/preparation-git",id:"guides/preparation-git",title:"Preparation (using Git)",description:"This document tells you how to prepare for managing the terminologies you need for the work that you are already doing, and for which you have a git repository (e.g., on github or gitlab, or just local on your computer). The git repo can contain anything: code, documentation, as well as combinations. Also, it may, or may not contain stuff to generate static sites with, such as Jekyll, Docusaurus, etc.",source:"@site/docs/guides/10-preparation-git.md",sourceDirName:"guides",slug:"/guides/preparation-git",permalink:"/tev2-specifications/docs/guides/preparation-git",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/guides/10-preparation-git.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702160223,formattedLastUpdatedAt:"Dec 9, 2023",sidebarPosition:10,frontMatter:{id:"preparation-git",date:20231209},sidebar:"tev2SideBar",previous:{title:"Overview",permalink:"/tev2-specifications/docs/guides/overview-guides"},next:{title:"Manuals",permalink:"/tev2-specifications/docs/manuals/man-overview"}},c={},h=[{value:"Setting up the scopedir and a simple SAF",id:"setting-up-the-scopedir-and-a-simple-saf",level:2},{value:"Setting up the SAF",id:"setting-up-the-saf",level:3},{value:"Adding Configurations for Rendering",id:"adding-configurations-for-rendering",level:3},{value:"Adding References to other Scopes",id:"adding-references-to-other-scopes",level:3},{value:"Adding Configurations for Terminologies",id:"adding-configurations-for-terminologies",level:3}],d={toc:h};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"preparation-using-git"},"Preparation (using Git)"),(0,r.kt)("p",null,"This document tells you how to prepare for managing the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminologies")," you need for the work that you are already doing, and for which you have a git repository (e.g., on github or gitlab, or just local on your computer). The git repo can contain anything: code, documentation, as well as combinations. Also, it may, or may not contain stuff to generate static sites with, such as Jekyll, Docusaurus, etc."),(0,r.kt)("p",null,"We assume that you are familiar with git, as well as with any of the other tools (such as static site generators) that you might be using with your repo."),(0,r.kt)("h2",{id:"setting-up-the-scopedir-and-a-simple-saf"},"Setting up the ",(0,r.kt)("a",{parentName:"h2",href:"@"},"scopedir")," and a simple ",(0,r.kt)("a",{parentName:"h2",href:"@"},"SAF")),(0,r.kt)("p",null,"The directory in your git repo within which you will be managing your ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminologies")," is called the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopedir"),". Everything that is ",(0,r.kt)("a",{parentName:"p",href:"@"},"TEv2"),"-related must be somewhere within (a subdirectory of) that ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopedir"),". Just pick one."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopedir")," you just picked, you start with creating a ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," in that directory."),(0,r.kt)("p",null,"Here is an example. Suppose we have a person, John Doe, whose github username is ",(0,r.kt)("inlineCode",{parentName:"p"},"johndoe"),". He has a repo ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," on github, of which the main branch is called ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". The URL by which this (branch on the) repo is accessible, is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/johndoe/example/tree/main"),". "),(0,r.kt)("h3",{id:"setting-up-the-saf"},"Setting up the ",(0,r.kt)("a",{parentName:"h3",href:"@"},"SAF")),(0,r.kt)("p",null,"Here is what John does to create the initial ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," so that he can use ",(0,r.kt)("a",{parentName:"p",href:"@"},"TEv2")," in his repo."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"He decides to use ",(0,r.kt)("inlineCode",{parentName:"li"},"jdterms")," as the ",(0,r.kt)("a",{parentName:"li",href:"scopetag@"},"name/tag")," he will use to refer to the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," he will ",(0,r.kt)("a",{parentName:"li",href:"@"},"curate")," in this repo."),(0,r.kt)("li",{parentName:"ol"},"He creates a directory ",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," as the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopedir")," (so, the URL for the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopedir")," becomes: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/johndoe/example/tree/main/docs"),"). If the directory already exists, he can simply use it."),(0,r.kt)("li",{parentName:"ol"},"Within the ",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," directory, he creates two new directories:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"terms")," that will contain all files that contain the ",(0,r.kt)("a",{parentName:"li",href:"@"},"curated texts")," he will be ",(0,r.kt)("a",{parentName:"li",href:"curate@"},"developing"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"glossaries"),", that will contain all ",(0,r.kt)("a",{parentName:"li",href:"mrg@"},"glossary files")," that will he will be importing from other scopes, or generate himself.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Within the `docs` directory, he creates a new file called `saf.yaml`."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"scope:\n  scopetag: jdterms # short name for what you call your scope.\n  scopedir: https://github.com/johndoe/example/tree/main/docs  # URL of the scope-directory\n  curatedir: terms # directory where all curated files are located. Full URL is `scopedir`/`curatedir`\n  glossarydir: glossaries # directory where all glossary files are located. Full URL is `scopedir`/`glossarydir`\n"))),(0,r.kt)("h3",{id:"adding-configurations-for-rendering"},"Adding Configurations for Rendering"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"@"},"TEv2")," allows ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs")," to link to the rendered versions of the ",(0,r.kt)("a",{parentName:"p",href:"curated-text@"},"(curated) texts")," that describe, define or otherwise document what such ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs")," refer to."),(0,r.kt)("p",null,"Some static file generators allow for ",(0,r.kt)("em",{parentName:"p"},"front matter"),", i.e., blocks of data on top of markdown files that are used to set custom variables for better content generation. One typical use is a variable (called something like ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"slug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"permalink")," or so) that is used in the URL to rendered pages."),(0,r.kt)("p",null,'In our example, John uses the static site generator "Docusaurus", and organizes it to generate a site that is accessible at ',(0,r.kt)("inlineCode",{parentName:"p"},"https://johndoe.github.io/example/docs"),". Note that this has nothing to do with ",(0,r.kt)("a",{parentName:"p",href:"@"},"TEv2"),". Docusaurus uses a front matter variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", which means that a file that sets this variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"introduction")," will be rendered at URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://johndoe.github.io/example/docs/path-to-file/introduction")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"path-to-file")," is the path to the file that contains ",(0,r.kt)("inlineCode",{parentName:"p"},"id: introduction")," in its front matter)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Here is the SAF that John created to accommodate for this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"scope:\n...\n  website: https://johndoe.github.io/example/docs # base URL for rendered site.\n  navpath: /terms # Path to the directory where Curated Texts are rendered.\n  bodyFileID: id # Name of the front-matter field that provides a unique identifier for the file.\n...\n"))),(0,r.kt)("h3",{id:"adding-references-to-other-scopes"},"Adding References to other ",(0,r.kt)("a",{parentName:"h3",href:"@"},"Scopes")),(0,r.kt)("p",null,"There are cases in which it is beneficial to use ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminologies")," that are ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated")," outside of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),". For example, if you would like to use one or more ",(0,r.kt)("a",{parentName:"p",href:"@"},"terms")," that we use here in this documentation, you can do so by adding a reference to the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," in which we ",(0,r.kt)("a",{parentName:"p",href:"@"},"curate")," these terms."),(0,r.kt)("p",null,"A reference to another ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," is an entry in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-files/saf#scopes"},(0,r.kt)("inlineCode",{parentName:"a"},"scopes")," section")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF"),", which consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"scopetag")," field, that contains a single ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopetag")," that you choose to represent this ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope")," with (from within your own ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope"),")"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"scopedir")," field, that contains the URL to the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopedir")," where the ",(0,r.kt)("a",{parentName:"li",href:"@"},"SAF")," of this other ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope")," is located.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example of References to other Scopes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nscopes:\n- scopetag: tev2\n  scopedir: https://github.com/tno-terminology-design/tev2-specifications/tree/main/docs\n- scopetag: essif-lab\n  scopedir: https://github.com/essif-lab/framework/tree/master/docs\n...\n"))),(0,r.kt)("h3",{id:"adding-configurations-for-terminologies"},"Adding Configurations for ",(0,r.kt)("a",{parentName:"h3",href:"@"},"Terminologies")),(0,r.kt)("p",null,"Within a ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),", there can be multiple ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminologies"),", each of which is identified within that ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," through ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontags"),". The specification of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontags"),", as well as the contents of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology"),", is done within the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF"),". The actual contents of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," can be found in an associated ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG"),", that is located in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"glossarydir")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),", and that adheres to the ",(0,r.kt)("a",{parentName:"p",href:"mrg#mrg-file-naming-conventions@"},"MRG file naming conventions"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontags")," and the contents of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," are specified as an entry in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-files/saf#versions"},(0,r.kt)("inlineCode",{parentName:"a"},"versions")," section")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF"),". This section must contain at least:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"vsntag")," field, that contains the (main) ",(0,r.kt)("a",{parentName:"li",href:"@"},"versiontag")," of the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology"),"."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"termselection")," field, that consists of ",(0,r.kt)("a",{parentName:"li",href:"/docs/spec-syntax/mrg-term-selection-syntax"},"instructions for composing the contents")," of the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology"),".")),(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," has one default ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology"),", whose ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontag")," must be specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultvsn")," field in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-files/saf#scope-section"},(0,r.kt)("inlineCode",{parentName:"a"},"scope")," section")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF"),"."),(0,r.kt)("p",null,"Here are some example terminology-configurations:"),(0,r.kt)(i.Z,{defaultValue:"default",values:[{label:"Default terminology",value:"default"},{label:"Altvsntags",value:"altvsntags"},{label:"Term selection",value:"term-selection"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"default",mdxType:"TabItem"},(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," has a default ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," (and associated default ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG"),"), which is in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"mrg.<scopetag>.yaml"),". It is also in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"mrg.<scopetag>.<defaultvsn>.yaml"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<defaultvsn>")," is the ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontag")," that is used within that scope to identify the default ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology"),"/",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG"),"."),(0,r.kt)("p",null,"John starts simple, and decides to use ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," as the ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontag")," for his default ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology"),".\nThis ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," will consist of all the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terms")," defined by any of his ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated texts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'scope:\n...\n  defaultvsn: latest # vsntag that identifies the default terminology.\n...\nversions:\n- vsntag: latest\n  termselection:\n  - "*" # import all terms as defined/described in the curated text of this scope.\n...\n')),(0,r.kt)("p",null,"If you do not want the default ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," to contain an ",(0,r.kt)("a",{parentName:"p",href:"mrg-entry@"},"entry")," for every ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated text"),", you can ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-syntax/mrg-term-selection-syntax"},"add instructions for this")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"termselection")," field.")),(0,r.kt)(o.Z,{value:"altvsntags",mdxType:"TabItem"},(0,r.kt)("p",null,"There are cases in which it is beneficial that a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," can be referred to with multiple  ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontags"),", each of which is used for a particular purpose. This can be done by placing any additional ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontags")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"altvsntags")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"versions")," section of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF"),"."),(0,r.kt)("p",null,"John wants his default ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," to also be known under the alternative ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontag")," ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0"),". He does that by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"altvsntags")," field, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'scope:\n...\nversions:\n- vsntag: latest\n  altvsntags: [ v1.0.0 ] # list of alternative verstiontags\n  termselection:\n  - "*" # import all terms as defined/described in the curated text of this scope.\n...\n')),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"altvsntag")," field expects you to specify a list of alternative ",(0,r.kt)("a",{parentName:"li",href:"@"},"versiontags"),"; not just one."),(0,r.kt)("li",{parentName:"ul"},"For every alternative ","[versiontag]",", an ",(0,r.kt)("a",{parentName:"li",href:"@"},"mrg")," is created in the ",(0,r.kt)("a",{parentName:"li",href:"@"},"glossarydir")," with the ",(0,r.kt)("a",{parentName:"li",href:"mrg#mrg-file-naming-conventions@"},"appropriate name"),"."),(0,r.kt)("li",{parentName:"ul"},"If you do not want the default ",(0,r.kt)("a",{parentName:"li",href:"@"},"MRG")," to contain an ",(0,r.kt)("a",{parentName:"li",href:"mrg-entry@"},"entry")," for every ",(0,r.kt)("a",{parentName:"li",href:"@"},"curated text"),", you can ",(0,r.kt)("a",{parentName:"li",href:"/docs/spec-syntax/mrg-term-selection-syntax"},"add instructions for this")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"termselection")," field."))),(0,r.kt)(o.Z,{value:"term-selection",mdxType:"TabItem"},(0,r.kt)("p",null,"The contents of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," does not necessarily consist of all ","[terms]"," defined/described in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated texts"),". The contents of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," is constructed by a process that sequentially interprets instructions provided in the ",(0,r.kt)("inlineCode",{parentName:"p"},"termselection")," field. This process allows, e.g., for "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adding ",(0,r.kt)("a",{parentName:"li",href:"@"},"terms")," to a ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology"),", either from ",(0,r.kt)("a",{parentName:"li",href:"@"},"curated texts"),", or from ",(0,r.kt)("a",{parentName:"li",href:"@"},"MRGs")," that are imported from other ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopes"),";"),(0,r.kt)("li",{parentName:"ul"},"removing ",(0,r.kt)("a",{parentName:"li",href:"@"},"terms")," from a ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology"),", e.g. to compensate for a previous addition of too many terms;")),(0,r.kt)("p",null,"This process of contructing a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," is described as part of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRGT")," tool, in the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/mrgt#running-the-tool"},"Running the Tool"),"."),(0,r.kt)("p",null,"The syntax for adding and removing entries in a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-syntax/mrg-term-selection-syntax"},"here"),"."),(0,r.kt)("p",null,"To give you a flavor of what this entails, here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nversions:\n- vsntag: latest\n  termselection:\n  - "*" # import all terms as defined/described in the curated text of this scope.\n  - -termType[pattern,use-case] # remove all terms of type `pattern` and type `use-case`.\n  - term[concept,semantic-unit]@tev2" # import terms `concept`, `semantic-unit` from scope `tev2`.\n...\n')))),(0,r.kt)("hr",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example: the SAF used in repo for these specifications"),(0,r.kt)("p",null,"The below text was the contents of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/saf.yaml"},"saf.yaml")," file in the TEv2-specifications repo at the time this text was authored."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'#\n# This is a Scope Administration File that can be used in conjunction with [Terminology Engine v2](https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2).\n#\n# The first section defines meta-data concerning the scope itself, both for technical use and human use.\n# It shows where directories and files live that ar part of the scope, and also\n# ways in which people can contribute, raise issues, see what\'s going on, discuss, etc.\n#\nscope:\n  scopetag: tev2 # identifier that curators have determined for this terminology\n  scopedir: https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs  # URL of the scope-directory\n  curatedir: terms # directory where all curated files are located. Full URL is `scopedir`/`curatedir`\n  glossarydir: glossaries # directory where all glossary files and GDFs are located. Full URL is `scopedir`/`glossarydir`\n  defaultvsn: documentation # vsntag that identifies the default terminology. MRG is located at `scopedir`/`glossarydir`/mrg.tev2.latest.yaml\n  website: https://tno-terminology-design.github.io/tev2-specifications/docs # base URL for creating links to rendered versions of Curated Texts. It should also serve as the home page of the Tterminology.\n  navpath: /terms # Path to the directory where Curated Texts are rendered. What `curatedir` is for Curated Texts is, `navpath` is for the rendered versions of Curated Texts.\n  bodyFileID: id # Name of the field in the front matter of a [body file](@) used by your static site generator in a URL, to uniquely identify that file (e.g., "id", "slug", "permalink"). If not specified, the filename of the [body file](@) will be used. | \n  license: LICENSE.md # file that contains the (default) licensing conditions. Full URL is `scopedir`/`license`\n  statuses: [ proposed, approved, deprecated ] # list of status tags that are defined for semantic units in this scope\n  issues: https://github.com/tno-terminology-design/tev2-specifications/issues # URL where issues can be raised and handled\n  curators: # contacting individual curators\n  - name: RieksJ\n    email: # we split up the email address to reduce the likelihood of the address being harvested for spamming\n      id: rieks.joosten\n      at: tno.nl\n#\n# The second section contains a mapping between scopetags that are used within the scope, and the associated scopedirs.\n# This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc.\n# that live within them, e.g. to use/import their data.\n#\nscopes:  #\n- scopetag: essif-lab # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology\n  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory\n- scopetag: essiflab # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology\n  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory\n#\n# The third section specifies the versions that are actively maintained by the curators.\n# For each version, the set of terms is selected that constitute the terminology.\n# See the Glossary Generation Tool (GGT) for details about the syntax and semantics.\n#\nversions:\n- vsntag: terms # this version contains all terms that are curated within this scope\n  termselection:\n  - "*" # import all tev2 terms.\n  - "-term[@]" # exclude the `@` (which is only used for debugging purposes)\n- vsntag: patterns # this version contains all patterns we need within this scope\n  termselection:\n  - termType[pattern]\n  - termType[pattern]@essif-lab\n- vsntag: documentation # terms that are needed for this specification\n  altvsntags: [ latest ] # alternative verstiontags\n  termselection:\n  - "term[action]@essif-lab"\n  - "rename action [id:act, term:act, formPhrases:\'act{ss}\']"\n  - "term[party,actor,onboarding,action,organization,community,entity,legal-entity]@essif-lab"\n  - "term[ssi,assertion,claim,credential,issue,verify,validate,transaction]@essif-lab"\n  - "term[manage,management,governance,risk,owner,owned]@essif-lab" \n  - "term[jurisdiction,objective,control,expectation,obligation]@essif-lab"\n  - "term[control-objective,risk-objective,compliance-objective]@essif-lab" \n  - "term[identity,partial-identity,identifier,identify,identification]@essif-lab"\n  - "term[concept,relation,property,pattern,semantic-unit,terminology,vocabulary,knowledge]@essif-lab"\n  - "termType[concept,acronym,abbreviation]" # import all of our own stuff (except patterns)\n'))),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);