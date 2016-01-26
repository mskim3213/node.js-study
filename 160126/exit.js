process.on('exit',function(){//'exit' 리스너 등록
				setTimeout(function(){//첫번째 인자값 실행될 함수, 두번째 인자값 ms초
						console.log('this will not run');
						},0);
				console.log('About to exit.');
				});
