var http = require('http');
http.createServer(function(req,res){
	console.log('request arrived');
	console.log(req.method);//요청방식
	console.log(req.url);//요청한 경롤
	console.log(req.headers);//요청 메세지 헤더 정보
	console.log(req.trailers);//i don't know that mean, what is trailers?..
	console.log(req.httpVersion);//http version
	res.writeHead(404);
	res.end();
}).listen(52273,function(){
	console.log('Server Running');
});