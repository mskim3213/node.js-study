var net = require('net');
var crypto = require('crypto');

var guid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

net.createServer(function(socket){
	socket.on('data',function(data){
		if(/websocket/.test(data.toString())){//socket key를 추출
			var headers = data.toString().split('\n');
			var socketKey = '';
			headers.forEach(function(item){
				var dictionary = item.split(':');
				if(dictionary.length == 2 && dictionary[0].toLowerCase().trim() ==
					'sec-websocket-key'){
					socketKey = dictionary[1].trim();
				}
			});
			var longKey = socketKey + guid;
			var shasum = crypto.createHash('sha1').update(longKey);
			var outputKey = shasum.digest('base64');

			socket.write('HTTP/1.1 101 Swithing Protocols\r\n');
			socket.write('Upgrade: WebSocket\r\n');
			socket.write('Connection: Upgrade\r\n');
			socket.write('Sec-WebSocket-Accept: ' + outputKey + '\r\n\r\n');
			setInterval(function(){
				var output = 'Hello Web Socket Server..!'
				var frameBuffer = new Buffer(2 + output.length);
				frameBuffer[0] = 0x81;//첫번재 바이트에 1000 0001을 입력
				frameBuffer[1] = output.length;//두번재 배열에 길이를 입력
				for(var i = 0; i < output.length; i++){//세번째부터 보낼 문자열 입력
					frameBuffer[i+2] = output.charCodeAt(i);
				}
				socket.write(frameBuffer);
			},1000);
		}else if(/HTTP/.test(data.toString())){//HTML문자열 배열을 생성
			var output = [];//서버에 1초마다 문자열을 보내는 구문
			output.push('<script>');
			output.push('	var socket = new WebSocket("ws://127.0.0.1:3001/")');
			output.push('	socket.onopen = function(event){');
			output.push('	console.log("Web Socket Open.");');
			output.push('	setInterval(function(){');
			output.push('		socket.send("From Client");');
			output.push('	}, 1000);');
			output.push('	};');
			output.push('	socket.onerror = function(error){');
			output.push('		console.log(error);');
			output.push('	};');
			output.push('	socket.onmessage = function(event){');
			output.push('		console.log("Web Socket Data: " + event.data);');
			output.push('	};');
			output.push('	socket.onclose = function(event){');
			output.push('		console.log("Web Socket Close.");');
			output.push('	};');
			output.push('</script>');
			output = output.join('\n');

			socket.write('HTTP/1.1 200 OK\r\n');
			socket.write('Server: mskim node.js custom server\r\n');
			socket.write('Content-Type: text/html\r\n');
			socket.write('Content-Length: ' + output.length + '\r\n');
			socket.write('\r\n');
			socket.write(output);
			socket.end();
		}else{//v8 js engine은 문자열 연산이 굉장히 느리다. 따라서 다음과 같이 버퍼연산을 사용하는 것이 빠르다.
			var opcode = data[0] & 0x0F;
			var payloadLength = data[1];
			var mask = [data[2],data[3],data[4],data[5]];

			var output = new Buffer(payloadLength);
			for(var i = 6; i< payloadLength + 6; i++){
				// output += String.fromCharCode(data[i] ^ mask[(i-6) % 4]);
				output[i-6] = data[i] ^ mask[(i-6)%4];
			}

			console.log(output.toString());
		}
	});

}).listen(3001,function(){
	console.log('TCP server running');
});