"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4689],{7384:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var r=a(3117),i=a(102),s=(a(7294),a(3905)),n=["components"],o={id:"tag",scope:"tev2",termtype:"concept",termid:"tag",formphrases:"tag{ss}",grouptags:null,status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-06-06T00:00:00.000Z"),vsntag:"v0.1",contributors:"RieksJ",isa:"identifier",term:"tag",fullterm:"Tag (of/within a Scope)",shorterm:null,synonyms:null,glossaryText:"an alphanumeric string that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).",title:"Tag",hoverText:"Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."},p=void 0,l={unversionedId:"tev2/terms/tag",id:"tev2/terms/tag",title:"Tag",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/terms/tag.md",sourceDirName:"tev2/terms",slug:"/tev2/terms/tag",permalink:"/framework/docs/tev2/terms/tag",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/terms/tag.md",tags:[],version:"current",frontMatter:{id:"tag",scope:"tev2",termtype:"concept",termid:"tag",formphrases:"tag{ss}",grouptags:null,status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-06-06T00:00:00.000Z",vsntag:"v0.1",contributors:"RieksJ",isa:"identifier",term:"tag",fullterm:"Tag (of/within a Scope)",shorterm:null,synonyms:null,glossaryText:"an alphanumeric string that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).",title:"Tag",hoverText:"Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."}},c={},m=[{value:"Summary",id:"summary",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3},{value:"Notes",id:"notes",level:3}],h={toc:m};function d(e){var t=e.components,a=(0,i.Z)(e,n);return(0,s.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,s.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,s.kt)("br",null),(0,s.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,s.kt)("h3",{id:"summary"},"Summary"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"Tag")," is an alphanumeric string that satisfies the regex ",(0,s.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),", and that is used to identify ",(0,s.kt)("a",{parentName:"p",href:"@"},"scopes")," (so called 'scopetags'), group ",(0,s.kt)("a",{parentName:"p",href:"@"},"terms")," (so called 'grouptags'), or identify a specific version of a ",(0,s.kt)("a",{parentName:"p",href:"@"},"terminology")," (so called 'versiontags') from within a specific ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,s.kt)("p",null,"Scopetags ",(0,s.kt)("a",{parentName:"p",href:"@"},"identify")," a ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope")," (from within a given ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope"),"), and hence can be used (within that given ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope"),") to disambiguate ",(0,s.kt)("a",{parentName:"p",href:"@"},"terms"),". For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"essiflab:term")," is an ",(0,s.kt)("a",{parentName:"p",href:"@"},"identifier")," for the ",(0,s.kt)("a",{parentName:"p",href:"@"},"concept")," that within the ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope")," ",(0,s.kt)("a",{parentName:"p",href:"@"},"identified")," by the scopetag ",(0,s.kt)("inlineCode",{parentName:"p"},"essiflab")," is referred to by the ",(0,s.kt)("a",{parentName:"p",href:"@"},"term")," 'term'."),(0,s.kt)("p",null,"Grouptags may be used within a ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope")," to tag various sorts or ",(0,s.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," such as ",(0,s.kt)("a",{parentName:"p",href:"@"},"terms"),", ",(0,s.kt)("a",{parentName:"p",href:"@"},"concepts"),", ",(0,s.kt)("a",{parentName:"p",href:"@"},"patterns")," and the like. One can then say that this grouptag represents the group of ",(0,s.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," that are associated with that tag. This may be used for different purposes. One example is to tag every term that is part of a ",(0,s.kt)("a",{parentName:"p",href:"@"},"pattern")," with a pattern-specific tag."),(0,s.kt)("p",null,"Versiontags are used to identify a specific version of the ",(0,s.kt)("a",{parentName:"p",href:"@"},"terminology")," of the ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope")," within which the versiontag lives. It may have various forms, and would typically be chosen such that it comes in handy with the tools that the ",(0,s.kt)("a",{parentName:"p",href:"@"},"terms community")," has decided to use to curate that ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,s.kt)("h3",{id:"criteria"},"Criteria"),(0,s.kt)("p",null,"is an alphanumeric string that is used within a specific ",(0,s.kt)("a",{parentName:"p",href:"@"},"scope")," to identify ",(0,s.kt)("a",{parentName:"p",href:"@"},"scopes")," and/or group ",(0,s.kt)("a",{parentName:"p",href:"@"},"terminological artifacts"),", and/or identify a version of its ",(0,s.kt)("a",{parentName:"p",href:"@"},"terminology"),". The alphanumeric string satisfies the regex ",(0,s.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Examples of scopetags are ",(0,s.kt)("inlineCode",{parentName:"p"},"essif-lab"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"essiflab"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"toip"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"ctwg")),(0,s.kt)("h3",{id:"notes"},"Notes"),(0,s.kt)("p",null,"Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the ",(0,s.kt)("inlineCode",{parentName:"p"},".")," character for ",(0,s.kt)("a",{parentName:"p",href:"@"},"versiontags")," might be beneficial. However, allowing a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," character in a ",(0,s.kt)("a",{parentName:"p",href:"@"},"scopetag")," may cause problems with (the alternative syntax) of ",(0,s.kt)("a",{parentName:"p",href:"@"},"term refs"),", as email address in square brackets might then qualify as a ",(0,s.kt)("a",{parentName:"p",href:"@"},"term ref")," while that is very likely not the author's intention."))}d.isMDXComponent=!0}}]);