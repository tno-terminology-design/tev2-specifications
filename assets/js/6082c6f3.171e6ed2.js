"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6214],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,p=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(p,o(o({ref:t},u),{},{components:n})):a.createElement(p,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(6010),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7462),i=n(7294),r=n(6010),o=n(2466),s=n(6775),l=n(1980),c=n(7392),u=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,i.useCallback)((function(e){if(o){var t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[o,r])]}function f(e){var t,n,a,r,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,d=h(e),f=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:d})})),g=f[0],b=f[1],y=p({queryString:l,groupId:c}),v=y[0],G=y[1],R=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,i.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=R[0],k=R[1],H=function(){var e=null!=v?v:w;return m({value:e,tabValues:d})?e:null}();return(0,i.useLayoutEffect)((function(){H&&b(H)}),[H]),{selectedValue:g,selectValue:(0,i.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),G(e),k(e)}),[G,k,d]),tabValues:d}}var g=n(2389),b="tabList__CuJ",y="tabItem_LNqP";function v(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(d(t),l(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var a,i=u.indexOf(e.currentTarget)+1;n=null!=(a=u[i])?a:u[0];break;case"ArrowLeft":var r,o=u.indexOf(e.currentTarget)-1;n=null!=(r=u[o])?r:u[u.length-1]}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:h},o,{className:(0,r.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function G(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=r.find((function(e){return e.props.value===a}));return o?(0,i.cloneElement)(o,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function R(e){var t=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",b)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(G,(0,a.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return i.createElement(R,(0,a.Z)({key:String(t)},e))}},6286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(4996),s=(n(4866),n(5162),["components"]),l={id:"hrg",sidebar_label:"HRG (Human Readable Glossary)",date:20220503},c="Human Readable Glossary (HRG)",u={unversionedId:"spec-files/hrg",id:"spec-files/hrg",title:"Human Readable Glossary (HRG)",description:"<img",source:"@site/docs/spec-files/22-hrg.md",sourceDirName:"spec-files",slug:"/spec-files/hrg",permalink:"/tev2-specifications/docs/spec-files/hrg",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-files/22-hrg.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1696247870,formattedLastUpdatedAt:"Oct 2, 2023",sidebarPosition:22,frontMatter:{id:"hrg",sidebar_label:"HRG (Human Readable Glossary)",date:20220503},sidebar:"tev2SideBar",previous:{title:"MRG (Machine Readable Glossary)",permalink:"/tev2-specifications/docs/spec-files/mrg"},next:{title:"MRD (Machine Readable Dictionary)",permalink:"/tev2-specifications/docs/spec-files/mrd"}},d={},h=[],m={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"human-readable-glossary-hrg"},"Human Readable Glossary (HRG)"),(0,r.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"This document specifies the contents of the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"Human Readable Glossary")," file (",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),")."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," is a ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossary",hovertext:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," is meant to be readable by humans, so that they can find out the meaning of ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," as they are used in the context in which that ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossary",hovertext:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," is valid. Thus, ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," come in human readable formats, such as HTML or PDF."),(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," are generated by the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrgt",hovertext:"Human Readable Glossary Tool (HRGT): a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," [tool](/docs/spec-tools/hrgt), which allows its output to be highly customized. For example, the tool expects that its user specifies - the set of ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that need to be included; - the particular way in which a ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," (and its description) appear in the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrgt",hovertext:"Human Readable Glossary Tool (HRGT): a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),"- any attributes (e.g. contributors, authors, license information etc.) need to be part of such a description, or need to be mentioned in the beginning or the end of the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),"- etc. ## File naming conventions",(0,r.kt)("p",null,"Within (the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," of) a particular ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),", we can generate (or import) and hence find all ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),"-files that are needed within that ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". We use the following file naming convention:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hrg.<scopetag>.<vsntag>.<output>"))," is the name of a file that contains an actual ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),", or it is a file that links (references) such a file, where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<scopetag>.<vsntag>"))," is taken from the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),"-file from which the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," is generated. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/spec-files/mrg#mrg-file-naming"},"MRG file naming")," for details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<output>"))," is a text that has been provided by the user that generated the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),". It includes the file extension (e.g., PDF, HTML, etc.) that is appropriate for its contents. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/spec-tools/hrgt#calling-the-tool"},"HRG generation")," for details.")),(0,r.kt)("p",null,"This naming convention enables tools (as well as ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," and others) that operate within a particular ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", to quickly find a particular ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," that is relevant for that ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We need to decide whether this document actually describes "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"(the possible structures of) HRGs, or"),(0,r.kt)("li",{parentName:"ul"},"the ways in hwich the generation of an HRG can be specified"))))}p.isMDXComponent=!0}}]);