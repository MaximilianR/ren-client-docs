(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{40:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(9),a=(n(0),n(410)),o=n(411),s={title:"Validate"},d={unversionedId:"darknode-sol/libraries/Validate",id:"darknode-sol/libraries/Validate",isDocsHomePage:!1,title:"Validate",description:"Contract: Validate",source:"@site/contracts/darknode-sol/libraries/Validate.mdx",slug:"/darknode-sol/libraries/Validate",permalink:"/ren-client-docs/contracts/darknode-sol/libraries/Validate",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/libraries/Validate.mdx",version:"current"},c=[{value:"Contract: <code>Validate</code>",id:"contract-validate",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>duplicatePropose</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash1, uint256 _validRound1, bytes _signature1, bytes _blockhash2, uint256 _validRound2, bytes _signature2) \u2192 address</code></em> (internal)",id:"duplicatepropose-uint256-_height-uint256-_round-bytes-_blockhash1-uint256-_validround1-bytes-_signature1-bytes-_blockhash2-uint256-_validround2-bytes-_signature2-\u2192-address-internal",children:[]},{value:"<strong><code>recoverPropose</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash, uint256 _validRound, bytes _signature) \u2192 address</code></em> (internal)",id:"recoverpropose-uint256-_height-uint256-_round-bytes-_blockhash-uint256-_validround-bytes-_signature-\u2192-address-internal",children:[]},{value:"<strong><code>proposeMessage</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash, uint256 _validRound) \u2192 bytes</code></em> (internal)",id:"proposemessage-uint256-_height-uint256-_round-bytes-_blockhash-uint256-_validround-\u2192-bytes-internal",children:[]},{value:"<strong><code>duplicatePrevote</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash1, bytes _signature1, bytes _blockhash2, bytes _signature2) \u2192 address</code></em> (internal)",id:"duplicateprevote-uint256-_height-uint256-_round-bytes-_blockhash1-bytes-_signature1-bytes-_blockhash2-bytes-_signature2-\u2192-address-internal",children:[]},{value:"<strong><code>recoverPrevote</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash, bytes _signature) \u2192 address</code></em> (internal)",id:"recoverprevote-uint256-_height-uint256-_round-bytes-_blockhash-bytes-_signature-\u2192-address-internal",children:[]},{value:"<strong><code>prevoteMessage</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash) \u2192 bytes</code></em> (internal)",id:"prevotemessage-uint256-_height-uint256-_round-bytes-_blockhash-\u2192-bytes-internal",children:[]},{value:"<strong><code>duplicatePrecommit</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash1, bytes _signature1, bytes _blockhash2, bytes _signature2) \u2192 address</code></em> (internal)",id:"duplicateprecommit-uint256-_height-uint256-_round-bytes-_blockhash1-bytes-_signature1-bytes-_blockhash2-bytes-_signature2-\u2192-address-internal",children:[]},{value:"<strong><code>recoverPrecommit</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash, bytes _signature) \u2192 address</code></em> (internal)",id:"recoverprecommit-uint256-_height-uint256-_round-bytes-_blockhash-bytes-_signature-\u2192-address-internal",children:[]},{value:"<strong><code>precommitMessage</code></strong> <em><code>(uint256 _height, uint256 _round, bytes _blockhash) \u2192 bytes</code></em> (internal)",id:"precommitmessage-uint256-_height-uint256-_round-bytes-_blockhash-\u2192-bytes-internal",children:[]},{value:"<strong><code>recoverSecret</code></strong> <em><code>(uint256 _a, uint256 _b, uint256 _c, uint256 _d, uint256 _e, uint256 _f, bytes _signature) \u2192 address</code></em> (internal)",id:"recoversecret-uint256-_a-uint256-_b-uint256-_c-uint256-_d-uint256-_e-uint256-_f-bytes-_signature-\u2192-address-internal",children:[]},{value:"<strong><code>secretMessage</code></strong> <em><code>(uint256 _a, uint256 _b, uint256 _c, uint256 _d, uint256 _e, uint256 _f) \u2192 bytes</code></em> (internal)",id:"secretmessage-uint256-_a-uint256-_b-uint256-_c-uint256-_d-uint256-_e-uint256-_f-\u2192-bytes-internal",children:[]}]}],u={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-validate"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"Validate")),Object(a.mdx)("p",null,"Validate is a library for validating malicious darknode behaviour."),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"duplicatepropose-uint256-_height-uint256-_round-bytes-_blockhash1-uint256-_validround1-bytes-_signature1-bytes-_blockhash2-uint256-_validround2-bytes-_signature2-\u2192-address-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"duplicatePropose"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash1, uint256 _validRound1, bytes _signature1, bytes _blockhash2, uint256 _validRound2, bytes _signature2) \u2192 address"))," (internal)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Returns")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"The"),": address of the signer if and only if propose messages were\ndifferent.")),Object(a.mdx)("p",null,"Recovers two propose messages and checks if they were signed by\nthe same darknode. If they were different but the height and\nround were the same, then the darknode was behaving maliciously."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"recoverpropose-uint256-_height-uint256-_round-bytes-_blockhash-uint256-_validround-bytes-_signature-\u2192-address-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"recoverPropose"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash, uint256 _validRound, bytes _signature) \u2192 address"))," (internal)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"proposemessage-uint256-_height-uint256-_round-bytes-_blockhash-uint256-_validround-\u2192-bytes-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"proposeMessage"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash, uint256 _validRound) \u2192 bytes"))," (internal)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"duplicateprevote-uint256-_height-uint256-_round-bytes-_blockhash1-bytes-_signature1-bytes-_blockhash2-bytes-_signature2-\u2192-address-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"duplicatePrevote"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash1, bytes _signature1, bytes _blockhash2, bytes _signature2) \u2192 address"))," (internal)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Returns")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"The"),": address of the signer if and only if prevote messages were\ndifferent.")),Object(a.mdx)("p",null,"Recovers two prevote messages and checks if they were signed by\nthe same darknode. If they were different but the height and\nround were the same, then the darknode was behaving maliciously."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"recoverprevote-uint256-_height-uint256-_round-bytes-_blockhash-bytes-_signature-\u2192-address-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"recoverPrevote"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash, bytes _signature) \u2192 address"))," (internal)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"prevotemessage-uint256-_height-uint256-_round-bytes-_blockhash-\u2192-bytes-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"prevoteMessage"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash) \u2192 bytes"))," (internal)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"duplicateprecommit-uint256-_height-uint256-_round-bytes-_blockhash1-bytes-_signature1-bytes-_blockhash2-bytes-_signature2-\u2192-address-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"duplicatePrecommit"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash1, bytes _signature1, bytes _blockhash2, bytes _signature2) \u2192 address"))," (internal)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Returns")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"The"),": address of the signer if and only if precommit messages were\ndifferent.")),Object(a.mdx)("p",null,"Recovers two precommit messages and checks if they were signed\nby the same darknode. If they were different but the height and\nround were the same, then the darknode was behaving maliciously."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"recoverprecommit-uint256-_height-uint256-_round-bytes-_blockhash-bytes-_signature-\u2192-address-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"recoverPrecommit"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash, bytes _signature) \u2192 address"))," (internal)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"precommitmessage-uint256-_height-uint256-_round-bytes-_blockhash-\u2192-bytes-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"precommitMessage"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _height, uint256 _round, bytes _blockhash) \u2192 bytes"))," (internal)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"recoversecret-uint256-_a-uint256-_b-uint256-_c-uint256-_d-uint256-_e-uint256-_f-bytes-_signature-\u2192-address-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"recoverSecret"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _a, uint256 _b, uint256 _c, uint256 _d, uint256 _e, uint256 _f, bytes _signature) \u2192 address"))," (internal)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"secretmessage-uint256-_a-uint256-_b-uint256-_c-uint256-_d-uint256-_e-uint256-_f-\u2192-bytes-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"secretMessage"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _a, uint256 _b, uint256 _c, uint256 _d, uint256 _e, uint256 _f) \u2192 bytes"))," (internal)"),Object(a.mdx)("hr",null))}l.isMDXComponent=!0},410:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return p})),n.d(t,"useMDXComponents",(function(){return b})),n.d(t,"withMDXComponents",(function(){return l}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){return function(t){var n=b(t.components);return i.a.createElement(e,o({},t,{components:n}))}},b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},_=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),l=r,m=u["".concat(o,".").concat(l)]||u[l]||h[l]||a;return n?i.a.createElement(m,d(d({ref:t},s),{},{components:n})):i.a.createElement(m,d({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=_;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},411:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var i=r(n(0));let a;t.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(t.DocType=a={}));const o={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);