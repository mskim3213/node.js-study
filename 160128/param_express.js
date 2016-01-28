var http = require('http');
var express = require('express');

var app = express();
app.use(function(req,res){
	var name = req.param('name');//'name' 매개변수를 저장
	var region = req.param('region');//'region' 매개변수를 저장 

	res.send('<h1>'+name+'-'+region+'</h1>');//출력 
	res.status(200);
});
http.createServer(app).listen(100,function(){
	console.log('Server Running');
});