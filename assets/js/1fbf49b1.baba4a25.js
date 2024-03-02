"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5662],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(o),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||n;return o?r.createElement(m,s(s({ref:t},p),{},{components:o})):r.createElement(m,s({ref:t},p))}));function d(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,s=new Array(n);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<n;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2991:(e,t,o)=>{o.d(t,{Z:()=>v});var r=o(7294),i=o(6010),n=o(3438),s=o(9960),a=o(3919),c=o(5999);const l="cardContainer_fWXF",p="cardTitle_rnsV",f="cardDescription_PWke";function u(e){let{href:t,children:o}=e;return r.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},o)}function d(e){let{href:t,icon:o,title:n,description:s}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",p),title:n},o," ",n),s&&r.createElement("p",{className:(0,i.Z)("text--truncate",f),title:s},s))}function m(e){let{item:t}=e;const o=(0,n.Wl)(t);return o?r.createElement(d,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const o=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:o,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const o=(0,n.jA)();return r.createElement(v,{items:o.items,className:t})}function v(e){const{items:t,className:o}=e;if(!t)return r.createElement(y,e);const s=(0,n.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",o)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},4686:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=o(3117),i=(o(7294),o(3905)),n=o(2991);const s={id:"specs-tools",description:"This section contains the specifications of the various TOOLS that exist, and that are available in the official [tev2-tools github repository](https://github.com/tno-terminology-design/tev2-tools)."},a="Specifications - Tools",c={unversionedId:"categories/specs-tools",id:"categories/specs-tools",title:"Specifications - Tools",description:"This section contains the specifications of the various TOOLS that exist, and that are available in the official [tev2-tools github repository](https://github.com/tno-terminology-design/tev2-tools).",source:"@site/docs/categories/36-specs-tools.md",sourceDirName:"categories",slug:"/categories/specs-tools",permalink:"/tev2-specifications/docs/categories/specs-tools",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/categories/36-specs-tools.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1709303896,formattedLastUpdatedAt:"Mar 1, 2024",sidebarPosition:36,frontMatter:{id:"specs-tools",description:"This section contains the specifications of the various TOOLS that exist, and that are available in the official [tev2-tools github repository](https://github.com/tno-terminology-design/tev2-tools)."},sidebar:"tev2SideBar",previous:{title:"Handlebars Helpers",permalink:"/tev2-specifications/docs/specs/syntax/handlebars-helper-functions"},next:{title:"TRRT - Term Ref Resolution",permalink:"/tev2-specifications/docs/specs/tools/trrt"}},l={},p=[],f={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"specifications---tools"},"Specifications - Tools"),(0,i.kt)("p",null,"This section contains the specifications of the various TOOLS that exist within ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),"."),(0,i.kt)("p",null,"These tools are available in the official ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/tev2-tools"},"tev2-tools github repository"),"."),(0,i.kt)(n.Z,{folder:"/docs/specs/tools",mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);