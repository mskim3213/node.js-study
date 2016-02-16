
var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var router = express.Router();
app.use(router);//라우터 사용법은 4.x version으로 맞게 코딩

var seats = [//좌석 변수 0: 빈곳, 1: 예약가능, 2: 예약완료된 좌석 
[1,1,0,1,1,0,0,0,0,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1,1,0,1,1],
];


router.get('/',function (req,res,next){
	fs.readFile('html.html',function(err,data){
		res.send(data.toString());//data를 'utf8'로 인코딩하여 넘겨줌
	});
});

router.get('/seats',function(req,res,next){//이경로로 들어가면 seat변수의 jason 형식으로 볼수있음
	res.send(seats);
});

var server = http.createServer(app);
server.listen(3000,function(){
	console.log('Server running');
});

var io = socketio.listen(server);
io.sockets.on('connection',function(socket){//예약 이벤트 핸들러
	socket.on('reserve',function(data){
		seats[data.y][data.x]=2;
		io.sockets.emit('reserve',data);
	});
	// socket.on('delete',function(data){//예약 삭제 핸들러
	// 	seats[data.y][data.x]=1;
	// 	io.sockets.emit('delete',data);
	// });
});