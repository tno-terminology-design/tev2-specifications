"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(r),u=n,h=f["".concat(c,".").concat(u)]||f[u]||p[u]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(3117),n=r(7294),o=r(6010),i=r(2466),s=r(6775),c=r(1980),l=r(7392),d=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function f(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=f(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,l]=h({queryString:r,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=c??p;return u({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),m(e)}),[l,m,o]),tabValues:o}}var v=r(2389);const b="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:s,selectValue:c,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),f=e=>{const t=e.currentTarget,r=d.indexOf(t),a=l[r].value;a!==s&&(p(t),c(a))},u=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:f},i,{className:(0,o.Z)("tabs__item",g,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=m(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return n.createElement(T,(0,a.Z)({key:String(t)},e))}},869:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294),n=r(6775);const o="apiTable_e8hp";function i(e,t){let{name:r,children:o}=e;const i=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(o),s=r?`${r}-${i}`:i,c=`#${s}`,l=(0,n.k6)();return a.createElement("tr",{id:s,tabIndex:0,ref:l.location.hash===c?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||l.push(c)},onKeyDown:e=>{"Enter"===e.key&&l.push(c)}},o.props.children)}const s=a.forwardRef(i);function c(e){let{children:t,name:r}=e;const[n,i]=a.Children.toArray(t.props.children),c=(0,a.useRef)(null);(0,a.useEffect)((()=>{c.current?.focus()}),[c]);const l=a.Children.map(i.props.children,(e=>a.createElement(s,{name:r,ref:c},e)));return a.createElement("table",{className:o},n,a.createElement("tbody",null,l))}},8236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=r(3117),n=(r(7294),r(3905)),o=(r(4996),r(4866),r(5162),r(869));const i={id:"converter-profile",displayed_sidebar:"tev2SideBar",term:"converter-profile",termType:"concept",glossaryTerm:"Converter Profile",glossaryText:"the specification of a class of [data objects](handlebars-object@), instances of which are used by specific [text conversion tools](@) to generate text fragments from.",glossaryNotes:["Converter profiles exist, e.g., for the [TRRT](@) and the [HRGT](@).","Converter profiles are used by [converters](@), which are (predefined or custom) [handlebars templates](@) that produce the generated text fragments."],formPhrases:["converter-profile{ss}","profile{ss}"],status:"proposed",created:20231218,updated:20240301,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Converter Profile",c={unversionedId:"terms/converter-profile",id:"terms/converter-profile",title:"Converter Profile",description:"A converter profile is the specification of a class of data objects, instances of which are used by the text conversion tools to generate text fragments from. Converter profiles exist, e.g., for the TRRT and the HRGT.",source:"@site/docs/terms/converter-profile.md",sourceDirName:"terms",slug:"/terms/converter-profile",permalink:"/tev2-specifications/docs/terms/converter-profile",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/converter-profile.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1712838975,formattedLastUpdatedAt:"Apr 11, 2024",frontMatter:{id:"converter-profile",displayed_sidebar:"tev2SideBar",term:"converter-profile",termType:"concept",glossaryTerm:"Converter Profile",glossaryText:"the specification of a class of [data objects](handlebars-object@), instances of which are used by specific [text conversion tools](@) to generate text fragments from.",glossaryNotes:["Converter profiles exist, e.g., for the [TRRT](@) and the [HRGT](@).","Converter profiles are used by [converters](@), which are (predefined or custom) [handlebars templates](@) that produce the generated text fragments."],formPhrases:["converter-profile{ss}","profile{ss}"],status:"proposed",created:20231218,updated:20240301,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},l={},d=[{value:"Converter Profile Object",id:"object-spec",level:2},{value:"<code>err</code> fields",id:"err-fields",level:3}],p={toc:d};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"converter-profile"},"Converter Profile"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"converter profile")," is the specification of a class of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-object",title:"Handlebars Object: a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a Handlebars Template."},"data objects"),", instances of which are used by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tools")," to generate text fragments from. ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of Data Objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"Converter profiles")," exist, e.g., for the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," and the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),"."),(0,n.kt)("p",null,"The text fragments that are generated by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," are created by executing a (predefined, or custom) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars template")," that works on a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-object",title:"Handlebars Object: a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a Handlebars Template."},"converter profile object"),". The object defines the available information that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," and their ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/handlebars-helper-functions",title:"Handlebars Helper Function: a function that can be used in a Handlebars Expression to manipulate or format the data before displaying it within a template."},"helper functions")," can use to create texts."),(0,n.kt)("p",null,"The generic workings of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of Data Objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profiles")," is documented in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/overview/tev2-text-conversion"},"TEv2 Text Conversion pattern"),"."),(0,n.kt)("h2",{id:"object-spec"},"Converter Profile Object"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-object",title:"Handlebars Object: a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a Handlebars Template."},"converter profile object")," can be envisaged as a YAML object, that has a number of sections. Every ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-object",title:"Handlebars Object: a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a Handlebars Template."},"converter profile object")," has the following sections, but individual ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text-conversion-tool"),' may specify additional sections (or fields), which can be found in the section "Converter Profile" of their specifications.'),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Example"),"Here is an example of what a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-object",title:"Handlebars Object: a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a Handlebars Template."},"converter profile object")," might look like for the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," `[converter profile object](@)`",(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'int:\n  type: "default"\n  regex: /(?:(?<=[^`\\\\])|^)\\[(?=[^@\\n\\]]+\\]\\([^@)]*@[:a-z0-9_-]*\\))(?<showtext>[^@\\n\\]]+)\\]\\((?:(?:(?<type>[a-z0-9_-]*):)?)(?:(?<term>[^@\\n:#)]*?)?(?:#(?<trait>[^@\\n:#)]*))?)?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]*))?\\)/g\nref:\n  showtext: "converter profile object"\n  type: ""\n  term: "converter-profile"\n  trait: "object"\n  scopetag: ""\n  vsntag: ""\nentry:\n  id: "converter-profile"\n  displayed_sidebar: "tev2SideBar"\n  term: "converter-profile"\n  termType: "concept"\n  glossaryTerm: "Converter Profile"\n  glossaryText: "a data object, of a type that is specific for a <a href="/tev2-specifications/docs/terms/tev2-text-conversion-tool" title="TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources.">text conversion tool</a>, that <a href="/tev2-specifications/docs/terms/converter" title="Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output.">converters</a> use to create texts by which the <a href="/tev2-specifications/docs/terms/tev2-text-conversion-tool" title="TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources.">tool</a> will replace the text constructs that are located by its <a href="/tev2-specifications/docs/terms/interpreter" title="Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed.">interpreter</a>."\n  grouptags: []\n  formPhrases:\n    - "converter-profile"\n    - "converter-profiles"\n    - "converter-profile-s"\n  status: "proposed"\n  scopetag: "termdsn"\n  locator: "converter-profile.md"\n  navurl: "https://tno-terminology-design.github.io/tev2-specifications/docs/terms/converter-profile"\n  headingids:\n    - "converter-profile"\n    - "object-spec"\n    - "`err`-fields"\n    - "helpers"\n    - "capfirst"\n    - "ifvalue"\n    - "localize"\n    - "norefs"\n    - "regularize"\n  termid: "concept:converter-profile"\n  vsntag: "documentation"\nmrg:\n  scopetag: "tev2"\n  scopedir: "https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs"\n  curatedir: "terms"\n  glossarydir: "glossaries"\n  defaultvsn: "documentation"\n  website: "https://tno-terminology-design.github.io/tev2-specifications/docs"\n  navpath: "/terms"\n  navid: "id"\n  license: "LICENSE.md"\n  statuses:\n    - "proposed"\n    - "approved"\n    - "deprecated"\n  defaulttype: "concept"\n  vsntag: "documentation"\n  altvsntags:\n    - "latest"\nerr:\n  file: "31-trrt.md"\n  dir: "/specs/tools"\n  line: 73\n  pos: 9\n  cause: ""\n'))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Section"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"int")),(0,n.kt)("td",{parentName:"tr",align:null},"(interpreter): includes the interpreter type ",(0,n.kt)("inlineCode",{parentName:"td"},"int.type"),' (either the name of a predefined interpreter, or "custom"), and the regex used to locate the reference ',(0,n.kt)("inlineCode",{parentName:"td"},"int.regex"),". The ",(0,n.kt)("inlineCode",{parentName:"td"},"noRefs")," helper, for instance, accesses the ",(0,n.kt)("inlineCode",{parentName:"td"},"int.regex")," to be used as the default type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ref")),(0,n.kt)("td",{parentName:"tr",align:null},"(reference): the set of properties derived from the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing groups")," by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"entry")),(0,n.kt)("td",{parentName:"tr",align:null},"(MRG entry): all fields from the specific ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," that was selected.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"mrg")),(0,n.kt)("td",{parentName:"tr",align:null},"(MRG): all fields from the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg#terminology",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"terminology section")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," from which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," was taken.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"err")),(0,n.kt)("td",{parentName:"tr",align:null},"(error): various fields, as specified below, that can be used to construct output that helps users identify an error, and fix it.")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Fields from the ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," section may also be used in ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," without specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," as a prefix (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"entry.term")," becomes ",(0,n.kt)("inlineCode",{parentName:"p"},"term"),"). Properties of ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," with identical names to sections of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-object",title:"Handlebars Object: a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a Handlebars Template."},"converter profile object"),", are overwritten by the defined sections.")),(0,n.kt)("h3",{id:"err-fields"},(0,n.kt)("inlineCode",{parentName:"h3"},"err")," fields"),(0,n.kt)("p",null,"When a file is being processed by a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool"),", it can happen that an input structure is found that cannot be associated with an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"err")," section in a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-object",title:"Handlebars Object: a data object, that serves as the source of (context dependent) data from which a text is produced according to the specifications of a Handlebars Template."},"converter profile object")," contains fields that can help construct outputs that help users to identify, and fix, such errors, as follows."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Legend"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Field"))," contains the field name;"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,n.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,n.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"F"),") the field is always populated, or optional."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,n.kt)(o.Z,{mdxType:"APITable"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"file")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the file, including the extension, where the specific reference was found.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"dir")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Relative directory path from the location the tool was called to the directory where the ",(0,n.kt)("inlineCode",{parentName:"td"},"file")," was found.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"line")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Linenumber in the file where the reference was found.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"pos")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Position on the line of the start of the reference that was found.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"cause")),(0,n.kt)("td",{parentName:"tr",align:"center"},"n"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A description of the cause of a possible error."))))))}f.isMDXComponent=!0}}]);