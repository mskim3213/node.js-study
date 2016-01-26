var crypto = require('crypto');

var key = '아무도 알지 못하느 나만의 비밀 키';
var input= 'password';

var cipher=crypto.createCipher('aes192',key)//'aes방식', key를 이용하여 암호화한다. 
cipher.update(input,'utf8','base64');//data, input_encoding, output_encoding
var cipheredOutput= cipher.final('base64');//output_encoding
 var decipher = crypto.createDecipher('aes192',key);
 decipher.update(cipheredOutput,'base64','utf8');
		 var decipheredOutput=decipher.final('utf8');
console.log('원래 문자열 : '+input);
console.log('암호화 : '+cipheredOutput);
console.log('암호화 해제 : ' +decipheredOutput);
