"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6595],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),l=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=l(a),f=n,p=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return a?r.createElement(p,o(o({ref:e},d),{},{components:a})):r.createElement(p,o({ref:e},d))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2082:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(3117),n=(a(7294),a(3905));const i={id:"front-matter",displayed_sidebar:"tev2SideBar",term:"front-matter",termType:"concept",isa:null,glossaryTerm:"Front Matter",glossaryText:"a section at the top of a file that contains YAML (or similarly formatted) metadata, such as title, description, tags, and more. It is used in static site generators, as well as by [TEv2](@). The front-matter must be the first thing in the file and must be enclosed in triple-dashed lines for YAML.",status:"proposed",created:20240121,updated:20240121,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},o="Front Matter",s={unversionedId:"terms/front-matter",id:"terms/front-matter",title:"Front Matter",description:"Front-matter is a section at the top of a file that contains YAML, TOML, or JSON-formatted metadata. This metadata can include information such as title, description, date, tags, and more. It is used in static site generators like Docusaurus, Hugo and Jekyll to add additional information to the content files, which can then be used in generating the site. The front-matter must be the first thing in the file and must be enclosed in triple-dashed lines for YAML.",source:"@site/docs/terms/front-matter.md",sourceDirName:"terms",slug:"/terms/front-matter",permalink:"/tev2-specifications/docs/terms/front-matter",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/front-matter.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1706819196,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"front-matter",displayed_sidebar:"tev2SideBar",term:"front-matter",termType:"concept",isa:null,glossaryTerm:"Front Matter",glossaryText:"a section at the top of a file that contains YAML (or similarly formatted) metadata, such as title, description, tags, and more. It is used in static site generators, as well as by [TEv2](@). The front-matter must be the first thing in the file and must be enclosed in triple-dashed lines for YAML.",status:"proposed",created:20240121,updated:20240121,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},l=[{value:"TEv2 use of front matter",id:"tev2-use-of-front-matter",level:2},{value:"Front matter use in static site generators",id:"front-matter-use-in-static-site-generators",level:2}],d={toc:l};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"front-matter"},"Front Matter"),(0,n.kt)("p",null,"Front-matter is a section at the top of a file that contains YAML, TOML, or JSON-formatted metadata. This metadata can include information such as title, description, date, tags, and more. It is used in static site generators like Docusaurus, Hugo and Jekyll to add additional information to the content files, which can then be used in generating the site. The front-matter must be the first thing in the file and must be enclosed in triple-dashed lines for YAML."),(0,n.kt)("h2",{id:"tev2-use-of-front-matter"},"TEv2 use of front matter"),(0,n.kt)("p",null,"TEv2 uses front-matter for the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line. Headers live in Curated Text Files."},"header")," of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts"),", and expects it to be in YAML format. This m akes TEv2 useable with, e.g., static site generators that also use YAML-formatted front matter."),(0,n.kt)("h2",{id:"front-matter-use-in-static-site-generators"},"Front matter use in static site generators"),(0,n.kt)("p",null,"Various static site generators use front matter to provide metadata:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/create-a-doc"},"Docusaurus, front matter")," is used to provide additional metadata for documentation pages, enhancing the management and presentation of content. It is specified at the top of Markdown files, enclosed by triple-dashed lines, and parsed as YAML. The front matter is optional, as Docusaurus can infer essential metadata automatically. However, it's beneficial for defining specific attributes like document ID (",(0,n.kt)("inlineCode",{parentName:"p"},"id"),"), title (",(0,n.kt)("inlineCode",{parentName:"p"},"title"),"), tags (",(0,n.kt)("inlineCode",{parentName:"p"},"tags"),"), and custom URL paths (",(0,n.kt)("inlineCode",{parentName:"p"},"slug"),"). This flexibility allows for rich content creation and precise control over documentation structure and presentation. Additionally, Docusaurus supports custom front matter fields, enabling developers to tailor their documentation to specific needs, making it a powerful tool for creating structured, informative, and interactive documentation sites.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("a",{parentName:"p",href:"https://gohugo.io/content-management/front-matter/"},"Hugo, front-matter")," can be written in YAML, TOML, or JSON format, and it allows you to keep metadata attached to an instance of a content type. This feature provides Hugo with its strength, making it possible to manage content efficiently. For example, front-matter in Hugo can be used to define predefined variables like date, title, or draft status, or you can create custom variables according to your needs.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Jekyll"),", any file containing a YAML front-matter block will be processed as a special file. The front-matter must be the first thing in the file and must be in the form of valid YAML set between triple-dashed lines. The variables defined within these lines will be available to access using Liquid tags throughout the file and any layouts or includes the page or post relies on."))),(0,n.kt)("p",null,"For more detailed information, you can visit:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/create-a-doc"},"Docusaurus Front Matter Documentation"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gohugo.io/content-management/front-matter/"},"Hugo Front Matter Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jekyllrb.com/docs/front-matter/"},"Jekyll Front Matter Documentation"))))}u.isMDXComponent=!0}}]);