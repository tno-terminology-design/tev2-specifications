"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=n,h=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(3117),n=r(7294),o=r(6010),i=r(2466),l=r(6775),s=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function f(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=f(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:r,groupId:a}),[p,d]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),k=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var k=r(2389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),f=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:f},i,{className:(0,o.Z)("tabs__item",y,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=d(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(N,(0,a.Z)({key:String(t)},e))}},2022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,mark:()=>p,metadata:()=>s,toc:()=>u});var a=r(3117),n=(r(7294),r(3905)),o=r(4996);r(4866),r(5162);const i={id:"termref-selector",sidebar_label:"TermRef Selector",date:20231031},l="TermRef Selector Tool",s={unversionedId:"spec-tools-envisaged/termref-selector",id:"spec-tools-envisaged/termref-selector",title:"TermRef Selector Tool",description:"<img",source:"@site/docs/spec-tools-envisaged/13-termref-selector.md",sourceDirName:"spec-tools-envisaged",slug:"/spec-tools-envisaged/termref-selector",permalink:"/tev2-specifications/docs/spec-tools-envisaged/termref-selector",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools-envisaged/13-termref-selector.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1699368968,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:13,frontMatter:{id:"termref-selector",sidebar_label:"TermRef Selector",date:20231031},sidebar:"tev2SideBar",previous:{title:"Integrity Checker Tool (ICT)",permalink:"/tev2-specifications/docs/spec-tools-envisaged/ict"},next:{title:"MR Dictionary Generation",permalink:"/tev2-specifications/docs/spec-tools-envisaged/mrdt"}},c={},u=[{value:"How it is envisaged to work",id:"how-it-is-envisaged-to-work",level:2}],p=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},f={toc:u,mark:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"termref-selector-tool"},"TermRef Selector Tool"),(0,n.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"TermRef Selector")," tool is a variant of the ",(0,n.kt)("a",{parentName:"p",href:"@"},"trrt"),", the purpose of which is to provide a list of ",(0,n.kt)("a",{parentName:"p",href:"@"},"term selection instructions")," that can be used to create an ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG")," that contains an ",(0,n.kt)("a",{parentName:"p",href:"mrg-entry@"},"entry")," for every ",(0,n.kt)("a",{parentName:"p",href:"@"},"term")," for which a ",(0,n.kt)("a",{parentName:"p",href:"@"},"term ref")," exists in its input files."),(0,n.kt)("p",null,"In other words: if you have a set of files that contain ",(0,n.kt)("a",{parentName:"p",href:"@"},"term refs")," for which you want to create an ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG"),", you can specify these files as input for the ",(0,n.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," tool, and use its output in the ",(0,n.kt)("inlineCode",{parentName:"p"},"termselection")," field that is used to generate that ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG"),". Of course, you need to make sure that there is an entry in the ",(0,n.kt)("inlineCode",{parentName:"p"},"versions"),"-section in the ",(0,n.kt)("a",{parentName:"p",href:"@"},"SAF")," for this ",(0,n.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,n.kt)("p",null,"Alternatively, the ",(0,n.kt)("strong",{parentName:"p"},"TermRef Selector")," tool can provide a list of ",(0,n.kt)("a",{parentName:"p",href:"@"},"term selection instructions")," that can be used to prune an ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG")," such that it only contains contains ",(0,n.kt)("a",{parentName:"p",href:"mrg-entry@"},"entries")," that match at least one of the ",(0,n.kt)("a",{parentName:"p",href:"@"},"term refs")," in one of  its input files."),(0,n.kt)("p",null,"This setting allows for the creation of an MRG that contains overly many ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entries"),", and then reducing it to the ones that are actually needed."),(0,n.kt)("h2",{id:"how-it-is-envisaged-to-work"},"How it is envisaged to work"),(0,n.kt)("p",null,"Like the ",(0,n.kt)("a",{parentName:"p",href:"@"},"TRRT"),", the ",(0,n.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"expects the ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRGs")," that it should use to lookup the terms, to exist in the ",(0,n.kt)("a",{parentName:"li",href:"@"},"glossarydir")," of the ",(0,n.kt)("a",{parentName:"li",href:"@"},"current scope"),";"),(0,n.kt)("li",{parentName:"ul"},"looks for any ",(0,n.kt)("a",{parentName:"li",href:"@"},"term refs")," in the input documents, and attempts to locate the associated ",(0,n.kt)("a",{parentName:"li",href:"mrg-entry@"},"entry")," in the designated ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG"),".")),(0,n.kt)("p",null,"Unlike the ",(0,n.kt)("a",{parentName:"p",href:"@"},"TRRT"),", the ",(0,n.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," does not copy the input files"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"starts by creating an empty list of ",(0,n.kt)("a",{parentName:"li",href:"@"},"term identifiers")),(0,n.kt)("li",{parentName:"ol"},"processes all ",(0,n.kt)("a",{parentName:"li",href:"@"},"term refs")," of all input files, by",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"looking them up in the appropriate ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG")),(0,n.kt)("li",{parentName:"ul"},"adding a ",(0,n.kt)("a",{parentName:"li",href:"@"},"term identifiers")," for the ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG entry")," that matches the ",(0,n.kt)("a",{parentName:"li",href:"@"},"term ref")," (making sure there are no duplicates in the list)"))),(0,n.kt)("li",{parentName:"ol"},"writing output (possibly to a file), that consists of one line for each ",(0,n.kt)("a",{parentName:"li",href:"@"},"term identifier")," in the list that consists of the ",(0,n.kt)("a",{parentName:"li",href:"@"},"term selection instruction")," that instructs the ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRGT")," to add the term to a ",(0,n.kt)("a",{parentName:"li",href:"@"},"provisional MRG"),".")),(0,n.kt)("p",null,"In the alternative (pruning) functionality, the ",(0,n.kt)("a",{parentName:"p",href:"@"},"TermRef Selector")," expects an ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG")," to be designated for pruning, and replaces step 3 by the following steps:"),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"create a new (empty) list of ",(0,n.kt)("a",{parentName:"li",href:"@"},"term identifiers")),(0,n.kt)("li",{parentName:"ol"},"processes all ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG entries")," from the designated ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG"),", by adding the ",(0,n.kt)("a",{parentName:"li",href:"@"},"term identifier")," for any ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG entry")," to the new list if that ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG entry")," isn't referenced by any of the ",(0,n.kt)("a",{parentName:"li",href:"@"},"term identifiers")," in the first list"),(0,n.kt)("li",{parentName:"ol"},"writing output (possibly to a file), that consists of one line for each ",(0,n.kt)("a",{parentName:"li",href:"@"},"term identifier")," in the list that consists of the ",(0,n.kt)("a",{parentName:"li",href:"@"},"term selection instruction")," that instructs the ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRGT")," to remove the term from a ",(0,n.kt)("a",{parentName:"li",href:"@"},"provisional MRG"),".")))}m.isMDXComponent=!0}}]);