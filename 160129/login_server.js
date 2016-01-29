var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();
var app = express();

app.use(bodyParser());
app.use(cookieParser());
app.use(router);

router.get('/',function(req,res){
	if(req.cookies.auth=='true'){
		res.send('<h1>Login Success!!!</h1>');
	}else{
		res.send('<h1>Login fail!!!</h1>');
	}
});
router.get('/login',function(req,res){
	fs.readFile('login.html',function(err,data){
		res.send(data.toString());
	});
});
router.post('/login',function(req,res){
	var login = req.param('login');
	var password = req.param('password');

	console.log(login,password);
	console.log(req.body);

	if(login == 'weplanet' && password == 'weplanet'){
		res.cookie('auth',true);
		res.redirect('/');//redirect a request
		console.log('login success');
	}else{
		res.cookie('auth',false);
		res.redirect('/');
		console.log('login failed..');
	}
});
router.get('*',function(req,res){//if server don't have a page send 404 error 
	res.status(404).send('<h1>ERROR - Page Not Fount</h1>');
})
http.createServer(app).listen(100,function(){
	console.log('Server Running http://127.0.0.1:100');
});