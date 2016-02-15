var net = require('net');

var socket = net.connect(3000,'127.0.0.1',function(){
	console.log('client start');
});

socket.on('data',function(data){//클라이언트가 작성한 데이터 출력
	console.log(data.toString());
});
socket.on('end',function(){
	console.log('client disconnected');
});

process.stdin.resume();//서버로 부터 수신한 데이터 출력
process.stdin.on('data', function(chunk){
	socket.write('ECHO: '+ chunk);
});