var onUncaughtException = function (error){
		console.log('예외 발생');
		process.removeListener('uncaughtException', onUncaughtException);
};

process.once('uncaughtException', onUncaughtException);//event listener를 한번만 실행

setInterval(function(){
				throw new Error('error');//강제로 에러 발생
				},2000);
