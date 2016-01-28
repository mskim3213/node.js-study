var http = require('http');
var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan());//로그 정보를 위해 morgan 사용 
app.use(express.static(__dirname+'/public'));//
app.use(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<img src="/x.jpg" width="100%"/>');
});

http.createServer(app).listen(100,function(){
	console.log('Server running');
});