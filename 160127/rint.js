exports.timer = new process.EventEmitter();

setInterval(function(){//1초 간격으로 'tick' event 발생
				exports.timer.emit('tick');
				},1000);
