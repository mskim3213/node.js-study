var http = require('http');
http.createServer(function(req,res){
				var date = new Date();
				date.setDate(date.getDate() + 7);
				
				//cookie set
				response.writeHead(200,{
						'
