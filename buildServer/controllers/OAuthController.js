"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postNaverLogin = exports.naverLoginCallback = exports.naverLogin = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _User = require("../models/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 인증은 3STEP => (login, callback, post)
var naverLogin = _passport["default"].authenticate("naver");

exports.naverLogin = naverLogin;

var naverLoginCallback = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, done) {
    var _profile$_json, id, email, user, newUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("여기까지 왔어요");
            _profile$_json = profile._json, id = _profile$_json.id, email = _profile$_json.email; //   console.log(id);

            _context.prev = 2;
            _context.next = 5;
            return _User.User.findOne({
              email: email
            });

          case 5:
            user = _context.sent;

            if (!user) {
              _context.next = 10;
              break;
            }

            user.naverID = id;
            user.save();
            return _context.abrupt("return", done(null, user));

          case 10:
            _context.next = 12;
            return _User.User.create({
              email: email,
              keyForVerify: true,
              emailVerified: true,
              naverID: id
            });

          case 12:
            newUser = _context.sent;
            return _context.abrupt("return", done(null, newUser));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", done(_context.t0));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 16]]);
  }));

  return function naverLoginCallback(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.naverLoginCallback = naverLoginCallback;

var postNaverLogin = function postNaverLogin(req, res) {
  //   res.redirect(routes.home);
  return res.status(200).json({
    success: true
  });
};

exports.postNaverLogin = postNaverLogin;