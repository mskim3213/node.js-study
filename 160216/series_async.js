var async = require('async');

async.series([
	function(callback){
		console.log('First Function');
		callback(null,1);
	},
	function(callback){
		console.log('Second Function');
		callback(null,2);
	},
	function(callback){
		console.log('Third Function');
		callback(null,3);
	},
	function(error, result){
		console.log('Last Function:', result);
	}

]);