(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(9),a=(n(0),n(413)),c=n(414),d={title:"ProtocolLogicV1"},i={unversionedId:"darknode-sol/Protocol/ProtocolLogicV1",id:"darknode-sol/Protocol/ProtocolLogicV1",isDocsHomePage:!1,title:"ProtocolLogicV1",description:"Contract: ProtocolLogicV1",source:"@site/contracts/darknode-sol/Protocol/ProtocolLogicV1.mdx",slug:"/darknode-sol/Protocol/ProtocolLogicV1",permalink:"/ren-client-docs/contracts/darknode-sol/Protocol/ProtocolLogicV1",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/Protocol/ProtocolLogicV1.mdx",version:"current",sidebar:"contracts",previous:{title:"Proof of Reserve",permalink:"/ren-client-docs/contracts/proof-of-reserve"},next:{title:"ProtocolStateV1",permalink:"/ren-client-docs/contracts/darknode-sol/Protocol/ProtocolStateV1"}},l=[{value:"Contract: <code>ProtocolLogicV1</code>",id:"contract-protocollogicv1",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>initialize</code></strong> <em><code>(address _nextOwner)</code></em> (public)",id:"initialize-address-_nextowner-public",children:[]},{value:"<strong><code>darknodeRegistry</code></strong> <em><code>() \u2192 contract DarknodeRegistryLogicV1</code></em> (public)",id:"darknoderegistry--\u2192-contract-darknoderegistrylogicv1-public",children:[]},{value:"<strong><code>darknodeRegistryStore</code></strong> <em><code>() \u2192 contract DarknodeRegistryStore</code></em> (public)",id:"darknoderegistrystore--\u2192-contract-darknoderegistrystore-public",children:[]},{value:"<strong><code>renToken</code></strong> <em><code>() \u2192 contract RenToken</code></em> (public)",id:"rentoken--\u2192-contract-rentoken-public",children:[]},{value:"<strong><code>darknodePayment</code></strong> <em><code>() \u2192 contract DarknodePayment</code></em> (public)",id:"darknodepayment--\u2192-contract-darknodepayment-public",children:[]},{value:"<strong><code>darknodePaymentStore</code></strong> <em><code>() \u2192 contract DarknodePaymentStore</code></em> (public)",id:"darknodepaymentstore--\u2192-contract-darknodepaymentstore-public",children:[]},{value:"<strong><code>darknodeSlasher</code></strong> <em><code>() \u2192 contract DarknodeSlasher</code></em> (public)",id:"darknodeslasher--\u2192-contract-darknodeslasher-public",children:[]},{value:"<strong><code>gatewayRegistry</code></strong> <em><code>() \u2192 contract GatewayRegistry</code></em> (public)",id:"gatewayregistry--\u2192-contract-gatewayregistry-public",children:[]},{value:"<strong><code>getGateways</code></strong> <em><code>(address _start, uint256 _count) \u2192 address[]</code></em> (external)",id:"getgateways-address-_start-uint256-_count-\u2192-address-external",children:[]},{value:"<strong><code>getRenTokens</code></strong> <em><code>(address _start, uint256 _count) \u2192 address[]</code></em> (external)",id:"getrentokens-address-_start-uint256-_count-\u2192-address-external",children:[]},{value:"<strong><code>getGatewayByToken</code></strong> <em><code>(address _tokenAddress) \u2192 contract IGateway</code></em> (external)",id:"getgatewaybytoken-address-_tokenaddress-\u2192-contract-igateway-external",children:[]},{value:"<strong><code>getGatewayBySymbol</code></strong> <em><code>(string _tokenSymbol) \u2192 contract IGateway</code></em> (external)",id:"getgatewaybysymbol-string-_tokensymbol-\u2192-contract-igateway-external",children:[]},{value:"<strong><code>getTokenBySymbol</code></strong> <em><code>(string _tokenSymbol) \u2192 contract IERC20</code></em> (external)",id:"gettokenbysymbol-string-_tokensymbol-\u2192-contract-ierc20-external",children:[]},{value:"<strong><code>_updateDarknodeRegistry</code></strong> <em><code>(contract DarknodeRegistryLogicV1 _newDarknodeRegistry)</code></em> (public)",id:"_updatedarknoderegistry-contract-darknoderegistrylogicv1-_newdarknoderegistry-public",children:[]},{value:"<strong><code>_updateGatewayRegistry</code></strong> <em><code>(contract GatewayRegistry _newGatewayRegistry)</code></em> (public)",id:"_updategatewayregistry-contract-gatewayregistry-_newgatewayregistry-public",children:[]},{value:"<strong><code>_payableAddress</code></strong> <em><code>(address a) \u2192 address payable</code></em> (internal)",id:"_payableaddress-address-a-\u2192-address-payable-internal",children:[]}]}],s={toc:l};function m(e){var t=e.components,n=Object(o.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-protocollogicv1"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"ProtocolLogicV1")),Object(a.mdx)("p",null,"ProtocolLogicV1 implements the getter functions for the Protocol proxy\nas well as onlyOwner functions for updating the values in ProtocolState."),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"IGatewayRegistry")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"ProtocolStateV1")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Context")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"initialize-address-_nextowner-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"initialize"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _nextOwner)"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"darknoderegistry--\u2192-contract-darknoderegistrylogicv1-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"darknodeRegistry"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 contract DarknodeRegistryLogicV1"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"darknoderegistrystore--\u2192-contract-darknoderegistrystore-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"darknodeRegistryStore"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 contract DarknodeRegistryStore"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"rentoken--\u2192-contract-rentoken-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"renToken"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 contract RenToken"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"darknodepayment--\u2192-contract-darknodepayment-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"darknodePayment"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 contract DarknodePayment"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"darknodepaymentstore--\u2192-contract-darknodepaymentstore-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"darknodePaymentStore"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 contract DarknodePaymentStore"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"darknodeslasher--\u2192-contract-darknodeslasher-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"darknodeSlasher"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 contract DarknodeSlasher"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"gatewayregistry--\u2192-contract-gatewayregistry-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"gatewayRegistry"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 contract GatewayRegistry"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"getgateways-address-_start-uint256-_count-\u2192-address-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getGateways"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _start, uint256 _count) \u2192 address[]"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"getrentokens-address-_start-uint256-_count-\u2192-address-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getRenTokens"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _start, uint256 _count) \u2192 address[]"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"getgatewaybytoken-address-_tokenaddress-\u2192-contract-igateway-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getGatewayByToken"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _tokenAddress) \u2192 contract IGateway"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"getgatewaybysymbol-string-_tokensymbol-\u2192-contract-igateway-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getGatewayBySymbol"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 contract IGateway"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"gettokenbysymbol-string-_tokensymbol-\u2192-contract-ierc20-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getTokenBySymbol"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 contract IERC20"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"_updatedarknoderegistry-contract-darknoderegistrylogicv1-_newdarknoderegistry-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"_updateDarknodeRegistry"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(contract DarknodeRegistryLogicV1 _newDarknodeRegistry)"))," (public)"),Object(a.mdx)("p",null,"Update the address of DarknodeRegistry. This could affect the\naddresses of DarknodeRegistryStore, DarknodePayment,\nDarknodePaymentStore and DarknodeSlasher."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"_updategatewayregistry-contract-gatewayregistry-_newgatewayregistry-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"_updateGatewayRegistry"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(contract GatewayRegistry _newGatewayRegistry)"))," (public)"),Object(a.mdx)("p",null,"Update the address of GatewayRegistry. This could affect the\naddresses of all of the gateways and tokens."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"_payableaddress-address-a-\u2192-address-payable-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"_payableAddress"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address a) \u2192 address payable"))," (internal)"),Object(a.mdx)("hr",null))}m.isMDXComponent=!0},413:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return b})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),m=function(e){return function(t){var n=p(t.components);return o.a.createElement(e,c({},t,{components:n}))}},p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(c,".").concat(m)]||s[m]||g[m]||a;return n?o.a.createElement(b,i(i({ref:t},d),{},{components:n})):o.a.createElement(b,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var o,a,c=r(n(0));t.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(t.DocType=a={}));var d=((o={})[a.Tutorial]="#b16bfc",o[a.HowTo]="#EC0088",o[a.Reference]="#ff823a",o[a.Explanation]="#29C0AF",o);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:{border:"2px solid "+d[t]||!1,borderRadius:"5px",color:d[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);