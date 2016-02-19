var async = require('async');

async.series({
	first: function(callback){
		console.log('first function');
		callback(null, 1);
	},
	second: function(callback){
		console.log('second function');
		callback(null, 2);
	},
	third: function(callback){
		console.log('third function');
		callback(null, 3);
	}
},function(error, result){
	console.log('Last function',result);
});