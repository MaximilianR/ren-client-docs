(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{123:function(e){e.exports=JSON.parse('{"operationId":"ren_queryState","deprecated":false,"summary":"ren_queryState","description":"ren_queryState returns the current RenVM state, including information about gas prices for each chain.","tags":["JSONRPC"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["method","id","jsonrpc","params"],"properties":{"method":{"type":"string","default":"ren_queryState","description":"Method name"},"id":{"type":"integer","default":1,"format":"int32","description":"Request ID"},"jsonrpc":{"type":"string","default":"2.0","description":"JSON-RPC Version (2.0)"},"params":{"title":"Parameters","type":"object","properties":{}}}}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"properties":{"jsonrpc":{"const":"2.0","type":"string"},"id":{"const":1,"type":"number"},"result":{"properties":{"state":{"properties":{"Bitcoin":{"properties":{"address":{"const":"1GRZJYrK5P8Q6NVNNZy9ibBmtbkbf6fXyi","type":"string"},"dust":{"const":"546","type":"string"},"gasCap":{"const":"142","type":"string"},"gasLimit":{"const":"400","type":"string"},"gasPrice":{"const":"142","type":"string"},"latestChainHash":{"const":"","type":"string"},"latestChainHeight":{"const":"0","type":"string"},"minimumAmount":{"const":"547","type":"string"},"output":{"properties":{"outpoint":{"properties":{"hash":{"const":"dMsmXjow5HEiUisz-S_Ug2UDlJpupjr26GEVK9S6QaE","type":"string"},"index":{"const":"0","type":"string"}},"required":["hash","index"],"additionalProperties":false,"type":"object"},"pubKeyScript":{"const":"dqkUqS7VrNHwJ8GjqXHg3WCeajtM4OeIrA","type":"string"},"value":{"const":"372618291","type":"string"}},"required":["outpoint","pubKeyScript","value"],"additionalProperties":false,"type":"object"},"pubKey":{"const":"A4knRXgAkxx9RNyUywAhtOiB-ZNcEjTckvRW4y7AGdXX","type":"string"}},"required":["address","dust","gasCap","gasLimit","gasPrice","latestChainHash","latestChainHeight","minimumAmount","output","pubKey"],"additionalProperties":false,"type":"object"},"Filecoin":{"properties":{"address":{"const":"f15wjyn36z6x5ypq7f73yaolqbxyiiwkg5mmuyo2q","type":"string"},"gasCap":{"const":"17037009230","type":"string"},"gasLimit":{"const":"2200000","type":"string"},"gasPrice":{"const":"200156","type":"string"},"gnonces":{"items":{"oneOf":[{"properties":{"address":{"const":"","type":"string"},"nonce":{"const":"0","type":"string"}},"required":["address","nonce"],"additionalProperties":false,"type":"object"}]},"additionalItems":false,"minItems":1,"type":"array"},"latestChainHash":{"const":"","type":"string"},"latestChainHeight":{"const":"0","type":"string"},"minimumAmount":{"const":"1","type":"string"},"nonce":{"const":"37","type":"string"},"pubKey":{"const":"A4knRXgAkxx9RNyUywAhtOiB-ZNcEjTckvRW4y7AGdXX","type":"string"}},"required":["address","gasCap","gasLimit","gasPrice","gnonces","latestChainHash","latestChainHeight","minimumAmount","nonce","pubKey"],"additionalProperties":false,"type":"object"}},"required":["Bitcoin","Filecoin"],"additionalProperties":false,"type":"object"}},"required":["state"],"additionalProperties":false,"type":"object"}},"required":["jsonrpc","id","result"],"additionalProperties":false,"type":"object"}}}}},"postman":{"name":"ren_queryState","description":{"content":"ren_queryState returns the current RenVM state, including information about gas prices for each chain.","type":"text/plain"},"url":{"path":["ren_queryState"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"method\\": \\"ren_queryState\\",\\n    \\"id\\": 1,\\n    \\"jsonrpc\\": \\"2.0\\",\\n    \\"params\\": {}\\n}"}},"method":"post","path":"/ren_queryState","hashId":"ren-query-state","servers":[{"url":"https://lightnode-{network}.herokuapp.com","variables":{"network":{"default":"new-mainnet","enum":["mainnet","new-mainnet","testnet","new-testnet"]}}}],"permalink":"/ren-client-docs/api/ren-query-state","previous":{"title":"ren_queryTxs","permalink":"/ren-client-docs/api/ren-query-txs"},"next":{"title":"ren_queryConfig","permalink":"/ren-client-docs/api/ren-query-config"},"jsonRequestBodyExample":{"method":"ren_queryState","id":1,"jsonrpc":"2.0","params":{}}}')}}]);