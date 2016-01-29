var fs=require('fs');
var http=require('http');
var express=require('express');
var cookieParser=require('cookie-parser');
var router=express.Router();
var bodyParser=require('body-parser');
var multipart = require('multipart');
var limit = require('limit');
var app=express();

app.use(cookieParser());
app.use(bodyParser({uploadDir : __dirname + '/multipart'}));
app.use(router);
app.use(express.limit('10mb'));

router.get('/',function(req,res){
	fs.readFile('HTMLPage.html',function(err,data){
		res.send(data.toString());
	});
});
router.post('/',function(req,res){});

http.createServer(app).listen(100,function(){
	console.log('Server Running');
});