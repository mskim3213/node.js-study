var http = require('http');
var express = require('express');

var app=express();

app.use(function(req,res){
	var agent = req.header('User-Agent');//header의 속성 추출
	console.log(req.headers);//헤더 전체를 출력
	if(agent.toLowerCase().match(/chrom/)){//chome 으로 접속인지 확인 
		res.send('<h1>Hello Chrom</h1>');
	}else{
		res.send('<h1>Hello express</h1>');
	}
	res.status(200);//상태 확인 200 ok
});
http.createServer(app).listen(100,function(){
	console.log('Server Running');
});