console.log('Hello World'); //printf("Hello World");
var http = require('http'); //http 모듈 추출
http.createServer(function (request,response){ //서버 생성, 인자값으로 함수 호출
					response.writeHead(200,{ 'Content-Type': ' text/html'}); //타입 지정
						response.end('<h1>Hello World .. !</h1>'); //
						}).listen(8888,function(){
									console.log('Server running at http://127.0.0.1:8888');
									});
