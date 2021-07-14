(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{498:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return l})),n.d(t,"withMDXComponents",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){return function(t){var n=l(t.components);return a.a.createElement(e,d({},t,{components:n}))}},l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,p=s["".concat(d,".").concat(b)]||s[b]||u[b]||i;return n?a.a.createElement(p,c(c({ref:t},m),{},{components:n})):a.a.createElement(p,c({ref:t},m))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=h;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:r,d[1]=m;for(var o=2;o<i;o++)d[o]=n[o];return a.a.createElement.apply(null,d)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(498)),d={id:"integrator-contract",title:"IntegratorContract"},m={unversionedId:"subgraph/objects/integrator-contract",id:"subgraph/objects/integrator-contract",isDocsHomePage:!1,title:"IntegratorContract",description:"No description",source:"@site/subgraph/subgraph/objects/integrator-contract.mdx",slug:"/subgraph/objects/integrator-contract",permalink:"/ren-client-docs/subgraph/subgraph/objects/integrator-contract",version:"current",sidebar:"subgraph",previous:{title:"Integrator",permalink:"/ren-client-docs/subgraph/subgraph/objects/integrator"},next:{title:"_Meta_",permalink:"/ren-client-docs/subgraph/subgraph/objects/meta"}},c=[{value:"Fields",id:"fields",children:[]}],o={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"No description"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-graphql"},"type IntegratorContract {\n  id: ID!\n  date: Int!\n  contractAddress: Bytes!\n  txCount(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: ValueWithAsset_orderBy\n    orderDirection: OrderDirection\n    where: ValueWithAsset_filter\n  ): [ValueWithAsset!]!\n  locked(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  volume(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  fees(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  txCountBTC: BigInt!\n  lockedBTC: BigInt!\n  volumeBTC: BigInt!\n  txCountZEC: BigInt!\n  lockedZEC: BigInt!\n  volumeZEC: BigInt!\n  txCountBCH: BigInt!\n  lockedBCH: BigInt!\n  volumeBCH: BigInt!\n}\n")),Object(i.mdx)("h3",{id:"fields"},"Fields"),Object(i.mdx)("h4",{id:"id-id"},Object(i.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/id"},Object(i.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.mdx)("h4",{id:"date-int"},Object(i.mdx)("inlineCode",{parentName:"h4"},"date")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int!")),")"),Object(i.mdx)("h4",{id:"contractaddress-bytes"},Object(i.mdx)("inlineCode",{parentName:"h4"},"contractAddress")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/bytes"},Object(i.mdx)("inlineCode",{parentName:"a"},"Bytes!")),")"),Object(i.mdx)("h4",{id:"txcount-valuewithasset"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCount")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/objects/value-with-asset"},Object(i.mdx)("inlineCode",{parentName:"a"},"[ValueWithAsset!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-valuewithasset_orderby"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/enums/value-with-asset-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"ValueWithAsset_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-valuewithasset_filter"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/inputs/value-with-asset-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"ValueWithAsset_filter")),")"))),Object(i.mdx)("h4",{id:"locked-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"locked")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"volume-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volume")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"fees-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"fees")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int-3"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int-3"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection-3"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"txcountbtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCountBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"lockedbtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"lockedBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"volumebtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volumeBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"txcountzec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCountZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"lockedzec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"lockedZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"volumezec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volumeZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"txcountbch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCountBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"lockedbch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"lockedBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"volumebch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volumeBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"))}s.isMDXComponent=!0}}]);