(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{192:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"Tag",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),o=(t(0),t(486)),a=t(487);const c={id:"bytes",title:"Bytes"},i={unversionedId:"subgraph/scalars/bytes",id:"subgraph/scalars/bytes",isDocsHomePage:!1,title:"Bytes",description:"<span",source:"@site/subgraph/subgraph/scalars/bytes.mdx",slug:"/subgraph/scalars/bytes",permalink:"/ren-client-docs/subgraph/subgraph/scalars/bytes",version:"current",sidebar:"subgraph",previous:{title:"Boolean",permalink:"/ren-client-docs/subgraph/subgraph/scalars/boolean"},next:{title:"ID",permalink:"/ren-client-docs/subgraph/subgraph/scalars/id"}},u=[],l=({children:e,color:r})=>Object(o.mdx)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:u,Tag:l};function s({components:e,...r}){return Object(o.mdx)("wrapper",Object(n.default)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"scalar Bytes\n")))}s.isMDXComponent=!0},486:function(e,r,t){"use strict";t.r(r),t.d(r,"MDXContext",(function(){return p})),t.d(r,"MDXProvider",(function(){return d})),t.d(r,"mdx",(function(){return y})),t.d(r,"useMDXComponents",(function(){return f})),t.d(r,"withMDXComponents",(function(){return s}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){return function(r){var t=f(r.components);return o.a.createElement(e,c({},r,{components:t}))}},f=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},d=function(e){var r=f(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=f(t),s=n,d=p["".concat(c,".").concat(s)]||p[s]||b[s]||a;return t?o.a.createElement(d,u(u({ref:r},i),{},{components:t})):o.a.createElement(d,u({ref:r},i))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},487:function(e,r,t){"use strict";var n=t(4).default;Object.defineProperty(r,"__esModule",{value:!0}),r.DocTag=r.DocType=void 0;var o=n(t(0));let a;r.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(r.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};r.DocTag=({type:e,marginBottom:r})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==r?r:30,display:"inline-block"}},String(e)))}}]);