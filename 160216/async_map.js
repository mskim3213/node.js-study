var fs =require('fs');
var async = require('async');

var files = ['a.txt','b.txt','c.txt'];

// async.map(files,fs.readFile,function(error,results){//fs.readFile메서드를 실행하고 
// 	console.log(results);//그 결과를 매개변수에 담아서 출력
// });

async.map(files, fs.stat, function(error,results){
	console.log(results);
});