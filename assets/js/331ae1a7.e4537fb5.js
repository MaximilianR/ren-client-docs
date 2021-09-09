(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),d=(t(0),t(413)),a=t(414);const o={title:"DarknodeRegistryStore"},i={unversionedId:"darknode-sol/DarknodeRegistry/DarknodeRegistryStore",id:"darknode-sol/DarknodeRegistry/DarknodeRegistryStore",isDocsHomePage:!1,title:"DarknodeRegistryStore",description:"Contract: DarknodeRegistryStore",source:"@site/contracts/darknode-sol/DarknodeRegistry/DarknodeRegistryStore.mdx",slug:"/darknode-sol/DarknodeRegistry/DarknodeRegistryStore",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodeRegistry/DarknodeRegistryStore",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/DarknodeRegistry/DarknodeRegistryStore.mdx",version:"current",sidebar:"contracts",previous:{title:"ProtocolStateV1",permalink:"/ren-client-docs/contracts/darknode-sol/Protocol/ProtocolStateV1"},next:{title:"DarknodeRegistryLogicV1",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodeRegistry/DarknodeRegistryLogicV1"}},c=[{value:"Contract: <code>DarknodeRegistryStore</code>",id:"contract-darknoderegistrystore",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>VERSION</code></strong>: <em><code>string</code></em>",id:"version-string",children:[]},{value:"<strong><code>ren</code></strong>: <em><code>contract RenToken</code></em>",id:"ren-contract-rentoken",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>constructor</code></strong> <em><code>(string _VERSION, contract RenToken _ren)</code></em> (public)",id:"constructor-string-_version-contract-rentoken-_ren-public",children:[]},{value:"<strong><code>appendDarknode</code></strong> <em><code>(address _darknodeID, address payable _darknodeOperator, uint256 _bond, bytes _publicKey, uint256 _registeredAt, uint256 _deregisteredAt)</code></em> (external)",id:"appenddarknode-address-_darknodeid-address-payable-_darknodeoperator-uint256-_bond-bytes-_publickey-uint256-_registeredat-uint256-_deregisteredat-external",children:[]},{value:"<strong><code>begin</code></strong> <em><code>() \u2192 address</code></em> (external)",id:"begin--\u2192-address-external",children:[]},{value:"<strong><code>next</code></strong> <em><code>(address darknodeID) \u2192 address</code></em> (external)",id:"next-address-darknodeid-\u2192-address-external",children:[]},{value:"<strong><code>removeDarknode</code></strong> <em><code>(address darknodeID)</code></em> (external)",id:"removedarknode-address-darknodeid-external",children:[]},{value:"<strong><code>updateDarknodeBond</code></strong> <em><code>(address darknodeID, uint256 decreasedBond)</code></em> (external)",id:"updatedarknodebond-address-darknodeid-uint256-decreasedbond-external",children:[]},{value:"<strong><code>updateDarknodeDeregisteredAt</code></strong> <em><code>(address darknodeID, uint256 deregisteredAt)</code></em> (external)",id:"updatedarknodederegisteredat-address-darknodeid-uint256-deregisteredat-external",children:[]},{value:"<strong><code>darknodeOperator</code></strong> <em><code>(address darknodeID) \u2192 address payable</code></em> (external)",id:"darknodeoperator-address-darknodeid-\u2192-address-payable-external",children:[]},{value:"<strong><code>darknodeBond</code></strong> <em><code>(address darknodeID) \u2192 uint256</code></em> (external)",id:"darknodebond-address-darknodeid-\u2192-uint256-external",children:[]},{value:"<strong><code>darknodeRegisteredAt</code></strong> <em><code>(address darknodeID) \u2192 uint256</code></em> (external)",id:"darknoderegisteredat-address-darknodeid-\u2192-uint256-external",children:[]},{value:"<strong><code>darknodeDeregisteredAt</code></strong> <em><code>(address darknodeID) \u2192 uint256</code></em> (external)",id:"darknodederegisteredat-address-darknodeid-\u2192-uint256-external",children:[]},{value:"<strong><code>darknodePublicKey</code></strong> <em><code>(address darknodeID) \u2192 bytes</code></em> (external)",id:"darknodepublickey-address-darknodeid-\u2192-bytes-external",children:[]}]}],s={toc:c};function l({components:e,...n}){return Object(d.mdx)("wrapper",Object(r.default)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(d.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(d.mdx)("h2",{id:"contract-darknoderegistrystore"},"Contract: ",Object(d.mdx)("inlineCode",{parentName:"h2"},"DarknodeRegistryStore")),Object(d.mdx)("p",null,"This contract stores data and funds for the DarknodeRegistry\ncontract. The data / fund logic and storage have been separated to improve\nupgradability."),Object(d.mdx)("p",null,"Inherits from:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"CanReclaimTokens")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"Context")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(d.mdx)("hr",null),Object(d.mdx)("br",null),Object(d.mdx)("h2",{id:"variables"},"Variables"),Object(d.mdx)("h3",{id:"version-string"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"VERSION")),": ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"string"))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"ren-contract-rentoken"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"ren")),": ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"contract RenToken"))),Object(d.mdx)("hr",null),Object(d.mdx)("br",null),Object(d.mdx)("h2",{id:"functions"},"Functions"),Object(d.mdx)("h3",{id:"constructor-string-_version-contract-rentoken-_ren-public"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"constructor"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(string _VERSION, contract RenToken _ren)"))," (public)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_VERSION"),": A string defining the contract version.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_ren"),": The address of the RenToken contract."))),Object(d.mdx)("p",null,"The contract constructor."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"appenddarknode-address-_darknodeid-address-payable-_darknodeoperator-uint256-_bond-bytes-_publickey-uint256-_registeredat-uint256-_deregisteredat-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"appendDarknode"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _darknodeID, address payable _darknodeOperator, uint256 _bond, bytes _publicKey, uint256 _registeredAt, uint256 _deregisteredAt)"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_darknodeID"),": The darknode's ID.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_darknodeOperator"),": The darknode's owner's address.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_bond"),": The darknode's bond value.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_publicKey"),": The darknode's public key.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_registeredAt"),": The time stamp when the darknode is registered.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_deregisteredAt"),": The time stamp when the darknode is deregistered."))),Object(d.mdx)("p",null,"Instantiates a darknode and appends it to the darknodes\nlinked-list."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"begin--\u2192-address-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"begin"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"() \u2192 address"))," (external)"),Object(d.mdx)("p",null,"Returns the address of the first darknode in the store."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"next-address-darknodeid-\u2192-address-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"next"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID) \u2192 address"))," (external)"),Object(d.mdx)("p",null,"Returns the address of the next darknode in the store after the\ngiven address."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"removedarknode-address-darknodeid-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"removeDarknode"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID)"))," (external)"),Object(d.mdx)("p",null,"Removes a darknode from the store and transfers its bond to the\nowner of this contract."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"updatedarknodebond-address-darknodeid-uint256-decreasedbond-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"updateDarknodeBond"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID, uint256 decreasedBond)"))," (external)"),Object(d.mdx)("p",null,"Updates the bond of a darknode. The new bond must be smaller\nthan the previous bond of the darknode."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"updatedarknodederegisteredat-address-darknodeid-uint256-deregisteredat-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"updateDarknodeDeregisteredAt"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID, uint256 deregisteredAt)"))," (external)"),Object(d.mdx)("p",null,"Updates the deregistration timestamp of a darknode."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"darknodeoperator-address-darknodeid-\u2192-address-payable-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"darknodeOperator"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID) \u2192 address payable"))," (external)"),Object(d.mdx)("p",null,"Returns the owner of a given darknode."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"darknodebond-address-darknodeid-\u2192-uint256-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"darknodeBond"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID) \u2192 uint256"))," (external)"),Object(d.mdx)("p",null,"Returns the bond of a given darknode."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"darknoderegisteredat-address-darknodeid-\u2192-uint256-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"darknodeRegisteredAt"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID) \u2192 uint256"))," (external)"),Object(d.mdx)("p",null,"Returns the registration time of a given darknode."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"darknodederegisteredat-address-darknodeid-\u2192-uint256-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"darknodeDeregisteredAt"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID) \u2192 uint256"))," (external)"),Object(d.mdx)("p",null,"Returns the deregistration time of a given darknode."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"darknodepublickey-address-darknodeid-\u2192-bytes-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"darknodePublicKey"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address darknodeID) \u2192 bytes"))," (external)"),Object(d.mdx)("p",null,"Returns the encryption public key of a given darknode."),Object(d.mdx)("hr",null))}l.isMDXComponent=!0},413:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return l})),t.d(n,"MDXProvider",(function(){return b})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return m}));var r=t(0),d=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,d=function(e,n){if(null==e)return{};var t,r,d={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(d[t]=e[t]);return d}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var l=d.a.createContext({}),m=function(e){return function(n){var t=p(n.components);return d.a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=d.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return d.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return d.a.createElement(d.a.Fragment,{},n)}},x=d.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,b=l["".concat(o,".").concat(m)]||l[m]||u[m]||a;return t?d.a.createElement(b,c(c({ref:n},i),{},{components:t})):d.a.createElement(b,c({ref:n},i))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=x;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return d.a.createElement.apply(null,o)}return d.a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},414:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var d,a,o=r(t(0));n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));var i=((d={})[a.Tutorial]="#b16bfc",d[a.HowTo]="#EC0088",d[a.Reference]="#ff823a",d[a.Explanation]="#29C0AF",d);n.DocTag=function(e){var n=e.type,t=e.marginBottom;return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+i[n]||!1,borderRadius:"5px",color:i[n]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(n)))}}}]);