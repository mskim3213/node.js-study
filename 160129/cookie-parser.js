var express = require('express');
var cookieparser = require('cookie-parser');
//node자체에 http 모듈이 저장 되어있기 때문에 'http' 모듈을 추가안해도 된다.
var app = express();
app.use(cookieparser());
app.get('/',function(req,res){
	console.log("cookie : ",req.cookies);
	res.send('json',{
		name : 'cookies',
		property : 'delicious'
	});
});

app.listen(8000);