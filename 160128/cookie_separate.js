var http = require('http');
http.createServer(function(req,res){
	var cookie = req.headers.cookie;//헤더의 쿠키 정보 추출
	cookie=cookie.split(';').map(function(element){//';'단위로 split
		var element=element.split('=');//'=' 단위로 split
		return{
			key:element[0],value:element[1]
		};
	});

	res.writeHead(200,{
		'Content-Type':'text/html',
		'Set-Cookie':['name=kms','region=Seoul']
	});
	res.end('<h1>'+JSON.stringify(cookie)+'</h1>');
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});