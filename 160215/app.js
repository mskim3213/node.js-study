var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var express = require('express');
var router = express.Router();
var counter = 0;

function Product(name, image, price, count){
	this.index = counter++;
	this.name = name;
	this.image = image;
	this.price = price;
	this.count = count;
}

var products = [//상품 구조체 선언
	new Product('JavaScript', '3.png', 28000, 30),
	new Product('jQuery','3.png', 28000,30),
	new Product('Node.js', '3.png',32000,30),
	new Product('Socket.io', '3.png', 17000, 30),
	new Product('Connect', '3.png', 18000,30),
	new Product('Express', '3.png',31000,30),
	new Product('EJS', '3.png', 12000,30)
];

var app = express();
var server = http.createServer(app);
app.use(router);
app.use(express.static(__dirname+'/public'));

router.get('/',function(req,res){
	var HTMLPage = fs.readFileSync('HTMLPage.html', 'utf8');
	res.send(ejs.render(HTMLPage,{
		products: products
	}));
});

server.listen(3000,function(){
	console.log('server running');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
	function onReturn (index){
		products[index].count++;//물건의 갯수 증가
		clearTimeout(cart[index].txfimerID);//타이머 제거
		delete cart[index];//카트에서 물건 제거 
		io.sockets.emit('count',{
			index: index,
			count: products[index].count
		});
	};
	var cart = {};//클로저를 활용하기 위한 변수수
	socket.on('cart',function(index){
		products[index].count--;
		cart[index]={};
		cart[index].index = index;
		cart[index].timerID = setTimeout(function(){//카트에 물건을 넣고 타이머를 10분으로 설정
			onReturn(index);//10분이 지난 후 onReturn함수 콜
		}, 1000*60*10);

		io.sockets.emit('count',{
			index: index,
			count: products[index].count
		});
	});

	socket.on('buy',function(index){
		clearTimeout(cart[index].timerID);
		delete cart[index];
		io.sockets.emit('count',{
			index: index,
			count: products[index].count
		});
	});

	socket.on('return',function(index){
		onReturn(index);
	});
});

