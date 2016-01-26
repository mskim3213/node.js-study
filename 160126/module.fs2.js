var fs = require('fs');
var data = 'Hello World .. !';
try{
fs.writeFile('textfile.txt',data,'utf8',function(error){//async 방식 파일 쓰기, 기존 작성파일 데이터가 날라감. -> fs.appendFile(file,data,options,callback)
				console.log('WRITE FILE ASYNC COMPLETE');
				});
}catch(e){
		console.log(e);
}

try{//에외 처리부분
fs.writeFileSync('TextFileOtherWriteSync.txt',data,'utf8');
console.log('WRITE FILE SYNC COMPLETE');
}catch(e){
		console.log(e);
}
