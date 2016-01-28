var http = require('http');
var fs = require('fs');

http.createServer(function (request,response){
	if(request.method =='GET'){//클라이언트 최초 접속시 get방식으로 요청을 처리
		fs.readFile('HTMLPage.html',function(error,data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		});
	}else if(request.method == 'POST'){//html form에 데이터를 적을 경우 post방식으로 
		request.on('data',function(data){//데이터를 처리 
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end('<h1>'+data+'</h1>');
		});
	}
}).listen(52273,function(){
	console.log('Server running at http://127.0.0.1:52273');
});