(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return h})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),o=(a(0),a(230)),s=a(231),r=a.n(s),c=a(235),h={id:"pattern-decentralized-risk-management",title:"Decentralized Risk Management",scopeid:"essifLab",type:"pattern",typeid:"decentralized-risk-management",stage:"draft",hoverText:"The Decentralized Risk Management pattern describes how Parties can deal with the Risks associated with their Objectives, i.e. ensure that the Objectives they pursue are properly realized and they become/remain successful.",date:20210601},l={unversionedId:"terms/pattern-decentralized-risk-management",id:"terms/pattern-decentralized-risk-management",isDocsHomePage:!1,title:"Decentralized Risk Management",description:"This is work that is being envisaged.",source:"@site/docs/terms/pattern-decentralized-risk-management.md",slug:"/terms/pattern-decentralized-risk-management",permalink:"/framework/docs/terms/pattern-decentralized-risk-management",editUrl:"https://gitlab.grnet.gr/essif-lab/framework/-/tree/master/docs/terms/pattern-decentralized-risk-management.md",version:"current"},d=[{value:"The Generic Risk Management Process (according to ISO)",id:"the-generic-risk-management-process-according-to-iso",children:[]},{value:"Networked Risk Management",id:"networked-risk-management",children:[]},{value:"Scoping",id:"scoping",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Mental Model",id:"mental-model",children:[{value:"Summary",id:"summary",children:[]}]}],u={rightToc:d};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Editor's note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is work that is being envisaged."))),Object(o.b)("p",null,"Traditional risk management (RM) frameworks, such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.iso.org/obp/ui/#iso:std:iso:31000:ed-2:v1:en"}),"ISO 31000"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.coso.org/Pages/default.aspx"}),"COSO"),", or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf"}),"NIST 800-30")," have emerged in a time where ",Object(o.b)(r.a,{popup:"Authority: a Party of which certain decisions, ideas, rules etc. are followed by other Parties.",reference:"/framework/docs/terms/authority",mdxType:"Term"},"centralized organizational leadership")," and auditing, and cyclic (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/PDCA"}),"PDCA"),") processes for risk management, were prevalent. Most (large) enterprises have adopted (a mix of) them, and many have been certified (e.g. against ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.iso.org/iso-9001-quality-management.html"}),"ISO 9001")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.iso.org/isoiec-27001-information-security.html"}),"ISO 27001"),") thereby demonstrating they govern and run the associated (risk)management processes as intended, and are compliant with such standards and often also with applicable regulations."),Object(o.b)("p",null,"However, these frameworks don't provide practical guidance for all situations. For example, it is well-known that SMEs or other parties that do not have the required (expert) knowledge, time and other resources to setup and run such processes, are pretty much left to their own devices. Also, ",Object(o.b)(r.a,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI")," provides contexts for which the traditional RM frameworks do not provide the necessary guidance."),Object(o.b)("p",null,"This pattern provides a way of thinking about ",Object(o.b)(r.a,{popup:"Risk (of a Party's Objective): the effects that uncertainty (i.e. a lack of information, understanding or knowledge of events, their consequences or likelihoods) can have on the intended realization of that Party's Objective.",reference:"/framework/docs/terms/risk",mdxType:"Term"},"risks")," that is suitable for ",Object(o.b)(r.a,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI contexts")," (and as a side-effect, it may be userful for SME's (and the like) as well). It is not intended to replace these other frameworks, but rather as a complementary mechanism. Where the existing frameworks mostly focus on the internal workings of ",Object(o.b)(r.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", our mechanisms mostly focuses on risks related to interactions between parties."),Object(o.b)("h2",{id:"the-generic-risk-management-process-according-to-iso"},"The Generic Risk Management Process (according to ISO)"),Object(o.b)("p",null,"The following figure, that also appeared in ISO standards 31000 and 27005, shows a generic risk management process:"),Object(o.b)("img",{alt:"High-level transaction negotiation",src:Object(c.a)("images/essif-lab-iso-risk-management-process.png")}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Figure 1: Activities in a Generic ISO Risk Management Process.")),Object(o.b)("p",null,"It shows that the core of an RM process is a cycle of activities that starts with 'context establishment'. The purpose here is that you know about the context you are in, both your external environment (what you cannot control) and your internal environment (what you can control). You must also know the ",Object(o.b)(r.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives")," you want to manage the risks of (for according to ISO, risk only exists in the context of objectives). Then you must know the purpose and scope of the RM process, and establish your risk criteria (i.e. the criteria you use to evaluate the significance of risk and make decisions concerning its acceptability)."),Object(o.b)("p",null,"The core activity is Risk Assessment, which contains three sub-activities:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Risk Identification. This is where you identify risks and their range of possible effects (consequences) on the objectives;"),Object(o.b)("li",{parentName:"ol"},"Risk Analysis. Here you extend your understanding of the identified risks, and provide some measure of the magnitude of risk;"),Object(o.b)("li",{parentName:"ol"},"Risk Evaluation. That is where you decide whether or not a risk is acceptable in relation to the objectives and the risk criteria you have established.\nAdditional guidance on techniques that can help you do this are provided in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.iso.org/obp/ui/#iso:std:iec:31010:ed-2:v1:en,fr"}),"ISO 31010"),", the (upcoming revised version of) ISO 27005 and many other sources.")),Object(o.b)("p",null,"The 'risk treatment' activity aims to do whatever is necessary to manage the unacceptable risks. ISO 31000 lists various options for doing so, which are not necessarily mutually exclusive or appropriate in all circumstances:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"avoiding the risk by deciding not to start or continue with the activity that gives rise to the risk;"),Object(o.b)("li",{parentName:"ul"},"taking or increasing the risk in order to pursue an opportunity;"),Object(o.b)("li",{parentName:"ul"},"removing the risk source;"),Object(o.b)("li",{parentName:"ul"},"changing the likelihood;"),Object(o.b)("li",{parentName:"ul"},"changing the consequences;"),Object(o.b)("li",{parentName:"ul"},"sharing the risk with another party or parties through contracts;"),Object(o.b)("li",{parentName:"ul"},"risk financing (internally e.g. retention, or transfer e.g. buying insurance);"),Object(o.b)("li",{parentName:"ul"},"retaining the risk by informed decision.")),Object(o.b)("p",null,"Your choices will have consequences, large or small, in the way you continue to operate. You might start doing some things differently, make changes in your IT or other tools, etc. These activities are outside the scope of risk management."),Object(o.b)("p",null,"The other two activities, 'Risk Communication and Consulation', and 'Monitoring and review' are not activities like the others in the sense that you continually have to communicate and consult with your stakeholders and advisors so that they can help you reach your objectives (and vice versa) and make good judgements and choices. You also need to continually monitor and review (the changes you have made in) the ways you work, the tools you use, and the context that you are in so that you will notice when risks arise that may not/no longer be acceptable, which will lead to a review of your context (context estanblishment) and a subsequent risk assessment."),Object(o.b)("h2",{id:"networked-risk-management"},"Networked Risk Management"),Object(o.b)(r.a,{popup:"Risk management: a process that is run by (or on behalf of) a specific Party for the purpose of managing the Risks it Owns.",reference:"/framework/docs/terms/risk-management",mdxType:"Term"},"Networked risk management")," is a way for managing the ",Object(o.b)(r.a,{popup:"Risk (of a Party's Objective): the effects that uncertainty (i.e. a lack of information, understanding or knowledge of events, their consequences or likelihoods) can have on the intended realization of that Party's Objective.",reference:"/framework/docs/terms/risk",mdxType:"Term"},"risks")," of a single ",Object(o.b)(r.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", taking into account that Our definitions of ",Object(o.b)(r.a,{popup:"Risk (of a Party's Objective): the effects that uncertainty (i.e. a lack of information, understanding or knowledge of events, their consequences or likelihoods) can have on the intended realization of that Party's Objective.",reference:"/framework/docs/terms/risk",mdxType:"Term"},"risk"),", ",Object(o.b)(r.a,{popup:"Risk-owner (of a Risk): the Party that is the Owner of the Objective to which the Risk is associated.",reference:"/framework/docs/terms/risk-owner",mdxType:"Term"},"risk owner")," and other risk-related terms are aligned with those of ISO, but (contrary to those of) but there are some subtle differences. much more explicit In ISO standards, the person or entity (say: the ",Object(o.b)(r.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),") with the accountability and authority to manage a risk is called the 'risk owner'.",Object(o.b)(r.a,{popup:"Risk management: a process that is run by (or on behalf of) a specific Party for the purpose of managing the Risks it Owns.",reference:"/framework/docs/terms/risk-management",mdxType:"Term"},"Networked Risk Management")," is a management process that is run by (or on behalf of) a ",Object(o.b)(r.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," for the purpose of managing the ",Object(o.b)(r.a,{popup:"Risk (of a Party's Objective): the effects that uncertainty (i.e. a lack of information, understanding or knowledge of events, their consequences or likelihoods) can have on the intended realization of that Party's Objective.",reference:"/framework/docs/terms/risk",mdxType:"Term"},"risks")," that this party ",Object(o.b)(r.a,{popup:"Owner (of an Entity): the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owns"),".",Object(o.b)("h2",{id:"scoping"},"Scoping"),Object(o.b)("p",null,"All (ISO and non-ISO) frameworks start by requiring that you define the scope (also called 'context') of your management processes. And for good reason: you will be in charge of whatever you will be managing in such processes. To this we add the requirement is that"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a context must have a single owner, i.e. a ",Object(o.b)(r.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that is in charge of what happens in that context, and that consequently should be managing the ",Object(o.b)(r.a,{popup:"Risk (of a Party's Objective): the effects that uncertainty (i.e. a lack of information, understanding or knowledge of events, their consequences or likelihoods) can have on the intended realization of that Party's Objective.",reference:"/framework/docs/terms/risk",mdxType:"Term"},"risks")," therein."),Object(o.b)("li",{parentName:"ul"},"a context must fall within the ",Object(o.b)(r.a,{popup:"Scope of Control (of a Party): the extent of the area or subject matter that the Party controls.",reference:"/framework/docs/terms/scope-of-control",mdxType:"Term"},"scope of control")," of its ",Object(o.b)(r.a,{popup:"Owner (of an Entity): the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner"),", as it is hard to manage risks or other things if you cannot control them.")),Object(o.b)("p",null,"In decentralized contexts we deal with ecosystems of autonomous ((self)sovereign) parties, it is a given that the scope of control of each such party does not extend beyond the party itself - it's the very definition of autonomy/sovereignty. A party could use an ISO standard to manage X (risks, ...), but SHOULD limit its scope to be within its own scope of control.\nThe only guidance that such a party gets from ISO standards regarding how to deal with risks that relate to stuff outside the scope, are the 'identification of 'interested parties' (that may work with you, or against you) and 'communication' (about the topics you are managing).\nI think that ToIP governance should be aware of this pitfall and SHOULD NOT attempt to create or support frameworks that are meant to be used to do governance over autonomous parties. Rather, the WG/TF should focus on doing governance that assists such parties as they autonomously make their own, subjective decisions that are good for them individually, but perhaps not so good for others. That's a challenge.\nBut if we succeed here, this can be a real contribution,  not only for ToIP, but also for the various management standards in ISO. So we don't do away with such standards, but we complement them by providing ways to deal with larger, decentralized contexts of autonomous parties.\nSecondly, governance and trust assurance should not be limited to IT security (ISO 27001, ISO 27005). It should also cover business risks, e.g. of a business transaction going sour. After all, I think that a large part of data in credentials that are being exchanged serve to provide information to parties that are negotiating/conducting a business transaction, so that they can (subjectively/autonomously) assess their individual transaction risk(level)s, and mitigate such risks such that the residual risk becomes acceptable. This, and other topics, aren't covered by ISO 27001 nor ISO 27005. So we should take a broader look than these."),Object(o.b)("p",null,"Traditional risk management (RM) frameworks are currently not fit for use in decentralized contexts. Frameworks such as ISO 31000, or COSO, (tacitly) assume centralized organizational leadership and auditing, and cyclic (PDCA) processes for risk management. While predominantly large enterprises have adopted (a mix of) them, it is way too cumbersome for SME's and individuals to work with. Also, their being adopted by enterprises suggests they are inappropriate in decentralized, networked contexts. This paper proposes a way for identifying and managing risks and doing the associated governance and compliance in a way that ",Object(o.b)("em",{parentName:"p"},"is")," appropriate in such contexts."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Perhaps the best known approach is based on Assets Threats/Hazards and Vulnerabilities (ATV). It starts with making an inventory of the party's assets (things that are valuable to that party), list the threats to such assets (ways in which they lose (part of) their value), and vulnerabilities (weak spots in assets that increase the likelihood of threats being effective). Then, the likelihood of such threats occuring may be assessed, as well as the impact (often: damages) they would have. Combining these two enables a party to assess its risk levels. For the risks that are unacceptable, a treatment plan must be conceived, the execution of which supposedly reduces (or: gets rid of) the risk. This, but also: changing circumstances, change the risks the party runs, which means that it has to repeat all these steps in a continuous mananagement cycle. Mature RM-processes will also include other things, such as communications with the party's stakeholders, regular audits, etc."),Object(o.b)("p",null,"Another well known method, predominantly for industry, is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sciencedirect.com/science/article/pii/S0925753516300078"}),"bowtie"),". It focuses on events that may occur, a 'fault tree' (i.e. a graph that identifies the relevant causes/threats) and an 'event tree' (i.e. a graph of possible consequences/outcomes). The have the 'barrier' concepts, which represents a measure that aims to prevent threats from materializing, or reduce the effect of possible consequences. As with ATV, implementing/changing measures, as well as changing circumstances, require set of events and graphs to be appropriately managed. This entails deciding about the (un)acceptability of unwanted consequences, and implementing barriers as needed - which change circumstances."),Object(o.b)("p",null,"RM approaches such as the ones mentioned above have severe practical limitations. Individuals and many SME's do RM intuitively, they 'know' where the risks are that need to be mitigated. They consider such approaches as an inefficient way of finding out what they already know. In large organizations, we've seen lots of activities being conducted in order to comply with the RM-process requirements, but did not contribute all that much to managing actual risk."),Object(o.b)("p",null,"An illustration of this is an incident that took place in January 2012 at the Dutch telco KPN. IT security has long been an IT priority for KPN: its CEOs are member of the '",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cybersecurityraad.nl/"}),"Cyber Security Raad"),"', a national and independent advisory college of the Dutch government whose mission is to increase cybersecurity throughout the country. Also, its critical services have been certified against ISO 9001 and ISO 27001. Notwithstanding all this, a 17 year old boy ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://tweakers.net/nieuws/87454/kpn-hacker-zag-acties-als-een-kwajongensstreek.html"}),"broke into hundreds of servers"),", where he could have manipulated KPNs fixed telecom network putting the reachability of the national emergency number 112 (911 in the US) at risk. The question here is why the traditional methods were unable to prevent this from happening."),Object(o.b)("p",null,"Another illustration comes from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://owasp.org/www-project-top-ten/"}),"OWASP Top 10")," list of web application security risks. This list, which exists since 2003 and is regularly updated, shows that the variety of vulnerabilities in applications does not change all that much: injection, broken authentication, cross-site scripting, using components with known vulnerabilities are here to stay. The question here is what is missing in the RM processes of small and large organizations alike that makes many of them deploy systems with such vulnerabilities, in spite of the vast amount of guidance that OWASP provides for preventing them."),Object(o.b)("p",null,"One reason for this may be that risks must be owned. That is to say: there must be a person (not: an organization) that actually feels 'pain' (discomfort, anxiety, ...) when that risk is not acceptable. This is a different kind of ownership than what we have seen a lot, which is writing the name of a person next to a risk. The latter is ineffective if that person doesn't feel the associated pain."),Object(o.b)("p",null,"Another reason is that the number of risks a person needs to deal with must be manageable. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.enisa.europa.eu/topics/threat-risk-management/risk-management/current-risk/risk-management-inventory/rm-ra-methods/m_cramm.html"}),"CRAMM")," (1985-2003) is a RM method + tool that helped organizations do their risk assessments by providing threats to, and vulnerabilities of, various kinds of assets. As the number of technological products exploded, so did their database, resulting in a CRAMM risk assessment becoming unacceptably costly and long. Also, it produced ever more mitigation measures. For ",Object(o.b)(r.a,{popup:"Management: the act or process of managing or actually realizing of (the results associated with) a set of Objectives by the Owner of these Objectives.",reference:"/framework/docs/terms/management",mdxType:"Term"},"managers"),", it was obvious that many of them were irrelevant and the required budgets would not be available."),Object(o.b)("p",null,"A third reason is that risks should be relevant in order to be treated. For example, the risk of leaking a cryptographic key from a crypto chip that is vulnerable to power/timing-attacks is irrelevant e.g. when the chip and its battery are sealed in a physical casing. Also, the risk of crashing your car as a result of an autopilot failure is irrelevant if you never use the autopilot."),Object(o.b)("p",null,"The last reason we mention is that people generally prefer activities that help them realize their objectives rather than activities that do not (visibly) contribute. Many governance, RM and compliance (GRC) related activities fall in that second category, except perhaps for people whose job is 'doing GRC'. Having to do such activities is a typical trait of centrally organized GRC."),Object(o.b)("p",null,"The alternative for putting effort in preventing failures is focusing on the flip-side of that coin, which is: putting effort in realizing successes. It stimulates people to own the associated risks and manage them (it makes the pain go away). When the risks become unmanageable, the associated pain may indicate you have an objective of staying healthy, which you might mitigate by outsourcing the realization of one or more of your objectives."),Object(o.b)("p",null,"To illustrate the difference between these approaches, consider a doctor whose objective is to get her patients in a continuous healthy state and keep them there. When a patient is not in such a state, she won't inventory ",Object(o.b)("em",{parentName:"p"},"everything")," that could be wrong with the patient as traditional methods would have her do. Rather, she looks at what is preventing the patient from becoming/remaining healthy, makes a treatment plan, and has it executed.That's much easier. And when she needs to see too many patients, she (literally) feels the associated agony and will try to offload some of the patients to trusted colleagues."),Object(o.b)("p",null,"Realizing successes is an inherently decentralized concept, because in the end, being succesful always depends on some kind of recognition of others: if you provide a service or product, your success depends on the value they have for your customers, which they express by paying you money, or providing you with a service or product of their own. Positive motivators stimulate parties to increasingly interact and work together to the benefit of both. In contrast, centralized settings have a tendency to use negative motivators to make people interact and work together."),Object(o.b)("p",null,"Different methods have been around for some time now that may be part of decentralized GRC (and in particular: decentralized RM). One such method is the Open Group's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://publications.opengroup.org/c133"}),"Dependency Modeling standard")," (DM - also available on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.researchgate.net/publication/305884742_Open_Group_Standard_Dependency_Modeling_O-DM"}),"ResearchGate"),"). It specifies a way by which a party can inventory its goals, and compute the probabilities of achieving them by combining the probilities of the goals that they depend on. Statistical operations then identify points (objectives) of failure that need to be addressed."),Object(o.b)("p",null,"Another, complementary method is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://repository.tno.nl/islandora/object/uuid:95b1a97a-2d5c-41b1-b5d9-43bcd04d981b"}),"Networked Risk Management (NRM)"),". Next to the role of 'objective Owner', NRM adds two others: the Producer is the party that is responsible for realizing the results by which it can be established (e.g. by an auditor, or customers) whether or not an objective is met/realized/fulfilled. A Consumer is a party that uses these results for the purpose of realizing one or more objectives that it owns. An objective Owner states the objective, specifies the (auditable) results, and must be the Producer and/or Consumer thereof. Risks are associated with an objective, and map the objective to a risk level, i.e. a measure that is meaningful to the owner and that indicates the extent to which the objective is not (going to be) met. Pragmatically: the amount of 'pain' (discomfort, anxiety, ...) the objective's Owner experiences as it contemplates the chances of it (not) being realized."),Object(o.b)("p",null,"In analogy to 'Self-Sovereign Identity' - a term used to refer to the sovereignty/autonomy of individuals (and organizations) when it comes to identity-related matters, we introduce the phrase 'Self-Sovereign GRC' to refer to the sovereignty/autonomy of individuals (and organizations) when it comes to setting their objectives (governance), managing the associated risks of (not) realizing them (risk management), and doing what is necessary to become and/or remain part of a community of other self-sovereign entitites (compliance)."),Object(o.b)("p",null,"The purpose of this paper is to help the reader understand what this is all about, so that we can apply the ideas that are deemed useful in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group"}),"ToIP Governance Stack Working Group"),". ideas in the better explain NRM-based risk management, NRMBecause of its focus on NRM is ideally suited for decentralized contexts."),Object(o.b)("h2",{id:"mental-model"},"Mental Model"),Object(o.b)("p",null,"This chapter describes the mental model for decentralized risk management. The model uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://essif-lab.pages.grnet.gr/framework/docs/essifLab-glossary"}),"eSSIF-Lab terminology"),", in particular that which is related to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://essif-lab.pages.grnet.gr/framework/docs/terms/pattern-party-actor-action"}),"Parties, Actors and Actions"),"."),Object(o.b)("h3",{id:"summary"},"Summary"),Object(o.b)("p",null,'This mental model captures the foundational concepts and relations that we need for thinking about decentralized risk management. It answers questions such as "What is a risk?", "Who is to address what risks?", "What\'s in it for me?", "How do the terms \'Governance\', \'Risk management\' and \'Compliance\' relate to one another?", and more.'),Object(o.b)("p",null,"The model acknowledges the sovereignty (autonomy) that parties have in their"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"governance, i.e. as they decide which objectives to pursue, how to organize their realization, how and when to change or update their objectives, etc."),Object(o.b)("li",{parentName:"ul"},"risk management (RM), i.e. identify the assess the")))}p.isMDXComponent=!0},233:function(e,t,a){"use strict";var n=a(0),i=a(20);t.a=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},235:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(233),i=a(236);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,s=o.forcePrependBaseUrl,r=void 0!==s&&s,c=o.absolute,h=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(r)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return h?e+l:l}(o,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},236:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))}}]);