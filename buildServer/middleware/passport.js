"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportNaver = _interopRequireDefault(require("passport-naver"));

var _User = require("../models/User");

var _key = require("../config/key");

var _OAuthController = require("../controllers/OAuthController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NAVER_CALLBACK = "/api/OAuth/naver/callback";

_passport["default"].use(_User.User.createStrategy());

_passport["default"].use(new _passportNaver["default"]({
  clientID: _key.NAVER_ID,
  clientSecret: _key.NAVER_SECRET,
  callbackURL: "http://localhost:3000".concat(NAVER_CALLBACK)
}, _OAuthController.naverLoginCallback));