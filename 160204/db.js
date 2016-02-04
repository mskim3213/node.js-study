var mysql = require ('mysql');
var client = mysql.createConnection({
	user : 'root',
	password : 'Aa612701'
});

client.query('use company');
client.query('select * from products', function(error,result,fields){
	if(error){
		console.log('문장의 오류가 있습니다');
	}else{
		console.log(result);
	}
})