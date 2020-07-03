"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSMS = exports.getAllUsers = void 0;

var _User = require("../models/User");

var _coolsmsNodeSdk = require("coolsms-node-sdk");

var _key = require("../config/key");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiKey = _key.COOL_API_KEY;
var apiSecret = _key.COOL_API_SECRET;

_coolsmsNodeSdk.config.init({
  apiKey: apiKey,
  apiSecret: apiSecret
});

var getAllUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User.User.find({}).sort({
              _id: -1
            });

          case 3:
            users = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              users: users
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(400).json({
              success: false
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAllUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllUsers = getAllUsers;

var sendSMS = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var params, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //   console.log(req.body);
            params = {
              text: req.body.contents,
              type: "LMS",
              to: req.body.phone,
              from: _key.COOL_MY_PHONE
            };
            _context2.prev = 1;
            _context2.next = 4;
            return _coolsmsNodeSdk.Group.sendSimpleMessage(params);

          case 4:
            response = _context2.sent;
            console.log(response);
            return _context2.abrupt("return", res.status(200).json({
              success: true
            }));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log("error", _context2.t0);
            return _context2.abrupt("return", res.status(400).json({
              success: false,
              error: _context2.t0
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function sendSMS(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendSMS = sendSMS;