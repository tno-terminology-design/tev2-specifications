"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6920],{3905:(e,t,o)=>{o.d(t,{Zo:()=>f,kt:()=>d});var i=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},f=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,f=n(e,["components","mdxType","originalType","parentName"]),h=l(o),d=r,u=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return o?i.createElement(u,s(s({ref:t},f),{},{components:o})):i.createElement(u,s({ref:t},f))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:r,s[1]=n;for(var l=2;l<a;l++)s[l]=o[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2006:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var i=o(3117),r=(o(7294),o(3905)),a=o(4996);const s={id:"tev2-text-conversion",sidebar_label:"Text Conversions",date:20220303},n="Text Conversions",c={unversionedId:"overview/tev2-text-conversion",id:"overview/tev2-text-conversion",title:"Text Conversions",description:"All text conversion tools in the TEv2 toolbox convert particular tools consists of the various ways in which texts can be converted.",source:"@site/docs/overview/30-tev2-text-conversion.md",sourceDirName:"overview",slug:"/overview/tev2-text-conversion",permalink:"/tev2-specifications/docs/overview/tev2-text-conversion",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/overview/30-tev2-text-conversion.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1709286019,formattedLastUpdatedAt:"Mar 1, 2024",sidebarPosition:30,frontMatter:{id:"tev2-text-conversion",sidebar_label:"Text Conversions",date:20220303},sidebar:"tev2SideBar",previous:{title:"Architecture",permalink:"/tev2-specifications/docs/overview/tev2-architecture"},next:{title:"Terminology Curation",permalink:"/tev2-specifications/docs/overview/tev2-terminology-curation"}},l={},f=[{value:"Text Conversion Tools",id:"tools",level:2},{value:"Text Conversion Steps",id:"steps",level:2},{value:"What is specific for a Text Conversion Tool",id:"what-is-specific-for-a-text-conversion-tool",level:2},{value:"Configuration of a Text Conversion Tool",id:"configuration",level:2}],p={toc:f};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-conversions"},"Text Conversions"),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tools")," in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications."},"TEv2 toolbox")," convert particular tools consists of the various ways in which texts can be converted. "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Examples of text conversions"),(0,r.kt)("p",null,"One example is the conversion of so-called ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," into ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),", i.e., the conversion of texts such as this: ",(0,r.kt)("inlineCode",{parentName:"p"},"[TermRefs](@)"),", i.e., the 'raw' texts that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors"),' write, into "',(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),'", i.e., a nicely rendered version of that raw text, that has additional properties, in this case that it is ',(0,r.kt)("strong",{parentName:"p"},"emphasized"),", and if you hover your mouse over it, you'll get a popup with the definition of the term."),(0,r.kt)("p",null,"Another example is the conversion of a so-called ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/mrg-refs",title:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"MRGRef")," into (the body/contents of) a ","[human readable glossary]",". The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/mrg-refs",title:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"MRGRef")," points to a particular (version) of a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),", and the text conversion process sees to converting it to (the body/contents of) a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),". This is how the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tev2-glossary"},"TEv2 glossary")," was generated.")),(0,r.kt)("p",null,"Text conversions must work in different contexts. For example the context where (static) websites are generated from the raw, authored texts requires different conversions than when the same raw texts are to be rendered into a PDF, or LaTeX document. Also, it may be necessary to provide ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," with different syntax options to mark text fragments for conversion."),(0,r.kt)("h2",{id:"tools"},"Text Conversion Tools"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tools")," in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications."},"TEv2 toolbox"),", such as the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," and ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),", operate in a context as described in the below figure:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"Converting raw texts into formatted texts",src:(0,a.Z)("images/tev2-overview-without-toolbox.png")}),(0,r.kt)("i",null,"Figure 1: Repeated conversions turn raw texts into formatted texts and/or curated texts")),(0,r.kt)("p",null,"Each such tool can be called to perform a ",(0,r.kt)("a",{parentName:"p",href:"#steps"},"text conversion step"),", i.e. a process in which a specified set of (input, or source) files are converted into another set of (output, or target) files. While each ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," has its particular way of working, they are all designed to follow a specific sequence of steps. This enables users to configure (customize) how the tool works whenever it is called. "),(0,r.kt)("p",null,"Thus, the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", whose task is to convert ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs")," into ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),", can be configured to use your own, ",(0,r.kt)("a",{parentName:"p",href:"/docs/specs/syntax/term-refs#customize"},"customized term ref syntax"),". It can also be configured to produce your own particular flavor of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),", by specifying custom ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters"),"."),(0,r.kt)("h2",{id:"steps"},"Text Conversion Steps"),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tools")," convert (input) text files into results (output text files) by locating particular text patterns, doing some processing, and constructing texts that are used to replace the located text patterns with. This is illustrated in the figure below:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"The generic text conversion pattern on which the toolbox is based",src:(0,a.Z)("images/tev2-text-conversion-pattern.png")}),(0,r.kt)("i",null,"Figure 2: The generic parts of a Text Conversion Step")),(0,r.kt)("p",null,"A text conversion step works on a single source (file)",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first part consists of finding the locations of specific text patterns as specified by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," that is configured for use. The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," is expected to populate the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing groups")," that are defined in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter-profile",title:"Interpreter Profile: the set of Named Capturing Groups that are an Interpreter is expected to populate when it is used in the context of a specific TEv2 Tool (such as the TRRT or HRGT)."},"interpreter profile")," of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool")," in which it is used. This ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter-profile",title:"Interpreter Profile: the set of Named Capturing Groups that are an Interpreter is expected to populate when it is used in the context of a specific TEv2 Tool (such as the TRRT or HRGT)."},"interpreter profile")," is defined in the specifications of each ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool")," that uses it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The second part is a processing step, in which the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool")," collects (the values of) the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing groups")," as well as other resources, and creates a set of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/moustache-variable",title:"Moustache Variable: a placeholder in the form of a 'moustache' tag, e.g.: ``, that are used by Converters to produce a text by which a text construct that is located by an Interpreter will be replaced. See also https://mustache.github.io/mustache.5.html"},"moustache variables")," as defined for the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of data objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," of that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool"),". The kinds of resources that are used and the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of data objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," are particular to each ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool"),", and are defined in the specifications for that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The third part consists of replacing the found text patterns with (one or more",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),") texts that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool")," gets from invoking the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," that is configured for use. The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," is designed in such a way that it uses the values of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/moustache-variable",title:"Moustache Variable: a placeholder in the form of a 'moustache' tag, e.g.: ``, that are used by Converters to produce a text by which a text construct that is located by an Interpreter will be replaced. See also https://mustache.github.io/mustache.5.html"},"moustache variables")," in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of data objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," to construct a text with. "))),(0,r.kt)("h2",{id:"what-is-specific-for-a-text-conversion-tool"},"What is specific for a Text Conversion Tool"),(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," has one particular"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter-profile",title:"Interpreter Profile: the set of Named Capturing Groups that are an Interpreter is expected to populate when it is used in the context of a specific TEv2 Tool (such as the TRRT or HRGT)."},"interpreter profile"),", i.e., a specification of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing groups")," that an ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," should populate if it is to be useable for that tool. The tool-specific ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter-profile",title:"Interpreter Profile: the set of Named Capturing Groups that are an Interpreter is expected to populate when it is used in the context of a specific TEv2 Tool (such as the TRRT or HRGT)."},"interpreter profile")," is specified in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications."},"documentation of that tool"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of data objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile"),", i.e., a specification of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/moustache-variable",title:"Moustache Variable: a placeholder in the form of a 'moustache' tag, e.g.: ``, that are used by Converters to produce a text by which a text construct that is located by an Interpreter will be replaced. See also https://mustache.github.io/mustache.5.html"},"moustache variables")," that a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," can use for the construction of the replacement text. The tool-specific ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of data objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," is specified in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications."},"documentation of that tool"),".")),(0,r.kt)("h2",{id:"configuration"},"Configuration of a Text Conversion Tool"),(0,r.kt)("p",null,"Every time a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," is executed, it will use a particular"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter"),", that it will use to find the text patterns that need to be replaced, and to populate the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing groups")," as defined in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter-profile",title:"Interpreter Profile: the set of Named Capturing Groups that are an Interpreter is expected to populate when it is used in the context of a specific TEv2 Tool (such as the TRRT or HRGT)."},"interpreter profile")," of that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter"),", that it will use to construct the replacement texts for the text patterns located by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter"),". The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," may use the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/moustache-variable",title:"Moustache Variable: a placeholder in the form of a 'moustache' tag, e.g.: ``, that are used by Converters to produce a text by which a text construct that is located by an Interpreter will be replaced. See also https://mustache.github.io/mustache.5.html"},"moustache variables")," as defined in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of data objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," of that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool"),".")),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool")," can be instructed to use a particular ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," and/or ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"not specifying it, in which case the defaults are used that are specified for that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool"),";"),(0,r.kt)("li",{parentName:"ul"},"specifying it in a ",(0,r.kt)("a",{parentName:"li",href:"/docs/specs/files/configuration-file"},"configuration file")," that is used when calling the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool"),". This overrides any defaults that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool")," may have;"),(0,r.kt)("li",{parentName:"ul"},"specifying as a command-line argument that is used when calling the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"tool"),". This overrides any specifications in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/specs/files/configuration-file"},"configuration file")," if that were also used.")),(0,r.kt)("p",null,"Particular ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tools")," may have the option of specifying the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," to be used as part of the text pattern that is located by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," of the tool. An example of this is the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),"."),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Specifying ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," as part of the text pattern that is located by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," of the tool is expected to result in 'messy texts'; it's the cost authors pay for using such flexibility (insofar that is (going to be) implemented). The 'price' should then be that when that is specified, it should take precedence over anything else."),(0,r.kt)("p",{parentName:"admonition"},"Perhaps we need some text that documents that once a tool has decided what the sourcer of a particular (array of) arguments is, it should stick to that. In other words, if the commandline specifies a single converter and the config file specifies multiple ones, then the source is the commandline, and con","[2]"," that is specified in the config file does not get used."),(0,r.kt)("p",{parentName:"admonition"},"Also the con","[error]"," is NOT one of the elements of the con array for this matter, but is/should be an argument/parameter in its own right, so that - using the example of the previous paragraph - if the commandline doesn't specify a con","[error]"," while the config file does, then the con","[error]"," as specified in the config file is used where necessary.")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"If a tool is instructed to work on multiple files, they will be processed sequentially.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," replaces every occurrence of a text that its ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," finds - i.e., a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," - with one text that is constructed by its ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," - a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable ref"),". The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),", however, replaces every occurrence of a text that its ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," finds - i.e., an ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/mrg-refs",title:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"MRGRef")," with a sequences of texts, each of which is constructed by its ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," - a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/hrg-entry",title:"HRG Entry: A specific kind of (human-readable) rendering of the combination of a Term and a means that helps Readers to understand the meaning of that Term when it is used in a sentence."},"HRG entry"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);