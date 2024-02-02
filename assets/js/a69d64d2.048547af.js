"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5924],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,u=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(u,s(s({ref:t},h),{},{components:a})):n.createElement(u,s({ref:t},h))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=a(3117),i=(a(7294),a(3905)),o=a(4996);const s={id:"notations-and-conventions",date:20220803},r="Notations and Conventions",l={unversionedId:"miscellaneous/notations-and-conventions",id:"miscellaneous/notations-and-conventions",title:"Notations and Conventions",description:"This document provides an overview of the notations and conventions being used within this scope.",source:"@site/docs/miscellaneous/notations-and-conventions.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/notations-and-conventions",permalink:"/tev2-specifications/docs/miscellaneous/notations-and-conventions",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/miscellaneous/notations-and-conventions.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1706684938,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{id:"notations-and-conventions",date:20220803},sidebar:"tev2SideBar",previous:{title:"Making Hovertexts Work",permalink:"/tev2-specifications/docs/miscellaneous/making-hovertexts-work"},next:{title:"Tool Development",permalink:"/tev2-specifications/docs/miscellaneous/tool-development"}},c={},h=[{value:"RFC 2119",id:"rfc-2119",level:3},{value:"Capitalization of words in mid-sentence",id:"capitalization-of-words-in-mid-sentence",level:3},{value:"Pattern diagram notations",id:"pattern-diagram-notations",level:3},{value:"Notational Exceptions",id:"notational-exceptions",level:3}],p={toc:h};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notations-and-conventions"},"Notations and Conventions"),(0,i.kt)("p",null,"This document provides an overview of the notations and conventions being used within this ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,i.kt)("h3",{id:"rfc-2119"},"RFC 2119"),(0,i.kt)("p",null,"We use keywords such as \u201cshall\u201d, \u201cshould\u201d, \u201cmay\u201d etc. as defined by ",(0,i.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2119.txt"},"RFC 2119"),"."),(0,i.kt)("h3",{id:"capitalization-of-words-in-mid-sentence"},"Capitalization of words in mid-sentence"),(0,i.kt)("p",null,"A word in mid-sentence that is capitalized is a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," that has a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"definition")," in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"Corpus of Terminology"),". This allows readers to distinguish between the more colloquial meanings of words (by not capitalizing them) and those that are actually defined. We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We are working towards deprecating this convention, as we now have better ways of referring to words that are defined in the eSSIF-Lab Corpus.")),(0,i.kt)("h3",{id:"pattern-diagram-notations"},"Pattern diagram notations"),(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"Pattern")," diagrams will be visualized in this document using a notation that is very similar to that used by [UML](https://www.uml-diagrams.org/). The following diagram shows the various notations that we will be using that are basically taken from [UML](https://www.uml-diagrams.org/). There are a few exceptions, that are not shown in the figure; they are explained at the end.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("img",{alt:"Notations and conventions",src:(0,o.Z)("images/essif-lab-notations-and-conventions.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"rectangle"),", e.g. 'Person', represents a (named) ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/class.html"},"entity-class"),". The (operational) extension of a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," is the sets of its instances (for 'Person', the extension consists of the set of actual people of flesh and blood tha are in the scope of the model). The extensions of different concepts are disjunct (do not overlap), unless there is an 'ISA' relation between them (see below). When a rectangle is in a ",(0,i.kt)("strong",{parentName:"p"},"coloured area that has a name"),", it is a child (or part) of the concept with that name (see below)"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"solid line with a closed arrowhead"),", e.g. 'owns', represents a (named) relation/",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/association.html"},"association")," between the two ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," it connects. The concept at the arrowhead ('House') is called the 'target ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept"),"' (TGT) for that relation; the other ('Person') is called the 'source ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept"),"' (SRC). The relation is labeled such that ",(0,i.kt)("inlineCode",{parentName:"p"},"<SRC> <relation label> <TGT>")," (Person owns House) suggests the phrase that describes the intension(al definition) of that relation. The (operational) extension of a relation embraces all pairs (SRC,TGT) for which the relation holds. In the example, it consists of all pairs (P,H), where P is a Person and H is a House, such that the phrase 'P owns H' is true."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"green name")," at either ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/association.html#association-end"},"end of a relation/association")," is what UML calls 'role'; this name may be used to refer to (an instance of) the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," at which the name is placed as it performs its/this role in this relation. In the figure, ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," is the role that a Person fulfills in the relation 'owns'. If we assert that a Person (P) is the owner of a specific House (H), or that House H is owned by Person P, this means that (P,H) is an element of the extension of the relation 'owns'."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"solid line with an open arrowhead"),", represents a ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/generalization.html"},"generalization relation"),". It can be read as ",(0,i.kt)("inlineCode",{parentName:"p"},"<SRC> is a <TGT>"),", and is therefore also referred to as an ISA-relation. The SRC of the relation is the specialization (subclass) of the TGT (which in turn is a generalization of SRC). This means that SRC satisfies all constraints that TGT satisfies, and also that SRC has all attributes (properties, characteristics) that TGT has. The figure shows 'Self Employed Retailer is a Person' as an example."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"line with a solid diamond")," at one end represents a ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/composition.html"},"composition")," relation. The element at the 'diamond-end' is called the 'parent', or the 'whole'. The other element is called the 'child' or the 'part'. A 'part' in a composition relation cannot be part of more than one 'whole'. Normally, if a 'whole' in a composition relation ceases to exist, then so do all of its composite parts. In the figure, at least one Bedroom and precisely one Living Room are parts of a (every) House. Obviously, if a House ceases to exist, then so do these rooms."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"line with a hollow diamond")," at one end represents an ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/aggregation.html"},"aggregation")," relation. The element at the 'diamond-end' is called the 'parent', or the 'whole'. The other element is called the 'child' or the 'part'. A 'part' can be a part in multiple aggregation relations, and hence be part of multiple 'wholes'. If a 'whole' in an aggregation relation ceases to exist, the parts typically continue their existence. In the figure, 'Documentation' (about a Building Type) is an aggregation of a 'User Manual' and at least one 'Technical Document'. Obviously, if the Documentation ceases to exist, then the 'User Manual' and 'Technical Documents' typically continue to exist."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"dashed line")," with a pointed arrow (",(0,i.kt)("inlineCode",{parentName:"p"},">"),") represents a ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/dependency.html"},"dependency"),", where  the SRC concept somehow depends on the TGT concept. The kind of dependency is specified by a ",(0,i.kt)("inlineCode",{parentName:"p"},"<<text>>"),". In the figure, we see a dependency relation relation ",(0,i.kt)("inlineCode",{parentName:"p"},"<<instance>>"),", indicating that 'House' is a specific instance of 'Building Type'.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"[n..m]")," structure represents a ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/multiplicity.html"},"multiplicity"),". When it appears"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"at the TGT end of a relation"),", it means that for every SRC element there must be at least ",(0,i.kt)("em",{parentName:"li"},"n")," and at most ",(0,i.kt)("em",{parentName:"li"},"m")," TGT elements in the relation. For example, the ","[0..n]"," multiplicity in the 'owns' relation in the figure means that for every 'Person' element, there must be at least 0 and at most ",(0,i.kt)("em",{parentName:"li"},"n")," (i.e. any number) 'House' elements. Effectively, this says that every Person can own any number of Houses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"at the SRC end of a relation"),", it means that for every TGT element there must be at least ",(0,i.kt)("em",{parentName:"li"},"n")," and at most ",(0,i.kt)("em",{parentName:"li"},"m")," SRC elements in the relation. For example, the ","[0..1]"," multiplicity in the 'owns' relation in the figure means that for every 'House' element, there must be at least 0 and at most 1 'Person' elements. Effectively, this means that every House can be owned by at most 1 Person."),(0,i.kt)("li",{parentName:"ul"},"is typically of any of the following forms (although there may be others, e.g. ","[1..2]","):\n","[0..1]",": at most one;\n","[1..1]",": precisely one;\n","[0..n]",": any number - as this is not a constraint, this is the default multiplicity and may be omitted;\n","[1..n]",": at least one.\nNote that the term ",(0,i.kt)("em",{parentName:"li"},"multiplicity")," is distinct from ",(0,i.kt)("em",{parentName:"li"},"cardinality"),", the difference being that a cardinality states the ",(0,i.kt)("em",{parentName:"li"},"actual")," number of SRC/TGT elements that a specific TGT/SRC element has in a relation, whereas a multiplicity states the ",(0,i.kt)("em",{parentName:"li"},"possible")," number of such elements. In short, the multiplicity is the set of all possible cardinalities in a relation. We note this becaus it is common practice for people to use the term 'cardinality' where 'multiplicity' is intended."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a ",(0,i.kt)("strong",{parentName:"p"},"named and coloured area"),", e.g. the green area named ",(0,i.kt)("inlineCode",{parentName:"p"},"House Ownership")," is the aggregate (Parent/Whole) of all concepts (rectangular elements) therein, which are its children/parts. This aggregate can be linked/associated with any other concept, including its children/parts."))),(0,i.kt)("h3",{id:"notational-exceptions"},"Notational Exceptions"),(0,i.kt)("p",null,"The following notational conventions are not used by ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/"},"UML"),", but are specific to our use."),(0,i.kt)("p",null,"We use a ",(0,i.kt)("strong",{parentName:"p"},"coloring convention")," to distinguish between what is 'officially' part of the eSSIF-Lab models, and parts that are not."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"blue")," is used to color the lines and other symbols that are part of the 'official' models. Typically, they are explicitly defined or otherwise explained, e.g. in a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental model"),". Their definitions/meanings may differ from 'common knowledge'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"red")," is used to color the lines and other symbols that are part of our 'common knowledge', and hence need not be explicitly defined. They appear to explain where eSSIF-Lab models link to these commonly known/used concepts. We think of them as necessary in order to bridge possible gaps between 'common understanding' and the eSSIF-Lab ways of thinking. Whenever a 'red concept' is nevertheless defined, this is for the purpose of conveying what we conceive the 'common knowledge' to be.")),(0,i.kt)("p",null,"We use a ",(0,i.kt)("strong",{parentName:"p"},"line typing convention")," within a diagram, as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"}),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solid lines")," are used for lines and other symbols that are part of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental model")," that is represented by the diagram;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashed lines")," are used for lines and other symbols that are (authoritatively) defined elsewhere.\nFor example, the concept ",(0,i.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",title:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," is authoritatively defined in the ",(0,i.kt)("a",{href:"/framework/docs/terms/pattern-party-actor-action",title:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'."},"party, actor and action pattern"),", so the diagram there shows a solid (blue) line for that concept. It also appears in other diagrams, e.g. in the ",(0,i.kt)("a",{href:"/framework/docs/terms/jurisdiction",title:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated."},"jurisdiction pattern"),", where the concept is represented with a (blue) dashed line.")))}m.isMDXComponent=!0}}]);