 var express = require('express');
var app = express();
var fs = require("fs");
user = {//추가할 데이터 json type으로 생성
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
var id = 4;
app.get('/deleteUser',function(req,res){//user4 정보 삭제
	fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
		data = JSON.parse(data);
		delete data["user"+id];
		console.log(data);
		res.end(JSON.stringify(data));
	});
});
app.get('/listUsers', function (req, res) {// '/listUsers' request요청시 users.json 정보를 전송한다.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/addUser', function (req, res) {//user4 정보 추가 
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );//쿼리 문자열을 쿼리 객체로 변환 
       data["user4"] = user["user4"];//파싱된 데이터에 추가 
       console.log( data );
       res.end( JSON.stringify(data));//쿼리 객체를 문자열로 변환 후 출력
   });
})
app.get('/:id', function (req, res) {//request온 url 중 id를 추출
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user" + req.params.id] //"user2"의 정보를 추출
       console.log( user );
       res.end( JSON.stringify(user));//user에게 전송
   });
})
var server = app.listen(8081, function () {

  var host = server.address().address//127.0.0.1 ->local address
  var port = server.address().port//8081 -> local port

  console.log("Example app listening at http://%s:%s", host, port)

})