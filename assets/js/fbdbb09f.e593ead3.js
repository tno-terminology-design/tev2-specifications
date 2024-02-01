"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=n,m=d["".concat(l,".").concat(f)]||d[f]||h[f]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},869:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6775);const i="apiTable_e8hp";function o(e,t){let{name:a,children:i}=e;const o=function(e){let t=e;for(;(0,r.isValidElement)(t);)[t]=r.Children.toArray(t.props.children);return t}(i),s=a?`${a}-${o}`:o,l=`#${s}`,c=(0,n.k6)();return r.createElement("tr",{id:s,tabIndex:0,ref:c.location.hash===l?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||c.push(l)},onKeyDown:e=>{"Enter"===e.key&&c.push(l)}},i.props.children)}const s=r.forwardRef(o);function l(e){let{children:t,name:a}=e;const[n,o]=r.Children.toArray(t.props.children),l=(0,r.useRef)(null);(0,r.useEffect)((()=>{l.current?.focus()}),[l]);const c=r.Children.map(o.props.children,(e=>r.createElement(s,{name:a,ref:l},e)));return r.createElement("table",{className:i},n,r.createElement("tbody",null,c))}},8236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(3117),n=(a(7294),a(3905)),i=(a(4996),a(869));const o={id:"converter-profile",displayed_sidebar:"tev2SideBar",term:"converter-profile",termType:"concept",glossaryTerm:"Converter Profile",glossaryText:"a data object, of a type that is specific for a [text conversion tool](@), that [converters](@) use to create texts by which the [tool](text-conversion-tool@) will replace the text constructs that are located by its [interpreter](@).",grouptags:[],formPhrases:["converter-profile{ss}","profile{ss}"],status:"proposed",created:20231218,updated:20240108,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Converter Profile",l={unversionedId:"terms/converter-profile",id:"terms/converter-profile",title:"Converter Profile",description:"A converter profile is a data object, of a type that is specific for a text conversion tool. The replacement texts that a text conversion tool creates, are compiled according to the information in the converter profile object. The object defines the available information that converters and their helper functions can use to create texts.",source:"@site/docs/terms/converter-profile.md",sourceDirName:"terms",slug:"/terms/converter-profile",permalink:"/tev2-specifications/docs/terms/converter-profile",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/converter-profile.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1706819196,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"converter-profile",displayed_sidebar:"tev2SideBar",term:"converter-profile",termType:"concept",glossaryTerm:"Converter Profile",glossaryText:"a data object, of a type that is specific for a [text conversion tool](@), that [converters](@) use to create texts by which the [tool](text-conversion-tool@) will replace the text constructs that are located by its [interpreter](@).",grouptags:[],formPhrases:["converter-profile{ss}","profile{ss}"],status:"proposed",created:20231218,updated:20240108,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},p=[{value:"Converter Profile Object",id:"object",level:2},{value:"<code>err</code> fields",id:"err-fields",level:3},{value:"Helper functions",id:"helper-functions",level:2},{value:"<code>capFirst</code>",id:"capfirst",level:3},{value:"<code>noRefs</code>",id:"norefs",level:3},{value:"<code>ifValue</code>",id:"ifvalue",level:3},{value:"<code>localize</code>",id:"localize",level:3}],h={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"converter-profile"},"Converter Profile"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"converter profile")," is a data object, of a type that is specific for a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool"),". The replacement texts that a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," creates, are compiled according to the information in the converter profile object. The object defines the available information that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Expression, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," and their helper functions can use to create texts."),(0,n.kt)("p",null,"The generic workings of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: a data object, of a type that is specific for a Text Conversion Tool, that Converters use to create texts by which the Tool will replace the text constructs that are located by its Interpreter."},"converter profiles")," is documented in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/overview/tev2-text-conversion"},"TEv2 Text Conversion pattern"),"."),(0,n.kt)("h2",{id:"object"},"Converter Profile Object"),(0,n.kt)("p",null,"The converter profile object can be envisaged as a YAML object, that has a number of sections. Every converter profile object has the following sections, but individual ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text-conversion-tool"),' may specify additional sections (or fields), which can be found in the section "Converter Profile" of their specifications.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Section"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"int")),(0,n.kt)("td",{parentName:"tr",align:null},"(interpreter): includes information about the interpreter type ",(0,n.kt)("inlineCode",{parentName:"td"},"int.type"),", and the regex used to locate the reference ",(0,n.kt)("inlineCode",{parentName:"td"},"int.regex"),". The ",(0,n.kt)("inlineCode",{parentName:"td"},"noRefs")," helper accesses the ",(0,n.kt)("inlineCode",{parentName:"td"},"int.regex")," to be used as the default type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ref")),(0,n.kt)("td",{parentName:"tr",align:null},"(reference): the set of properties derived from the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing groups")," by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"entry")),(0,n.kt)("td",{parentName:"tr",align:null},"(MRG entry): all fields from the specific ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," that was selected.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"mrg")),(0,n.kt)("td",{parentName:"tr",align:null},"(MRG): all fields from the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg#terminology",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"terminology section")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," from which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," was taken.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"err")),(0,n.kt)("td",{parentName:"tr",align:null},"(error): various fields, as specified below, that can be used to construct output that helps users identify an error, and fix it.")))),(0,n.kt)("p",null,"Fields from the ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," section may also be used in ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Expression, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," without specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," as a prefix. Properties of the ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," with identical names to sections of the converter profile object are overwritten."),(0,n.kt)("h3",{id:"err-fields"},(0,n.kt)("inlineCode",{parentName:"h3"},"err")," fields"),(0,n.kt)("p",null,"When a file is being processed by a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool"),", it can happen that an input structure is found that cannot be associated with an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"err")," section in a converter profile object contains fields that can help construct outputs that help users to identify, and fix, such errors, as follows."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Legend"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Field"))," contains the field name;"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,n.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,n.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"F"),") the field is always populated, or optional."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,n.kt)(i.Z,{mdxType:"APITable"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"file")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the file where the specific reference was found.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"line")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Linenumber in the file where the reference was found.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"pos")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Position on the line of the start of the reference that was found.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"cause")),(0,n.kt)("td",{parentName:"tr",align:"center"},"n"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A description of the cause of a possible error."))))),(0,n.kt)("h2",{id:"helper-functions"},"Helper functions"),(0,n.kt)("p",null,"Multiple custom ",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/expressions.html#helpers"},"helper functions")," have been specified in addition to the ",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/builtin-helpers.html"},"built-in helper functions")," of ",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"Handlebars"),", which can be used within ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-expression",title:"Handlebars Expression: a specific syntax used in the popular templating engine 'Handlebars', which enables one to specify texts (e.g., HTML templates) in which dynamic data (as provided, e.g., by Moustache Variables) is placed. See Handlebars for further details."},"handlebars expressions")," to modify the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Expression, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," output. The input given to a helper function is always the evaluated value of the expression that follows the call, possibly with extra options."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Mustache expression format"',title:'"Mustache',expression:!0,'format"':!0},'// highlight-next-line\n{{<helper> <element> <argument>="<value>"}}\n{{capFirst entry.term}}\n{{noRefs entry.glossaryText type="markdown"}}\n')),(0,n.kt)("h3",{id:"capfirst"},(0,n.kt)("inlineCode",{parentName:"h3"},"capFirst")),(0,n.kt)("p",null,"This simple helper with identifier ",(0,n.kt)("inlineCode",{parentName:"p"},"capFirst")," replaces every word's first character with the capitalized equivalent. Words are obtained by splitting the input on space characters.",(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"It takes the input, splits the input at spaces, and capitalizes the first character of every split item, after which the output is returned.")),(0,n.kt)("h3",{id:"norefs"},(0,n.kt)("inlineCode",{parentName:"h3"},"noRefs")),(0,n.kt)("p",null,"This helper with identifier ",(0,n.kt)("inlineCode",{parentName:"p"},"noRefs")," attempts to use the configured ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," to convert all references to the ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," property of the interpreted reference. It also capitalizes the ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," replacement using the ",(0,n.kt)("inlineCode",{parentName:"p"},"capFirst")," helper.",(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"It takes the input, finds matches using the configured syntax-",(0,n.kt)("inlineCode",{parentName:"em"},"type")," and uses the capitalized interpreted ",(0,n.kt)("inlineCode",{parentName:"em"},"showtext")," property as a replacement, after which the output is returned.")),(0,n.kt)("p",null,"Three standard values are available to be used as the value for the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," option. Multiple values may be provided, in which case the values are interpreted in order from left to right. If no value is provided, '",(0,n.kt)("inlineCode",{parentName:"p"},"interpreter"),"' is used as the default ",(0,n.kt)("inlineCode",{parentName:"p"},"type"),". If a ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," is provided that does not match any of the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," values, the value is assumed to be a custom ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex"),"."),(0,n.kt)("p",null,"Available ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," values:"),(0,n.kt)(i.Z,{mdxType:"APITable"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"type")),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"interpreter")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uses the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex")," of the configured ",(0,n.kt)("a",{parentName:"td",href:"#interpreter"},"interpreter")," to find matches.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"html")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uses the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex")," ",(0,n.kt)("inlineCode",{parentName:"td"},"<a\\b[^>]*?>(?<showtext>.*?)<\\/a>")," to find HTML ",(0,n.kt)("inlineCode",{parentName:"td"},"<a>")," tags and uses the value in between the opening and closing tag as ",(0,n.kt)("inlineCode",{parentName:"td"},"showtext"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"markdown")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uses the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex")," ",(0,n.kt)("inlineCode",{parentName:"td"},"\\[(?<showtext>[^\\]]+)\\]\\((?:[^)]+)\\)")," to find Markdown hyperlinks and uses the link text as ",(0,n.kt)("inlineCode",{parentName:"td"},"showtext"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A value for ",(0,n.kt)("inlineCode",{parentName:"td"},"type")," that does not match any of the standard ",(0,n.kt)("inlineCode",{parentName:"td"},"type")," values is assumed to be a custom ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex"),"."))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="NoRefs example"',title:'"NoRefs','example"':!0},'{{noRefs entry.glossaryText}}\n{{noRefs entry.glossaryText type="markdown"}}\n{{noRefs entry.glossaryText type="markdown, html, interpreter"}}\n{{noRefs entry.glossaryText type="/\\[(?<showtext>[^\\]]+)\\]\\((?:[^)]+)\\)/, html"}}\n')),(0,n.kt)("h3",{id:"ifvalue"},(0,n.kt)("inlineCode",{parentName:"h3"},"ifValue")),(0,n.kt)("p",null,"This helper with identifier ",(0,n.kt)("inlineCode",{parentName:"p"},"ifValue")," allows for equality checking by comparing the first value with the value specified as the ",(0,n.kt)("inlineCode",{parentName:"p"},"equals")," argument. Pay attention to the use of a ",(0,n.kt)("inlineCode",{parentName:"p"},"#")," character in front of the opening helper tag (",(0,n.kt)("inlineCode",{parentName:"p"},"#ifValue"),") and a ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," character at the closing (",(0,n.kt)("inlineCode",{parentName:"p"},"/ifValue"),") tag in the example.",(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"It compares the input given as the value trailing the opening helper identifier (",(0,n.kt)("inlineCode",{parentName:"em"},"ifValue"),") and the value of the ",(0,n.kt)("inlineCode",{parentName:"em"},"equals")," option, and returns the value inbetween the opening and closing helper tag if the values are equal.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ifValue example"',title:'"ifValue','example"':!0},'{{#ifValue entry.termType equals="concept"}}Artifact is a concept{{/ifValue}}\n{{#ifValue entry.termType equals="image"}}Artifact is an image{{/ifValue}}\n')),(0,n.kt)("h3",{id:"localize"},(0,n.kt)("inlineCode",{parentName:"h3"},"localize")),(0,n.kt)("p",null,"This helper with identifier ",(0,n.kt)("inlineCode",{parentName:"p"},"localize")," attempts to parse the value it was given as a URL and compares it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"website")," value of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," in the converter profile. If both the ",(0,n.kt)("inlineCode",{parentName:"p"},"host")," values (e.g., tno-terminology-design.github.io) match, the ",(0,n.kt)("inlineCode",{parentName:"p"},"pathname")," of the URL is returned. If the given value cannot be interpreted as a URL, or the ",(0,n.kt)("inlineCode",{parentName:"p"},"host")," values do not match, the input value is returned. This can be useful in situations where external links (URL's pointing to a website other than the current ",(0,n.kt)("inlineCode",{parentName:"p"},"host"),") are handled differently from internal links."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="localize example"',title:'"localize','example"':!0},'{{localize entry.navurl}}\n// using the localize helper, converts\n"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author"\n// into\n"/tev2-specifications/docs/terms/author"\n// when the `host` value of the URL matches the MRG website\'s `host` value\n')))}d.isMDXComponent=!0}}]);