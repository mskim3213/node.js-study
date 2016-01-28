var http = require('http');//supervisor 모듈을 테스트해보는 소스
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.end('<h1>Test - File -2</h1>');//출력 문구를 바꾸고 ctrl+c를 누르면 기존 서버종료
}).listen(52273,function(){//후 현재 소스로 서버 재시작 
	console.log('Server Running at http://127.0.0.1:52273');
});