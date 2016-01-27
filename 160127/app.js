var rint = require('./rint');//'rint.js' 모듈 추출, 모듈 자체가 1초마다 'tick' event가 발생
//c의 경우 header라고 보면 된다.
rint.timer.on('tick',function(){// 'tick' event가 발생할 경우
				console.log('이벤트를 실행');
				});
