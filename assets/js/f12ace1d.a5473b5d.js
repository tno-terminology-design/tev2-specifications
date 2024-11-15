"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[3157],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=i,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(3117),i=a(7294),o=a(6010),r=a(2466),s=a(6775),l=a(1980),c=a(7392),p=a(12);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function h(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[r,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=u({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=a(2389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),h=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==s&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:h},r,{className:(0,o.Z)("tabs__item",b,r?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",k)},i.createElement(v,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return i.createElement(N,(0,n.Z)({key:String(t)},e))}},5058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,mark:()=>h,metadata:()=>c,toc:()=>d});var n=a(3117),i=(a(7294),a(3905)),o=(a(4996),a(4866)),r=a(5162);const s={id:"mrg-import",sidebar_label:"MRG Import",date:20230731},l="MRG Import Tool",c={unversionedId:"specs/tools/mrg-import",id:"specs/tools/mrg-import",title:"MRG Import Tool",description:"text to mark",source:"@site/docs/specs/tools/13-mrg-import.md",sourceDirName:"specs/tools",slug:"/specs/tools/mrg-import",permalink:"/tev2-specifications/docs/specs/tools/mrg-import",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/tools/13-mrg-import.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1725683752,formattedLastUpdatedAt:"Sep 7, 2024",sidebarPosition:13,frontMatter:{id:"mrg-import",sidebar_label:"MRG Import",date:20230731},sidebar:"tev2SideBar",previous:{title:"Specifications - Tools",permalink:"/tev2-specifications/docs/categories/specs-tools"},next:{title:"MRGT - MRG Generation",permalink:"/tev2-specifications/docs/specs/tools/mrgt"}},p={},d=[{value:"Installing the Tool",id:"installing-the-tool",level:2},{value:"Calling the Tool",id:"calling-the-tool",level:2},{value:"Running the Tool",id:"running-the-tool",level:2},{value:"Exceptions, Warnings, and Logging",id:"exceptions",level:2}],h=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},m={toc:d,mark:h};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mrg-import-tool"},"MRG Import Tool"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," Import Tool (",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG importer"),")")," ensures that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," within which it is run, obtains a local copy of all ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs")," that are available in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," that are mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/specs/files/saf#scopes"},(0,i.kt)("inlineCode",{parentName:"a"},"scopes")," section")," of its ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"),". This makes life easy for various tools, e.g., the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2."},"MRGT")," and the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", that can now assume that all ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs")," that they may need to consult in order to do their job, are readily available."),(0,i.kt)("h2",{id:"installing-the-tool"},"Installing the Tool"),(0,i.kt)("p",null,"The tool can be installed from the command line and made globally available by executing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install -g @tno-terminology-design/mrg-import\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Before running the tool from the command line, make sure you have met the necessary prerequisites depending on your operating environment."),(0,i.kt)(o.Z,{defaultValue:"cmd.exe",values:[{label:"CMD.exe (Windows)",value:"cmd.exe"},{label:"PowerShell(Windows)",value:"powershell"},{label:"Bash (Linux/Mac)",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"cmd.exe",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Node.js and NPM"),": Ensure Node.js and NPM are installed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Global Installation"),": If you have installed the package globally, confirm the global NPM modules path by running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm config get prefix"),". The global modules are usually stored under ",(0,i.kt)("inlineCode",{parentName:"li"},"<prefix>/node_modules"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Environment Variables"),": Add the path to global NPM binaries to your system's PATH environment variable. This should be ",(0,i.kt)("inlineCode",{parentName:"li"},"<prefix>")," on Windows. To add to PATH, you can edit your environment variables or run ",(0,i.kt)("inlineCode",{parentName:"li"},"set PATH=%PATH%;<prefix>")," in the CMD."))),(0,i.kt)(r.Z,{value:"powershell",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Node.js and NPM"),": Ensure Node.js and NPM are installed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Global Installation"),": Check the global NPM modules path as in CMD."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Environment Variables"),": Update the PATH environment variable as in CMD. You can also use ",(0,i.kt)("inlineCode",{parentName:"li"},'$env:Path += ";<prefix>"')," to update the PATH temporarily in the current PowerShell session."))),(0,i.kt)(r.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Node.js and NPM"),": Ensure Node.js and NPM are installed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Global Installation"),": If globally installed, run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm config get prefix")," to get the global modules path, usually ",(0,i.kt)("inlineCode",{parentName:"li"},"<prefix>/lib/node_modules"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Environment Variables"),": Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"<prefix>/bin")," directory to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," if it's not already. You can do this by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"export PATH=$PATH:<prefix>/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.zshrc")," file."))))),(0,i.kt)("h2",{id:"calling-the-tool"},"Calling the Tool"),(0,i.kt)("p",null,"The behavior of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG importer")," can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mrg-import [ <paramlist> ]\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<paramlist>")," is an (optional) list of parameters."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("p",null,"The columns in the following table are defined as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Parameter"))," specifies the parameter and further specifications"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.")),(0,i.kt)("p",null,"If a configuration file used, the long version of the parameter must be used (without the preceding ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),").")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-c"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--config <path>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path (including the filename) of the tool's (YAML) configuration file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-s"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--scopedir <path>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path of the scope directory from which the tool is called.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-e"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--onNotExist <action>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The action in case an MRG file unexpectedly does not exist.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-V"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--version")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"output the version number of the tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-h"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--help")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"display help for command.")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"`-e`, `--onNotExist` Actions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"th"},"<action>")),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"an error is thrown (an exception is raised), and processing will stop.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a message is displayed (and logged) and processing continues.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'log'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a message is written to a log(file) and processing continues.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"processing continues as if nothing happened."))))),(0,i.kt)("h2",{id:"running-the-tool"},"Running the Tool"),(0,i.kt)("p",null,"The current version of the tool simply reads all ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," files from all ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," that are specifeid in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"),"."),(0,i.kt)("p",null,"It does so by reading the ",(0,i.kt)("a",{parentName:"p",href:"/docs/specs/files/saf#scopes"},(0,i.kt)("inlineCode",{parentName:"a"},"scopes")," section")," of its ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF")," (of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),"). This section contains entries, each of which specifies a ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetag")," field and a ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," field. We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"<my-stag>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<url>")," to refer to the values of these fields respectively."),(0,i.kt)("p",null,"For each such entry, the tool obtains the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF")," of that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", which is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"<url>"),", and from there, it determines the path of the (remote) ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir"),", as well as the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to identify Scopes from within a specific Scope"},"scopetag")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<stag>")," that it uses to refer to itself, and is used as part of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/specs/files/mrg#file-naming-conventions"},"filenames")," that contain ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs")," that are generated within that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,i.kt)("p",null,"Then, it copies all files from the remote ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," that are named ",(0,i.kt)("inlineCode",{parentName:"p"},"mrg.<stag>*.yaml")," to the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),", and replaces the ",(0,i.kt)("inlineCode",{parentName:"p"},"<stag>")," part with ",(0,i.kt)("inlineCode",{parentName:"p"},"<my-stag>")," (as the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," that calls itself ",(0,i.kt)("inlineCode",{parentName:"p"},"<stag>")," is called ",(0,i.kt)("inlineCode",{parentName:"p"},"<my-stag>")," in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),")."),(0,i.kt)("h2",{id:"exceptions"},"Exceptions, Warnings, and Logging"),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This section needs to be reviewed/revised so as to enable a consistent way of error checking and logging, similar to what is done in the TRRT")),(0,i.kt)("p",null,"The general principle is that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG importer")," helps its users to do their jobs. This means that errors that terminate the processing are limited to the max, that warnings (perhaps at different 'levels' of detail/severity) are given output whenever possible (yet may be limited by command-line options), and that texts are tailored for the envisaged users of the tool."),(0,i.kt)("p",null,"Also, the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2."},"MRGT")," provides suggestions that help tool-operators (",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators"),") to not only identify, but also fix any problems."))}u.isMDXComponent=!0}}]);