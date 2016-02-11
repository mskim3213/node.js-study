var fs = require ('fs');
var server = require('http').createServer();
var io = require('socket.io').listen(server);

server.listen(3000,function(){
	console.log('Server running');
});

server.on('request',function(req,res){
	fs.readFile('setget.html','utf8',function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(data);
	})
})
io.sockets.on('connection',function(socket){//socket.set is not a function error...
	var name = null;//클로저 활용
	socket.on('setname',function(data){
		// socket.set('name',data);
		name = data;
	});
	socket.on('getname',function(){
		// socket.get('name',function(err,data){
			socket.emit('responsename',name);
		// });
	});
});