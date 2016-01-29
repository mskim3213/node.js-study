var http = require('http');
var express = require('express');
var app=express();//각 모듈 객체 생성
var router = express.Router();
app.use(router);
router.get('/a',function(req,res){//라우터 모듈을 이용하여 요청 url별로 분리
	res.send('<a href= "/b">Go to B</a>');
});
router.get('/b',function(req,res){
	res.send('<a href= "/a">Go to A</a>');
});
router.get('/num/:id',function(req,res){
	var num =req.param('id');
	res.send('<h1>'+num+'</h1>');
});
router.all('*',function(req,res){//가장 마지막에 써놓는게 좋다. 포트에 페이지가 없을경우를 
	res.send(404,'<h1>ERROR - Page Not Found</h1>');//잡는다
});
http.createServer(app).listen(100,function(){
	console.log('Server running');
});