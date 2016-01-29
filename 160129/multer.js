var express = require('express')
  , router = express.Router()
var app = express();
var http = require('http');
router.post('/upload', function(req, res) {

})
http.createServer(app).listen(100,function(){
	console.log('Server running');
});
module.exports = router