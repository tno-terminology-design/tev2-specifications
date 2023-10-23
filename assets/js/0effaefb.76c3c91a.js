"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6420],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=o.createContext({}),d=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,u=p["".concat(c,".").concat(m)]||p[m]||h[m]||n;return a?o.createElement(u,s(s({ref:t},l),{},{components:a})):o.createElement(u,s({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<n;d++)s[d]=a[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1889:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},mark:function(){return m},metadata:function(){return l},toc:function(){return p}});var o=a(7462),i=a(3366),n=(a(7294),a(3905)),s=a(4996),r=["components"],c={id:"hrgt-old",sidebar_label:"HR Glossary Generation (previous version)",date:20220421},d="Human Readable Glossary Generation Tool",l={unversionedId:"miscellaneous/hrgt-old",id:"miscellaneous/hrgt-old",title:"Human Readable Glossary Generation Tool",description:"<img",source:"@site/docs/miscellaneous/22-hrgt-old.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/hrgt-old",permalink:"/tev2-specifications/docs/miscellaneous/hrgt-old",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/miscellaneous/22-hrgt-old.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1698084607,formattedLastUpdatedAt:"Oct 23, 2023",sidebarPosition:22,frontMatter:{id:"hrgt-old",sidebar_label:"HR Glossary Generation (previous version)",date:20220421},sidebar:"tev2SideBar",previous:{title:"TEv2 - Miscellaneous",permalink:"/tev2-specifications/docs/tev2-miscellaneous"},next:{title:"MR Dictionary Generation",permalink:"/tev2-specifications/docs/miscellaneous/mrdt"}},h={},p=[],m=function(e){var t=e.children;return(0,n.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},u={toc:p,mark:m};function f(e){var t=e.components,a=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"human-readable-glossary-generation-tool"},"Human Readable Glossary Generation Tool"),(0,n.kt)("img",{alt:"This page is under construction",src:(0,s.Z)("images/wip/wip-under-construction.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Human Readable Glossary generation Tool (",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),")")," generates a Human Readable ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",hovertext:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"Glossary")," (",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),"), that renders (a selection of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," of) the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," of a specific ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," into one of several formats, e.g. HTML, or PDF. This rendering may be subject to further processing by third-party rendering tools, such as ",(0,n.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. (see also: ",(0,n.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"Using the Tools"),")."),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The envisaged versatility of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," is likely to imply requirements regarding, e.g.:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"the kinds of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units")," that should be listed;"),(0,n.kt)("li",{parentName:"ul"},"whether or not to include/exclude specific (groups of) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units"),";"),(0,n.kt)("li",{parentName:"ul"},"the format (e.g. HTML, PDF, LaTeX) to generate towards, and the structure of each ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg-entry",hovertext:"HRG Entry: A specific kind of (human-readable) rendering of the combination of a Term and a means that helps Readers to understand the meaning of that Term when it is used in a sentence."},"HRG entry"),";"),(0,n.kt)("li",{parentName:"ul"},"the beginning (header) and ending (footer) of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," file\nand possibly some other stuff.")),(0,n.kt)("p",{parentName:"admonition"},"Before this can really be properly specified, we seek to do some experiments to see what is really needed in order to keep it as simple as possible. Therefore, the text that follows must be interpreted as Work in Progress.")),(0,n.kt)("p",null,"There is currently one implementation of the tool:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the repo in which the tool is being developed is ","[",(0,n.kt)("mark",null,"tbd"),"]","."),(0,n.kt)("li",{parentName:"ul"},"the documentation is ","[",(0,n.kt)("mark",null,"tbd"),"]",".")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," operates on a single ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", which contains (data and/or pointers to) ",(0,n.kt)("em",{parentName:"p"},"all")," ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units")," of that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,n.kt)("p",null,"The construction of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," can be envisaged as"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"selecting the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"mrg entries")," that must appear in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),". Selection may depend on the specification of the kinds of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units")," that should be included, and/or specifying ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tag",hovertext:"Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."},"tags")," for the (groups of) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units"),", or specific ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),";"),(0,n.kt)("li",{parentName:"ul"},"alphabetically sorting these entries;"),(0,n.kt)("li",{parentName:"ul"},"converting each entry into its 'rendered' format, thereby resolving any ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," (by appropriately calling the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),"), adding hyperlinks to the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that the entry relates to, 'meta-data' (e.g. the associated ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/grouptag",hovertext:"Grouptag: a Tag that is used to group Terms within a specific Scope."},"grouptags"),", contributors, etc.), and anything else, as required for the particular kind of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," that is being generated;"),(0,n.kt)("li",{parentName:"ul"},"concatenating these rendered entries, optionally including/inserting some navigation bars (e.g. before a new letter starts);"),(0,n.kt)("li",{parentName:"ul"},"constructing the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," by adding (rendered) header- and footer-material and (optionally) licensing information.")),(0,n.kt)("p",null,"When a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," is generated that should become the default one for that scope, the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," must be updated accordingly. Note though that this is not always necessary. For example, a user may want to create a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," for a selected subset of the terminology, e.g. to include as an annex in a paper."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," logs conditions that prevent it from properly"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"parsing a source document (e.g. because it is not in the expected format);"),(0,n.kt)("li",{parentName:"ul"},"resolving ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),", ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scope tags"),", ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/grouptag",hovertext:"Grouptag: a Tag that is used to group Terms within a specific Scope."},"group tags"),", or ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",hovertext:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"version tags"),";"),(0,n.kt)("li",{parentName:"ul"},"writing the output (e.g. because it has no write-permission for the designated location);"),(0,n.kt)("li",{parentName:"ul"},"etc.;")),(0,n.kt)("p",null,"Also, the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," provides suggestions that help tool-operators (",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators"),") to identify and fix any problems."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"A specification is needed for the creation of a (simple) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," (from an existing ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),").\nAny ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," need to be properly resolved.\nTitles of term entries may want to link to the original resource from which it was derived.\nChoice bars (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"[ A B C D .... Z ]")," may need to be inserted here and there).\nMeta-data (group tags, the scopetag of the scope where it was defined, contributors, versions, dates, etc.) may need to be included.\nThere must be some license notification.")))}f.isMDXComponent=!0}}]);