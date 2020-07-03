"use strict";

var _require = require("../models/User"),
    User = _require.User; // 인증 처리를 하는 곳이다.


var auth = function auth(req, res, next) {
  // 클라이언트 쿠키에서 토큰을 가져온다.
  var token = req.cookies.x_auth; // console.log("여기는 auth");
  // console.log(req.url);
  // console.log(req.body);
  // if (req.url === "/naver") {
  //   return res
  //     .writeHead(200, { "Access-Control-Allow-Origin": "*" })
  //     .json({ success: true });
  //   // next();
  // }
  // 토큰을 복호화 한 후 유저를 찾는다.

  User.findByToken(token, function (err, user) {
    if (err) throw err;

    if (!user) {
      return res.json({
        isAuth: false,
        error: true
      });
    } // 에러 처리 (예외 처리) 다 됐다면


    req.token = token;
    req.user = user;
    next();
  }); // 유저가 있으면 인증 OK
  // 유저가 없으면 인증 NO
};

module.exports = {
  auth: auth
};