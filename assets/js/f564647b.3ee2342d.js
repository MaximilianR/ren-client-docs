(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{388:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),a=(t(0),t(486));const o={id:"ren_src_defaultdeposithandler",title:"Module: ren/src/defaultDepositHandler",sidebar_label:"ren/src/defaultDepositHandler",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/modules/ren_src_defaultdeposithandler",id:"api/modules/ren_src_defaultdeposithandler",isDocsHomePage:!1,title:"Module: ren/src/defaultDepositHandler",description:"Module: ren/src/defaultDepositHandler",source:"@site/ren-js/api/modules/ren_src_defaultdeposithandler.md",slug:"/api/modules/ren_src_defaultdeposithandler",permalink:"/ren-client-docs/ren-js/api/modules/ren_src_defaultdeposithandler",editUrl:null,version:"current",sidebar_label:"ren/src/defaultDepositHandler",sidebar:"docs",previous:{title:"Module: ren/src/config",permalink:"/ren-client-docs/ren-js/api/modules/ren_src_config"},next:{title:"Module: ren/src/lockAndMint",permalink:"/ren-client-docs/ren-js/api/modules/ren_src_lockandmint"}},c=[{value:"Variables",id:"variables",children:[{value:"defaultDepositHandler",id:"defaultdeposithandler",children:[]}]}],l={toc:c};function d({components:e,...n}){return Object(a.mdx)("wrapper",Object(r.default)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"module-rensrcdefaultdeposithandler"},"Module: ren/src/defaultDepositHandler"),Object(a.mdx)("h2",{id:"variables"},"Variables"),Object(a.mdx)("h3",{id:"defaultdeposithandler"},"defaultDepositHandler"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("inlineCode",{parentName:"p"},"Const")," ",Object(a.mdx)("strong",{parentName:"p"},"defaultDepositHandler"),": (",Object(a.mdx)("inlineCode",{parentName:"p"},"deposit"),": ",Object(a.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/ren_src_lockandmint.lockandmintdeposit"},Object(a.mdx)("em",{parentName:"a"},"LockAndMintDeposit")),"<any, ",Object(a.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/interfaces_build_main_chain#depositcommon"},Object(a.mdx)("em",{parentName:"a"},"DepositCommon")),"<any",">",", any, any, any",">",") => ",Object(a.mdx)("em",{parentName:"p"},"Promise"),"<void",">"," & { ",Object(a.mdx)("inlineCode",{parentName:"p"},"withRetries"),": (",Object(a.mdx)("inlineCode",{parentName:"p"},"newRetries"),": ",Object(a.mdx)("em",{parentName:"p"},"number"),") => ",Object(a.mdx)("em",{parentName:"p"},"void"),"  }"),Object(a.mdx)("p",null,"See [","[RenJS.defaultDepositHandler]","]."),Object(a.mdx)("p",null,"Defined in: ",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/defaultDepositHandler.ts#L135"},"ren-js/packages/lib/ren/src/defaultDepositHandler.ts:135")))}d.isMDXComponent=!0},486:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return s})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return u})),t.d(n,"withMDXComponents",(function(){return p}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){return function(n){var t=u(n.components);return a.a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=u(t),p=r,m=s["".concat(i,".").concat(p)]||s[p]||f[p]||o;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);