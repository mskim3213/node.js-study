var http = require('http');

http.createServer(function(req,res){
	var cookie = req.headers.cookie;
	res.writeHead(200,{
		'Content-Type':'text/html',
		'Set-Cookie':['name=kms','region=Seoul']
	});
	res.end('<h>'+JSON.stringify(cookie)+'</h>');
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});