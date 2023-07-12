"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2960],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),c=n,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(7294),n=r(6010),i="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return w}});var a=r(7462),n=r(7294),i=r(6010),l=r(2466),o=r(6775),s=r(1980),u=r(7392),d=r(12);function m(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:m(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function h(e){var t,r,a,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,m=p(e),h=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!c({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:m})})),k=h[0],g=h[1],N=f({queryString:s,groupId:u}),v=N[0],y=N[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(t),a=r[0],i=r[1],[a,(0,n.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=b[0],C=b[1],x=function(){var e=null!=v?v:w;return c({value:e,tabValues:m})?e:null}();return(0,n.useLayoutEffect)((function(){x&&g(x)}),[x]),{selectedValue:k,selectValue:(0,n.useCallback)((function(e){if(!c({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),C(e)}),[y,C,m]),tabValues:m}}var k=r(2389),g="tabList__CuJ",N="tabItem_LNqP";function v(e){var t=e.className,r=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=d.indexOf(t),a=u[r].value;a!==o&&(m(t),s(a))},c=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,n=d.indexOf(e.currentTarget)+1;r=null!=(a=d[n])?a:d[0];break;case"ArrowLeft":var i,l=d.indexOf(e.currentTarget)-1;r=null!=(i=d[l])?i:d[d.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,l=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return d.push(e)},onKeyDown:c,onClick:p},l,{className:(0,i.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===a}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function b(e){var t=h(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",g)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return n.createElement(b,(0,a.Z)({key:String(t)},e))}},9016:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},mark:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=(r(4996),r(4866),r(5162),["components"]),o={id:"hrg-termselcrit",displayed_sidebar:"tev2SideBar","// hide_table_of_contents":!0,scopetag:"tev2",date:20230103},s="HRG Selection Criteria",u={unversionedId:"tev2/spec-syntax/hrg-termselcrit",id:"tev2/spec-syntax/hrg-termselcrit",title:"HRG Selection Criteria",description:"text to mark",source:"@site/docs/tev2/spec-syntax/31-hrg-termselcrit.md",sourceDirName:"tev2/spec-syntax",slug:"/tev2/spec-syntax/hrg-termselcrit",permalink:"/docs/tev2/spec-syntax/hrg-termselcrit",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/spec-syntax/31-hrg-termselcrit.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1689141036,formattedLastUpdatedAt:"Jul 12, 2023",sidebarPosition:31,frontMatter:{id:"hrg-termselcrit",displayed_sidebar:"tev2SideBar","// hide_table_of_contents":!0,scopetag:"tev2",date:20230103},sidebar:"tev2SideBar",previous:{title:"Form Phrases",permalink:"/docs/tev2/spec-syntax/form-phrase-syntax"},next:{title:"Terminology Construction",permalink:"/docs/tev2/spec-tools/terminology-construction"}},d={},m=[{value:"Adding terms",id:"syntax-add",level:2},{value:"Removing terms",id:"syntax-remove",level:2}],p=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},c={toc:m,mark:p};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hrg-selection-criteria"},"HRG Selection Criteria"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," generate an ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," from a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),", they may want to specify the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," to be included in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," (or preventing specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," from being included)."),(0,i.kt)("p",null,"This can be done by using the same mechanism for ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/terminology-construction"},"terminology construction")," as is used for generating ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs"),". The differences are that there is only one source, i.e. the particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," from which the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," is generated. Thus, references to ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," that have no corresponding ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," in that ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," are invalid. Also, there is no need for renaming syntax."),(0,i.kt)("p",null,"If generating an ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," requires the selection of terms, the instructions are to be specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"termselcrit")," field of the configuration file specified as an argument on the command-line when calling the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT"),"."),(0,i.kt)("h2",{id:"syntax-add"},"Adding terms"),(0,i.kt)("p",null,"The following instructions can be used for adding ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," (whitespace in the syntax is disregarded):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"The instruction adds every ",(0,i.kt)("a",{parentName:"th",href:"@"},"MRG entry")," from the ",(0,i.kt)("a",{parentName:"th",href:"@"},"MRG")," to the ",(0,i.kt)("a",{parentName:"th",href:"@"},"terminology under construction")," ..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"terms [ <termslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,i.kt)("inlineCode",{parentName:"td"},"term"),"-field is an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tags  [ <grouptagslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")," field contains an element that is also an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<grouptagslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"left"},"that exists within the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," from which the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG")," is generated.")))),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<termslist>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," are comma-separated lists of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," and ",(0,i.kt)("a",{parentName:"li",href:"@"},"grouptags")," respectively."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," will only be added to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology under construction")," if it does not already exist.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"terms[party]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"finds the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entry")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," ",(0,i.kt)("inlineCode",{parentName:"td"},"party"),", and adds it to the selected set of ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tags[management,governance]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"finds the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms")," ",(0,i.kt)("inlineCode",{parentName:"td"},"management")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"governance"),", and adds them to the selected set of ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"left"},"selects all ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms")," from the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG"),", and adds them to the selected set of ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms"),"."))))),(0,i.kt)("h2",{id:"syntax-remove"},"Removing terms"),(0,i.kt)("p",null,"The following instructions can be used for removing ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," from the set of selected ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," (whitespace in the syntax is disregarded):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"The instruction removes every ",(0,i.kt)("a",{parentName:"th",href:"@"},"MRG entry")," from the ",(0,i.kt)("a",{parentName:"th",href:"@"},"terminology under construction")," ..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-terms [ <termslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,i.kt)("inlineCode",{parentName:"td"},"term"),"-field is an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-tags  [ <grouptagslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")," field contains an element that is also an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<groutagslist>"),".")))),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<termslist>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," are comma-separated lists of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms"),", and ",(0,i.kt)("a",{parentName:"li",href:"@"},"grouptags")," respectively."),(0,i.kt)("li",{parentName:"ul"},"Elements of the ",(0,i.kt)("inlineCode",{parentName:"li"},"<termslist>")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," that do not lead to the removal of an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," may be logged.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-terms[party, actor]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"removes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that have either ",(0,i.kt)("inlineCode",{parentName:"td"},"party")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"actor")," in its ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-tags[management]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"removes all ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that have a ",(0,i.kt)("a",{parentName:"td",href:"@"},"grouptag")," ",(0,i.kt)("inlineCode",{parentName:"td"},"management"),"."))))))}f.isMDXComponent=!0}}]);