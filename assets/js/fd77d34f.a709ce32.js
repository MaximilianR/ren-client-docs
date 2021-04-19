(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{405:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return f})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return p})),a.d(t,"ContractItem",(function(){return x})),a.d(t,"AssetItem",(function(){return y})),a.d(t,"default",(function(){return D}));var n=a(3),r=a(8),s=a(0),d=a.n(s),c=a(486),o=a(526),m=a.n(o),l=a(527),b=a.n(l),i=a(487),f={title:"Deployments"},u={unversionedId:"deployments",id:"deployments",isDocsHomePage:!1,title:"Deployments",description:"{name}: {address}",source:"@site/contracts/deployments.mdx",slug:"/deployments",permalink:"/ren-client-docs/contracts/deployments",version:"current",sidebar:"contracts",previous:{title:"Contracts",permalink:"/ren-client-docs/contracts/"},next:{title:"Proof of Reserve",permalink:"/ren-client-docs/contracts/proof-of-reserve"}},p=[{value:"Gateway contracts",id:"gateway-contracts",children:[]}],x=function(e){var t=e.name,a=e.link,n=e.address;return Object(c.mdx)("li",null,t,": ",Object(c.mdx)("a",{href:a+"{address}"},n))},y=function(e){var t=e.symbol,a=e.link,n=e.erc20,r=e.gateway,s=e.standard;return Object(c.mdx)("li",null,t,Object(c.mdx)("ul",null,Object(c.mdx)("li",null,s||Object(c.mdx)(d.a.Fragment,null,"ERC20"),":"," ",Object(c.mdx)("a",{href:""+a+n},n)),Object(c.mdx)("li",null,"Gateway: ",Object(c.mdx)("a",{href:""+a+r},r))))},C={toc:p,ContractItem:x,AssetItem:y};function D(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.mdx)("wrapper",Object(n.default)({},C,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(c.mdx)("p",null,"Networks in (brackets) are testnet networks."),Object(c.mdx)(m.a,{defaultValue:"ethereum",values:[{label:"Ethereum",value:"ethereum"},{label:"(Ethereum Testnet - Kovan)",value:"kovan"}],mdxType:"Tabs"},Object(c.mdx)(b.a,{value:"ethereum",mdxType:"TabItem"},Object(c.mdx)("ul",null,Object(c.mdx)(x,{name:"Protocol",link:"https://etherscan.io/address/",address:"0xc25167ffa19b4d9d03c7d5aa4682c7063f345b66",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"DarknodeRegistry",link:"https://etherscan.io/address/",address:"0x2D7b6C95aFeFFa50C068D50f89C5C0014e054f0A",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"DarknodeRegistryStore",link:"https://etherscan.io/address/",address:"0x60Ab11FE605D2A2C3cf351824816772a131f8782",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"DarknodePayment",link:"https://etherscan.io/address/",address:"0x098e1708b920EFBdD7afe33Adb6a4CBa30c370B9",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"DarknodePaymentStore",link:"https://etherscan.io/address/",address:"0xE33417797d6b8Aec9171d0d6516E88002fbe23E7",mdxType:"ContractItem"}))),Object(c.mdx)(b.a,{value:"kovan",mdxType:"TabItem"},Object(c.mdx)("ul",null,Object(c.mdx)(x,{name:"Protocol",link:"https://kovan.etherscan.io/address/",address:"0x59e23c087cA9bd9ce162875811CD6e99134D6d0F",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"DarknodeRegistry",link:"https://kovan.etherscan.io/address/",address:"0x9954C9F839b31E82bc9CA98F234313112D269712",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"DarknodeRegistryStore",link:"https://kovan.etherscan.io/address/",address:"0x9daa16aA19e37f3de06197a8B5E638EC5e487392",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"DarknodePayment",link:"https://kovan.etherscan.io/address/",address:"0x023f2e94C3eb128D3bFa6317a3fF860BF93C1616",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"DarknodePaymentStore",link:"https://kovan.etherscan.io/address/",address:"0x0EC73cCDCd8e643d909D0c4b663Eb1B2Fb0b1e1C",mdxType:"ContractItem"})))),Object(c.mdx)("p",null,"Source: ",Object(c.mdx)("a",{parentName:"p",href:"https://github.com/renproject/darknode-sol/blob/master/migrations/networks.js"},"darknode-sol/blob/master/migrations/networks.js"),"."),Object(c.mdx)("h2",{id:"gateway-contracts"},"Gateway contracts"),Object(c.mdx)(m.a,{defaultValue:"ethereum",values:[{label:"Ethereum",value:"ethereum"},{label:"Binance Smart Chain",value:"bsc"},{label:"(Ethereum Testnet - Kovan)",value:"kovan"},{label:"(BSC Testnet)",value:"bsc-testnet"}],mdxType:"Tabs"},Object(c.mdx)(b.a,{value:"ethereum",mdxType:"TabItem"},Object(c.mdx)("ul",null,Object(c.mdx)(x,{name:"GatewayRegistry",link:"https://etherscan.io/address/",address:"0xe80d347DF1209a76DD9d2319d62912ba98C54DDD",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"BasicAdapter",link:"https://etherscan.io/address/",address:"0x32666B64e9fD0F44916E1378Efb2CFa3B3B96e80",mdxType:"ContractItem"}),Object(c.mdx)(y,{link:"https://etherscan.io/address/",symbol:"renBTC",erc20:"0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",gateway:"0xCc4FF5b8A4A7adb35F00ff0CBf53784e07c3C52F",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://etherscan.io/address/",symbol:"renZEC",erc20:"0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2",gateway:"0xc3BbD5aDb611dd74eCa6123F05B18acc886e122D",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://etherscan.io/address/",symbol:"renBCH",erc20:"0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",gateway:"0xCc4FF5b8A4A7adb35F00ff0CBf53784e07c3C52F",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://etherscan.io/address/",symbol:"renFIL",erc20:"0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5",gateway:"0xED7D080AA1d2A4D468C615a5d481125Bb56BF1bf",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://etherscan.io/address/",symbol:"renDOGE",erc20:"0xe3Cb486f3f5C639e98cCBaF57d95369375687F80",gateway:"0x05387a10Bb3EF789b6C2a9CE2d6C21D5a8c6B1aA",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://etherscan.io/address/",symbol:"renDGB",erc20:"0x3832d2F059E55934220881F831bE501D180671A7",gateway:"0x2362843745615368F4ef0A43D7502353649C0783",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://etherscan.io/address/",symbol:"renLUNA",erc20:"0x52d87F22192131636F93c5AB18d0127Ea52CB641",gateway:"0xD7D7Deab930B6d3f98b35A26a4c431630d5AB874",mdxType:"AssetItem"}))),Object(c.mdx)(b.a,{value:"bsc",mdxType:"TabItem"},Object(c.mdx)("ul",null,Object(c.mdx)(x,{name:"GatewayRegistry",link:"https://bscscan.com/address/",address:"0x21C482f153D0317fe85C60bE1F7fa079019fcEbD",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"BasicAdapter",link:"https://bscscan.com/address/",address:"0xAC23817f7E9Ec7EB6B7889BDd2b50e04a44470c5",mdxType:"ContractItem"}),Object(c.mdx)(y,{link:"https://bscscan.com/address/",symbol:"renBTC",erc20:"0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c",gateway:"0x95De7b32e24B62c44A4C44521eFF4493f1d1fE13",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://bscscan.com/address/",symbol:"renZEC",erc20:"0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7",gateway:"0xfdecB67cE94A22C8e227D17938c3127EA1B47B4E",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://bscscan.com/address/",symbol:"renBCH",erc20:"0xA164B067193bd119933e5C1e7877421FCE53D3E5",gateway:"0x3023DD075B0291Cd6aDc890A1EBDD6C400595E08",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://bscscan.com/address/",symbol:"renFIL",erc20:"0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",gateway:"0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://bscscan.com/address/",symbol:"renDOGE",erc20:"0x31a0D1A199631D244761EEba67e8501296d2E383",gateway:"0x7986568375Af35B427f3f51389d73196967C356a",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://bscscan.com/address/",symbol:"renDGB",erc20:"0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",gateway:"0x06A2C5d79c66268610eEBBca10AFa17092860830",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://bscscan.com/address/",symbol:"renLUNA",erc20:"0xc4Ace9278e7E01755B670C0838c3106367639962",gateway:"0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",standard:"BEP20",mdxType:"AssetItem"}))),Object(c.mdx)(b.a,{value:"kovan",mdxType:"TabItem"},Object(c.mdx)("ul",null,Object(c.mdx)(x,{name:"GatewayRegistry",link:"https://kovan.etherscan.io/address/",address:"0x557e211EC5fc9a6737d2C6b7a1aDe3e0C11A8D5D",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"BasicAdapter",link:"https://kovan.etherscan.io/address/",address:"0x7DDFA2e5435027f6e13Ca8Db2f32ebd5551158Bb",mdxType:"ContractItem"}),Object(c.mdx)(y,{link:"https://kovan.etherscan.io/address/",symbol:"renBTC",erc20:"0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f",gateway:"0x55363c0dBf97Ff9C0e31dAfe0fC99d3e9ce50b8A",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://kovan.etherscan.io/address/",symbol:"renZEC",erc20:"0x42805DA220DF1f8a33C16B0DF9CE876B9d416610",gateway:"0xAACbB1e7bA99F2Ed6bd02eC96C2F9a52013Efe2d",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://kovan.etherscan.io/address/",symbol:"renBCH",erc20:"0x618dC53e856b1A601119F2Fed5F1E873bCf7Bd6e",gateway:"0x9827c8a66a2259fd926E7Fd92EA8DF7ed1D813b1",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://kovan.etherscan.io/address/",symbol:"renFIL",erc20:"0xAE2f4e711ca562a07E16939C5dfD40b05C68AEe5",gateway:"0xC9A81412B538A3c190Bc6E537357c09A23D5A90E",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://kovan.etherscan.io/address/",symbol:"renDOGE",erc20:"0x442412c823884Cb8fa5e6a096b5DadD8BD94e798",gateway:"0x0D3D33790466D67d66cF61C02494B31AB63B9097",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://kovan.etherscan.io/address/",symbol:"renDGB",erc20:"0xE657dc7A25eB2b5023C16a1C7cfB42c805C1b855",gateway:"0x9302EA4C04c04fe2ca81b1A27c7a9906309b6701",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://kovan.etherscan.io/address/",symbol:"renLUNA",erc20:"0x34CC35cdB6fF0c3db189428ACe45084231664CD0",gateway:"0xFdF1F7bFB789bb06e830EBaC76e6241fcB29B5e1",mdxType:"AssetItem"}))),Object(c.mdx)(b.a,{value:"bsc-testnet",mdxType:"TabItem"},Object(c.mdx)("ul",null,Object(c.mdx)(x,{name:"GatewayRegistry",link:"https://testnet.bscscan.com/address/",address:"0x838F881876f53a772D2F8E2f8aa2e4a996431495",mdxType:"ContractItem"}),Object(c.mdx)(x,{name:"BasicAdapter",link:"https://testnet.bscscan.com/address/",address:"0x7de1253A8da6620351ec477b38BdC6a55FCd0f85",mdxType:"ContractItem"}),Object(c.mdx)(y,{link:"https://testnet.bscscan.com/address/",symbol:"renBTC",erc20:"0x5eB4F537889eC3C7Ec397F1acB33c70D8C0ee438",gateway:"0x6003FD1C2d4eeDed7cb5E89923AB457d1DE5cE89",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://testnet.bscscan.com/address/",symbol:"renZEC",erc20:"0xAF787a25241c69ae213A8Ee08a2518D858b32dBd",gateway:"0x7517FadFA7247ffe52d57c78780FfF0662a09936",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://testnet.bscscan.com/address/",symbol:"renBCH",erc20:"0xD566bB681a231f5648D7cB0f09A89cb47fd09513",gateway:"0x00E094aff24746196Bf73491A4C276fa4db503b4",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://testnet.bscscan.com/address/",symbol:"renFIL",erc20:"0xE980BC9e17094EB273c6b5A1139b3A30EcdF05e0",gateway:"0xBA7236b2fbe3F12Df15a0d5fcE57d891016822f8",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://testnet.bscscan.com/address/",symbol:"renDOGE",erc20:"0x8C0248Ab26FcD6868Cc5aaea954f0ce28F8E103f",gateway:"0xd5E7d585D471BaFF2060dAFeaf701ff89114e439",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://testnet.bscscan.com/address/",symbol:"renDGB",erc20:"0xe8163f31A7a23167D21252Bcc0a996a1A40E7d61",gateway:"0x0c5Efe870916cA7c89c03D742963795Ed7d3C35a",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(y,{link:"https://testnet.bscscan.com/address/",symbol:"renLUNA",erc20:"0x2c82a39549858A0fF1a369D84695D983791d0786",gateway:"0x26f4F36A070190Ee4379241DD1463A420768EB4B",standard:"BEP20",mdxType:"AssetItem"})))),Object(c.mdx)("p",null,"Source: ",Object(c.mdx)("a",{parentName:"p",href:"https://github.com/renproject/gateway-sol/blob/master/migrations/networks.js"},"gateway-sol/blob/master/migrations/networks.js"),"."))}D.isMDXComponent=!0},486:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return l})),a.d(t,"MDXProvider",(function(){return f})),a.d(t,"mdx",(function(){return x})),a.d(t,"useMDXComponents",(function(){return i})),a.d(t,"withMDXComponents",(function(){return b}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){return function(t){var a=i(t.components);return r.a.createElement(e,d({},t,{components:a}))}},i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),l=i(a),b=n,f=l["".concat(d,".").concat(b)]||l[b]||u[b]||s;return a?r.a.createElement(f,o(o({ref:t},c),{},{components:a})):r.a.createElement(f,o({ref:t},c))}));function x(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,d=new Array(s);d[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,d[1]=c;for(var m=2;m<s;m++)d[m]=a[m];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},487:function(e,t,a){"use strict";var n=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r=n(a(0));let s;t.DocType=s,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(s||(t.DocType=s={}));const d={[s.Tutorial]:"#b16bfc",[s.HowTo]:"#EC0088",[s.Reference]:"#ff823a",[s.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:{border:"2px solid "+d[e]||!1,borderRadius:"5px",color:d[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},489:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}a.r(t),t.default=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},504:function(e,t,a){"use strict";var n=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(0),s=n(a(509));var d=function(){const e=(0,r.useContext)(s.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=d},509:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,a(0).createContext)(void 0);t.default=n},526:function(e,t,a){"use strict";var n=a(4).default,r=a(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a(0)),d=n(a(504)),c=n(a(489)),o=n(a(445));const m=37,l=39;var b=function(e){const{lazy:t,block:a,defaultValue:n,values:r,groupId:b,className:i}=e,{tabGroupChoices:f,setTabGroupChoices:u}=(0,d.default)(),[p,x]=(0,s.useState)(n),y=s.Children.toArray(e.children),C=[];if(null!=b){const e=f[b];null!=e&&e!==p&&r.some((t=>t.value===e))&&x(e)}const D=e=>{const t=e.target,a=C.indexOf(t),n=y[a].props.value;x(n),null!=b&&(u(b,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:d}=window;return t>=0&&r<=d&&n<=s&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o.default.tabItemActive),setTimeout((()=>t.classList.remove(o.default.tabItemActive)),2e3))}),150))},E=e=>{var t;let a;switch(e.keyCode){case l:{const t=C.indexOf(e.target)+1;a=C[t]||C[0];break}case m:{const t=C.indexOf(e.target)-1;a=C[t]||C[C.length-1];break}}null===(t=a)||void 0===t||t.focus()};return s.default.createElement("div",{className:"tabs-container"},s.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":a},i)},r.map((({value:e,label:t})=>s.default.createElement("li",{role:"tab",tabIndex:p===e?0:-1,"aria-selected":p===e,className:(0,c.default)("tabs__item",o.default.tabItem,{"tabs__item--active":p===e}),key:e,ref:e=>C.push(e),onKeyDown:E,onFocus:D,onClick:D},t)))),t?(0,s.cloneElement)(y.filter((e=>e.props.value===p))[0],{className:"margin-vert--md"}):s.default.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==p})))))};t.default=b},527:function(e,t,a){"use strict";var n=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0));var s=function({children:e,hidden:t,className:a}){return r.default.createElement("div",{role:"tabpanel",hidden:t,className:a},e)};t.default=s}}]);