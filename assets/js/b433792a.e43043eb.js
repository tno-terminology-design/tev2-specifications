"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[186],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),f=a,h=d["".concat(p,".").concat(f)]||d[f]||m[f]||n;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6999:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(3117),a=(o(7294),o(3905));const n={},i="Error Reporting",s={unversionedId:"spec-tools/tool-docs/mrg-import/error-reporting",id:"spec-tools/tool-docs/mrg-import/error-reporting",title:"Error Reporting",description:"During execution the MRG Import Tool outputs information about the state of the tool to the console. All console messages listed in the section below include timestamps, information about the type of message, and the object which caused the message. Error messages may also supply additional information about the error supplied by Node.js directly.",source:"@site/docs/spec-tools/tool-docs/mrg-import/4-error-reporting.md",sourceDirName:"spec-tools/tool-docs/mrg-import",slug:"/spec-tools/tool-docs/mrg-import/error-reporting",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/error-reporting",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/tool-docs/mrg-import/4-error-reporting.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1700853879,formattedLastUpdatedAt:"Nov 24, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Deployment",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/deployment"},next:{title:"Testing",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/testing"}},p={},l=[{value:"Error Messages",id:"error-messages",level:2}],c={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-reporting"},"Error Reporting"),(0,a.kt)("p",null,"During execution the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG Import Tool")," outputs information about the state of the tool to the console. All console messages listed in the section below include timestamps, information about the type of message, and the object which caused the message. ",(0,a.kt)("a",{parentName:"p",href:"#error-messages"},"Error messages")," may also supply additional information about the error supplied by ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js")," directly."),(0,a.kt)("p",null,"The list of messages below gives additional information about the messages reported in the console. Most messages include some kind of placeholder to give more specific details. All placeholders are marked in ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," format, and most are also surrounded by apostrophes ('')."),(0,a.kt)("h2",{id:"error-messages"},"Error Messages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E002 Missing required property in SAF at '",(0,a.kt)("inlineCode",{parentName:"em"},"safURL"),"': '",(0,a.kt)("inlineCode",{parentName:"em"},"missingProperties"),"'")),(0,a.kt)("br",null),"\nA required property could not be located in the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF"),"'s scope section at ",(0,a.kt)("inlineCode",{parentName:"p"},"safURL"),", the error message should state the missing properties at the ",(0,a.kt)("inlineCode",{parentName:"p"},"missingProperties")," placeholder. See the ",(0,a.kt)("a",{parentName:"p",href:"specifications"},"specifications")," to see information about the required ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," properties.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E003 Missing required property in MRG at '",(0,a.kt)("inlineCode",{parentName:"em"},"mrgURL"),"': '",(0,a.kt)("inlineCode",{parentName:"em"},"missingProperties"),"'")),(0,a.kt)("br",null),"\nA required property could not be located in the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),"'s terminology section at ",(0,a.kt)("inlineCode",{parentName:"p"},"mrgURL"),", the error message should state the missing properties at the ",(0,a.kt)("inlineCode",{parentName:"p"},"missingProperties")," placeholder. Check the ",(0,a.kt)("a",{parentName:"p",href:"specifications"},"specifications")," to see information about the required ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," properties.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E004 SAF request of '",(0,a.kt)("inlineCode",{parentName:"em"},"safURL"),"' failed with status code ",(0,a.kt)("inlineCode",{parentName:"em"},"status"))),(0,a.kt)("br",null),"\nThe requested ",(0,a.kt)("inlineCode",{parentName:"p"},"safURL")," could not be downloaded and the server returned ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"HTTP status code")," ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),". Check if the raw file URL in the request listed above this error points to the correct file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E005 SAF interpretation of '",(0,a.kt)("inlineCode",{parentName:"em"},"safURL"),"' failed due to a YAML parsing error")),(0,a.kt)("br",null),"\nThe downloaded ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"safURL")," could not be interpreted by the YAML parser. Some additional information on the cause of this error should be displayed underneath this message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E006 ",(0,a.kt)("inlineCode",{parentName:"em"},"error"),", halting execution as requested by the 'onNotExist' throw option")),(0,a.kt)("br",null),"\nSomething with cause ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," went wrong while handling an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"onNotExist")," parameter value was set to ",(0,a.kt)("inlineCode",{parentName:"p"},"throw"),", so the tool execution was halted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E007 Error creating directory '",(0,a.kt)("inlineCode",{parentName:"em"},"dirPath"),"'")),(0,a.kt)("br",null),"\nCreating the specified (sub)directory path ",(0,a.kt)("inlineCode",{parentName:"p"},"dirPath")," has failed. Some additional information on the cause of this error should be displayed underneath this message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E008 Error writing file '",(0,a.kt)("inlineCode",{parentName:"em"},"filePath"),"'")),(0,a.kt)("br",null),"\nWriting the specified file ",(0,a.kt)("inlineCode",{parentName:"p"},"filePath")," has failed. Some additional information on the cause of this error should be displayed underneath this message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E009 Unsupported Git platform ",(0,a.kt)("inlineCode",{parentName:"em"},"platform"))),(0,a.kt)("br",null),"\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"platform")," of the parsed URL is unknown as a source by tool and can not be converted into a raw URL for getting data. View URL handling information in ",(0,a.kt)("a",{parentName:"p",href:"usage#url-handling"},"usage")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E011 Failed to read or parse the config file '",(0,a.kt)("inlineCode",{parentName:"em"},"filePath"),"'")),(0,a.kt)("br",null),"\nSomething went wrong during the interpretation of the config file at ",(0,a.kt)("inlineCode",{parentName:"p"},"filePath"),". Some additional information on the cause of this error should be displayed underneath this message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E012 Something unexpected went wrong")),(0,a.kt)("br",null),"\nThis error message should only be seen when an error occurs that results in the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," import process is not able to complete normally. Some additional information on the cause of this error should be displayed underneath this message."))))}m.isMDXComponent=!0}}]);