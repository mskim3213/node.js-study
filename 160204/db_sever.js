var fs = require('fs');
var ejs =require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var router = express.Router();
app=express();
app.use(router);
var client = mysql.createConnection({
	user : 'root',
	password : 'Aa612701',
	database : 'company'
});

http.createServer(app).listen(3000,function(){
	console.log('Server Running');
});

router.get('/',function(req,res){
	fs.readFile('list.html','utf8',function(error,data){
		client.query('SELECT * FROM products',function(error,results){
			res.send(ejs.render(data,{
				data : results
			}));
		});
	});
});
router.get('/delete/:id',function(req,res){
	client.query('delete from products where id=?',[request.param('id')],function(){
		res.redirect('/');
	});
});

router.get('/insert',function(req,res){
	fs.readFile('insert.html','utf8',function(error,data){
		res.send(data);
	});
});
router.post('insert',function(req,res){
	var body = request.body;
	client.query('insert into products (name,modelnumber,series)values(?,?,?)',[body.name, body.modelnumber,body.series],function(){
		res.redirect('/');
	});
});
router.post('/edit/:id',function(req,res){
	var body = request.body;
	client.query('update products set name =?, modelnumber=? where id = ? ' ,[],function(){
		res.redirect('/');
	});
});