"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8678],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),h=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=h(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=h(r),d=n,m=f["".concat(p,".").concat(d)]||f[d]||l[d]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var h=2;h<o;h++)s[h]=r[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8610:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return h},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return f}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=r(4996),i=["components"],p={id:"tev2-architecture",sidebar_label:"Architecture",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220303},h="TEv2 - Architecture",c={unversionedId:"tev2/overview/tev2-architecture",id:"tev2/overview/tev2-architecture",title:"TEv2 - Architecture",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/overview/30-tev2-architecture.md",sourceDirName:"tev2/overview",slug:"/tev2/overview/tev2-architecture",permalink:"/docs/tev2/overview/tev2-architecture",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/overview/30-tev2-architecture.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1689141036,formattedLastUpdatedAt:"Jul 12, 2023",sidebarPosition:30,frontMatter:{id:"tev2-architecture",sidebar_label:"Architecture",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Design Principles",permalink:"/docs/tev2/overview/tev2-design-principles"},next:{title:"Terminology Curation",permalink:"/docs/tev2/overview/tev2-terminology-curation"}},l={},f=[{value:"TRRT",id:"trrt",level:3},{value:"Curated Texts",id:"curated-texts",level:3},{value:"Scope Ingress Process",id:"scope-ingress-process",level:3},{value:"Ingress Tools",id:"ingress-tools",level:3},{value:"SAF",id:"saf",level:3},{value:"MRG",id:"mrg",level:3},{value:"MRGT",id:"mrgt",level:3},{value:"HRG",id:"hrg",level:3},{value:"HRGT",id:"hrgt",level:3},{value:"Rendering tool plugins/addons",id:"rendering-tool-pluginsaddons",level:3},{value:"ICT",id:"ict",level:3}],d={toc:f};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tev2---architecture"},"TEv2 - Architecture"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,"TEv2 is designed to support an ever increasing variety of raw text formats, and its toolbox will - over time - be filled with an increasing number of tools that will support an increasing number of 3rd party rendering tools. This section shows the architecture that allows this to become reality."),(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The architecture is not yet fully aligned with the (momentarily developing) ideas as explained in the section ",(0,o.kt)("a",{parentName:"p",href:"#text-conversion-steps"},"Text Conversion Steps"),". This is still work that needs to be done.")),(0,o.kt)("p",null,"The architecture is based on the ToIP/eSSIF-Lab ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/terms/patterns/pattern-terminology"},"Terminology Model"),", which assumes that every ",(0,o.kt)("a",{parentName:"p",href:"@"},"author"),"/group constitutes a so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms-community")," that ",(0,o.kt)("a",{parentName:"p",href:"@"},"curates")," one (or more) ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope(s)"),", that contains e.g. ",(0,o.kt)("a",{parentName:"p",href:"@"},"definitions"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"tags")," etc. that constitute the ",(0,o.kt)("a",{parentName:"p",href:"@"},"author"),"/group's ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology"),". An overview is given in the figure below:"),(0,o.kt)("img",{alt:"TEv2 Overview",src:(0,s.Z)("images/tev2-overview.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"trrt"},"TRRT"),(0,o.kt)("p",null,"The figure not only shows the raw texts, their processing by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT")," tool and the subsequent rendering to produce formatted texts, but also other files that exist within the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", that are being ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," by its ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms-community"),". ",(0,o.kt)("a",{parentName:"p",href:"@"},"TEv2")," expects all files that are under ",(0,o.kt)("a",{parentName:"p",href:"@"},"curation"),", and/or are generated to serve a purpose within a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", to live in a specific directory, which we call the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory"),". The rounded rectangles in the figure represent such directories and (parts of) their contents. Further details are in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/trrt"},"TRRT specs"),"."),(0,o.kt)("h3",{id:"curated-texts"},"Curated Texts"),(0,o.kt)("p",null,"To the left of the figure, you can see that some raw texts are 'ingressed' into the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory"),", and thereby have become so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts")," (a specification of which is provided in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/ctext"},"Curated Texts description"),"). These texts typically contain descriptions of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"definitions"),", examples, etc., that help interested ",(0,o.kt)("a",{parentName:"p",href:"@"},"parties")," to formulate and understand the ",(0,o.kt)("a",{parentName:"p",href:"@"},"concepts")," that they need."),(0,o.kt)("h3",{id:"scope-ingress-process"},"Scope Ingress Process"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"@"},"Curated texts")," are the result of subjecting raw texts to one or more ",(0,o.kt)("a",{parentName:"p",href:"#text-conversion-steps"},"text conversions"),". This is the Scope Ingress Process. It is run by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),". The ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," define the kinds of raw texts that can be ingressed, and they make sure the ",(0,o.kt)("a",{parentName:"p",href:"#ingress-tools"},"ingress tools")," exist that can interpret such texts, and that the result of their interpretation is fed into the converter-tool that produces ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts"),". ",(0,o.kt)("a",{parentName:"p",href:"@"},"Curators")," should communicate with ",(0,o.kt)("a",{parentName:"p",href:"@"},"contributors")," and ",(0,o.kt)("a",{parentName:"p",href:"@"},"authors")," concerning the kinds of raw texts that can be ingressed."),(0,o.kt)("h3",{id:"ingress-tools"},"Ingress Tools"),(0,o.kt)("p",null,"The set of ingress tools consists of the set of interpreters (see the section on ",(0,o.kt)("a",{parentName:"p",href:"#text-conversion-steps"},"text conversions"),') that will be able to populate the set of "moustache"-variables as defined by the ',(0,o.kt)("a",{parentName:"p",href:"@"},"ctext moustache profile"),". Each such tool is specific for a kind of (raw) source text. The set of ingress tools is expected to expand, as ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms communities")," indicate the need (and priority) for them. One such tool is the interpreter for ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.trustoverip.org/display/HOME/Terms+Wikis"},"Terms Wiki pages"),", as used by several working groups and task forces within ToIP."),(0,o.kt)("h3",{id:"saf"},"SAF"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," create and maintain the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," administration file (",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF"),"), which is called ",(0,o.kt)("inlineCode",{parentName:"p"},"saf.yaml")," and is located in (the root of) the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory"),". This file contains meta-data concerning the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," itself, the locations (URLs) of its directories (and glossary files), the locations (URLs) of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directories")," of (selected) other ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),", and a specification of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," (",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG entries"),") that are part of the various versions of its ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology")," that are actively maintained. Further details are in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/saf"},"SAF specs"),"."),(0,o.kt)("h3",{id:"mrg"},"MRG"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," also organize when and how the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," Machine Readable Glossary (",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG"),") is created. This file is not a ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossary"),", but rather a (machine readable) inventory of all ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," that are part of (a specific version of) the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology"),", and related (meta)data. ","[TEv2]"," hails the principle that tools that need to learn about ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms"),", the ",(0,o.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," that these ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," represent, and the ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts")," that document them, from a particular ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", should only need to inspect the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," of that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," to find what they need. Further details are in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/mrg"},"MRG specs"),"."),(0,o.kt)("h3",{id:"mrgt"},"MRGT"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," is created by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGT")," tool. This tool takes the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts")," as input, as well as ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs")," from other scopes, e.g. to 'import' ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," that are needed in, but not ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," by, that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),". The ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," tells the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGT")," where to find these (third party) ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs"),". Further details are in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/mrgt"},"MRGT specs"),"."),(0,o.kt)("h3",{id:"hrg"},"HRG"),(0,o.kt)("p",null,"The Human Readable Glossary or ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," is a (real) ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossary")," that humans are expected to read/use. It is a formatted text, which means that it might appear in one of a plethora of formats. Within a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", we assume a specific format is chosen that is appropriate for its users, and that will serve as the default ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," for that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),". The ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," is not a formatted/rendered version of the entire ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG"),": it typically only lists the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," that are assocated with specific kinds of ",(0,o.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),", specifically the type ",(0,o.kt)("a",{parentName:"p",href:"concept@"},(0,o.kt)("inlineCode",{parentName:"a"},"concept")),". Further details are in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/hrg"},"HRG specs"),"."),(0,o.kt)("h3",{id:"hrgt"},"HRGT"),(0,o.kt)("p",null,"We will use the term ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT")," to generically refer to any tool that either produces a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," directly, or that produces inputs for other, third party rendering tools that will then generate the ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG"),". Typically, a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT")," will extract a subset of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," (better: ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG entries"),") from the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG"),", sort them, resolve ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," where appropriate, and do whatever else is necessary to generate (the files that third party tools pick up to) generate the ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG"),". We expect to see various flavours of this tool, or a single tool that can create ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGs")," in different formats, allowing ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to get the kind of ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," that is the most appropriate for their purposes. Further details are in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/hrgt"},"HRGT specs"),"."),(0,o.kt)("h3",{id:"rendering-tool-pluginsaddons"},"Rendering tool plugins/addons"),(0,o.kt)("p",null,"We envisage that existing 3rd party rendering tools may benefit from extensions (plugins, add-ons) that provide features that help ",(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," to better understand rendered texts. One example is the ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.grnet.gr/terminology/docusaurus-terminology"},"Docusaurus Terminology plugin")," of GRNET that was used in TEv1 (the predecessor of TEv2), which enables the 'sticking out' of terms in the rendered text, providing a popup with a short explanation of the term, and providing a link to the page that documents the concept. While the development of such plugins is outside the scope of TEv2, using them (e.g. by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT"),") may be within scope."),(0,o.kt)("h3",{id:"ict"},"ICT"),(0,o.kt)("p",null,"People that develop these tools, as well as people that contribute to the ",(0,o.kt)("a",{parentName:"p",href:"@"},"curation")," of ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts"),", the ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF"),", etc., are only human, and sooner or later make a mistake that is hard to find and correct without any help. To facilitate the detection, identification and recovery from such mistakes, there is an ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/ict"},"Integrity Checker Tool")," (or ",(0,o.kt)("a",{parentName:"p",href:"@"},"ICT"),"). This ",(0,o.kt)("a",{parentName:"p",href:"@"},"ICT")," tests the integrity of (a selection of) the files that are ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," within a particular ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", i.e. the ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF"),", the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs"),", and ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated files"),". The integrity checking of other files, e.g. ",(0,o.kt)("a",{parentName:"p",href:"@"},"formatted files"),", such as ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGs"),", is outside the scope of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"ICT"),". Further details are in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/ict"},"ICT specs"),"."))}m.isMDXComponent=!0}}]);