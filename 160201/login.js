var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
 
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "kms" && req.session.admin)
    return next();//요청온 request를 다음 로직으로 보냄
  else
    return res.sendStatus(401);
};
 
// Login endpoint
app.get('/login', function (req, res) {//아이디 패스워드 쿼리문 확인 후 로그인 성공/실패 응답메세지 전송
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "kms" || req.query.password === "0000") {
    req.session.user = "kms";
    req.session.admin = true;
    res.send("login success!");
  }
});
 
// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();//logout 시 세션 삭제
  res.send("logout success!");
});
 
// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
 
app.listen(3000);
console.log("app running at http://localhost:3000");