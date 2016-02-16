var http = require('http');
var fs = require('fs');
http.get({
	host: 'www.kma.go.kr',
	path: '/weather/forecast/mid-term-rss.jssp?stnId=108'
},function(res){
	var result='';
	res.setEncoding('utf8');
	// res.on('data',function(data){ //여러번 데이터를 나누어 받으므로 rss데이터가 분할된 상태로 가져온다.
	// 	console.log('Data Download');
	// });
	res.on('end',function(){//rss문서를 한번에 가져오는 코드
		fs.writeFile('XMLFile.xml',result);//가져온 결과는 .xml 파일로 저장
	}).on('data',function(data){
		result+=data;//data이벤트가 발생할 때 데이터를 저장한 후 end 이벤트가 발생 한 후 .xml파일로 저장
	});
});