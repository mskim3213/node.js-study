var url=require('url');
var querystring = require('querystring');

var parsedObjext=url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
console.log(querystring.parse(parsedObjext.query));//query 부분인 '?' 까지 split 하고 출력
