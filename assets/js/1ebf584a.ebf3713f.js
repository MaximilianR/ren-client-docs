(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{413:function(e,n,r){"use strict";r.r(n),r.d(n,"MDXContext",(function(){return u})),r.d(n,"MDXProvider",(function(){return f})),r.d(n,"mdx",(function(){return y})),r.d(n,"useMDXComponents",(function(){return d})),r.d(n,"withMDXComponents",(function(){return l}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){return function(n){var r=d(n.components);return i.a.createElement(e,c({},n,{components:r}))}},d=function(e){var n=i.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},f=function(e){var n=d(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,a=p(e,["components","mdxType","originalType","parentName"]),u=d(r),l=t,f=u["".concat(c,".").concat(l)]||u[l]||m[l]||o;return r?i.a.createElement(f,s(s({ref:n},a),{},{components:r})):i.a.createElement(f,s({ref:n},a))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=b;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},71:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return a})),r.d(n,"default",(function(){return p}));var t=r(3),i=(r(0),r(413));const o={id:"lib_rpc_build_main_v2_methods.responsequeryconfig",title:"Interface: ResponseQueryConfig",sidebar_label:"ResponseQueryConfig",custom_edit_url:null},c={unversionedId:"api/interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig",id:"api/interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig",isDocsHomePage:!1,title:"Interface: ResponseQueryConfig",description:"Interface: ResponseQueryConfig",source:"@site/ren-js/api/interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig.md",slug:"/api/interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig",permalink:"/ren-client-docs/ren-js/api/interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig",editUrl:null,version:"current",sidebar_label:"ResponseQueryConfig"},a=[{value:"Properties",id:"properties",children:[{value:"confirmations",id:"confirmations",children:[]},{value:"whitelist",id:"whitelist",children:[]}]}],s={toc:a};function p({components:e,...n}){return Object(i.mdx)("wrapper",Object(t.default)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"interface-responsequeryconfig"},"Interface: ResponseQueryConfig"),Object(i.mdx)("p",null,Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_rpc_build_main_v2_methods"},"lib/rpc/build/main/v2/methods"),".ResponseQueryConfig"),Object(i.mdx)("h2",{id:"properties"},"Properties"),Object(i.mdx)("h3",{id:"confirmations"},"confirmations"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"confirmations"),": ",Object(i.mdx)("em",{parentName:"p"},"object")),Object(i.mdx)("h4",{id:"type-declaration"},"Type declaration"),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:71"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"whitelist"},"whitelist"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"whitelist"),": ",Object(i.mdx)("em",{parentName:"p"},"string"),"[]"),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:74"))}p.isMDXComponent=!0}}]);