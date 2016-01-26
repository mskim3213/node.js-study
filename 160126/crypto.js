var crypto = require ('crypto');
var shasum = crypto.createHash('sha1');//sha1 방식으로 해쉬 생성
shasum.update('crypto_hash');//sha1 방식으로 'crypto_hash'를 변환
var output = shasum.digest('hex');//16진수 방식으로 변경

console.log('crypto_hash:',output);
