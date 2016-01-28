var fs = require('fs');
var http = require('http');
var ejs = require('ejs');
//forever 모듈 테스트를 위한 예제
http.createServer(function(req,res){
	if(req.url=='/'){
		fs.readFile('ejsPage.ejs','utf8',function(err,data){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.end(ejs.render(data,{
				name :'kms',
				name2 :'kimminseong'
			}));
		});
	}else{//다른경로로 들어갈 경우 에러 발생 -> 다시 도메인으로 들어가도 서버가 살아있다.
		error.error.error();
	}
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});