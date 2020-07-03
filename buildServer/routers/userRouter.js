"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

var _auth = require("../middleware/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.get("/confirmEmail", _userController.confirm);
userRouter.post("/register", _userController.postRegister);
userRouter.post("/login", _userController.postLogin); // need to auth

userRouter.get("/auth", _auth.auth, _userController.getAuth);
userRouter.get("/logout", _auth.auth, _userController.getLogout);
userRouter.get("/get_user_by_id", _userController.getMyInfo);
userRouter.post("/delete_user_by_id", _userController.withdraw);
var _default = userRouter;
exports["default"] = _default;