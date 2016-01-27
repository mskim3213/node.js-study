var server = require('http').createServer();

server.on('request', function(){
				console.log('Request on');
				});
server.on('connection',function(){
				console.log('Connection On');
				});
server.on('close',function(){
				console.log('Close on');
				});
server.listen(52273);
