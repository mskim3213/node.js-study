var fs = require('fs');

var text = fs.readFileSync('textfile.txt','utf8');//sync 방식으로 file I/O
//fs.readFile('textfile.txt','utf8',function(error,data){//async 방식으로 file I/O
//				console.log(data);
//				});
for(i=0; i<100000;i++){//async test 
		console.log(i);
}
console.log(text);
