"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[7513],{3905:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),d=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),p=d(a),m=n,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||o;return a?r.createElement(f,i(i({ref:e},h),{},{components:a})):r.createElement(f,i({ref:e},h))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3505:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=(a(4996),["components"]),s={id:"form-phrase-syntax",sidebar_label:"Form Phrases",date:20220808},c="Form Phrases - Syntax",d={unversionedId:"spec-syntax/form-phrase-syntax",id:"spec-syntax/form-phrase-syntax",title:"Form Phrases - Syntax",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/spec-syntax/21-form-phrase-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/form-phrase-syntax",permalink:"/tev2-specifications/docs/spec-syntax/form-phrase-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/21-form-phrase-syntax.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1694961082,formattedLastUpdatedAt:"Sep 17, 2023",sidebarPosition:21,frontMatter:{id:"form-phrase-syntax",sidebar_label:"Form Phrases",date:20220808},sidebar:"tev2SideBar",previous:{title:"Term Identifiers",permalink:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax"},next:{title:"HRG Selection Criteria",permalink:"/tev2-specifications/docs/spec-syntax/hrg-termselcrit"}},h={},l=[],p={toc:l};function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"form-phrases---syntax"},"Form Phrases - Syntax"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",hovertext:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,"This document specifies the syntax of ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a [term](@)): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases"),", i.e. texts that are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"specified in the header field ",(0,o.kt)("inlineCode",{parentName:"li"},"formphrases")," in ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Knowledge Artifact of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated texts"),";"),(0,o.kt)("li",{parentName:"ul"},"conformant to the (PCRE) regex ",(0,o.kt)("inlineCode",{parentName:"li"},"(?:\\s*(?:[a-z0-9_-{}]+)\\s*(?:,\\s*([a-z0-9_-{}]+))*)?")," (see ",(0,o.kt)("a",{parentName:"li",href:"https://www.debuggex.com/r/20MNb2zgNwLDD-dD"},"Debuggex")," for a visualization)."),(0,o.kt)("li",{parentName:"ul"},"present in ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/spec-tools/trrt#id"},"used to convert")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"show text")," parts of ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Knowledge Artifact), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"term"),"s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec-syntax/form-phrase-syntax"},"syntax of ",(0,o.kt)("inlineCode",{parentName:"a"},"formphrases"))," enables the use use of 'macro's, i.e. shorthand syntax that represent regexes that allow for extended matching."),(0,o.kt)("p",null,"A formphrase 'macro' is a set of characters between braces ",(0,o.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"}")," that are shorthand for a matcher regex, and can be used by ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to conventiently specify a set of phrases that, when matched, would refer to the ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Knowledge Artifact of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text")," in which they are specified."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example and explanation of how it works"),(0,o.kt)("p",null,"Suppose we have a ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Knowledge Artifact of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text")," for the term ",(0,o.kt)("inlineCode",{parentName:"p"},"actor"),", and in its front matter, we specify:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"formPhrases: actor{ss}\n")),(0,o.kt)("p",null,"The part ",(0,o.kt)("inlineCode",{parentName:"p"},"{ss}")," is a macro, that suppose it is associated with the regex ",(0,o.kt)("inlineCode",{parentName:"p"},"(?:'?s|\\(s\\))?"),"."),(0,o.kt)("p",null,"When the ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/trrt",hovertext:"TRRT (TermRef Rendering Tool): a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," converts a ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Knowledge Artifact), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef"),", one of the things it needs to do is to ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt#term"},"convert a so-called ",(0,o.kt)("inlineCode",{parentName:"a"},"show-text")," into a ",(0,o.kt)("inlineCode",{parentName:"a"},"term"))," that exists in some ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Knowledge Artifact of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text"),". If the ",(0,o.kt)("inlineCode",{parentName:"p"},"show-text")," does not match the ",(0,o.kt)("inlineCode",{parentName:"p"},"term")," of any of the ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Knowledge Artifact of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated texts"),", the ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/trrt",hovertext:"TRRT (TermRef Rendering Tool): a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," will try to match it against every form phrase in every ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Knowledge Artifact of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text"),", including the formphrase ",(0,o.kt)("inlineCode",{parentName:"p"},"actor{ss}"),"."),(0,o.kt)("p",null,"This is done as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"all macros in the formphrase are replaced with their respective regexes, thereby transforming the formphrase into a regex itself;"),(0,o.kt)("li",{parentName:"ol"},"a regex engine is called that determines whether or not ",(0,o.kt)("inlineCode",{parentName:"li"},"show-text")," satisfies that regex. If (and only if) it does, there is a match."))),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"term")," is said to match such an element if and only if the regex that consists of the list element (with the macro replaced with the regex that it is shorthand for) matches that ",(0,o.kt)("inlineCode",{parentName:"p"},"term"),"."),(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"As the ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/trrt",hovertext:"TRRT (TermRef Rendering Tool): a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," has not yet been fully specified, nor implemented, the table below must currently be seen as a set of macro's that we intend to implement, but may not yet be there. The workaround is to replace a formphrase that is an element in the list of formphrases in a ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Knowledge Artifact of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text")," with the set of words that it stands for. If you maintain ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Knowledge Artifact of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated texts")," with a good editor, e.g. VSCode, that should not be an issue as these macros are easily found and replaced by their expansions.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"macro"),(0,o.kt)("th",{parentName:"tr",align:"center"},"regex"),(0,o.kt)("th",{parentName:"tr",align:"center"},"example"),(0,o.kt)("th",{parentName:"tr",align:"left"},"texts that the example matches"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ss}")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"('?s","|","(s",")",")?")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"actor{ss}")),(0,o.kt)("td",{parentName:"tr",align:"left"},'matches: "actor", "actors", "actor\'s", and "actor(s)"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{yies}")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"(y","|","y's","|","ies)")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"part{yies}")),(0,o.kt)("td",{parentName:"tr",align:"left"},'matches: "party", "party\'s", and "parties"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ying}")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"(y","|","ier","|","ying","|","ies","|","ied)")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"identif{ying}")),(0,o.kt)("td",{parentName:"tr",align:"left"},'matches: "identify", "identifier", "identifying", "identifies", and "identified"')))))}m.isMDXComponent=!0}}]);