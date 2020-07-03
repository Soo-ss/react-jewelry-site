"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const mongoose = require("mongoose");
// 데이터를 절대로 DB에 저장하지 않는다.
// image의 link를 집어 넣는다.
// amazon에 image저장
var ReviewSchema = new _mongoose["default"].Schema({
  fileUrl: [{
    type: String,
    required: "File URL is required"
  }],
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    "default": 0 // 처음 생성되면 조회수 0

  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  creator: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  }
});

var Review = _mongoose["default"].model("Review", ReviewSchema);

var _default = Review;
exports["default"] = _default;