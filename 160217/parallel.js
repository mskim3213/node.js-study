var async = require('async');//병렬 실행 

async.parallel([
	function(callback){
		console.log('first function start');

		setTimeout(function(){
			console.log('First function End');
			callback(null,1);
		},2000);
	},
	function(callback){
		console.log('Second Function star');
		setTimeout(function(){
			console.log('second function end');
			callback(null,2);
		}, 1000);
	}
	],function(error,result){
		console.log('last function:',result);
	});
