(window.webpackJsonp=window.webpackJsonp||[]).push([[39,379],{1110:function(e,t,a){"use strict";var n=a(19).default,l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(3)),o=n(a(0)),i=l(a(489)),u=a(497),d=l(a(504)),c=l(a(648)),s=n(a(649)),f=l(a(647)),m=l(a(500)),p=l(a(590)),b=l(a(754)),h=l(a(780)),v=l(a(756)),E=a(499),y=l(a(463));const g=(e,t)=>"link"===e.type?(0,u.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>g(e,t)));function C({item:e,onItemClick:t,collapsible:a,activePath:n,...l}){const{items:u,label:d}=e,c=g(e,n),s=function(e){const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current}(c),[f,m]=(0,o.useState)((()=>!!a&&(!c&&e.collapsed))),p=(0,o.useRef)(null),[b,h]=(0,o.useState)(void 0),v=(e=!0)=>{var t;h(e?`${null===(t=p.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};(0,o.useEffect)((()=>{c&&!s&&f&&m(!1)}),[c,s,f]);const E=(0,o.useCallback)((e=>{e.preventDefault(),b||v(),setTimeout((()=>m((e=>!e))),100)}),[b]);return 0===u.length?null:o.default.createElement("li",{className:(0,i.default)("menu__list-item",{"menu__list-item--collapsed":f}),key:d},o.default.createElement("a",(0,r.default)({className:(0,i.default)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&c,[y.default.menuLinkText]:!a}),onClick:a?E:void 0,href:a?"#!":void 0},l),d),o.default.createElement("ul",{className:"menu__list",ref:p,style:{height:b},onTransitionEnd:()=>{f||v(!1)}},u.map((e=>o.default.createElement(O,{tabIndex:f?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:n})))))}function k({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:u,label:d}=e,c=g(e,a);return o.default.createElement("li",{className:"menu__list-item",key:d},o.default.createElement(m.default,(0,r.default)({className:(0,i.default)("menu__link",{"menu__link--active":c,[y.default.menuLinkExternal]:!(0,p.default)(u)}),to:u},(0,p.default)(u)&&{isNavLink:!0,exact:!0,onClick:t},l),d))}function O(e){switch(e.item.type){case"category":return o.default.createElement(C,e);case"link":default:return o.default.createElement(k,e)}}var w=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:n,isHidden:l}){const[r,m]=(0,o.useState)(!1),{navbar:{hideOnScroll:p},hideableSidebar:g}=(0,u.useThemeConfig)(),{isAnnouncementBarClosed:C}=(0,d.default)(),{scrollY:k}=(0,f.default)();(0,c.default)(r);const w=(0,s.default)();return(0,o.useEffect)((()=>{w===s.windowSizes.desktop&&m(!1)}),[w]),o.default.createElement("div",{className:(0,i.default)(y.default.sidebar,{[y.default.sidebarWithHideableNavbar]:p,[y.default.sidebarHidden]:l})},p&&o.default.createElement(b.default,{tabIndex:-1,className:y.default.sidebarLogo}),o.default.createElement("div",{className:(0,i.default)("menu","menu--responsive","thin-scrollbar",y.default.menu,{"menu--show":r,[y.default.menuWithAnnouncementBar]:!C&&0===k})},o.default.createElement("button",{"aria-label":r?(0,E.translate)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.translate)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{m(!r)}},r?o.default.createElement("span",{className:(0,i.default)(y.default.sidebarMenuIcon,y.default.sidebarMenuCloseIcon)},"\xd7"):o.default.createElement(v.default,{className:y.default.sidebarMenuIcon,height:24,width:24})),o.default.createElement("ul",{className:"menu__list"},t.map((t=>o.default.createElement(O,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),m(!1)},collapsible:a,activePath:e}))))),g&&o.default.createElement("button",{type:"button",title:(0,E.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.default)("button button--secondary button--outline",y.default.collapseSidebarButton),onClick:n},o.default.createElement(h.default,{className:y.default.collapseSidebarButtonIcon})))};t.default=w},446:function(e,t,a){"use strict";var n=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=n(a(528)),o=n(a(499));var i=function(){return l.default.createElement(r.default,{title:"Page Not Found"},l.default.createElement("main",{className:"container margin-vert--xl"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col col--6 col--offset-3"},l.default.createElement("h1",{className:"hero__title"},l.default.createElement(o.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l.default.createElement("p",null,l.default.createElement(o.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),l.default.createElement("p",null,l.default.createElement(o.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))};t.default=i},486:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return c})),a.d(t,"MDXProvider",(function(){return m})),a.d(t,"mdx",(function(){return h})),a.d(t,"useMDXComponents",(function(){return f})),a.d(t,"withMDXComponents",(function(){return s}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),s=function(e){return function(t){var a=f(t.components);return l.a.createElement(e,o({},t,{components:a}))}},f=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},m=function(e){var t=f(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),c=f(a),s=n,m=c["".concat(o,".").concat(s)]||c[s]||p[s]||r;return a?l.a.createElement(m,u(u({ref:t},i),{},{components:a})):l.a.createElement(m,u({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},71:function(e,t,a){"use strict";var n=a(4).default,l=a(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(0)),o=a(486),i=n(a(30)),u=n(a(35)),d=n(a(528)),c=n(a(1110)),s=n(a(552)),f=n(a(446)),m=n(a(780)),p=a(31),b=a(499),h=n(a(489)),v=n(a(467)),E=a(497);function y({currentDocRoute:e,versionMetadata:t,children:a}){var n,l;const{siteConfig:u,isClient:f}=(0,i.default)(),{pluginId:p,permalinkToSidebar:y,docsSidebars:g,version:C}=t,k=y[e.path],O=g[k],[w,N]=(0,r.useState)(!1),[_,P]=(0,r.useState)(!1),T=(0,r.useCallback)((()=>{_&&P(!1),N(!w)}),[_]);return r.default.createElement(d.default,{key:f,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:C,tag:(0,E.docVersionSearchTag)(p,C)}},r.default.createElement("div",{className:v.default.docPage},O&&r.default.createElement("div",{className:(0,h.default)(v.default.docSidebarContainer,{[v.default.docSidebarContainerHidden]:w}),onTransitionEnd:e=>{e.currentTarget.classList.contains(v.default.docSidebarContainer)&&w&&P(!0)},role:"complementary"},r.default.createElement(c.default,{key:k,sidebar:O,path:e.path,sidebarCollapsible:null===(n=null===(l=u.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===n||n,onCollapse:T,isHidden:_}),_&&r.default.createElement("div",{className:v.default.collapsedDocSidebar,title:(0,b.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},r.default.createElement(m.default,{className:v.default.expandSidebarButtonIcon}))),r.default.createElement("main",{className:(0,h.default)(v.default.docMainContainer,{[v.default.docMainContainerEnhanced]:w})},r.default.createElement("div",{className:(0,h.default)("container padding-vert--lg",v.default.docItemWrapper,{[v.default.docItemWrapperEnhanced]:w})},r.default.createElement(o.MDXProvider,{components:s.default},a)))))}var g=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>(0,p.matchPath)(n.pathname,e)));return l?r.default.createElement(y,{currentDocRoute:l,versionMetadata:a},(0,u.default)(t)):r.default.createElement(f.default,e)};t.default=g},780:function(e,t,a){"use strict";var n=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(3)),r=n(a(0));var o=e=>r.default.createElement("svg",(0,l.default)({width:"20",height:"20",role:"img"},e),r.default.createElement("g",{fill:"#7a7a7a"},r.default.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.default.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));t.default=o}}]);