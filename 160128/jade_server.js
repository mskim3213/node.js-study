var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function(req,res){
	fs.readFile('jadePage.jade','utf8',function(err,data){
		var fn = jade.compile(data);//jade 문자열을 html 문자열로 생성하는 함수 

		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(fn({
			name: 'minseong kim',
			text: 'Hello ejs with node.js'
		}));
	});
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});