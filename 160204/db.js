var mysql = require ('mysql');
var client = mysql.createConnection({
	user : 'root',
	password : 'Aa612701'
	database : 'company'//테이블 지정 
});

//client.query('use company');//테이블 지정, 두개의 방식으로 다 사용가능 
client.query('select * from products', function(error,result,fields){
	if(error){
		console.log('문장의 오류가 있습니다');
	}else{
		console.log(result);
	}
})