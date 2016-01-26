process.on('exit',function(){//exit event가 발생 될 경우 실행
				console.log('bye');
				});

process.on('uncaughtException',function(error){//error가 발생 될 경우 실행
				console.log('error exception');
				});

var count=0;
var id=setInterval(function(){//2번째 파라미터 간격으로 function 함수를 실행한다
				console.log(count);
				if(count==3){clearInterval(id);}//간격을 없애서 setInterval함수를 제거한다.
				count++;
				//console.log(count);
				//error.error.error();
				throw new Error('this is error');//error class 생성
				},1000);
