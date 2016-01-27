var http = require('http');
var fs = require('fs');
var url = require('url');//url 모듈 추출 
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;//request url parsing 한 후 pathname 
	if(pathname == '/'){//method를 이용해서 after the host and before the query 로 분리 
		fs.readFile('HTML.html', function (error,data){
			res.writeHead(200,{'Content' : 'text/html'});
			res.end(data);
		})
	}else if(pathname == '/a/OtherPage'){
		fs.readFile('OtherPage.html', function(error,data){
			res.writeHead(200,{'Content':'text/html'});
			res.end(data);
		});
	}
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});