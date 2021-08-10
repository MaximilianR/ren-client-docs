(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{309:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(413)),c={title:"Summary of contracts"},d={unversionedId:"summary",id:"summary",isDocsHomePage:!1,title:"Summary of contracts",description:"Darknode contracts (Ethereum-only)",source:"@site/contracts/summary.mdx",slug:"/summary",permalink:"/ren-client-docs/contracts/summary",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/summary.mdx",version:"current",sidebar:"contracts",previous:{title:"Deployments",permalink:"/ren-client-docs/contracts/deployments"},next:{title:"Previous Upgrades",permalink:"/ren-client-docs/contracts/upgrades"}},i=[{value:"Darknode contracts (Ethereum-only)",id:"darknode-contracts-ethereum-only",children:[{value:"<code>RenToken</code>",id:"rentoken",children:[]},{value:"<code>DarknodeRegistry</code> and <code>DarknodeRegistryStore</code>",id:"darknoderegistry-and-darknoderegistrystore",children:[]},{value:"<code>DarknodePayment</code> and <code>DarknodePaymentStore</code> LEGACY",id:"darknodepayment-and-darknodepaymentstore-legacy",children:[]},{value:"<code>Protocol</code>",id:"protocol",children:[]}]},{value:"EVM Gateway contracts",id:"evm-gateway-contracts",children:[{value:"<code>RenERC20</code>",id:"renerc20",children:[]},{value:"<code>MintGateway</code>",id:"mintgateway",children:[]},{value:"<code>GatewayRegistry</code>",id:"gatewayregistry",children:[]},{value:"<code>BasicAdapter</code>",id:"basicadapter",children:[]}]}],l={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h2",{id:"darknode-contracts-ethereum-only"},"Darknode contracts (Ethereum-only)"),Object(o.mdx)("p",null,"The darknode contracts include the following contracts:"),Object(o.mdx)("h3",{id:"rentoken"},Object(o.mdx)("inlineCode",{parentName:"h3"},"RenToken")),Object(o.mdx)("p",null,"This is the ERC20 contract for the REN token."),Object(o.mdx)("h3",{id:"darknoderegistry-and-darknoderegistrystore"},Object(o.mdx)("inlineCode",{parentName:"h3"},"DarknodeRegistry")," and ",Object(o.mdx)("inlineCode",{parentName:"h3"},"DarknodeRegistryStore")),Object(o.mdx)("p",null,"These contracts are responsible for managing the registration and bonding of darknodes."),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"DarknodeRegistry")," handles the logic of registering, while the ",Object(o.mdx)("inlineCode",{parentName:"p"},"DarknodeRegistryStore")," stores the REN used for bonds."),Object(o.mdx)("h3",{id:"darknodepayment-and-darknodepaymentstore-legacy"},Object(o.mdx)("inlineCode",{parentName:"h3"},"DarknodePayment")," and ",Object(o.mdx)("inlineCode",{parentName:"h3"},"DarknodePaymentStore")," ","[LEGACY]"),Object(o.mdx)("p",null,"Minting and burning fees were previously subtracted on Ethereum, and then forwarded to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"DarknodePayment")," contract."),Object(o.mdx)("p",null,"Fees are now collected in RenVM instead, but darknode operators can still withdraw legacy rewards from the ",Object(o.mdx)("inlineCode",{parentName:"p"},"DarknodePayment")," contract through the Command Center."),Object(o.mdx)("h3",{id:"protocol"},Object(o.mdx)("inlineCode",{parentName:"h3"},"Protocol")),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"Protocol")," contract tracks the addresses of all of the other contracts."),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"evm-gateway-contracts"},"EVM Gateway contracts"),Object(o.mdx)("h3",{id:"renerc20"},Object(o.mdx)("inlineCode",{parentName:"h3"},"RenERC20")),Object(o.mdx)("p",null,"Each ren-asset (e.g. renBTC, renDOGE, etc.) is represented on EVM-compatible chains (Ethereum, BSC, etc.) by an ERC20 contract."),Object(o.mdx)("h3",{id:"mintgateway"},Object(o.mdx)("inlineCode",{parentName:"h3"},"MintGateway")),Object(o.mdx)("p",null,"Each ",Object(o.mdx)("inlineCode",{parentName:"p"},"RenERC20")," has an associated ",Object(o.mdx)("inlineCode",{parentName:"p"},"MintGateway")," contract which is responsible for minting and burning the ren-asset. It handles verifying the RenVM signature, and emitting burn events which are watched by RenVM."),Object(o.mdx)("p",null,"A future upgrade will unify all ",Object(o.mdx)("inlineCode",{parentName:"p"},"MintGateway"),"s into a single contract that manages all ",Object(o.mdx)("inlineCode",{parentName:"p"},"RenERC20")," contracts."),Object(o.mdx)("h3",{id:"gatewayregistry"},Object(o.mdx)("inlineCode",{parentName:"h3"},"GatewayRegistry")),Object(o.mdx)("p",null,"Each EVM-compatible chain has a ",Object(o.mdx)("inlineCode",{parentName:"p"},"GatewayRegistry")," which can be used to look-up the ",Object(o.mdx)("inlineCode",{parentName:"p"},"MintGateway")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"RenERC20")," contract addresses from a symbol."),Object(o.mdx)("p",null,"A future upgrade will replace the ",Object(o.mdx)("inlineCode",{parentName:"p"},"GatewayRegistry")," with a ",Object(o.mdx)("inlineCode",{parentName:"p"},"RenERC20Factory")," which will also be responsible for deploying new ",Object(o.mdx)("inlineCode",{parentName:"p"},"RenERC20"),"s."),Object(o.mdx)("h3",{id:"basicadapter"},Object(o.mdx)("inlineCode",{parentName:"h3"},"BasicAdapter")),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"BasicAdapter")," contract is not part of the core RenVM protocol contracts, and is only used by the front-end RenJS library. It's a contract that submits mint signatures to a ",Object(o.mdx)("inlineCode",{parentName:"p"},"MintGateway")," and then forwards the minted ren-asset to the specified recipient."),Object(o.mdx)("br",null),Object(o.mdx)("br",null),Object(o.mdx)("br",null))}s.isMDXComponent=!0},413:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,c({},t,{components:n}))}},p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(u,i(i({ref:t},d),{},{components:n})):a.a.createElement(u,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);