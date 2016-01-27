var http=require('http');
http.createServer(function(req,res){
	res.writeHead(302,{'Location': ' http://hanb.co.kr'});//page 강제 이동 
	res.end();
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});