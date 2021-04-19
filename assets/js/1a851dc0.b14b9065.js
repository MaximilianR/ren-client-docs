(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{486:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){return function(t){var n=m(t.components);return i.a.createElement(e,l({},t,{components:n}))}},m=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=m(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,p=s["".concat(l,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(p,u(u({ref:t},o),{},{components:n})):i.a.createElement(p,u({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(486)),l={id:"utils_build_main_renvmutils",title:"Module: utils/build/main/renVMUtils",sidebar_label:"utils/build/main/renVMUtils",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/modules/utils_build_main_renvmutils",id:"api/modules/utils_build_main_renvmutils",isDocsHomePage:!1,title:"Module: utils/build/main/renVMUtils",description:"Module: utils/build/main/renVMUtils",source:"@site/ren-js/api/modules/utils_build_main_renvmutils.md",slug:"/api/modules/utils_build_main_renvmutils",permalink:"/ren-client-docs/ren-js/api/modules/utils_build_main_renvmutils",editUrl:null,version:"current",sidebar_label:"utils/build/main/renVMUtils",sidebar:"docs",previous:{title:"Module: utils/build/main/renVMHashes",permalink:"/ren-client-docs/ren-js/api/modules/utils_build_main_renvmhashes"},next:{title:"Module: utils/build/main/signatureUtils",permalink:"/ren-client-docs/ren-js/api/modules/utils_build_main_signatureutils"}},u=[{value:"Functions",id:"functions",children:[{value:"parseV1Selector",id:"parsev1selector",children:[]}]}],c={toc:u};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"module-utilsbuildmainrenvmutils"},"Module: utils/build/main/renVMUtils"),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"parsev1selector"},"parseV1Selector"),Object(a.mdx)("p",null,"\u25b8 ",Object(a.mdx)("inlineCode",{parentName:"p"},"Const"),Object(a.mdx)("strong",{parentName:"p"},"parseV1Selector"),"(",Object(a.mdx)("inlineCode",{parentName:"p"},"selector"),": ",Object(a.mdx)("em",{parentName:"p"},"string"),"): V1SelectorDetails"),Object(a.mdx)("p",null,"parseV1Selector splits a RenVM contract (e.g. ",Object(a.mdx)("inlineCode",{parentName:"p"},"BTC0Eth2Btc"),") into the asset\n(",Object(a.mdx)("inlineCode",{parentName:"p"},"BTC"),"), the origin chain (",Object(a.mdx)("inlineCode",{parentName:"p"},"Eth"),") and the target chain (",Object(a.mdx)("inlineCode",{parentName:"p"},"Btc"),")."),Object(a.mdx)("h4",{id:"parameters"},"Parameters:"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(a.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:"left"},Object(a.mdx)("inlineCode",{parentName:"td"},"selector")),Object(a.mdx)("td",{parentName:"tr",align:"left"},Object(a.mdx)("em",{parentName:"td"},"string"))))),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Returns:")," V1SelectorDetails"),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/renVMUtils.d.ts:10"))}s.isMDXComponent=!0}}]);