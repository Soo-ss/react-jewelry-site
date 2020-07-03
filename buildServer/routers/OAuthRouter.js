"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _OAuthController = require("../controllers/OAuthController");

var _auth = require("../middleware/auth");

var _test = require("../middleware/test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OAuthRouter = _express["default"].Router();

OAuthRouter.get("/naver", _passport["default"].authenticate("naver"), function (req, res) {
  console.log("/auth/naver failed, stopped");
});
OAuthRouter.get("http://localhost:3000/api/OAuth/naver/callback", _passport["default"].authenticate("naver", {
  failureRedirect: "http://localhost:3000/login"
}), _OAuthController.postNaverLogin);
var _default = OAuthRouter;
exports["default"] = _default;