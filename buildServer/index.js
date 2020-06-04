"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _morgan = _interopRequireDefault(require("morgan"));

var _key = _interopRequireDefault(require("./config/key"));

var _User = require("./models/User");

var _auth = require("./middleware/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require("express");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const path = require("path");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const config = require("./config/key");
// const { User } = require("./models/User");
// const { auth } = require("./middleware/auth");
var app = (0, _express["default"])();
var port = process.env.PORT || 5000;
app.use((0, _cors["default"])()); // application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use((0, _cookieParser["default"])());
app.use((0, _morgan["default"])("dev")); // MongoDB

_mongoose["default"].connect(_key["default"].mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB Connected...");
})["catch"](function (err) {
  return console.log(err);
});

app.post("/api/users/register", function (req, res) {
  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 DB에 넣어준다.
  var user = new _User.User(req.body); // save하기전, model에 있는 pre함수가 먼저 수행되고 save가 수행된다.

  user.save(function (err, userInfo) {
    if (err) {
      return res.json({
        success: false,
        err: err
      });
    }

    return res.status(200).json({
      success: true
    });
  });
});
app.post("/api/users/login", function (req, res) {
  // 요청된 이메일을 DB에서 찾는다.
  _User.User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      });
    } // else
    // 있다면
    // 요청된 이메일이 DB에 있다면 비번이 맞는 비번인지 확인


    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다."
        });
      } // else
      // 비밀번호까지 맞다면 토큰을 생성하기


      user.generateToken(function (err, user) {
        if (err) {
          return res.status(400).send(err);
        } // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지 등등..
        // 어디에다 저장해야 안전한지는 논란이 많다고 한다.
        // 우리는 쿠키에다가 저장한다.


        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id
        });
      });
    });
  });
}); // role 1 admin
// role 2 특정 부서 admin 이렇게도 가능하다.
// middleware auth
// 순서대로 수행된다. (next함수 개념 설명하기)

app.get("/api/users/auth", _auth.auth, function (req, res) {
  // 여기까지 미들웨어를 통과 해 왔다는 말은 Authentication이 true라는 뜻이다.
  res.status(200).json({
    // 원하는 정보만 선택해서 저장 가능하다.
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    // role 0 => 일반유저이고 role이 0이 아니면 관리자이다.
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  });
}); // logout

app.get("/api/users/logout", _auth.auth, function (req, res) {
  _User.User.findOneAndUpdate({
    _id: req.user._id
  }, {
    token: ""
  }, function (err, user) {
    if (err) {
      return res.json({
        success: false,
        err: err
      });
    }

    return res.status(200).send({
      success: true
    });
  });
}); // production

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(_express["default"]["static"](_path["default"].join(__dirname, "../client/build"))); // Handle React routing, return all requests to React app

  app.get("*", function (req, res) {
    res.sendFile(_path["default"].join(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});