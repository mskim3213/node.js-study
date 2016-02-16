var net = require('net');//tcp server

net.createServer(function(socket){
	socket.on('data',function(data){//읽은 데이터를 'utf8'로 인코딩하여 클라이언트에게 전력
		console.log(data.toString('utf8'));
		socket.write(data);
	});
}).listen(3000,function(){
	console.log("tcp server Running");
});