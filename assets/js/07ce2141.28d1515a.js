"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[3459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(3117),o=(n(7294),n(3905));const i={id:"making-hovertexts-work"},a="Making Hovertexts Work",s={unversionedId:"miscellaneous/making-hovertexts-work",id:"miscellaneous/making-hovertexts-work",title:"Making Hovertexts Work",description:"Example: Docusaurus custom.css file",source:"@site/docs/miscellaneous/making-hovertexts-work.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/making-hovertexts-work",permalink:"/tev2-specifications/docs/miscellaneous/making-hovertexts-work",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/miscellaneous/making-hovertexts-work.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1705924742,formattedLastUpdatedAt:"Jan 22, 2024",frontMatter:{id:"making-hovertexts-work"},sidebar:"tev2SideBar",previous:{title:"Form Phrases",permalink:"/tev2-specifications/docs/miscellaneous/form-phrase-syntax"},next:{title:"Notations and Conventions",permalink:"/tev2-specifications/docs/miscellaneous/notations-and-conventions"}},c={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"making-hovertexts-work"},"Making Hovertexts Work"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example: Docusaurus `custom.css` file"),"/** * Any CSS included here will be global. The classic template * bundles Infima by default. Infima is a CSS framework designed to * work well for content-centric websites. */",(0,o.kt)("p",null,"/",(0,o.kt)("em",{parentName:"p"}," You can override the default Infima variables here. "),"/\n:root {\n--ifm-color-primary: #ac3c7a;\n--ifm-color-primary-dark: #9b366e;\n--ifm-color-primary-darker: #923368;\n--ifm-color-primary-darkest: #782a55;\n--ifm-color-primary-light: #bd4286;\n--ifm-color-primary-lighter: #c04b8c;\n--ifm-color-primary-lightest: #c9649c;\n--ifm-code-font-size: 95%;\n}\nhtml","[data-theme='dark']"," {\nbackground: var(--ifm-color-emphasis-100);\n}"),(0,o.kt)("p",null,".docusaurus-highlight-code-line {\nbackground-color: rgb(72, 77, 91);\ndisplay: block;\nmargin: 0 calc(-1 * var(--ifm-pre-padding));\npadding: 0 var(--ifm-pre-padding);\n}"),(0,o.kt)("p",null,".hero\n.button.button--secondary.button--outline:not(.button--active):not(:hover) {\ncolor: var(--ifm-color-secondary);\n}"),(0,o.kt)("p",null,"a","[hovertext]"," {\nposition: relative;\ncursor: help;\nfont-weight: 600;\n}"),(0,o.kt)("p",null,"a","[hovertext]","::after {\ncontent: attr(hoverText);\nposition: absolute;\nwidth: max-content;\nbackground: var(--ifm-color-content);\ncolor: var(--ifm-color-content-inverse);\nfont-size: var(--ifm-code-font-size);\nfont-weight: 400;\nmax-width: 25vw;\npadding: 4px 8px;\nborder-radius: 4px;\nline-height: 1.2em;\nwhite-space: pre-wrap;\nword-break: break-word;\ntop: calc(100% + 10px);\ntransform: translateX(-50%);\ntransition: opacity 0.3s, visibility 0.3s;\npointer-events: none;\nz-index: 1;\nopacity: 0;\nvisibility: hidden;\n}"),(0,o.kt)("p",null,"a","[hovertext]",":hover::after {\nvisibility: visible;\nopacity: .95;\n}")))}m.isMDXComponent=!0}}]);