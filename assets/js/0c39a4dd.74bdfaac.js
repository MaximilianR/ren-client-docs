(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{47:function(e){e.exports=JSON.parse('{"operationId":"ren_queryBlock","deprecated":false,"summary":"ren_queryBlock","description":"ren_queryBlock returns the details of the latest block, or of a block at the height specified","tags":["JSONRPC"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["method","id","jsonrpc","params"],"properties":{"method":{"type":"string","default":"ren_queryBlock","description":"Method name"},"id":{"type":"integer","default":1,"format":"int32","description":"Request ID"},"jsonrpc":{"type":"string","default":"2.0","description":"JSON-RPC Version (2.0)"},"params":{"title":"Parameters","type":"object","properties":{"blockHeight":{"type":"string","example":"100","description":"The height of the block to fetch. If unset, the latest block is returned."}}}}}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"properties":{"jsonrpc":{"const":"2.0","type":"string"},"id":{"const":1,"type":"number"},"result":{"properties":{"block":{"required":["extrinsics","extrinsicsRootHash","hash","height","next","parentHash","parentSignature","timestamp"],"additionalProperties":false,"type":"object","properties":{"extrinsics":{"properties":{"coreTxs":{"items":[],"additionalItems":false,"minItems":0,"type":"array"},"plan":{"additionalProperties":false,"type":"object"},"shardTxs":{"properties":{"txResults":{"additionalProperties":false,"type":"object"},"txs":{"properties":{"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA":{"items":{"type":"string"},"additionalItems":false,"minItems":4,"type":"array"}},"required":["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"],"additionalProperties":false,"type":"object"}},"required":["txResults","txs"],"additionalProperties":false,"type":"object"},"state":{"const":"MsTY7_ox8loLHc7224BmNTvpLPohIlN61RWi-PpjmIQ","type":"string"}},"required":["coreTxs","plan","shardTxs","state"],"additionalProperties":false,"type":"object"},"extrinsicsRootHash":{"const":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","type":"string"},"hash":{"const":"KLDKq5PvWWVqjXM7YWaYdo_YZrO214Kc9u3R7w1amoM","type":"string"},"height":{"const":"716942","type":"string"},"next":{"items":{"type":"object"},"additionalItems":false,"minItems":0,"type":"array"},"parentHash":{"const":"Gf1u1AKQKTmGI4vRIdwMbLvW60vg_hnKneAue5aP4Yg","type":"string"},"parentSignature":{"const":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","type":"string"},"timestamp":{"const":"1610973470192268438","type":"string"}}}},"required":["block"],"additionalProperties":false,"type":"object"}},"required":["jsonrpc","id","result"],"additionalProperties":false,"type":"object"}}}}},"postman":{"name":"ren_queryBlock","description":{"content":"ren_queryBlock returns the details of the latest block, or of a block at the height specified","type":"text/plain"},"url":{"path":["ren_queryBlock"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"method\\": \\"ren_queryBlock\\",\\n    \\"id\\": 1,\\n    \\"jsonrpc\\": \\"2.0\\",\\n    \\"params\\": {\\n        \\"blockHeight\\": \\"<string>\\"\\n    }\\n}"}},"method":"post","path":"/ren_queryBlock","hashId":"ren-query-block","servers":[{"url":"https://{network}.renproject.io","variables":{"network":{"default":"rpc","enum":["rpc","rpc-testnet"]}}}],"permalink":"/ren-client-docs/api/ren-query-block","previous":{"title":"ren_queryConfig","permalink":"/ren-client-docs/api/ren-query-config"},"next":{"title":"ren_queryBlocks","permalink":"/ren-client-docs/api/ren-query-blocks"},"jsonRequestBodyExample":{"method":"ren_queryBlock","id":1,"jsonrpc":"2.0","params":{"blockHeight":"100"}}}')}}]);