var http = require('http');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan());
app.use(app.router);

app.get('/a',function(req,res){
	res.send('<a href= "/b">Go to B</a>');
});
app.get('/b',function(req,res){
	res.send('<a href= "/a">Go to A</a>');
});
http.createServer(app).listen(100,function(){
	console.log('Server running');
});