var url = require('url');
text='http://hanb.co.kr/book/look.html?isbn=1234123-123';
console.log(url.parse('http://hanb.co.kr/book/look.html?isbn=1234123-123',true));
//url 모듈에 통합되어 있으므로 query String module을 많이 사용하진 않는다.
console.log(url.parse(text).query);//부분 추출도 가능
console.log(url.parse(text).href);
