var async = require('async');

var files = ['a.txt','b.txt','c.txt'];

async.forEach(files,function(item, index){
	console.log(item);
});
