"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _reservationController = require("../controllers/reservationController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reservationRouter = _express["default"].Router();

reservationRouter.post("/postReservation", _reservationController.postReservation);
var _default = reservationRouter;
exports["default"] = _default;