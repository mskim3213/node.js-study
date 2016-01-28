var http = require('http');
var express = require('express');

var app = express();

app.use(function(req,res,next){
	if(req.url =='/'){
	var output = [];//JSON 형태
	for (var i=0; i<3; i++){
		output.push({//push method를 통해 결과값 배열에 저장
			count : i,
			name : 'name -'+i
		})
	}
	res.send(output);//클라이언트에게 전송
}else{
	res.status(404).send('<h1>ERROR</h1>');
}
});
http.createServer(app).listen(100,function(){
	console.log('Server Running');
});