var fs = require('fs');
require('http').createServer(function(req,res){//server 변수 지정없이 바로 짧은 서버를 만들수있음.
				fs.readFile('HTML.html',function(error,data){//HTML.html 파일 읽기
				res.writeHead(200,{'Content-Type':'text/html'});//write header
				res.end(data);//read data
				});
				}).listen(52273);
