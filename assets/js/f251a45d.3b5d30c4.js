"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[608],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(3117),r=a(7294),i=a(6010),o=a(2389),l=a(7392),s=a(7094),p=a(2466),d="tabList__CuJ",m="tabItem_LNqP";function h(e){var t,a,o=e.lazy,h=e.block,f=e.defaultValue,c=e.values,u=e.groupId,k=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),w=b.tabGroupChoices,C=b.setTabGroupChoices,G=(0,r.useState)(y),M=G[0],R=G[1],T=[],x=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var A=w[u];null!=A&&A!==M&&g.some((function(e){return e.value===A}))&&R(A)}var E=function(e){var t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==M&&(x(t),R(n),null!=u&&C(u,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=T.indexOf(e.currentTarget)+1;a=null!=(n=T[r])?n:T[0];break;case"ArrowLeft":var i,o=T.indexOf(e.currentTarget)-1;a=null!=(i=T[o])?i:T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":h},k)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:function(e){return T.push(e)},onKeyDown:_,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":M===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(N.filter((function(e){return e.props.value===M}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==M})}))))}function f(e){var t=(0,o.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},31:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return h},assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=(a(4996),a(5488),a(5162),["components"]),l={id:"tev2-toolbox-mrgt",title:"MRG Generation Tool (MRGT)",sidebar_label:"MRGT - MRG Generation Tool",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20220421},s=void 0,p={unversionedId:"tev2/tev2-toolbox-mrgt",id:"tev2/tev2-toolbox-mrgt",title:"MRG Generation Tool (MRGT)",description:"text to mark",source:"@site/docs/tev2/tev2-toolbox-mrgt.md",sourceDirName:"tev2",slug:"/tev2/tev2-toolbox-mrgt",permalink:"/framework/docs/tev2/tev2-toolbox-mrgt",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-toolbox-mrgt.md",tags:[],version:"current",frontMatter:{id:"tev2-toolbox-mrgt",title:"MRG Generation Tool (MRGT)",sidebar_label:"MRGT - MRG Generation Tool",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20220421},sidebar:"tev2SideBar",previous:{title:"TRRT - Term Ref Resolution Tool",permalink:"/framework/docs/tev2/tev2-toolbox-trrt"},next:{title:"HRGT - HRG Generation Tool",permalink:"/framework/docs/tev2/tev2-toolbox-hrgt"}},d={},m=[{value:"Generating an MRG",id:"generating-an-mrg",level:2},{value:"Creating an MRG Entry",id:"creating-an-mrg-entry",level:3},{value:"Creating a MRG",id:"creating-a-mrg",level:3}],h=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},f={toc:m,Mark:h};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,i.kt)("a",{parentName:"strong",href:"@"},"MRGT"),")")," generates a Machine Readable Inventory (that we call a Machine Readable Glossary or ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),"), that renders the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," of a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," into a specific, well-defined ",(0,i.kt)("a",{parentName:"p",href:"tev2-spec-mrg"},"format"),". This Inventory is not a ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," because it contains all ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," that are ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated")," within the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),": apart from ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms"),", it would also include e.g., ",(0,i.kt)("a",{parentName:"p",href:"pattern@"},"mental models")," and ",(0,i.kt)("a",{parentName:"p",href:"@"},"use cases"),". We choose to maintain the ",(0,i.kt)("a",{parentName:"p",href:"@"},"term"),' "Machine Readable Glossary" (',(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),"), because most of us would view it - initially, at least - as a list of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," and their ",(0,i.kt)("a",{parentName:"p",href:"@"},"definitions"),"."),(0,i.kt)("p",null,"The (newly generated) ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," is meant to be processed by the other tools in the toolbox, regardless of whether such tools are called from within the context of another ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". Therefore, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," contains meta-data for all of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," that exist in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", so it can serve as the single, authoritative source of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("h2",{id:"generating-an-mrg"},"Generating an MRG"),(0,i.kt)("p",null,"Typically, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," uses the ",(0,i.kt)("a",{parentName:"p",href:"SAF@"},"Scope Administration File")," to learn what it has to generate, by executing the following steps in the provided sequence:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"it creates the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," ",(0,i.kt)("inlineCode",{parentName:"li"},"terminology")," section, which consists of copying relevant fields from the appropriate ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," element in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),"."),(0,i.kt)("li",{parentName:"ol"},"it processes the list of ",(0,i.kt)("a",{parentName:"li",href:"@"},"term selection criteria")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"termselcrit")," field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," element of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),", so as to create the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminological artifacts")," for each of which an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," needs to be created. Then, the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," creates the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopetags")," that identify the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopes")," in which these ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminological artifacts")," are ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated"),", and for each of them, obtains the corresponding ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopedir")," (from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopes")," section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),"). Using the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopetags")," and associated ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopedirs"),", it creates the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopes")," section (of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG"),")."),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"entries")," section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," is created, and one ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," is created for each of the elements from the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminological artifacts"),". The structure of each such ",(0,i.kt)("a",{parentName:"li",href:"mrg-entry@"},"entry")," depends on the type of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminological artifact"),", as specified below."),(0,i.kt)("li",{parentName:"ol"},"the result is put at the location as specified by the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),", and the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF")," itself is updated as necessary.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," logs conditions that prevent it from properly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"obtaining the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopedir")," from a ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopetag"),";"),(0,i.kt)("li",{parentName:"ul"},"parsing a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated file")," (e.g. because it is not in the expected format);"),(0,i.kt)("li",{parentName:"ul"},"resolving ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"s, ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope tags"),", ",(0,i.kt)("a",{parentName:"li",href:"@"},"group tags"),", or ",(0,i.kt)("a",{parentName:"li",href:"@"},"version tags"),";"),(0,i.kt)("li",{parentName:"ul"},"writing the output (e.g. because it has no write-permission for the designated location);"),(0,i.kt)("li",{parentName:"ul"},"etc.;")),(0,i.kt)("p",null,"Also, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," provides suggestions that help tool-operators (",(0,i.kt)("a",{parentName:"p",href:"@"},"curators"),") to not only identify, but also fix any problems."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."),(0,i.kt)("h3",{id:"creating-an-mrg-entry"},"Creating an MRG Entry"),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," is either a literal copy of an (existing) ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," that is found in an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," that lives in another ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", or it is constructed from a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated file"),". ",(0,i.kt)("a",{parentName:"p",href:"@"},"Curated files")," live in (one of the subdirectories of) the directory specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"curatedir")," field of hte ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),"."),(0,i.kt)("p",null,"Constructing an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," from a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated file")," is done by first creating the fields that are common for all ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries"),", and then adding fields that are specific for the type of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifact")," that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," describes."),(0,i.kt)("p",null,"The common fields get their values according to the following table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value(s) that are assigned to the fields"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")," field in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termtype")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"termtype")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termid")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"termid")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"formphrases")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"formphrases")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"status")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),". If that value is not present, and the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF")," has a non-empty ",(0,i.kt)("inlineCode",{parentName:"td"},"statuses")," field in its ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section, then the value of the first element of that ",(0,i.kt)("inlineCode",{parentName:"td"},"statuses")," field is used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"created")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"created")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"updated")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updated")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vsntag")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vsntag")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"commit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"commit")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contributors")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"contributors")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"locator")),(0,i.kt)("td",{parentName:"tr",align:"left"},"path, relative to ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"curatedir"),"/, of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navurl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(h,{mdxType:"Mark"},"TBD"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"headingids")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file")," is scanned for ",(0,i.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#headings"},"markdown headings")," (using the syntax with ",(0,i.kt)("inlineCode",{parentName:"td"},"#"),"-signs rather than the ",(0,i.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#alternate-syntax"},"alternate syntax"),") and/or ",(0,i.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids"},"heading ids"),", and each heading or heading-id that is found is added to the list of headingids in this field.")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"content to be revised from this point onward."))),(0,i.kt)("p",null,"Creating an ",(0,i.kt)("a",{parentName:"p",href:"#mrg"},"MRG")," works as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an initial set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," entries, i.e. one for every ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," (from ",(0,i.kt)("a",{parentName:"li",href:"scope@"},"scopes")," other than the one we create the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," for) that is selected per the specifications in the ",(0,i.kt)("a",{parentName:"li",href:"#gdf"},"GDF"),". A ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," is constructed by interpreting the ",(0,i.kt)("a",{parentName:"li",href:"@essiflab"},"term file")," that defines the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term"),", and producing the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," structure as defined for ",(0,i.kt)("a",{parentName:"li",href:"#mrg"},"MRGs"),". Note that this can only be done for ",(0,i.kt)("a",{parentName:"li",href:"term-file@essiflab"},"term files")," that have a syntax that is supported by the ",(0,i.kt)("a",{parentName:"li",href:"#mrgt"},"MRGT"),". If the created ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," has an ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," that is the same as the ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"-field of an existing glossary-entry, that ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," will be discarded (meaning that the newly created ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry"),"  'overrides' the existing one)."),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," for every ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," that is defined in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope")," from which the ",(0,i.kt)("a",{parentName:"li",href:"#mrgt"},"MRGT")," is called, again removing any existing glossary-entry that has an ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"-field that is the same as a newly added one."),(0,i.kt)("li",{parentName:"ul"},"Perform completeness and consistency checks on the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," entries, to ensure that",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"every ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," is ",(0,i.kt)("a",{parentName:"li",href:"@"},"identifiable")," by its ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"-field;"),(0,i.kt)("li",{parentName:"ul"},"every element in the ",(0,i.kt)("inlineCode",{parentName:"li"},"formphrases"),"-list of a ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," does not occur as an element in the ",(0,i.kt)("inlineCode",{parentName:"li"},"formphrases"),"-list of another ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," entry;"))),(0,i.kt)("li",{parentName:"ul"},"Sort the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entries")," according to their ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," field;"),(0,i.kt)("li",{parentName:"ul"},"Add header/meta data as needed as specified for ",(0,i.kt)("a",{parentName:"li",href:"#mrg"},"MRGs"),".")),(0,i.kt)("p",null,"For example, consider the ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," ",(0,i.kt)("inlineCode",{parentName:"p"},"curate")," as defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/ctwg/wiki/curate"},"CTWG terms wiki"),". The wiki-page would be interpreted, which would lead to the following (machine readable) ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  id: concept-curate\n  scopetag: ctwg\n  termtype: concept\n  termid: curate\n  grouptags:\n  date: 20211123\n  versiontag: 9\n  commit:\n  formphrases: [ curate, curates, curated, curation ]\n  status: proposed\n  term: curate\n  synonyms: curation\n  glossaryText: To evolve [concept](@) and [term](@) data in the direction of greater quality and richer content within a specific [scope](@).\n  hoverText: Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope.\n  url: https://github.com/trustoverip/ctwg/wiki/curate\n")),(0,i.kt)("p",null,"Glossaries are generated at a default location, which for ToIP is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://trustoverip.github.io/<terms-community>/glossary"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<terms-community>")," is the name of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms-community")," that ",(0,i.kt)("a",{parentName:"p",href:"curate"},"curates")," the ",(0,i.kt)("a",{parentName:"p",href:"term@"},"terms")," in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#mrgt"},"MRGT")," should log conditions that prevent it from properly"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parsing a source document (e.g. because it is not in the expected format);"),(0,i.kt)("li",{parentName:"ul"},"resolving ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"s, ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope tags"),", ",(0,i.kt)("a",{parentName:"li",href:"@"},"group tags"),", or ",(0,i.kt)("a",{parentName:"li",href:"@"},"version tags"),";"),(0,i.kt)("li",{parentName:"ul"},"writing the output (e.g. because it has no write-permission for the designated location);"),(0,i.kt)("li",{parentName:"ul"},"etc.;")),(0,i.kt)("p",null,"and provide suggestions that help tool-operators to identify and fix any problems."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#mrgt"},"MRGT")," should come with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."),(0,i.kt)("h3",{id:"creating-a-mrg"},"Creating a MRG"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A specification is needed for the creation of a (simple) ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," (from an existing MRG).\nAny ",(0,i.kt)("a",{parentName:"p",href:"@"},"term refs")," need to be properly resolved.\nTitles of term entries may want to link to the original resource from which it was derived.\nChoice bars (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"[ A B C D .... Z ]")," may need to be inserted here and there).\nMeta-data (group tags, the scopetag of the scope where it was defined, contributors, versions, dates, etc.) may need to be included.\nThere must be some license notification."))))}c.isMDXComponent=!0}}]);