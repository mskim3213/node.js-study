var cluster = require('cluster');
var os = require('os');

var cpuCount = os.cpus().length;
console.log('cpu count:',cpuCount);

if(cluster.isMaster){
	for(var i = 0; i< cpuCount; i++){
		console.log('cluster.fork()');
		cluster.fork();
	}
}else{
	console.log('console.log()');
}