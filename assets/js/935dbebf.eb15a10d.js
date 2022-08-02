"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4836],{5162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3117),r=a(7294),i=a(6010),s=a(2389),o=a(7392),l=a(7094),d=a(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,a,s=e.lazy,m=e.block,h=e.defaultValue,f=e.values,u=e.groupId,k=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.U)(),w=b.tabGroupChoices,C=b.setTabGroupChoices,T=(0,r.useState)(y),S=T[0],F=T[1],A=[],R=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var U=w[u];null!=U&&U!==S&&g.some((function(e){return e.value===U}))&&F(U)}var E=function(e){var t=e.currentTarget,a=A.indexOf(t),n=g[a].value;n!==S&&(R(t),F(n),null!=u&&C(u,String(n)))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=A.indexOf(e.currentTarget)+1;a=null!=(n=A[r])?n:A[0];break;case"ArrowLeft":var i,s=A.indexOf(e.currentTarget)-1;a=null!=(i=A[s])?i:A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},k)},g.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return A.push(e)},onKeyDown:L,onFocus:E,onClick:E},s,{className:(0,i.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(N.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function h(e){var t=(0,s.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},2306:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),s=(a(4996),a(5488),a(5162),["components"]),o={id:"tev2-spec-saf",title:"Scope Administration File (SAF)",sidebar_label:"SAF (Scope Admin File)",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},l=void 0,d={unversionedId:"tev2/tev2-spec-saf",id:"tev2/tev2-spec-saf",title:"Scope Administration File (SAF)",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/tev2-spec-saf.md",sourceDirName:"tev2",slug:"/tev2/tev2-spec-saf",permalink:"/framework/docs/tev2/tev2-spec-saf",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-spec-saf.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1659344014,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"tev2-spec-saf",title:"Scope Administration File (SAF)",sidebar_label:"SAF (Scope Admin File)",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Term Ref Resolution",permalink:"/framework/docs/tev2/toolbox-specs/trrt"},next:{title:"MRG (Machine Readable Glossary)",permalink:"/framework/docs/tev2/tev2-spec-mrg"}},p={},c=[{value:"Scope Administration File Field Descriptions",id:"scope-administration-file-field-descriptions",level:2},{value:"SAF Terminology - Defining the Scope itself",id:"terminology",level:3},{value:"SAF Scopes - Mapping Scopetags and Scopedirs",id:"scopes",level:3},{value:"SAF Versions - Enabling changes and updates in a scope&#39;s Terminology",id:"versions",level:3}],m={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," MUST have exactly one Scope Administration File or ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),", i.e. a file contains whatever needs to be administered in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", and that various tools need to find e.g. the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetags"),", etc."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," MUST be located in the (root of the) ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopedir"),", and is called ",(0,i.kt)("inlineCode",{parentName:"p"},"saf.yaml"),". It is to be created and maintained by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("p",null,"This document specifies the structure of such ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAFs"),"."),(0,i.kt)("h2",{id:"scope-administration-file-field-descriptions"},"Scope Administration File Field Descriptions"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," has three main parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"scope"))," (singular) section defines meta-data concerning the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope")," itself, both for technical use and human use. It shows where directories and files live that ar part of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and also ways in which people can contribute, raise issues, see what's going on, discuss, etc."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"scopes"))," (plural) section contains a mapping between ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopetags")," that are used within the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and the associated ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopedirs"),". This enables tools to find the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF")," of these ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopes"),", and from there all other directories, files etc. that live within them, e.g. to use/import their data."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"versions"))," section specifies all versions of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology")," that are actively maintained by the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curators")," of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and for each of them, the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," that constitute this ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology"),".")),(0,i.kt)("p",null,"The following sections specify the fields for each of these parts."),(0,i.kt)("h3",{id:"terminology"},"SAF Terminology - Defining the Scope itself"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `scope` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# This is a Scope Administration File that can be used in conjunction with TEv2.\n#\n# The first section defines meta-data concerning the scope itself, both for technical use and human use.\n# It shows where directories and files live that ar part of the scope, and also\n# ways in which people can contribute, raise issues, see what's going on, discuss, etc.\n#\nscope:\n  scopetag: tev2 # identifier that curators have determined for this terminology\n  scopedir: https://github.com/essif-lab/framework/tree/master/docs/tev2  # URL of the scope-directory\n  curatedir: docs # directory where all curated files are located. Full URL is `scopedir`/`curatedir`\n  glossarydir: glossaries # directory where all glossary files and GDFs are located. Full URL is `scopedir`/`glossarydir`\n  mrgfile: glossaries/mrg.json # file that contains the (default/current) machine readable glossary. Full URL is `scopedir`/`mrgfile`\n  hrgfile: glossaries/glossary # file that contains the (default/current) human readable glossary. Full URL is `scopedir`/`hrgfile`\n  license: LICENSE.md # file that contains the (default/current) licensing conditions. Full URL is `scopedir`/`license`\n  statuses: [ proposed, approved, deprecated ] # list of status tags that are defined for knowledge artifacts in this scope\n  issues: https://github.com/essif-lab/framework/issues # URL where issues can be raised and handled\n  website: https://essif-lab.github.io/framework/docs/tev2/tev2-overview # home page of the terminology\n  slack: https://trustoverip.slack.com/archives/C01BBNGRPUH # slack channel for discussions\n  curators: # contacting individual curators\n  - name: RieksJ\n    email: # we split up the email address to reduce the likelihood of the address being harvested for spamming\n      id: rieks.joosten\n      at: tno.nl\n"))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"@"},"Scopetag")," that ",(0,i.kt)("a",{parentName:"td",href:"@"},"curators")," of this scope have determined for this ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),". The associated ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," is specified in the section ",(0,i.kt)("inlineCode",{parentName:"td"},"scopes"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL of the location of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetags")," listed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")," field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"curatedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to the directory where all ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated files")," are located. This directory may contain subdirectories to allow ",(0,i.kt)("a",{parentName:"td",href:"@"},"curators")," to organize the files in any way they see fit. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"<scopedir>"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"<curatedir>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"glossarydir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to the directory where all ",(0,i.kt)("a",{parentName:"td",href:"@"},"glossary"),"-related files are located. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"<scopedir>"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"<glossarydir>"),". This directory SHOULD contain one ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," for every element in the version-section in the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),", and one or multiple ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRGs"),". It MAY contain other files, e.g. containing instructions, headers, footers or other things that are necessary for generating specific ",(0,i.kt)("a",{parentName:"td",href:"@"},"glossaries"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mrgfile")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the file that contains the (default/current) ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," for this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"<scopedir>"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"<glossarydir>"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"<mrgfile>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hrgfile")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the file that contains the (default/current) ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG")," for this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"<scopedir>"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"<glossarydir>"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"<hrgfile>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"license")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"File in the root of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," that contains the (default) licensing data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"statuses")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ordered list of ",(0,i.kt)("a",{parentName:"td",href:"@"},"tags")," that are defined in this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," for specifying stages in the life-cycle of ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifacts"),". The first element in the list represents the first stage, and the last element the last stage in the life-cycle.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issues")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL where issues can be reported and handled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"website")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL for the home page of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"slack")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL for the slack channel for discussions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"curators")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data that can be used to contact individual ",(0,i.kt)("a",{parentName:"td",href:"@"},"curators"),".")))),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It might be more practical to move all of the stuff that is particular to this scope, but that is currently documented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes")," section, to this section. We do then need to check throughout the documentation where that section is referenced, and correct such references.")),(0,i.kt)("h3",{id:"scopes"},"SAF Scopes - Mapping Scopetags and Scopedirs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetags")," section is a list that specifies a mapping between ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetags")," as they are used in this ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", the associated ",(0,i.kt)("a",{parentName:"p",href:"(@)"},"scopedir")," and if necessary, other paths and filenames for ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," within the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". The latter is only required when specifying the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," for which the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," is created/maintained, as for other ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes"),", such other paths and filenames can readily be found by inspecting the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," that is located in the root of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopedir")," of such ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `scopes` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# The second section contains a mapping between scopetags that are used within the scope, and the associated scopedirs.\n# This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc.\n# that live within them, e.g. to use/import their data.\n#\nscopes:  #\n- scopetags: [ essiflab, essif-lab ] # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology\n  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory\n- scopetags: [ ctwg, toip-ctwg ] # definition of (scope)tag(s) that are used within this scope to refer to a specific terminology\n  scopedir: https://github.com/trustoverip/ctwg # URL of the scope-directory\n"))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"List of at least one ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetag"),", that the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curator(s)")," of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," have determined for the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology")," of a specific ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". The associated ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," is specified in the section ",(0,i.kt)("inlineCode",{parentName:"td"},"scopes"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the location of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetags")," listed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")," field.")))),(0,i.kt)("h3",{id:"versions"},"SAF Versions - Enabling changes and updates in a scope's Terminology"),(0,i.kt)("p",null,"The third section in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," specifies the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", in multiple versions that are actively maintained by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators"),". For each version, the set of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," is selected that constitute that version's ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),". Also, additional data is provided regarding the state/validity of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," over time, which may of interest for the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of other scopes as they need to decide whether or not to import ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," from such a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `versions` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'#\n# The third section specifies the versions that are actively maintained by the curators.\n# For each version, the set of terms is selected that constitute the terminology.\n# See the Glossary Generation Tool (GGT) for details about the syntax and semantics.\n#\nversions:\n  - vsntag: 0x921456 # a versiontag that identifies this version from all other versions in the SAF\n    altvsntags: # alternative verstiontags\n      - latest\n      - v0.9.4\n    termselcrit:\n      - "tags[management]@essif-lab" # import all terms from the mrg of `essif-lab:latest` that have grouptag `management`.\n      - "termids[party,community](@essif-lab:0.9.4)" # import the terms `party` and `community` from the mrg of `essif-lab:0.9.4`.\n      - "*@tev2" # import all terms defined in the scope `tev2`\n    status: proposed\n    from: 20220312\n    to:\n  - vsntag: 0x654129 # a versiontag that identifies this version from all other versions in the SAF\n    altvsntags: # alternative verstiontags\n      - v0.9.0\n    termselcrit:\n      - "*@essif-lab" # import all terms defined in the scope `essif-lab`\n      - "-tags[terminology]" # remove all terms tagged with the grouptag `terminology`\n      - "*@tev2" # import all terms defined in the scope `tev2`\n'))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vsntag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"@"},"Versiontag")," that that is used to ",(0,i.kt)("a",{parentName:"td",href:"@"},"identify")," this version within the set of all other versions that are maintained within this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". in this ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),". It MUST NOT be changed during the lifetime of this version.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-\\.]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"altvsntags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"List of alternative ",(0,i.kt)("a",{parentName:"td",href:"@"},"versiontags")," that may be used to refer to this version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),". A typical use of this field would be to tag a version as the 'latest' version.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-\\.]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"license")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"File that contains the (default) licensing conditions. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"license"),". If not specified, its value defaults to the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"license")," field in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section (of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),"). The purpose of this field is to allow different versions of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology")," to have different licenses.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termselcrit")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"List of ",(0,i.kt)("a",{parentName:"td",href:"@"},"term selection instructions")," that are used to generate (this version of) the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),". See ",(0,i.kt)("a",{parentName:"td",href:"terminology-construction"},"Terminology Construction")," for details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the status of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term"),". (",(0,i.kt)("a",{parentName:"td",href:"@"},"Communities")," of) ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopes")," may specify values for this field. If not specified, the status SHOULD be assumed to be 'concept', 'draft', 'proposed', or similar. An example is the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md"},"status tags used by ToIP"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which it was decided to establish this version.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which this version will expire (or has expired).")))),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," dates have been included to (in future) enable one to refer to a specific version of the terminology that was valid at a particular date. This feature needs to be worked out, and will impact ",(0,i.kt)("a",{parentName:"p",href:"terminology-construction"},"terminology construction"),", ",(0,i.kt)("a",{parentName:"p",href:"tev2-spec-term-ref"},"term ref specs"),", and various tools.")))}h.isMDXComponent=!0}}]);