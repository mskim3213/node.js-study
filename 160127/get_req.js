var http = require('http');
var url = require('url');
http.createServer(function(req,res){
	var query = url.parse(req.url,true).query;//url.parse method의 두번재 인자값에 true를 
	res.writeHead(200,{'Content-Type': 'text/html'});//붙이면 query문에 맞게 parsing 된다.
	res.end('<h1>'+JSON.stringify(query)+'</h1>');//쿼리 객체를 쿼리문자열로 바꾼다 
	}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});