var http= require('http');
var fs =require('fs');
var ejs = require('ejs');
http.createServer(function(req,res){
	fs.readFile('ejsPage.ejs','utf8',function(error,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(ejs.render(data,{//ejs 페이지에 매개변수를 전달 할 수 있다.
			name : 'kim min seong',
			name2 : 'kms'
		}));//ejs 파일을 읽기 위해서는 인코딩을 해야함!
	});
}).listen(52273,function(){
	console.log('Server Running');
});