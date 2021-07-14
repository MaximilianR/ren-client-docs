(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(498)),c=n(499),i={title:"Contracts",slug:"/"},l={unversionedId:"contracts",id:"contracts",isDocsHomePage:!1,title:"Contracts",description:"For contract addresses, see deployments.",source:"@site/contracts/contracts.mdx",slug:"/",permalink:"/ren-client-docs/contracts/",version:"current",sidebar:"contracts",next:{title:"Integrating with Ren contracts",permalink:"/ren-client-docs/contracts/integrating-contracts"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Explanation,mdxType:"DocTag"}),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"For contract addresses, see ",Object(a.mdx)("a",{parentName:"strong",href:"deployments"},"deployments"),".")),Object(a.mdx)("p",null,"These pages document the smart contracts that are apart of the Ren source base.\nRen's smart contracts are divided into two categories:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Darknode contracts"),", responsible for darknode registration and fees"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Gateway contracts"),", for handling minting and burning of ren-assets.")),Object(a.mdx)("p",null,"The darknode contracts only exist on Ethereum, while the gateway contracts exist on the contract-based chains that RenVM supports.\nThe gateway contracts have been implemented for multiple smart-contract platforms. These docs will focus on the contracts written for the EVM."),Object(a.mdx)("p",null,"The contracts can be found in the following repositories:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Darknode contracts (EVM): ",Object(a.mdx)("a",{parentName:"li",href:"https://github.com/renproject/darknode-sol"},"https://github.com/renproject/darknode-sol")),Object(a.mdx)("li",{parentName:"ul"},"Gateway contracts:",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},"EVM: ",Object(a.mdx)("a",{parentName:"li",href:"https://github.com/renproject/gateway-sol"},"https://github.com/renproject/gateway-sol")),Object(a.mdx)("li",{parentName:"ul"},"Solana: ",Object(a.mdx)("a",{parentName:"li",href:"https://github.com/renproject/ren-solana"},"https://github.com/renproject/ren-solana")),Object(a.mdx)("li",{parentName:"ul"},"Acala: ",Object(a.mdx)("em",{parentName:"li"},"in development")))),Object(a.mdx)("li",{parentName:"ul"},"Ren Solidity Template: ",Object(a.mdx)("a",{parentName:"li",href:"https://github.com/renproject/ren-solidity-template"},"https://github.com/renproject/ren-solidity-template"))),Object(a.mdx)("hr",null))}u.isMDXComponent=!0},498:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){return function(t){var n=m(t.components);return o.a.createElement(e,c({},t,{components:n}))}},m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,d=p["".concat(c,".").concat(u)]||p[u]||f[u]||a;return n?o.a.createElement(d,l(l({ref:t},i),{},{components:n})):o.a.createElement(d,l({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},499:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var o=r(n(0));let a;t.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(t.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);