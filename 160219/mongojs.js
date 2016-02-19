var mongojs = require('mongojs');
var db = mongojs('node', ['products']);
db.products.find(function(error,data){
	console.log(data);
});