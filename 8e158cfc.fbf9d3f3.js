(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return h})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var i=a(2),n=a(6),r=(a(0),a(230)),s=a(231),o=a.n(s),c=a(235),d={id:"pattern-identity",title:"Identity Pattern",scopeid:"essifLab",type:"pattern",typeid:"identity",stage:"draft",hoverText:"The eSSIF-Lab Identity Pattern shows how digital identities work, how this relates to (attributes in) credentials, and how all this can be made to work in SSI contexts.",date:20210803},h={unversionedId:"terms/pattern-identity",id:"terms/pattern-identity",isDocsHomePage:!1,title:"Identity Pattern",description:"Purpose",source:"@site/docs/terms/pattern-identity.md",slug:"/terms/pattern-identity",permalink:"/framework/docs/terms/pattern-identity",editUrl:"https://gitlab.grnet.gr/essif-lab/framework/-/tree/master/docs/terms/pattern-identity.md",version:"current",sidebar:"sidebar_for_essifLab",previous:{title:"Guardianship",permalink:"/framework/docs/terms/pattern-guardianship"},next:{title:"Governance and Management",permalink:"/framework/docs/terms/pattern-governance-and-management"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Formalized model",id:"formalized-model",children:[]},{value:"Identity - Information Realm",id:"identity---information-realm",children:[]},{value:"Identity - Data Realm",id:"identity---data-realm",children:[]}],m={rightToc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Identity pattern")," captures the concepts and relations that explain how digital identities work, how this relates to (attributes in) ",Object(r.b)(o.a,{popup:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",reference:"/framework/docs/terms/credential",mdxType:"Term"},"credentials"),", and how all this can be made to work in ",Object(r.b)(o.a,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI contexts"),"."),Object(r.b)("h3",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"The term 'identity' is ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Identity"}),"used in many ways")," in different contexts, and is often related to intangibles, such as feelings, emotions, ideas of belonging, and the like. However, in ",Object(r.b)(o.a,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI contexts"),", we need to work with tangible things - specifically: data that can be issued, stored, processed, transferred, requested and obtained. Still, in such contexts, we have observed that people use the term 'identity' to refer to various concepts/ideas, e.g.:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a string of alphanumeric characters that can be used to ",Object(r.b)(o.a,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identify")," someone, e.g. a name or an identification number (in general: an ",Object(r.b)(o.a,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifier"),"),"),Object(r.b)("li",{parentName:"ul"},"a (coherent) set of ",Object(r.b)(o.a,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," (statements, claims) about someone, represented as data, e.g. digital, or in print, usually including an ",Object(r.b)(o.a,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifier")," of some kind;"),Object(r.b)("li",{parentName:"ul"},"an artifact that contains such data, e.g. a passport, a (digitally signed) credential.")),Object(r.b)("p",null,"(Digital) identities, or personal data, are often associated with the ability to ",Object(r.b)(o.a,{popup:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",reference:"/framework/docs/terms/identify",mdxType:"Term"},"identify")," a person. ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf"}),"Pfitzmann and Hansen, 2010"),", who tried to come up with a consolidated set of terms for identity and privacy, say that 'identity' is ",Object(r.b)("em",{parentName:"p"},"a subset of attribute values of a person which sufficiently identifies this person within any set of persons"),". The ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e1489-1-1"}),"GDPR definition of personal data"),' is "',Object(r.b)("em",{parentName:"p"},"any information relating to an identified or identifiable natural person ('data ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),"'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person"),'".'),Object(r.b)(o.a,{popup:"Definition: a text that helps Parties to have the same understanding about the meaning of (and Concepts behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction.",reference:"/framework/docs/terms/definition",mdxType:"Term"},"Definitions")," such as these have various difficulties, perhaps the most prominent of which is that they do not provide a criterion that different people can use for determining whether or not something qualifies as an 'identity', and be in agreement on that. As a consequence, the relevance of having an identity, particularly in an ",Object(r.b)(o.a,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI context"),", is not clear. Therefore, rather than searching for an answer to the question what an identity is, or should be, this ",Object(r.b)(o.a,{popup:"Pattern (Mental Model): A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",reference:"/framework/docs/terms/pattern",mdxType:"Term"},"pattern")," seeks to identify the ",Object(r.b)(o.a,{popup:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",reference:"/framework/docs/terms/concept",mdxType:"Term"},"concepts")," (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about who or what an ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," actually _is_. Readers that are interested in ",Object(r.b)(o.a,{popup:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",reference:"/framework/docs/terms/identify",mdxType:"Term"},"identification")," aspects are kindly referred to the ",Object(r.b)(o.a,{popup:"The eSSIF-Lab Identification Pattern describes mechanisms that a Party uses to Identify Entities, and mechanisms for communicating with another Party such that both Parties can identify an entity and know whether or not they identify the same entity.",reference:"/framework/docs/terms/pattern-identification",mdxType:"Term"},"identification pattern"),".",Object(r.b)("p",null,"The figure below illustrates the concept of/idea that the ",Object(r.b)("em",{parentName:"p"},"being")," of a person, i.e. who the person is, is determined by everyone that has ideasknows about this person."),Object(r.b)("p",null,"In our model, we postulate that ",Object(r.b)(o.a,{popup:"Identity (of an Entity): the combined Knowledge about that Entity of all Parties, i.e. the union of all Partial Identities of which that Entity is the subject.",reference:"/framework/docs/terms/identity",mdxType:"Term"},"identity")," is related to who or what an ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," actually ",Object(r.b)("em",{parentName:"p"},"is"),", and that this is the combined perception (",Object(r.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge"),") of all ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," that know about that entity's existence."),Object(r.b)("img",{alt:"Various partial identities for subject Piet van der Kluns, including a self-identity",src:Object(c.a)("images/essif-lab-partial-identities.png")}),Object(r.b)("p",null,"The figure has a person in its center (the 'protagonist' of the example) calls himself Piet van der Kluns, and perceives himself as being 28 years old, humorous and sporty. The other figures (a judge, a photographer, a colleague, and a mechanic) represent ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", each of which has its own view on the protagonist. The photographer finds him expressionless and dull, his colleague considers Piet to be reliable and helpful. They all have their own, subjective view on the protagonist, which can be expressed in terms of judgements and characteristics that they attribute to the protagonist. The number of parties that know about the protagonist will initially be very small, but will become larger over time. Also, the judgements and characteristics that parties attribute to the protogonist will develop and change over time."),Object(r.b)("p",null,"It seems reasonable to say that the set of all judgements and characteristics that parties have attributed to the protagonist at some point in time represent who or what that protagonist actually ",Object(r.b)("em",{parentName:"p"},"is")," (at that time), and we might call that its ",Object(r.b)(o.a,{popup:"Identity (of an Entity): the combined Knowledge about that Entity of all Parties, i.e. the union of all Partial Identities of which that Entity is the subject.",reference:"/framework/docs/terms/identity",mdxType:"Term"},"identity"),"."),Object(r.b)("p",null,"However, this term has little practical relevance. First, the ",Object(r.b)(o.a,{popup:"Semantics: a mapping between the (tangible/textual) Terms and (intangible) ideas/Concepts - their meaning.",reference:"/framework/docs/terms/semantics",mdxType:"Term"},"semantics")," of any attribution is (autonomously) decided by the attributing ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", implying that attributes of different parties cannot be readily compared. The figure illustrates this by having the mechanic judge the protagonist to be unreliable, whereas the colleague finds him reliable. But even if parties agree, e.g. the photographer and mechanic both characterize the protagonist as a customer, but it does mean different things. While for a photographer, a customer is a person that it can instruct to sit down, perhaps do some make-up on, and take a picture of, this is not the case for a mechanic."),Object(r.b)("p",null,"More importantly, in interactions between the protagonist and an arbitrary ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", the latter will act, and make decisions using only its own, subjective ",Object(r.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge"),". Any information about the protagonist that is used for that must therefore come from the part of the protagonist's identity that is also part of that ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party's")," ",Object(r.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge"),". We will use the term ",Object(r.b)(o.a,{popup:"Partial identity (of an Entity): all Knowledge that a specific Party (= the Owner of the partial identity) has about that Entity (= the 'Subject' of the partial identity).",reference:"/framework/docs/terms/partial-identity",mdxType:"Term"},"partial identity")," of some ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," as the ",Object(r.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," that a specific ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," has about that ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),". It implies that the identity of such an entity is the union of all of its partial identities."),Object(r.b)("p",null,"This use of attributions is particularly relevant for ",Object(r.b)(o.a,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI contexts")," in which the focus is on supporting (electronic) ",Object(r.b)(o.a,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"transactions"),". That support consists, amongst other things, of enabling a participating ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," to request for, and obtain data that are statements about ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," (in particular about other participating parties) that this party determines to be ",Object(r.b)(o.a,{popup:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",reference:"/framework/docs/terms/validate",mdxType:"Term"},"valid")," for making the decision of whether or not to commit. Knowing the ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that authored (issued) such data helps to determine not only the meaning of that data, but also to determine its (un)trustworthiness. Knowing that a set of data orginates from a single partial identity is a prerequisite for doing this."),Object(r.b)("h3",{id:"formalized-model"},"Formalized model"),Object(r.b)("p",null,"Here is a visual representation of this pattern, using the following ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../notations-and-conventions#pattern-diagram-notations"}),"notations and conventions"),":"),Object(r.b)("img",{alt:"Conceptual model of the 'Identity' pattern",src:Object(c.a)("images/patterns/pattern-identity.png")}),Object(r.b)("p",null,"The figure makes a strict distinction between (intangible) information concepts, which are presented in the purple area called 'information realm', and (tangible) data concepts, presented in the green 'data realm'. This enables us to link (tangible) data items that can be created, stored, processed, requested and obtained between (",Object(r.b)(o.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," of) various ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," with the (",Object(r.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of) these parties, where actual decisions are being made. For details about ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", ",Object(r.b)(o.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," and ",Object(r.b)(o.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," and their relations, please refer to the ",Object(r.b)(o.a,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"party-actor-action pattern"),"."),Object(r.b)("h3",{id:"identity---information-realm"},"Identity - Information Realm"),Object(r.b)("p",null,"The figure expresses that an ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that is known to a ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," can be attributed characteristics, the precise nature of which is defined and determined in the ",Object(r.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of that party. The ",Object(r.b)(o.a,{popup:"Partial identity (of an Entity): all Knowledge that a specific Party (= the Owner of the partial identity) has about that Entity (= the 'Subject' of the partial identity).",reference:"/framework/docs/terms/partial-identity",mdxType:"Term"},"partial identity")," of which that entity is the ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),", is comprised of every characteristic that the party has attributed to. We also hold that parties will associate each such attribution with a level of certainty, i.e. a measure of the strength of their belief that the attribution is correct. Such a level of certainty helps parties to determine whether or not the characteristic can be used for making certain decisions (i.e. is ",Object(r.b)(o.a,{popup:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",reference:"/framework/docs/terms/validate",mdxType:"Term"},"valid")," in arguments leading to such decisions)."),Object(r.b)("p",null,"Hence, the partial identity is part of the knowledge of that party, which implies that the party ",Object(r.b)(o.a,{popup:"Owner (of an Entity): the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owns")," the partial identity, and governs it."),Object(r.b)("p",null,"By saying that a ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," is also an ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),", it follows that if it knows itself to exist, it can attribute characteristics to itself, and hence have a partial identity for which it is the ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),"."),Object(r.b)("p",null,"For completeness sake, the figure shows that the ",Object(r.b)(o.a,{popup:"Identity (of an Entity): the combined Knowledge about that Entity of all Parties, i.e. the union of all Partial Identities of which that Entity is the subject.",reference:"/framework/docs/terms/identity",mdxType:"Term"},"identity")," of which the entity is the ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," is comprised of all partial identities of which that entity is the ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),", including the partial identity for which it is the ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),". The figure thus (correctly) suggests that this term, while it can be properly defined, has no further relevance - at least not for our purposes."),Object(r.b)("p",null,"The last item in the information realm is the ",Object(r.b)(o.a,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifier")," concept, which is better explained in the ",Object(r.b)(o.a,{popup:"The eSSIF-Lab Identification Pattern describes mechanisms that a Party uses to Identify Entities, and mechanisms for communicating with another Party such that both Parties can identify an entity and know whether or not they identify the same entity.",reference:"/framework/docs/terms/pattern-identification",mdxType:"Term"},"identification pattern"),"."),Object(r.b)("p",null,"Notice that the ",Object(r.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of a ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," defines (specifies, contains) whatever there is to know. This includes a specification of characteristics, the meaning and allowed values for the levels of certainty, the kinds of identifiers to use in various circumstances, etc. Also, this knowledge contains the set of (all) ",Object(r.b)(o.a,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifiers")," that the party has defined/created itself for ",Object(r.b)(o.a,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifying")," ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," in various circumstances."),Object(r.b)("p",null,"Finally, the ",Object(r.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of a ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," also holds the ",Object(r.b)(o.a,{popup:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party.",reference:"/framework/docs/terms/policy",mdxType:"Term"},"policies")," by which its ",Object(r.b)(o.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," determine which values and which (predicate and ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),") identifiers to use for the creation of claims (attributes) and how to construct credentials from such attributes. While in general we would like to believe that an attribute that an ",Object(r.b)(o.a,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," of a ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," creates is a truthful representation of a characteristic in that party's knowledge (which is everything the party believes to be true), there is no guarantee for that. Parties may lie."),Object(r.b)("h3",{id:"identity---data-realm"},"Identity - Data Realm"),Object(r.b)("p",null,"In the data realm, the figure also shows that a ",Object(r.b)(o.a,{popup:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",reference:"/framework/docs/terms/credential",mdxType:"Term"},"credential")," consists of various claims, each of which represents a (possibly complex) statement about an ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that is referred to as its ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),". To this end, the claim consists of a ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," identifier (which in practice may be implied - hence the 0..1 multiplicity), a(n identifier for the) predicate, which refers to the characteristic that is attributed to the ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),", and 0..n values that provide the details of the characteristic. For example, if the characteristic is 'level of trustworthiness', there would be one value that represents the level of trustworthiness. If the characteristic is 'is over 18 years old', then no value is required. If the characteristic is 'children', the value may be a list of data objects, each of which would represent a person that aledgedly is a child of the ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),"."),Object(r.b)("p",null,"As said before, it is not self-evident that when a party creates attributes for some ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),", such attributes actually reflect the characteristics that the party believes to be true for that ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),". Parties may lie."),Object(r.b)("p",null,"Sets of claims can be aggregated, meta data can be added to that (e.g. signatures and other proofs) to form credentials of various kinds. While ideally a ",Object(r.b)(o.a,{popup:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",reference:"/framework/docs/terms/credential",mdxType:"Term"},"credential")," would represent a subset of the ",Object(r.b)(o.a,{popup:"Partial identity (of an Entity): all Knowledge that a specific Party (= the Owner of the partial identity) has about that Entity (= the 'Subject' of the partial identity).",reference:"/framework/docs/terms/partial-identity",mdxType:"Term"},"partial identity")," of its ",Object(r.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),", this can also not be guaranteed."),Object(r.b)("p",null,"Digital signatures and other cryptographic proofs do not relate in any way to the truth of the information that the signed/proved data represents. However, they do serve other purposes. Under the assumption that there is no doubt that the private key that is used to digitally sign some data is under the exclusive control of a single party, the signature algorithm is secure and well-implemented, and the corresponding public key can reliably be dereferenced to that party, then that signature provides a proof of provenance of that data, as well a proof of immutability."))}l.isMDXComponent=!0},233:function(e,t,a){"use strict";var i=a(0),n=a(20);t.a=function(){var e=Object(i.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},235:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s}));var i=a(233),n=a(236);function r(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,i){var r=void 0===i?{}:i,s=r.forcePrependBaseUrl,o=void 0!==s&&s,c=r.absolute,d=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var h=a.startsWith(t)?a:t+a.replace(/^\//,"");return d?e+h:h}(r,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},236:function(e,t,a){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!i(e)}a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}))}}]);