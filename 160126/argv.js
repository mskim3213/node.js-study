console.log(process.argv);

//실행 매개변수 (argv 객체) 사용법  
process.argv.forEach(function (item, index){
					console.log(index+' : '+item); // item type is string
					});
