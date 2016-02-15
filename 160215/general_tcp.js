var net = require('net');

net.createServer(function(socket){
	socket.on('data',function(data){
		//console.log(data.toString('utf8'));
		socket.write('HTTP/1.1 200 OK\n');
		socket.write('Server: mskim node.js custom server\n');
		socket.write('Content-Type: text/html\n');
		socket.write('Content-Length: 21\n');
		socket.write('\n');
		socket.write('<h1>Hello World!</h1>');//output에 한글이 들어가면 안된다. js는 한글을 한글자로 보지만 http헤더는 한글을 한글자로 보지 않는다
		socket.end();
	});
}).listen(3000,function(){
	console.log('tcp server running');
});