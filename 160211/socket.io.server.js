var http=require('http');
var fs = require('fs');
var socketio= require('socket.io');
var server = http.createServer(function(req,res){
	fs.readFile('page.html',function(err,data){
		res.writeHead(200,{'Content-type':'text:html'});
		res.end(data);
	});
}).listen(3000,function(){
	console.log("server Running");

});
var io = socketio.listen(server);
var id = 0;
io.set('log level',2);

io.sockets.on('connection',function(socket){
	id = socket.id;
	socket.on('rint',function(data){
		console.log('client send data:',data);
		// socket.broadcast.emit('smart',data);//자신을 제외한 모든 사용자에게 데이터 전송
		io.sockets.sockets[id].emit('smart',data);//가장 최근 소켓을 이용 데이터 전송

	})
});