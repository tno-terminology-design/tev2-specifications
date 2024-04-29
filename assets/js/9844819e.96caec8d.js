"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4677],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(3117),n=a(7294),i=a(6010),s=a(2466),o=a(6775),l=a(1980),p=a(7392),c=a(12);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=h(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,p]=m({queryString:a,groupId:r}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),g=(()=>{const e=l??u;return d({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,i]),tabValues:i}}var g=a(2389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),r=p[a].value;r!==o&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},s,{className:(0,i.Z)("tabs__item",b,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",k)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},869:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6775);const i="apiTable_e8hp";function s(e,t){let{name:a,children:i}=e;const s=function(e){let t=e;for(;(0,r.isValidElement)(t);)[t]=r.Children.toArray(t.props.children);return t}(i),o=a?`${a}-${s}`:s,l=`#${o}`,p=(0,n.k6)();return r.createElement("tr",{id:o,tabIndex:0,ref:p.location.hash===l?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||p.push(l)},onKeyDown:e=>{"Enter"===e.key&&p.push(l)}},i.props.children)}const o=r.forwardRef(s);function l(e){let{children:t,name:a}=e;const[n,s]=r.Children.toArray(t.props.children),l=(0,r.useRef)(null);(0,r.useEffect)((()=>{l.current?.focus()}),[l]);const p=r.Children.map(s.props.children,(e=>r.createElement(o,{name:a,ref:l},e)));return r.createElement("table",{className:i},n,r.createElement("tbody",null,p))}},8057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=a(3117),n=(a(7294),a(3905)),i=(a(4996),a(869)),s=a(4866),o=a(5162);const l={id:"handlebars-helper-functions",sidebar_label:"Handlebars Helpers",date:20240301},p="Helper functions",c={unversionedId:"specs/syntax/handlebars-helper-functions",id:"specs/syntax/handlebars-helper-functions",title:"Helper functions",description:"helpers}",source:"@site/docs/specs/syntax/81-handlebars-helper-functions.md",sourceDirName:"specs/syntax",slug:"/specs/syntax/handlebars-helper-functions",permalink:"/tev2-specifications/docs/specs/syntax/handlebars-helper-functions",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/syntax/81-handlebars-helper-functions.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1714369561,formattedLastUpdatedAt:"Apr 29, 2024",sidebarPosition:81,frontMatter:{id:"handlebars-helper-functions",sidebar_label:"Handlebars Helpers",date:20240301},sidebar:"tev2SideBar",previous:{title:"Term Selection",permalink:"/tev2-specifications/docs/specs/syntax/term-selection"},next:{title:"Specifications - Tools",permalink:"/tev2-specifications/docs/categories/specs-tools"}},u={},h=[{value:"<code>capFirst</code>",id:"capfirst",level:2},{value:"<code>log</code>",id:"log",level:2},{value:"<code>noRefs</code>",id:"norefs",level:2},{value:"<code>regularize</code>",id:"regularize",level:2},{value:"<code>localize</code>",id:"localize",level:2},{value:"<code>ifValue</code>",id:"ifvalue",level:2}],d={toc:h};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"helpers"},"Helper functions"),(0,n.kt)("p",null,"In order to facilitate the writing and use of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters"),", a number of ",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/expressions.html"},"handlebars helper functions")," are available in the context of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),", that extend the ",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/builtin-helpers.html"},"built-in helper functions")," of ",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"Handlebars"),". "),(0,n.kt)("p",null,"Helper functions would typically use variables as specified in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile#object-spec",title:"Converter Profile: the specification of a class of Data Objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," for the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool")," that they are used in."),(0,n.kt)("p",null,"Helper functions can be used within ",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/expressions.html"},"handlebars expressions"),". Their input is the evaluated value of the expression that follows the call, possibly with extra options."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="helper function syntax format"',title:'"helper',function:!0,syntax:!0,'format"':!0},'// highlight-next-line\n{{<helperfunction> <element> <argument>="<value>"}}\n{{capFirst entry.term}}\n{{noRefs entry.glossaryText type="markdown"}}\n')),(0,n.kt)("details",null,(0,n.kt)("summary",null,"List of built-in helpers"),(0,n.kt)("p",null,"Here is a summary of the handlebar helpers that can always be used; you can click on the helper to navigate to a more detailed description of how they work (with examples):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Helper"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Functional summary"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/builtin-helpers.html#if"},(0,n.kt)("inlineCode",{parentName:"a"},"#if"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"conditionally render a text block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/builtin-helpers.html#unless"},(0,n.kt)("inlineCode",{parentName:"a"},"#unless"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"this is the inverse of ",(0,n.kt)("inlineCode",{parentName:"td"},"#if"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/builtin-helpers.html#each"},(0,n.kt)("inlineCode",{parentName:"a"},"#each"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Iterates over a list of elements. Inside the block, you can use ",(0,n.kt)("inlineCode",{parentName:"td"},"this")," to reference the element being iterated over.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/builtin-helpers.html#with"},(0,n.kt)("inlineCode",{parentName:"a"},"#with"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enables you to change the evaluation context of template-parts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/builtin-helpers.html#lookup"},(0,n.kt)("inlineCode",{parentName:"a"},"lookup"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allows for dynamic parameter resolution using Handlebars variables."))))),(0,n.kt)("h2",{id:"capfirst"},(0,n.kt)("inlineCode",{parentName:"h2"},"capFirst")),(0,n.kt)("p",null,"The function of the helper ",(0,n.kt)("inlineCode",{parentName:"p"},"capFirst")," is to capitalize every first character from every word in a string."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\"Examples for 'capFirst'\"",title:'"Examples',for:!0,"'capFirst'\"":!0},'{{capFirst entry.glossaryTerm}}   // e.g. "converter profile" becomes "Converter Profile"\n{{capFirst entry.glossaryText}}   // e.g. "This is a description; for SOME TERM" becomes "This Is A Description; For SOME TERM"\n')),(0,n.kt)("p",null,"The helper ",(0,n.kt)("inlineCode",{parentName:"p"},"capFirst")," replaces the first character of every word of its argument with the capitalized equivalent.\nWords are obtained by splitting the input on space characters.",(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"It takes a string as input, splits the string at spaces, capitalizes the first character of every split item,\nreconstructs the input string fomr the split items, and returns the result.")),(0,n.kt)("h2",{id:"log"},(0,n.kt)("inlineCode",{parentName:"h2"},"log")),(0,n.kt)("p",null,"The function of the helper ",(0,n.kt)("inlineCode",{parentName:"p"},"log")," is to output a text string to the log of a tool that uses a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," from which it is called. This allows users to enhance debugging output."),(0,n.kt)("p",null,"This helper extends the [functionality of the ",(0,n.kt)("inlineCode",{parentName:"p"},"log")," helper that is built into ","[Handlebars itself]",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/builtin-helpers.html#log"},"https://handlebarsjs.com/guide/builtin-helpers.html#log"),"). The helper is based on ",(0,n.kt)("a",{parentName:"p",href:"https://tslog.js.org"},"tslog"),", which has ",(0,n.kt)("a",{parentName:"p",href:"https://tslog.js.org/#/?id=all-features"},"lots of other features"),"."),(0,n.kt)("p",null,"Particular to our ",(0,n.kt)("inlineCode",{parentName:"p"},"log")," helper is the feature that allows users to suppress log messages. This is useful, for example, when using a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," that determines whether or not to allow an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," to appear in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," that is being created. In such cases, the log would be littered with log messages that no output is being generated, which can now be suppressed."),(0,n.kt)("p",null,"This feature is implemented through the log level ",(0,n.kt)("inlineCode",{parentName:"p"},"silent"),". ",(0,n.kt)("a",{parentName:"p",href:"https://tslog.js.org/#/?id=default-log-level"},"Other log level values are provided by tslog"),". When a log level isn't specified, it defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"warn"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\"Examples for 'log'\"",title:'"Examples',for:!0,"'log'\"":!0},"// The following logs a warning of the form '<path>/<file>@<line>:pos', which specifies where an error occurred.\n{{log '<errmsg>:' err.dir '/' err.file '@' err.line ':' err.pos level='warn'}}\"\n\n// The following logs the text 'This is an informational message'\n{{log level='info' 'This is an informational message'}}\n\n// Examples below will prevent errors caused by the conversion call from being logged\n{{log level='silent' 'This message will not be logged'}}\n{{regularize entry.term}}{{log level='silent'}}\n")),(0,n.kt)("h2",{id:"norefs"},(0,n.kt)("inlineCode",{parentName:"h2"},"noRefs")),(0,n.kt)("p",null,"The function of the helper ",(0,n.kt)("inlineCode",{parentName:"p"},"noRefs")," is to replace all ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," from a string, with its (capitalized) ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext"),". Capitalization is done by the helper ",(0,n.kt)("inlineCode",{parentName:"p"},"capFirst"),"."),(0,n.kt)("p",null,"The following tabs show how this helper works on the following input:"),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},'  [Markdown](link), <a href="link">HTML</a>, `[showtext](someterm@somescope)`\n')),(0,n.kt)(s.Z,{defaultValue:"default",values:[{label:"(No type specified)",value:"default"},{label:'type="markdown"',value:"single"},{label:'type="markdown, html, interpreter"',value:"multiple"},{label:'type="/[(?<showtext>[^]]+)]((?:[^)]+))/, html"',value:"multiple-with-regex"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"default",mdxType:"TabItem"},(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"{{noRefs entry.glossaryText}}")," results in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},'  [Markdown](link), <a href="link">HTML</a>, Showtext\n'))),(0,n.kt)(o.Z,{value:"single",mdxType:"TabItem"},(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},'{{noRefs entry.glossaryText type="markdown"}}')," results in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},'  Markdown, <a href="link">HTML</a>, Showtext\n'))),(0,n.kt)(o.Z,{value:"multiple",mdxType:"TabItem"},(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},'{{noRefs entry.glossaryText type="markdown, html, interpreter"}}')," results in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"  Markdown, HTML, Showtext\n")),(0,n.kt)("p",null,"Note that the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," is also seen as a markdown link, and hence remo")),(0,n.kt)(o.Z,{value:"multiple-with-regex",mdxType:"TabItem"},(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},'{{noRefs entry.glossaryText type="/\\[(?<showtext>[^\\]]+)\\]\\((?:[^)]+)\\)/, html"}}')," results in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"  Markdown, HTML, Showtext\n")))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The helper ",(0,n.kt)("inlineCode",{parentName:"p"},"noRefs")," uses the configured ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," to convert all references to the ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," property of the interpreted reference.\nIt also capitalizes the ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," replacement using the ",(0,n.kt)("a",{parentName:"p",href:"#capfirst"},(0,n.kt)("inlineCode",{parentName:"a"},"capFirst")," helper"),".",(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"It takes the input, finds matches using the configured syntax-",(0,n.kt)("inlineCode",{parentName:"em"},"type"),", and uses the capitalized interpreted ",(0,n.kt)("inlineCode",{parentName:"em"},"showtext")," property as a replacement, after which the output is returned.")),(0,n.kt)("p",null,"Three standard values are available to be used as the value for the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," option. Multiple values may be provided, in which case the values are interpreted in order from left to right. If no value is provided, '",(0,n.kt)("inlineCode",{parentName:"p"},"interpreter"),"' is used as the default ",(0,n.kt)("inlineCode",{parentName:"p"},"type"),". If a ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," is provided that does not match any of the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," values, the value is assumed to be a custom ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text."},"regex"),"."),(0,n.kt)("p",null,"Available ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," values:"),(0,n.kt)(i.Z,{mdxType:"APITable"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"type")),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"interpreter")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uses the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text."},"regex")," of the configured ",(0,n.kt)("a",{parentName:"td",href:"#interpreter"},"interpreter")," to find matches.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"html")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uses the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text."},"regex")," ",(0,n.kt)("inlineCode",{parentName:"td"},"<a\\b[^>]*?>(?<showtext>.*?)<\\/a>")," to find HTML ",(0,n.kt)("inlineCode",{parentName:"td"},"<a>")," tags and uses the value in between the opening and closing tag as ",(0,n.kt)("inlineCode",{parentName:"td"},"showtext"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"markdown")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uses the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text."},"regex")," ",(0,n.kt)("inlineCode",{parentName:"td"},"\\[(?<showtext>[^\\]]+)\\]\\((?:[^)]+)\\)")," to find Markdown hyperlinks and uses the link text as ",(0,n.kt)("inlineCode",{parentName:"td"},"showtext"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A value for ",(0,n.kt)("inlineCode",{parentName:"td"},"type")," that does not match any of the standard ",(0,n.kt)("inlineCode",{parentName:"td"},"type")," values is assumed to be a custom ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text."},"regex"),"."))))),(0,n.kt)("h2",{id:"regularize"},(0,n.kt)("inlineCode",{parentName:"h2"},"regularize")),(0,n.kt)("p",null,"The function of the helper ",(0,n.kt)("inlineCode",{parentName:"p"},"regularize")," is convert human readable text into a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"regularized text"),", which is a common text format within ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," (particularly in ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries"),") for automated processing."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\"Examples for 'Regularize'\"",title:'"Examples',for:!0,"'Regularize'\"":!0},'// Input (entry.term): "EX(ample)"\n{{regularize entry.term}}\n// Output: "ex-ample"\n')),(0,n.kt)("p",null,"The helper ",(0,n.kt)("inlineCode",{parentName:"p"},"regularize")," converts the input string into a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"regularized text"),", according to the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text#regularization-process",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z_0-9-]`, and doesn't end with a `-` character."},"regularization process"),"."),(0,n.kt)("h2",{id:"localize"},(0,n.kt)("inlineCode",{parentName:"h2"},"localize")),(0,n.kt)("p",null,"The function of the helper ",(0,n.kt)("inlineCode",{parentName:"p"},"localize")," is to convert an absolute URL to a relative path within a particular website context, enhancing internal navigation efficiency and consistency."),(0,n.kt)("p",null,"The website context is specified by the ",(0,n.kt)("inlineCode",{parentName:"p"},"website")," value of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," in the converter profile."),(0,n.kt)(s.Z,{values:[{label:"`website` = `https://github.com/tno-terminology-design/tev2-specifications/tree/master`",value:"tev2-specs"},{label:"`website` is something else",value:"something-else"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"tev2-specs",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\"Examples for 'localize'\"",title:'"Examples',for:!0,"'localize'\"":!0},'// Input (entry.navurl): "https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/specs/syntax/handlebars-helper-functions"\n{{regularize entry.navurl}}\n// Output: "/docs/specs/syntax/handlebars-helper-functions"\n'))),(0,n.kt)(o.Z,{value:"something-else",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\"Examples for 'localize'\"",title:'"Examples',for:!0,"'localize'\"":!0},'// Input (entry.navurl): "https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/specs/syntax/handlebars-helper-functions"\n{{regularize entry.navurl}}\n// Output: "https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/specs/syntax/handlebars-helper-functions"\n')))),(0,n.kt)("p",null,"The helper ",(0,n.kt)("inlineCode",{parentName:"p"},"localize")," parses the value it was given as a URL and compares it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"website")," value of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," in the converter profile. If both the ",(0,n.kt)("inlineCode",{parentName:"p"},"host")," values (e.g., tno-terminology-design.github.io) match, the ",(0,n.kt)("inlineCode",{parentName:"p"},"pathname")," of the URL is returned. If the given value cannot be interpreted as a URL, or the ",(0,n.kt)("inlineCode",{parentName:"p"},"host")," values do not match, the input value is returned. This can be useful in situations where external links (URL's pointing to a website other than the current ",(0,n.kt)("inlineCode",{parentName:"p"},"host"),") are handled differently from internal links."),(0,n.kt)("h2",{id:"ifvalue"},(0,n.kt)("inlineCode",{parentName:"h2"},"ifValue")),(0,n.kt)("p",null,"The function of the helper ",(0,n.kt)("inlineCode",{parentName:"p"},"ifValue")," is to test whether a text equals a specific value. This enables us to conditionally have particular texts (or leave such texts out)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\"Examples for 'ifValue'\"",title:'"Examples',for:!0,"'ifValue'\"":!0},'// Input (entry.status): "deprecated"\n{{#ifValue entry.status equals="deprecated"}}**Warning**: this term is deprecated!{{/ifValue}}\n// output: **Warning**: this term is deprecated!\n')),(0,n.kt)("p",null,'This sequence outputs the text "',(0,n.kt)("strong",{parentName:"p"},"Warning"),': this term is deprecated!" when the ',(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," had a ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," field whose value was ",(0,n.kt)("inlineCode",{parentName:"p"},"deprecated"),"."))}m.isMDXComponent=!0}}]);