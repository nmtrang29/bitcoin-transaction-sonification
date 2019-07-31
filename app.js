const maxApi = require('max-api');

const WebSocket = require("ws");

var btcs = new WebSocket('wss://ws.blockchain.info/inv');

btcs.onopen = function() {
	btcs.send(JSON.stringify({"op":"unconfirmed_sub"}));
}

btcs.onmessage = function(onmsg){
	var response = JSON.parse(onmsg.data);
	var amount = response.x.out[0].value;
	var conAmount = amount / 100000000;
	maxApi.post(conAmount);
	maxApi.outlet(conAmount);
}