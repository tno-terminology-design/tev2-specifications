"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6222],{2311:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=a(4345),i=a(4996),p=["components"],c={id:"pattern-party-representation",title:"Party Representation",scopeid:"essifLab",type:"pattern",typeid:"party-representation",symphrase:"party-representation",stage:"draft",hoverText:"The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how Parties can be represented in various circumstances.",glossaryText:"The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how %%parties^party%% can be represented in various circumstances.",date:20210601},m=void 0,h={unversionedId:"terms/pattern-party-representation",id:"terms/pattern-party-representation",title:"Party Representation",description:"This pattern is still under development",source:"@site/docs/terms/pattern-party-representation.md",sourceDirName:"terms",slug:"/terms/pattern-party-representation",permalink:"/framework/docs/terms/pattern-party-representation",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/pattern-party-representation.md",tags:[],version:"current",frontMatter:{id:"pattern-party-representation",title:"Party Representation",scopeid:"essifLab",type:"pattern",typeid:"party-representation",symphrase:"party-representation",stage:"draft",hoverText:"The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how Parties can be represented in various circumstances.",glossaryText:"The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how %%parties^party%% can be represented in various circumstances.",date:20210601},sidebar:"essifLabSideBar",previous:{title:"Decentralized Risk Management, Governance and Compliance",permalink:"/framework/docs/terms/pattern-decentralized-grc"},next:{title:"Mandates, Delegation and Hiring",permalink:"/framework/docs/terms/pattern-mandates-delegation-hiring"}},d={},u=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Formalized model",id:"formalized-model",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3}],l={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This pattern is still under development"))),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This pattern captures the essence of how ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," can be represented in various circumstances, thereby extending the ",(0,o.kt)(s.Z,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"parties, actors, actions pattern"),"."),(0,o.kt)("h3",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Within the context of ",(0,o.kt)(s.Z,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI"),", we are interested in coming to grips with (answering) questions such as 'in what ways can ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," be represented?', 'what kind(s) of ",(0,o.kt)(s.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," can represent ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),"', 'how can we deal with representation constraints, i.e. provide guarantees that the represented ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," isn't completely at the mercy of the one representing it?'."),(0,o.kt)("p",null,"This model attempts to provide answers to such questions."),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"There are very many different forms of representation. ",(0,o.kt)(s.Z,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"Claims"),", for example, represent characteristics attributed to ",(0,o.kt)(s.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities"),", ",(0,o.kt)(s.Z,{popup:"Term: a word or phrase that is used in at least one Scope/context to represent a specific Concept (and referring to its Definition).",reference:"/framework/docs/terms/term",mdxType:"Term"},"Terms")," represent (intangible) ",(0,o.kt)(s.Z,{popup:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",reference:"/framework/docs/terms/concept",mdxType:"Term"},"concepts"),", ",(0,o.kt)(s.Z,{popup:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction.",reference:"/framework/docs/terms/legal-entity",mdxType:"Term"},"legal entities")," are represented in the ",(0,o.kt)(s.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of a ",(0,o.kt)(s.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction"),", ",(0,o.kt)(s.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agents")," represent ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," as they execute ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions"),", and so on. We specifically focus on"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.merriam-webster.com/dictionary/representation"},"Merriam-Webster")," considers both 'the action of representing', i.e. the action or fact of one ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," standing for another so as to have the rights and duties of the ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," represented, or the substitution of one ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," in place of another, e.g. a child taking the place of a deceased parent), and 'the fact of being represented', which is its passive counterpart."),(0,o.kt)("p",null,"Representation can take an active and a more passive form."),(0,o.kt)("p",null,"In the active form, a ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," is represented by an ",(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that executes an ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," on behalf of that ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", as described in the ",(0,o.kt)(s.Z,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"parties, actors, action pattern"),". In that pattern, the ",(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," is said to be an ",(0,o.kt)(s.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," of the ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that it represents as it is executing the ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action"),". This kind of representation is short-lived: it exists for the time that the ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," is being executed."),(0,o.kt)("p",null,"In the more passive form, a ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," can be represented by an ",(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," in an employment, or 'works for' relation, which is also described in the ",(0,o.kt)(s.Z,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"parties, actors, action pattern"),". In that pattern, the ",(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," is said to be an ",(0,o.kt)(s.Z,{popup:"Employee (of a Party): an Actor for whom/which it is realistic that it might execute Actions on behalf of that Party (called the Employer of that Actor).",reference:"/framework/docs/terms/employee",mdxType:"Term"},"employee")," of that ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", which (in our context) only means that it is realistic to expect that the ",(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," will be executing ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," on behalf of that ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"."),(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"Actors")," typically do not represent a ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," for everything. ",(0,o.kt)(s.Z,{popup:"Employee (of a Party): an Actor for whom/which it is realistic that it might execute Actions on behalf of that Party (called the Employer of that Actor).",reference:"/framework/docs/terms/employee",mdxType:"Term"},"Employees")," for example are typically assigned a *function* that requires them to do certain kinds of ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions"),", yet at the same time limits them thereto. An (",(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," in its role of) ",(0,o.kt)(s.Z,{popup:"Employee (of a Party): an Actor for whom/which it is realistic that it might execute Actions on behalf of that Party (called the Employer of that Actor).",reference:"/framework/docs/terms/employee",mdxType:"Term"},"employee")," can, or should therefore limit its ",(0,o.kt)(s.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agency")," to ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," of the type that its ",(0,o.kt)(s.Z,{popup:"Employer (of an Actor): a Party on whose behalf this Actor (called an Employee of that Party) might execute Actions.",reference:"/framework/docs/terms/employer",mdxType:"Term"},"employer")," has assigned as the tasks for the functions is employed to fulfill.",(0,o.kt)("p",null,"This pattern also describes how ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," can be said to perform an ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action"),", which is shorthand parlance for saying that there is an ",(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that executes this ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," on behalf of that ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),". In that sense, ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," can be said to perform an ",(0,o.kt)(s.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," on behalf of other ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", effectively representing such ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),"."),(0,o.kt)("p",null,"In this model, we do not consider ",(0,o.kt)(s.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," representing ",(0,o.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", as this is already elaborated on in the ",(0,o.kt)(s.Z,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"parties, actors, action model"),", which defines notions such as ",(0,o.kt)(s.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agents")," (and ",(0,o.kt)(s.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principals"),")"),(0,o.kt)("h3",{id:"formalized-model"},"Formalized model"),(0,o.kt)("p",null,"Here is a visual representation of this pattern, using the following ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../notations-and-conventions#pattern-diagram-notations"},"notations and conventions")),":"),(0,o.kt)("img",{alt:"Conceptual model of the 'Representation' pattern",src:(0,i.Z)("images/patterns/pattern-party-representation.png")}),(0,o.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,o.kt)("p",null,"The seemingly simple notion of 'representation' turns out to be quite elusive in various circumstances. The painter ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/The_Treachery_of_Images"},"Rene Magritte was heavily reproached"),' for writing "Ceci n\'est pas une pipe" (this is not a pipe) under a painting that showed a pipe. But he was right: you cannot stuff the image of a pipe in the same way you stuff the pipe that it represents.'),(0,o.kt)("p",null,"In general, representation is quite complex, as can be readily experienced when diving into ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semiotics"},"Semiotics"),", that studies the workings of ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sign_(semiotics)"},"signs")," (i.e. anything that communicates a meaning that is not the sign itself). Our ",(0,o.kt)(s.Z,{popup:"The eSSIF-Lab Terminology Pattern describes the relations between Terminology Terms such as 'Concept', 'Term', 'Pattern', 'Mental Model', 'Glossary' etc.",reference:"/framework/docs/terms/pattern-terminology",mdxType:"Term"},"terminology model")," specifies that a ",(0,o.kt)(s.Z,{popup:"Term: a word or phrase that is used in at least one Scope/context to represent a specific Concept (and referring to its Definition).",reference:"/framework/docs/terms/term",mdxType:"Term"},"term")," (within a specific ",(0,o.kt)(s.Z,{popup:"Scope: the extent of the area or subject matter (which we use to define Patterns, Concepts, Terms and Glossaries in).",reference:"/framework/docs/terms/scope",mdxType:"Term"},"scope"),"/context) refers to (the ",(0,o.kt)(s.Z,{popup:"Definition: a text that helps Parties to have the same understanding about the meaning of (and Concepts behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction.",reference:"/framework/docs/terms/definition",mdxType:"Term"},"definition")," of) a ",(0,o.kt)(s.Z,{popup:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",reference:"/framework/docs/terms/concept",mdxType:"Term"},"concept"),", which is one way of representing (intangible) ideas."),(0,o.kt)("p",null,"'Representation' is a notion that seems simple enough to grasp, but turns out to be more elusive when trying to formalize it. ",(0,o.kt)("a",{parentName:"p",href:"https://www.merriam-webster.com/dictionary/representation"},"Merriam-Webster")," has several definitions"))}f.isMDXComponent=!0}}]);