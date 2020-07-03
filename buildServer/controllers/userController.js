"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMyInfo = exports.withdraw = exports.getLogout = exports.getAuth = exports.postLogin = exports.confirm = exports.postRegister = void 0;

var _User = require("../models/User");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerSmtpTransport = _interopRequireDefault(require("nodemailer-smtp-transport"));

var _crypto = _interopRequireDefault(require("crypto"));

var _key = require("../config/key");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sendEmail = function sendEmail(req, res, user, smtpTransport) {
  // url
  // https, http조심
  var url = "http://" + req.get("host") + "/api/users/confirmEmail" + "?key=" + user.keyForVerify; // 옵션

  var mailOpt = {
    from: "kimmins3483@gmail.com",
    to: user.email,
    subject: "이메일 인증을 진행해주세요.",
    html: "<h1>이메일 인증을 위해 URL을 클릭해주세요.</h1><br>" + "<a href=\"".concat(url, "\">\uC778\uC99D\uD558\uAE30</a>")
  }; // 전송

  smtpTransport.sendMail(mailOpt, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log("============= email has been sent. ==================");
    }

    smtpTransport.close();
  });
  res.send('<script type="text/javascript">alert("이메일을 확인하세요."); window.location="/"; </script>');
};

var postRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var keyOne, keyTwo, keyForVerify, user, smtpTransport;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            keyOne = _crypto["default"].randomBytes(256).toString("hex").substr(100, 5);
            keyTwo = _crypto["default"].randomBytes(256).toString("base64").substr(50, 5);
            keyForVerify = keyOne + keyTwo;
            _context.next = 6;
            return (0, _User.User)({
              email: req.body.email,
              name: req.body.name,
              password: req.body.password,
              keyForVerify: keyForVerify
            });

          case 6:
            user = _context.sent;
            smtpTransport = _nodemailer["default"].createTransport((0, _nodemailerSmtpTransport["default"])({
              service: "Gmail",
              host: "smtp.gmail.com",
              auth: {
                user: "kimmins3483@gmail.com",
                pass: _key.ADMIN_EMAIL_SECRET
              }
            }));
            sendEmail(req, res, user, smtpTransport);
            _context.next = 11;
            return user.save();

          case 11:
            return _context.abrupt("return", res.json({
              success: false,
              err: err
            }));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(200).json({
              success: true
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function postRegister(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postRegister = postRegister;

var confirm = function confirm(req, res) {
  // console.log(req);
  _User.User.updateOne({
    keyForVerify: req.query.key
  }, {
    $set: {
      emailVerified: true
    }
  }, function (err, user) {
    // 에러처리
    if (err) {
      console.log(err);
    } // 일치하는 key가 없으면
    else if (user.n == 0) {
        console.log(user);
        res.send('<script type="text/javascript">alert("인증실패!!"); window.location="http://localhost:3000"; </script>');
      } // 인증 성공
      else {
          console.log(user);
          res.send('<script type="text/javascript">alert("이메일 인증이 완료되었습니다."); window.location="http://localhost:3000"; </script>');
        }
  });
};

exports.confirm = confirm;

var postLogin = function postLogin(req, res) {
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
}; // role 1 admin
// role 2 특정 부서 admin 이렇게도 가능하다.
// middleware auth
// 순서대로 수행된다.


exports.postLogin = postLogin;

var getAuth = function getAuth(req, res) {
  // 여기까지 미들웨어를 통과 해 왔다는 말은 Authentication이 true라는 뜻이다.
  // console.log("=====getAuth=====\n", req.user);
  res.status(200).json({
    // 원하는 정보만 선택해서 저장 가능하다.
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    // role 0 => 일반유저이고 role이 0이 아니면 관리자이다.
    isAuth: true,
    emailVerified: req.user.emailVerified,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    reviews: req.user.reviews
  });
};

exports.getAuth = getAuth;

var getLogout = function getLogout(req, res) {
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
};

exports.getLogout = getLogout;

var withdraw = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var requestID, id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            requestID = req.body.userData._id;
            id = req.query.id; // console.log(requestID, id);

            _context2.prev = 2;
            _context2.next = 5;
            return _User.User.findById(id);

          case 5:
            user = _context2.sent;
            console.log(user);

            if (!(String(user._id) !== requestID)) {
              _context2.next = 11;
              break;
            }

            throw Error();

          case 11:
            _context2.next = 13;
            return _User.User.findOneAndRemove({
              _id: id
            });

          case 13:
            return _context2.abrupt("return", res.status(200).json({
              success: true
            }));

          case 14:
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(400).json({
              success: false
            }));

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 16]]);
  }));

  return function withdraw(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.withdraw = withdraw;

var getMyInfo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // console.log(req.query.id);
            id = req.query.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _User.User.findById(id);

          case 4:
            user = _context3.sent;
            console.log(user);
            return _context3.abrupt("return", res.status(200).json({
              success: true,
              user: user
            }));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(400).json({
              success: false
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));

  return function getMyInfo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMyInfo = getMyInfo;