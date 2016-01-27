var http = require('http');
http.createServer(function(req,res){
	var date = new Date();//date obj 생성
	date.setDate(date.getDate() + 7);
	res.writeHead(200,{//header에 쿠키 생성
	'Content-Type': 'text/html',//헤더 타입 
	'Set-Cookie': [
	'breakfast = toast; Expires = '+date.toUTCString(),//헤더 정보
	'dinner = chicken']
	});
	res.end('<h1>' + req.headers.cookie + '</h1>');//쿠키 이름 출력
	}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});