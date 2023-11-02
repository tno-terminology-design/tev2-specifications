"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2127],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return h}});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=r.createContext({}),f=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),m=f(i),h=o,p=m["".concat(c,".").concat(h)]||m[h]||l[h]||a;return i?r.createElement(p,s(s({ref:t},d),{},{components:i})):r.createElement(p,s({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=m;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:o,s[1]=n;for(var f=2;f<a;f++)s[f]=i[f];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2022:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return f},default:function(){return u},frontMatter:function(){return c},mark:function(){return h},metadata:function(){return d},toc:function(){return m}});var r=i(7462),o=i(3366),a=(i(7294),i(3905)),s=i(4996),n=["components"],c={id:"termref-selector",sidebar_label:"TermRef Selector",date:20231031},f="TermRef Selector",d={unversionedId:"spec-tools-envisaged/termref-selector",id:"spec-tools-envisaged/termref-selector",title:"TermRef Selector",description:"<img",source:"@site/docs/spec-tools-envisaged/13-termref-selector.md",sourceDirName:"spec-tools-envisaged",slug:"/spec-tools-envisaged/termref-selector",permalink:"/tev2-specifications/docs/spec-tools-envisaged/termref-selector",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools-envisaged/13-termref-selector.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1698911118,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:13,frontMatter:{id:"termref-selector",sidebar_label:"TermRef Selector",date:20231031},sidebar:"tev2SideBar",previous:{title:"Integrity Checker Tool (ICT)",permalink:"/tev2-specifications/docs/spec-tools-envisaged/ict"},next:{title:"Human Readable Glossary Tool (HRGT)",permalink:"/tev2-specifications/docs/spec-tools-envisaged/hrgt"}},l={},m=[{value:"How it is envisaged to work",id:"how-it-is-envisaged-to-work",level:2}],h=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},p={toc:m,mark:h};function u(e){var t=e.components,i=(0,o.Z)(e,n);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"termref-selector"},"TermRef Selector"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,s.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"TermRef Selector")," tool is a variant of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt"),", the purpose of which is to provide a list of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-selection-instruction",hovertext:"Term Selection Instruction: an instruction that is used to select one or more Terms for the purpose of processing their documentation, e.g., to create an MRG."},"term selection instructions")," that can be used to create an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," that contains an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"entry")," for every ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," for which a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," exists in its input files."),(0,a.kt)("p",null,"In other words: if you have a set of files that contain ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs")," for which you want to create an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),", you can specify these files as input for the ",(0,a.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," tool, and use its output in the ",(0,a.kt)("inlineCode",{parentName:"p"},"termselection")," field that is used to generate that ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),". Of course, you need to make sure that there is an entry in the ",(0,a.kt)("inlineCode",{parentName:"p"},"versions"),"-section in the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," for this ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"."),(0,a.kt)("p",null,"Alternatively, the ",(0,a.kt)("strong",{parentName:"p"},"TermRef Selector")," tool can provide a list of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-selection-instruction",hovertext:"Term Selection Instruction: an instruction that is used to select one or more Terms for the purpose of processing their documentation, e.g., to create an MRG."},"term selection instructions")," that can be used to prune an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," such that it only contains contains ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"entries")," that match at least one of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs")," in one of  its input files."),(0,a.kt)("p",null,"This setting allows for the creation of an MRG that contains overly many ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries"),", and then reducing it to the ones that are actually needed."),(0,a.kt)("h2",{id:"how-it-is-envisaged-to-work"},"How it is envisaged to work"),(0,a.kt)("p",null,"Like the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", the ",(0,a.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"expects the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs")," that it should use to lookup the terms, to exist in the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",hovertext:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),";"),(0,a.kt)("li",{parentName:"ul"},"looks for any ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs")," in the input documents, and attempts to locate the associated ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"entry")," in the designated ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),".")),(0,a.kt)("p",null,"Unlike the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", the ",(0,a.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," does not copy the input files"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"starts by creating an empty list of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<term>@<terminology-identifier>`, that Identifies a Semantic Unit within a particular Terminology. If `<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifiers")),(0,a.kt)("li",{parentName:"ol"},"processes all ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs")," of all input files, by",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"looking them up in the appropriate ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")),(0,a.kt)("li",{parentName:"ul"},"adding a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<term>@<terminology-identifier>`, that Identifies a Semantic Unit within a particular Terminology. If `<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifiers")," for the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," that matches the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," (making sure there are no duplicates in the list)"))),(0,a.kt)("li",{parentName:"ol"},"writing output (possibly to a file), that consists of one line for each ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<term>@<terminology-identifier>`, that Identifies a Semantic Unit within a particular Terminology. If `<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifier")," in the list that consists of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-selection-instruction",hovertext:"Term Selection Instruction: an instruction that is used to select one or more Terms for the purpose of processing their documentation, e.g., to create an MRG."},"term selection instruction")," that instructs the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrgt",hovertext:"MRGT: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as [specified by TEv2](/docs/spec-tools/mrgt). MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT")," to add the term to a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/provisional-mrg",hovertext:"Provisional MRG: a set of Provisional MRG Entries, to which such Entries can be added, removed or modified, as specified by Term Selection Instructions, and that are ultimately Further Processed to result in a proper MRG."},"provisional MRG"),".")),(0,a.kt)("p",null,"In the alternative (pruning) functionality, the ",(0,a.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," expects an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," to be designated for pruning, and replaces step 3 by the following steps:"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"create a new (empty) list of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<term>@<terminology-identifier>`, that Identifies a Semantic Unit within a particular Terminology. If `<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifiers")),(0,a.kt)("li",{parentName:"ol"},"processes all ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," from the designated ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),", by adding the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<term>@<terminology-identifier>`, that Identifies a Semantic Unit within a particular Terminology. If `<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifier")," for any ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," to the new list if that ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," isn't referenced by any of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<term>@<terminology-identifier>`, that Identifies a Semantic Unit within a particular Terminology. If `<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifiers")," in the first list"),(0,a.kt)("li",{parentName:"ol"},"writing output (possibly to a file), that consists of one line for each ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<term>@<terminology-identifier>`, that Identifies a Semantic Unit within a particular Terminology. If `<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifier")," in the list that consists of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-selection-instruction",hovertext:"Term Selection Instruction: an instruction that is used to select one or more Terms for the purpose of processing their documentation, e.g., to create an MRG."},"term selection instruction")," that instructs the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrgt",hovertext:"MRGT: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as [specified by TEv2](/docs/spec-tools/mrgt). MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT")," to remove the term from a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/provisional-mrg",hovertext:"Provisional MRG: a set of Provisional MRG Entries, to which such Entries can be added, removed or modified, as specified by Term Selection Instructions, and that are ultimately Further Processed to result in a proper MRG."},"provisional MRG"),".")))}u.isMDXComponent=!0}}]);