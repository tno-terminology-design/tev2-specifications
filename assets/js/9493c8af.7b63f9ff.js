"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4841],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(3117),r=a(7294),i=a(6010),o=a(2466),l=a(6775),s=a(1980),p=a(7392),d=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,p]=u({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??c;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var g=a(2389);const k="tabList__CuJ",N="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==l&&(c(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:m},o,{className:(0,i.Z)("tabs__item",N,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},6287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(3117),r=(a(7294),a(3905)),i=(a(4996),a(4866)),o=a(5162);const l={id:"configuration-file",sidebar_label:"TEv2 Config Files",date:20231129},s="Configuration Files for TEv2 tools",p={unversionedId:"specs/files/configuration-file",id:"specs/files/configuration-file",title:"Configuration Files for TEv2 tools",description:"Every TEv2 tool execution can be configured using a configuration file that specifies the parameters (arguments) that otherwise would need to be supplied on the command line. The file is supplied by using the command line parameter -c  or --config , where `` is the path (including the filename).",source:"@site/docs/specs/files/90-configuration-file.md",sourceDirName:"specs/files",slug:"/specs/files/configuration-file",permalink:"/tev2-specifications/docs/specs/files/configuration-file",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/files/90-configuration-file.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1706819196,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:90,frontMatter:{id:"configuration-file",sidebar_label:"TEv2 Config Files",date:20231129},sidebar:"tev2SideBar",previous:{title:"HRD (Human Readable Dictionary)",permalink:"/tev2-specifications/docs/specs/files/hrd"},next:{title:"Syntax",permalink:"/tev2-specifications/docs/category/syntax"}},d={},c=[],m={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-files-for-tev2-tools"},"Configuration Files for TEv2 tools"),(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool")," execution can be configured using a configuration file that specifies the parameters (arguments) that otherwise would need to be supplied on the command line. The file is supplied by using the command line parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-c <path>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--config <path>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>")," is the path (including the filename)."),(0,r.kt)("p",null,"The configuration file is in a ",(0,r.kt)("a",{parentName:"p",href:"https://yaml.org/spec/"},"YAML format"),". When the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--config")," option is specified when calling a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool"),", the tool attempts to read the specified file and evaluates all fields that are not in a specific section, as well as all fields that are in a tool-specific section. A field whose name is defined in the specifications for that tool will be interpreted. All other fields are ignored."),(0,r.kt)("p",null,"The options specified on the command line have precedence over the options specified in the configuration file. Similarly, the options specified in tool specific sections have precedence over the (general) options specified in the 'root' of the configuration file. The tool specific sections are specified in the configuration file by using the command line name of the tool as the section name."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example configuration file"),"The following file has been used in the context of developing this documentation. Some options like file paths are relative to the directory from which the tools are called, which in this case is the `docs` directory.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# TNO Terminology Design tools configuration file (yaml)\n\n## General\nscopedir: . # path of the scope directory where the SAF is located\nonNotExist: warn # the action in case an MRG was specified, but wasn\'t found in the SAF\noutput: . # (root) directory for output files to be written to\n\n## Machine Readable Glossary Tool\nmrgt:\n  vsntag: # versiontag for which the MRG needs to be (re)generated. Leave empty to process all versions\n\n## Human Readable Glossary Tool\nhrgt:\n  interpreter: default          # Type of interpreter, i.e., a regex, or a predefined type (`default`)\n  converter: markdown-section-3 # Type of converter, i.e., a mustache/handlebars template, or a predefined type (`markdown-table-row, `markdown-section-2`, `markdown-section-3`)\n  input:\n    - "*gloss*.md"\n\n## Term Reference Resolution Tool\ntrrt:\n  interpreter: default           # Type of interpreter, i.e., a regex, or a predefined type (`default`, `alt`)")\n  converter: html-hovertext-link # Type of converter, i.e., a mustache/handlebars template, or a predefined type (`markdown-link`, `html-link`, `html-hovertext-link`, `html-glossarytext-link`)")\n  input: # glob pattern strings for files to be processed by the TRRT\n    - "**/*.md"\n'))),(0,r.kt)("p",null,"Below, you can find all of the possible options you can specify in the various configuration sections. These match the parameters that can be specified on the command line. "),(0,r.kt)("p",null,"If a parameter is specified on the command line, it must be preceded by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," (e.g., as in ",(0,r.kt)("inlineCode",{parentName:"p"},"--scopedir"),"), or the alternative short form can be used as described in the specifications of the individual tools."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Legend"),(0,r.kt)("p",null,"The columns in the following table are defined as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parameter"))," specifies the parameter and further specifications."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,r.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,r.kt)("inlineCode",{parentName:"li"},"n"),") the parameter is required to be present when the tool is being called for actual processing (so not in case a ",(0,r.kt)("inlineCode",{parentName:"li"},"help")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," parameter is specified). If ",(0,r.kt)("inlineCode",{parentName:"li"},"Y"),", the parameter MUST either be present in the configuration file, or as a command line parameter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,r.kt)(i.Z,{defaultValue:"generic",values:[{label:"Generic",value:"generic"},{label:"MRG Import",value:"mrg-import"},{label:"MRGT",value:"mrgt"},{label:"HRGT",value:"hrgt"},{label:"TRRT",value:"trrt"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"generic",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that can be used by most, if not all tools can be put both in tool-specific sections, or in the 'root' of the YAML file."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Generic Parameters"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"scopedir: <path>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path of the scope directory where the SAF is located.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onNotExist: <action>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The action in case something that is necessary for further processing didn't exist.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"<action>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An error is thrown (an exception is raised), and processing will stop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A message is displayed (and logged) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'log'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A message is written to a log(file) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Processing continues as if nothing happened."))))),(0,r.kt)(o.Z,{value:"mrg-import",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that are specific to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG Import tool")," can be put in the YAML section ",(0,r.kt)("inlineCode",{parentName:"p"},"mrg-import"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"MRG Import Parameters"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onNotExist: <action>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The action in case an MRG file unexpectedly does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"prune: <bool>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", remove all ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," files in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," where the scopetag is not administered in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"),".")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"<action>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An error is thrown (an exception is raised), and processing will stop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A message is displayed (and logged) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'log'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A message is written to a log(file) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Processing continues as if nothing happened."))))),(0,r.kt)(o.Z,{value:"mrgt",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that are specific to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2. MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT")," can be put in the YAML section ",(0,r.kt)("inlineCode",{parentName:"p"},"mrgt"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onNotExist: <action>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The action in case an MRG file unexpectedly does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"vsntag: <vsntag>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Versiontag for which the MRG needs to be (re)generated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"prune: <bool>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", remove all ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," files in the local scope from the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," where the vsntag (or altvsntag) is not administered in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"))))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"<action>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An error is thrown (an exception is raised), and processing will stop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A message is displayed (and logged) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'log'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A message is written to a log(file) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Processing continues as if nothing happened."))))),(0,r.kt)(o.Z,{value:"hrgt",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that are specific to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"hrgt")," can be put in the YAML section ",(0,r.kt)("inlineCode",{parentName:"p"},"hrgt"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"output: <dir>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Root) directory for output files to be written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input: <glob-pattern>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Glob pattern string for files to be processed by the HRGT.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interpreter: <regex> or <predeftype>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/mrg-refs",title:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"MRGRef")," interpreter, i.e., a ",(0,r.kt)("a",{parentName:"td",href:"https://www.debuggex.com/cheatsheet/regex/pcre"},"(PCRE) regex"),", or a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/mrg-refs#predefined-mrgref-interpreters",title:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"predefined type")," (",(0,r.kt)("inlineCode",{parentName:"td"},"default"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"converter: <template> or <predeftype>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/mrg-refs",title:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"MRGRef")," converter, i.e., a mustache/",(0,r.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"handlebars")," template, or a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt#predefined-converters",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"predefined type")," ( ",(0,r.kt)("inlineCode",{parentName:"td"},"markdown-table-row"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"markdown-section-2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"markdown-section-3"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sorter: <template> or <predeftype>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Value to use for sorting, i.e., a mustache/",(0,r.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"handlebars")," template, or a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt#predefined-sorters",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"predefined type")," ( ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"force: <bool>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", allow files in the output directory to be overwritten. If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," or unspecified, output files will not overwrite existing files.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"<action>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An error is thrown (an exception is raised), and processing will stop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A message is displayed (and logged) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'log'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A message is written to a log(file) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Processing continues as if nothing happened."))))),(0,r.kt)(o.Z,{value:"trrt",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that are specific to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," can be put in the YAML section ",(0,r.kt)("inlineCode",{parentName:"p"},"trrt"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"TRRT Parameters"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"output: <dir>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Root) directory for output files to be written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input: <glob-pattern>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Glob pattern string for files to be processed by the TRRT.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interpreter: <regex> or <predeftype>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," interpreter, i.e., a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex"),", or a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt#predefined-interpreters",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"predefined type"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"converter[n]: <template> or <predeftype>"),(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," converter, i.e., a ",(0,r.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"mustache/handlebars")," template, or a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt#predefined-converters",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"predefined type"),")(",(0,r.kt)("inlineCode",{parentName:"td"},"markdown-link"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"html-link"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"html-hovertext-link"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"html-glossarytext-link"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"force: <bool>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", allow files in the output directory to be overwritten. If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," or unspecified, output files will not overwrite existing files.")))))),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Multiple converters may be specified by appending a number to the parameter key, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"converter[1]: <template>")," ",(0,r.kt)("inlineCode",{parentName:"li"},"converter[2]: <template>"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," is the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/termid",title:"Termid: a text of the form `<termType>:<term>` that serves as an unambiguous Identifier for a specific Semantic Unit in some given Scope."},"termid")," occurrence count from which to start using a specific converter during resolution of a file. Using ",(0,r.kt)("inlineCode",{parentName:"li"},"converter"),", without a number, is equal to using ",(0,r.kt)("inlineCode",{parentName:"li"},"converter[0]"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);