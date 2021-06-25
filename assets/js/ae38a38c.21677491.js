(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{290:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(3),a=(t(0),t(489));const c={id:"index",title:"root",slug:"/api",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},i={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"root",description:"RenJS Docs",source:"@site/ren-js/api/index.md",slug:"/api",permalink:"/ren-client-docs/ren-js/api",editUrl:null,version:"current",sidebar_label:"Readme"},o=[{value:"RenJS - @renproject/ren",id:"renjs---renprojectren",children:[]},{value:"Chains",id:"chains",children:[]},{value:"RenTX",id:"rentx",children:[]},{value:"MultiWallet",id:"multiwallet",children:[]}],l={toc:o};function p({components:e,...n}){return Object(a.mdx)("wrapper",Object(r.default)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"renjs-docs"},"RenJS Docs"),Object(a.mdx)("p",null,"These are automatically generated docs for RenJS's interfaces, hosted at ",Object(a.mdx)("a",{parentName:"p",href:"https://renproject.github.io/ren-js-docs/"},"renproject.github.io/ren-js-docs"),"."),Object(a.mdx)("p",null,"See ",Object(a.mdx)("a",{parentName:"p",href:"https://docs.renproject.io/developers"},"docs.renproject.io/developers")," for more docs and tutorials."),Object(a.mdx)("h3",{id:"renjs---renprojectren"},"RenJS - @renproject/ren"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"[","[RenJS]","]"),Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"[","[RenJS.lockAndMint]","] - for minting ren-assets, e.g. bridging BTC onto Ethereum as renBTC.\nRenJS.lockAndMint returns a ",Object(a.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmint"},"LockAndMint")," object, and each deposit creates a ",Object(a.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},"LockAndMintDeposit"),".")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"[","[RenJS.burnAndRelease]","] - for returning assets to their native chains - e.g. burning renBTC back to BTC.\nRenJS.burnAndRelease returns a ",Object(a.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_burnandrelease.burnandrelease"},"BurnAndRelease")," object."))))),Object(a.mdx)("h3",{id:"chains"},"Chains"),Object(a.mdx)("p",null,"The package ",Object(a.mdx)("inlineCode",{parentName:"p"},"@renproject/ren")," doesn't come with support for any chains - they must be imported separately, either\nindividually - e.g. ",Object(a.mdx)("inlineCode",{parentName:"p"},"@renproject/chains-bitcoin")," - or using ",Object(a.mdx)("inlineCode",{parentName:"p"},"@renproject/chains"),", which combines several chains\npackages."),Object(a.mdx)("p",null,"For docs on each chain, see:"),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"@renproject/chains-bitcoin"),":"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"[","[BitcoinClass]","]"),Object(a.mdx)("li",{parentName:"ul"},"[","[ZcashClass]","]"),Object(a.mdx)("li",{parentName:"ul"},"[","[BitcoinCashClass]","]")),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"@renproject/chains-filecoin"),":"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"[","[FilecoinClass]","]")),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"@renproject/chains-ethereum"),":"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"[","[EthereumClass]","]"),Object(a.mdx)("li",{parentName:"ul"},"[","[BinanceSmartChainClass]","]")),Object(a.mdx)("h3",{id:"rentx"},"RenTX"),Object(a.mdx)("p",null,"See the ",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/tree/feat/2.0.0-alpha.21/packages/lib/rentx"},"RenTX README"),"."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"[","[mintMachine]","]"),Object(a.mdx)("li",{parentName:"ul"},"[","[burnMachine]","]")),Object(a.mdx)("h3",{id:"multiwallet"},"MultiWallet"),Object(a.mdx)("p",null,"See the ",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/tree/feat/2.0.0-alpha.21/packages/ui/multiwallet-ui"},"MultiWallet README"),"."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"[","[WalletPicker]","]")))}p.isMDXComponent=!0},489:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return s})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return u})),t.d(n,"withMDXComponents",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){return function(n){var t=u(n.components);return a.a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},j=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||c;return t?a.a.createElement(m,l(l({ref:n},o),{},{components:t})):a.a.createElement(m,l({ref:n},o))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=j;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);