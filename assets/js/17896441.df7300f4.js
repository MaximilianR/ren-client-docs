(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1108:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),d=l(a(30)),r=l(a(500)),i=l(a(499)),s=a(536),o=a(497);function u({siteTitle:e,versionLabel:t}){return n.default.createElement(i.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.default.createElement("strong",null,t)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function c({siteTitle:e,versionLabel:t}){return n.default.createElement(i.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.default.createElement("strong",null,t)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function f({versionLabel:e,to:t,onClick:a}){return n.default.createElement(i.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:e,latestVersionLink:n.default.createElement("strong",null,n.default.createElement(r.default,{to:t,onClick:a},n.default.createElement(i.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var m=function(){const{siteConfig:{title:e}}=(0,d.default)(),{pluginId:t}=(0,s.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=(0,o.useDocsPreferredVersion)(t),l=(0,s.useActiveVersion)(t),{latestDocSuggestion:r,latestVersionSuggestion:i}=(0,s.useDocVersionSuggestions)(t);if(!i)return n.default.createElement(n.default.Fragment,null);const m=null!=r?r:(v=i).docs.find((e=>e.id===v.mainDocId));var v;return n.default.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.default.createElement("div",null,"current"===l.name?n.default.createElement(u,{siteTitle:e,versionLabel:l.label}):n.default.createElement(c,{siteTitle:e,versionLabel:l.label})),n.default.createElement("div",{className:"margin-top--md"},n.default.createElement(f,{versionLabel:i.label,to:m.path,onClick:()=>a(i.name)})))};t.default=m},1109:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.default.createElement("div",{className:"col text--right"},n.default.createElement("em",null,n.default.createElement("small",null,n.default.createElement(r.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.default.createElement(i,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.default.createElement(s,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)))};var n=l(a(0)),d=l(a(461)),r=l(a(499));function i({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.default.createElement(r.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.default.createElement("time",{dateTime:new Date(1e3*e).toISOString(),className:d.default.lastUpdatedDate},t)}}," on {date}")}function s({lastUpdatedBy:e}){return n.default.createElement(r.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.default.createElement("strong",null,e)}}," by {user}")}},548:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({title:e,description:t,keywords:a,image:l}){const s=(0,i.useTitleFormatter)(e),o=(0,r.default)(l,{absolute:!0});return n.default.createElement(d.default,null,e&&n.default.createElement("title",null,s),e&&n.default.createElement("meta",{property:"og:title",content:s}),t&&n.default.createElement("meta",{name:"description",content:t}),t&&n.default.createElement("meta",{property:"og:description",content:t}),a&&n.default.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),l&&n.default.createElement("meta",{property:"og:image",content:o}),l&&n.default.createElement("meta",{name:"twitter:image",content:o}),l&&n.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))};var n=l(a(0)),d=l(a(32)),r=l(a(541)),i=a(497)},569:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),d=l(a(489)),r=l(a(570)),i=l(a(449));const s="table-of-contents__link";function o({toc:e,isChild:t}){return e.length?n.default.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>n.default.createElement("li",{key:e.id},n.default.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.default.createElement(o,{isChild:!0,toc:e.children}))))):null}var u=function({toc:e}){return(0,r.default)(s,"table-of-contents__link--active",100),n.default.createElement("div",{className:(0,d.default)(i.default.tableOfContents,"thin-scrollbar")},n.default.createElement(o,{toc:e}))};t.default=u},570:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(0);var n=function(e,t,a){const[n,d]=(0,l.useState)(void 0);(0,l.useEffect)((()=>{function l(){const l=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(l){let a=0,r=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!r;){const e=i[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));l.id===o&&(n&&n.classList.remove(t),e.classList.add(t),d(e),r=!0),a+=1}}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))};t.default=n},64:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),d=l(a(673)),r=l(a(1108)),i=l(a(548)),s=l(a(1109)),o=l(a(569)),u=l(a(674)),c=l(a(489)),f=l(a(462)),m=a(536);var v=function(e){const{content:t}=e,{metadata:a,frontMatter:{image:l,keywords:v,hide_title:p,hide_table_of_contents:E}}=t,{description:g,title:b,editUrl:h,lastUpdatedAt:_,formattedLastUpdatedAt:y,lastUpdatedBy:L}=a,{pluginId:N}=(0,m.useActivePlugin)({failfast:!0}),w=(0,m.useVersions)(N),U=(0,m.useActiveVersion)(N),T=w.length>1;return n.default.createElement(n.default.Fragment,null,n.default.createElement(i.default,{title:b,description:g,keywords:v,image:l}),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:(0,c.default)("col",{[f.default.docItemCol]:!E})},n.default.createElement(r.default,null),n.default.createElement("div",{className:f.default.docItemContainer},n.default.createElement("article",null,T&&n.default.createElement("div",null,n.default.createElement("span",{className:"badge badge--secondary"},"Version: ",U.label)),!p&&n.default.createElement("header",null,n.default.createElement("h1",{className:f.default.docTitle},b)),n.default.createElement("div",{className:"markdown"},n.default.createElement(t,null))),(h||_||L)&&n.default.createElement("div",{className:"margin-vert--xl"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col"},h&&n.default.createElement(u.default,{editUrl:h})),(_||L)&&n.default.createElement(s.default,{lastUpdatedAt:_,formattedLastUpdatedAt:y,lastUpdatedBy:L}))),n.default.createElement("div",{className:"margin-vert--lg"},n.default.createElement(d.default,{metadata:a})))),!E&&t.toc&&n.default.createElement("div",{className:"col col--3"},n.default.createElement(o.default,{toc:t.toc}))))};t.default=v},673:function(e,t,a){"use strict";var l=a(19).default,n=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(a(0)),r=n(a(500)),i=l(a(499));var s=function(e){const{metadata:t}=e;return d.default.createElement("nav",{className:"pagination-nav","aria-label":(0,i.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},d.default.createElement("div",{className:"pagination-nav__item"},t.previous&&d.default.createElement(r.default,{className:"pagination-nav__link",to:t.previous.permalink},d.default.createElement("div",{className:"pagination-nav__sublabel"},d.default.createElement(i.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),d.default.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),d.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&d.default.createElement(r.default,{className:"pagination-nav__link",to:t.next.permalink},d.default.createElement("div",{className:"pagination-nav__sublabel"},d.default.createElement(i.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),d.default.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};t.default=s},674:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({editUrl:e}){return n.default.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},n.default.createElement(r.default,null),n.default.createElement(d.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))};var n=l(a(0)),d=l(a(499)),r=l(a(675))},675:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(3)),d=l(a(0)),r=l(a(489)),i=l(a(451));var s=({className:e,...t})=>d.default.createElement("svg",(0,n.default)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,r.default)(i.default.iconEdit,e),"aria-label":"Edit page"},t),d.default.createElement("g",null,d.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));t.default=s}}]);