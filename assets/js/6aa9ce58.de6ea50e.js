(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(8),a=(n(0),n(498)),i={title:"Recovery method"},c={unversionedId:"how-to/recovery-method",id:"how-to/recovery-method",isDocsHomePage:!1,title:"Recovery method",description:"If there's the possibility that the method being called to submit a mint will revert, then you should provide a recovery method so that the mint signature can still be redeemed.",source:"@site/ren-js/how-to/recovery-method.mdx",slug:"/how-to/recovery-method",permalink:"/ren-client-docs/ren-js/how-to/recovery-method",version:"current",sidebar:"docs",previous:{title:"Add parameters at mint",permalink:"/ren-client-docs/ren-js/how-to/add-parameters-at-mint"},next:{title:"RenVM UX Best Practice",permalink:"/ren-client-docs/ren-js/best-practices/ui-best-practices"}},s=[],d={toc:s};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"If there's the possibility that the method being called to submit a mint will revert, then you should provide a recovery method so that the mint signature can still be redeemed."),Object(a.mdx)("p",null,"The two options of doing this are:"),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},"Accept all the same parameters as the main method, and then mint and forward the ren-asset to the user."),Object(a.mdx)("li",{parentName:"ol"},"Accept a ",Object(a.mdx)("inlineCode",{parentName:"li"},"pHash")," parameter to skip needing to calculate it in the contract, and then mint and forward the ren-asset to the user.")),Object(a.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(a.mdx)("h5",{parentName:"div"},Object(a.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.mdx)("div",{parentName:"div",className:"admonition-content"},Object(a.mdx)("p",{parentName:"div"},"A recovery method could be mis-used to prevent a user from calling the main method, so, if possible, such a recovery method should restrict the ",Object(a.mdx)("inlineCode",{parentName:"p"},"msg.sender")," to being the recipient specified in the parameters, if there is one."))))}m.isMDXComponent=!0},498:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return v})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return l}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),l=function(e){return function(t){var n=p(t.components);return o.a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(n),l=r,u=m["".concat(i,".").concat(l)]||m[l]||h[l]||a;return n?o.a.createElement(u,s(s({ref:t},c),{},{components:n})):o.a.createElement(u,s({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);