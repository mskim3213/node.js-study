var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(req,res){
	fs.readFile('chat.html',function(error,data){
		res.writeHead(200,{'Content-Type': 'text/html'});//문서를 읽고
		res.end(data);
	});
}).listen(3000,function(){
	console.log('server running');
});
var io = socketio.listen(server);
io.sockets.on('connection',function(socket){//클라이언트와 소켓연결이 된 뒤 'connection' event handler
	socket.on('message',function(data){//'message' event handler
		console.log(data);
		io.sockets.emit('message',data);
	});
});