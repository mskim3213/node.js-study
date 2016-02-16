var cheerio = require('cheerio');
var request = require('request');

request('https://github.com/languages',function(error, res,body){
	var $ = jQuery = cheerio.load(body);

	$('.left tr').each(function(item){//데이터 추출하는 부분, 현재 사이트가 없어져서 데이터 추출확인은 못함.
		var language = $(this).find('td:first-child').text().trim();
		var percentage = $(this).find('td:last-child').text().trim();

		console.log(language, percentage);
	})
});