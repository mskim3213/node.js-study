var cluster = require('cluster');
var http = require('http');
var os = require('os');
var fs = require('fs');

var cpuCount = os.cpus().length;
console.log('cpu count:',cpuCount);

if(cluster.isMaster){
	for(var i = 0; i<cpuCount; i++){
		cluster.fork();
	}
	cluster.on('death',function(worker){
		console.log('worker'+worker.pid+'died');
	});
}else{
	http.createServer(function(req,res){
		try{
			var data = fs.readFileSync('HTMLpage.html','utf8');
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}catch(exception){
			console.log(exception);
		}
	}).listen(52273,function(){
		console.log('Server running');
	});
}