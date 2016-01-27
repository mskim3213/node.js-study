var server = require('http').createServer();

server.listen(52273,function(){
				console.log('server Running at http://127.0.0.1:52273');
				});

setInterval(function(){//1초 간격으로 server를 종료시킨다.
				server.close();
				console.log('exit');
				process.exit([exitCode=0]);//정상 종료를 안시킬 경우 1초마다 
				},1000);//server.close(); 때문에  서버종료를 하게 되는데 에러발생
