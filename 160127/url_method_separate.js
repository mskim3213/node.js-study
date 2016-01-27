var http = require('http');
http.createServer(function(req,res){
	if(req.method == 'GET'){//일반적인 client request는 get
		console.log('Get request');
	}else if(req.method == 'POST'){//post는 요청 매개변수를 추출할 때 사용  
		console.log('Post request');
	}
}).listen(52273,function(){
	console.log('Server Running');
});