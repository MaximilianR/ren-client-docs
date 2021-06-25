(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=(n(0),n(489));const a={id:"meta",title:"_Meta_"},c={unversionedId:"subgraph/objects/meta",id:"subgraph/objects/meta",isDocsHomePage:!1,title:"_Meta_",description:"The type for the top-level \\_meta field",source:"@site/subgraph/subgraph/objects/meta.mdx",slug:"/subgraph/objects/meta",permalink:"/ren-client-docs/subgraph/subgraph/objects/meta",version:"current",sidebar:"subgraph",previous:{title:"IntegratorContract",permalink:"/ren-client-docs/subgraph/subgraph/objects/integrator-contract"},next:{title:"RenVM",permalink:"/ren-client-docs/subgraph/subgraph/objects/ren-vm"}},i=[{value:"Fields",id:"fields",children:[]}],l={toc:i};function p({components:e,...t}){return Object(o.mdx)("wrapper",Object(r.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The type for the top-level ","_","meta field"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"type _Meta_ {\n  block: _Block_!\n  deployment: String!\n  hasIndexingErrors: Boolean!\n}\n")),Object(o.mdx)("h3",{id:"fields"},"Fields"),Object(o.mdx)("h4",{id:"block-_block_"},Object(o.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/objects/block"},Object(o.mdx)("inlineCode",{parentName:"a"},"_Block_!")),")"),Object(o.mdx)("p",null,"Information about a specific subgraph block. The hash of the block\nwill be null if the ","_","meta field has a block constraint that asks for\na block number. It will be filled if the ","_","meta field has no block constraint\nand therefore asks for the latest block"),Object(o.mdx)("h4",{id:"deployment-string"},Object(o.mdx)("inlineCode",{parentName:"h4"},"deployment")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/string"},Object(o.mdx)("inlineCode",{parentName:"a"},"String!")),")"),Object(o.mdx)("p",null,"The deployment ID"),Object(o.mdx)("h4",{id:"hasindexingerrors-boolean"},Object(o.mdx)("inlineCode",{parentName:"h4"},"hasIndexingErrors")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/boolean"},Object(o.mdx)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(o.mdx)("p",null,"If ",Object(o.mdx)("inlineCode",{parentName:"p"},"true"),", the subgraph encountered indexing errors at some past block"))}p.isMDXComponent=!0},489:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return b})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){return function(t){var n=d(t.components);return o.a.createElement(e,c({},t,{components:n}))}},d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,b=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return n?o.a.createElement(b,l(l({ref:t},i),{},{components:n})):o.a.createElement(b,l({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);