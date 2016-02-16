var request = require('request');

request('http://google.com',function(error, res, body){
	console.log(body);
});