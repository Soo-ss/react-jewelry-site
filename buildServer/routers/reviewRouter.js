"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _reviewController = require("../controllers/reviewController");

var _auth = require("../middleware/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reviewRouter = _express["default"].Router();

reviewRouter.post("/uploadImage", _auth.auth, _reviewController.uploadImage);
reviewRouter.post("/uploadReview", _reviewController.uploadReview);
reviewRouter.post("/getReviews", _reviewController.getReviews);
reviewRouter.get("/reviews_by_id", _reviewController.reviewDetail);
reviewRouter.post("/delete_review_by_id", _reviewController.deleteReview);
var _default = reviewRouter;
exports["default"] = _default;