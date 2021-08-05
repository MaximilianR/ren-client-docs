(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=(n(0),n(413)),o=n(414);const i={title:"IMintGateway"},c={unversionedId:"darknode-sol/Gateway/interfaces/IMintGateway",id:"darknode-sol/Gateway/interfaces/IMintGateway",isDocsHomePage:!1,title:"IMintGateway",description:"Contract: IMintGateway",source:"@site/contracts/darknode-sol/Gateway/interfaces/IMintGateway.mdx",slug:"/darknode-sol/Gateway/interfaces/IMintGateway",permalink:"/ren-client-docs/contracts/darknode-sol/Gateway/interfaces/IMintGateway",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/Gateway/interfaces/IMintGateway.mdx",version:"current"},u=[{value:"Contract: <code>IMintGateway</code>",id:"contract-imintgateway",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>mint</code></strong> <em><code>(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes _sig) \u2192 uint256</code></em> (external)",id:"mint-bytes32-_phash-uint256-_amount-bytes32-_nhash-bytes-_sig-\u2192-uint256-external",children:[]},{value:"<strong><code>mintFee</code></strong> <em><code>() \u2192 uint256</code></em> (external)",id:"mintfee--\u2192-uint256-external",children:[]}]}],l={toc:u};function d({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-imintgateway"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"IMintGateway")),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"mint-bytes32-_phash-uint256-_amount-bytes32-_nhash-bytes-_sig-\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"mint"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes _sig) \u2192 uint256"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"mintfee--\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"mintFee"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (external)"),Object(a.mdx)("hr",null))}d.isMDXComponent=!0},413:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){return function(t){var n=m(t.components);return a.a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),s=r,p=d["".concat(i,".").concat(s)]||d[s]||f[s]||o;return n?a.a.createElement(p,u(u({ref:t},c),{},{components:n})):a.a.createElement(p,u({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);