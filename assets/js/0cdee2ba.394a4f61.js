"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=p(r),u=a,d=f["".concat(c,".").concat(u)]||f[u]||l[u]||i;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const i={term:"scoped-term",termType:"concept",isa:"term",glossaryTerm:"Scoped Term",glossaryText:"a [term](@) that represents (and [identifies](@)) a specific [semantic unit](@) of a particular [community](@) (or [party](@)).",grouptags:null,formPhrases:"scoped-term{ss}",status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-08-04T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},o="Scoped Term",s={unversionedId:"terms/scoped-term",id:"terms/scoped-term",title:"Scoped Term",description:"Summary",source:"@site/docs/terms/scoped-term.md",sourceDirName:"terms",slug:"/terms/scoped-term",permalink:"/tev2-specifications/docs/terms/scoped-term",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/scoped-term.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1695710108,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{term:"scoped-term",termType:"concept",isa:"term",glossaryTerm:"Scoped Term",glossaryText:"a [term](@) that represents (and [identifies](@)) a specific [semantic unit](@) of a particular [community](@) (or [party](@)).",grouptags:null,formPhrases:"scoped-term{ss}",status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-08-04T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},p=[{value:"Summary",id:"summary",level:3}],m={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scoped-term"},"Scoped Term"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"scoped term")," is a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," that represents (and ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies"),") a specific ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," of a particular ",(0,a.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/community",title:"Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively."},"community")," (or ",(0,a.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",title:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),")."))}l.isMDXComponent=!0}}]);