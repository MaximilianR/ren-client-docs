(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{270:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(0)),n=l(a(464)),d=l(a(536)),i=l(a(7060)),u=l(a(490)),o=l(a(510)),s=l(a(621));var c=function(e){var t=e.content,a=e.sidebar,l=t.frontMatter,c=t.metadata,m=c.title,f=c.description,v=c.nextItem,g=c.prevItem,p=c.editUrl,E=l.hide_table_of_contents;return r.default.createElement(n.default,{title:m,description:f,wrapperClassName:"blog-wrapper"},t&&r.default.createElement("div",{className:"container margin-vert--lg"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col col--3"},r.default.createElement(u.default,{sidebar:a})),r.default.createElement("main",{className:"col col--7"},r.default.createElement(d.default,{frontMatter:l,metadata:c,isBlogPostPage:!0},r.default.createElement(t,null)),r.default.createElement("div",null,p&&r.default.createElement(s.default,{editUrl:p})),(v||g)&&r.default.createElement("div",{className:"margin-vert--xl"},r.default.createElement(i.default,{nextItem:v,prevItem:g}))),!E&&t.toc&&r.default.createElement("div",{className:"col col--2"},r.default.createElement(o.default,{toc:t.toc})))))};t.default=c},490:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sidebar;if(0===t.items.length)return null;return r.default.createElement("div",{className:(0,n.default)(i.default.sidebar,"thin-scrollbar")},r.default.createElement("h3",{className:i.default.sidebarItemTitle},t.title),r.default.createElement("ul",{className:i.default.sidebarItemList},t.items.map((function(e){return r.default.createElement("li",{key:e.permalink,className:i.default.sidebarItem},r.default.createElement(d.default,{isNavLink:!0,to:e.permalink,className:i.default.sidebarItemLink,activeClassName:i.default.sidebarItemLinkActive},e.title))}))))};var r=l(a(0)),n=l(a(416)),d=l(a(431)),i=l(a(371))},510:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(0)),n=l(a(416)),d=l(a(511)),i=l(a(372)),u="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?r.default.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.default.createElement("li",{key:e.id},r.default.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.default.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return(0,d.default)(u,"table-of-contents__link--active",100),r.default.createElement("div",{className:(0,n.default)(i.default.tableOfContents,"thin-scrollbar")},r.default.createElement(o,{toc:t}))};t.default=s},511:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(0);var r=function(e,t,a){var r=(0,l.useState)(void 0),n=r[0],d=r[1];(0,l.useEffect)((function(){function l(){var l=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var l=e[e.indexOf(t)-1];return null!=l?l:t}return t}return e[e.length-1]}();if(l)for(var r=0,i=!1,u=document.getElementsByClassName(e);r<u.length&&!i;){var o=u[r],s=o.href,c=decodeURIComponent(s.substring(s.indexOf("#")+1));l.id===c&&(n&&n.classList.remove(t),o.classList.add(t),d(o),i=!0),r+=1}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))};t.default=r},536:function(e,t,a){"use strict";var l=a(19).default,r=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),d=r(a(416)),i=a(413),u=l(a(430)),o=r(a(431)),s=r(a(498)),c=r(a(497)),m=r(a(374)),f=a(428);var v=function(e){var t,a,l=(t=(0,f.usePluralForm)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),r=e.children,v=e.frontMatter,g=e.metadata,p=e.truncated,E=e.isBlogPostPage,b=void 0!==E&&E,h=g.date,_=g.formattedDate,N=g.permalink,k=g.tags,P=g.readingTime,w=v.author,y=v.title,M=v.image,T=v.keywords,L=v.author_url||v.authorURL,I=v.author_title||v.authorTitle,x=v.author_image_url||v.authorImageURL;return n.default.createElement(n.default.Fragment,null,n.default.createElement(c.default,{keywords:T,image:M}),n.default.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",n.default.createElement("header",null,n.default.createElement(a,{className:(0,d.default)("margin-bottom--sm",m.default.blogPostTitle)},b?y:n.default.createElement(o.default,{to:N},y)),n.default.createElement("div",{className:"margin-vert--md"},n.default.createElement("time",{dateTime:h,className:m.default.blogPostDate},_,P&&n.default.createElement(n.default.Fragment,null," \xb7 ",l(P)))),n.default.createElement("div",{className:"avatar margin-vert--md"},x&&n.default.createElement(o.default,{className:"avatar__photo-link avatar__photo",href:L},n.default.createElement("img",{src:x,alt:w})),n.default.createElement("div",{className:"avatar__intro"},w&&n.default.createElement(n.default.Fragment,null,n.default.createElement("h4",{className:"avatar__name"},n.default.createElement(o.default,{href:L},w)),n.default.createElement("small",{className:"avatar__subtitle"},I)))))),n.default.createElement("div",{className:"markdown"},n.default.createElement(i.MDXProvider,{components:s.default},r)),(k.length>0||p)&&n.default.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.default.createElement("div",{className:"col"},n.default.createElement("strong",null,n.default.createElement(u.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var t=e.label,a=e.permalink;return n.default.createElement(o.default,{key:a,className:"margin-horiz--sm",to:a},t)}))),p&&n.default.createElement("div",{className:"col text--right"},n.default.createElement(o.default,{to:g.permalink,"aria-label":"Read more about "+y},n.default.createElement("strong",null,n.default.createElement(u.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))};t.default=v},621:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editUrl;return r.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.default.createElement(d.default,null),r.default.createElement(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))};var r=l(a(0)),n=l(a(430)),d=l(a(622))},622:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(3)),n=l(a(9)),d=l(a(0)),i=l(a(416)),u=l(a(375)),o=function(e){var t=e.className,a=(0,n.default)(e,["className"]);return d.default.createElement("svg",(0,r.default)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,i.default)(u.default.iconEdit,t),"aria-label":"Edit page"},a),d.default.createElement("g",null,d.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};t.default=o},7060:function(e,t,a){"use strict";var l=a(19).default,r=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),d=l(a(430)),i=r(a(431));var u=function(e){var t=e.nextItem,a=e.prevItem;return n.default.createElement("nav",{className:"pagination-nav","aria-label":(0,d.translate)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.default.createElement("div",{className:"pagination-nav__item"},a&&n.default.createElement(i.default,{className:"pagination-nav__link",to:a.permalink},n.default.createElement("div",{className:"pagination-nav__sublabel"},n.default.createElement(d.default,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.default.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.default.createElement(i.default,{className:"pagination-nav__link",to:t.permalink},n.default.createElement("div",{className:"pagination-nav__sublabel"},n.default.createElement(d.default,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.default.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};t.default=u}}]);