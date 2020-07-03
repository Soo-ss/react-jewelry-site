"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _adminController = require("../controllers/adminController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var adminRouter = _express["default"].Router();

adminRouter.get("/getAllUsers", _adminController.getAllUsers);
adminRouter.post("/sendSMS", _adminController.sendSMS);
var _default = adminRouter;
exports["default"] = _default;