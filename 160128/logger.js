var http = require ('http');
var express = require('express');
var morgan = require('morgan');//morgan 모듈 추가 

var app=express();

app.use(morgan());//기존 logger가 morgan으로 버전업되면서 교체됌.
app.use(function(req,res){
	res.send('<h1>express Basic</h1>');
});

http.createServer(app).listen(100,function(){
	console.log('Server Running');
});
