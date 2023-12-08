"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1340],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>u});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(o),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return o?n.createElement(f,i(i({ref:t},m),{},{components:o})):n.createElement(f,i({ref:t},m))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2241:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(3117),a=(o(7294),o(3905));const r={},i="Installation",l={unversionedId:"spec-tools/tool-docs/mrg-import/installation",id:"spec-tools/tool-docs/mrg-import/installation",title:"Installation",description:"Prerequisites",source:"@site/docs/spec-tools/tool-docs/mrg-import/1-installation.md",sourceDirName:"spec-tools/tool-docs/mrg-import",slug:"/spec-tools/tool-docs/mrg-import/installation",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/installation",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/tool-docs/mrg-import/1-installation.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1700853879,formattedLastUpdatedAt:"Nov 24, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Human Readable Glossary Tool (HRGT)",permalink:"/tev2-specifications/docs/spec-tools/hrgt"},next:{title:"Usage",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/usage"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Installation",id:"quick-installation",level:2}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before proceeding with the installation, ensure that you have the following prerequisites installed on your system:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://nodejs.org/"},"Node.js"),": The ",(0,a.kt)("a",{parentName:"li",href:"@"},"MRG Import Tool")," is a Node.js-based tool, so you need to have ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," installed on your system. You can download Node.js from the official website: ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js Download Page")," or use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"npm"),": npm (Node Package Manager) is bundled with Node.js and is used to manage dependencies and packages for Node.js applications. Although you could install the ",(0,a.kt)("a",{parentName:"li",href:"@"},"MRG Import Tool")," using ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone")," and build the package yourself (see ",(0,a.kt)("a",{parentName:"li",href:"#testing"},"testing"),"), obtaining/installing the built package through npm is documented below.")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," has been tested on ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js")," v18 (LTS) through v20. While the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," should work with newer versions of ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js"),", it is essential to be aware of potential compatibility issues with older versions. If you encounter any problems or unexpected behavior while using the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," with a different ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js")," version, consider using any of the versions specified above."),(0,a.kt)("h2",{id:"quick-installation"},"Quick Installation"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"deployment"},"deployment")," for an example of how the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," and its prerequisites may be installed and deployed."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the latest version of the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," globally by running the following ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tno-terminoloy-design/mrg-import"},"npm")," command."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @tno-terminology-design/mrg-import\n")),(0,a.kt)("p",{parentName:"li"},"This will install the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," globally on your system, making it available as a command-line tool.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify that the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," is installed correctly by running the following command."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mrg-import --version\n")),(0,a.kt)("p",{parentName:"li"},"This should display the version number of the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool"),", confirming that the installation was successful."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For usage and configuration of the tool please refer to the ",(0,a.kt)("a",{parentName:"strong",href:"usage"},"usage")," section next.")))}c.isMDXComponent=!0}}]);