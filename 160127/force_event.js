process.on('exit',function(){
				console.log('bye');
				});

process.emit('exit');//강제로 이벤트 발생
process.emit('exit');
process.emit('exit');
console.log('program running');
