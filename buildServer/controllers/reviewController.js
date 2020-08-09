"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteReview = exports.reviewDetail = exports.getReviews = exports.uploadReview = exports.uploadImage = void 0;

var _Review = _interopRequireDefault(require("../models/Review"));

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _key = require("../config/key");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var s3 = new _awsSdk["default"].S3({
  accessKeyId: _key.AWS_KEY,
  secretAccessKey: _key.AWS_PRIVATE_KEY,
  region: "ap-northeast-2"
});
var multerReview = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    bucket: "desiacw/images"
  })
});
var upload = multerReview.single("file");

var uploadImage = function uploadImage(req, res) {
  upload(req, res, function (err) {
    // console.log(res.req.file);
    if (err) {
      return res.json({
        success: false,
        err: err
      });
    }

    return res.json({
      success: true,
      image: res.req.file.location
    });
  });
};

exports.uploadImage = uploadImage;

var uploadReview = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var newReview;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Review["default"].create({
              fileUrl: req.body.images,
              title: req.body.title,
              description: req.body.desc,
              creator: req.body.creator
            });

          case 3:
            newReview = _context.sent;

            /*
            {
            isAdmin: false,
            emailVerified: true,
            reviews: [
            5e817dd3b553d10061f05631,
            5e8437052c124b31a0a84e07,
            5e843b1f2c124b31a0a84e08
            ],
            reservations: [],
            _id: 5e817d61b553d10061f05630,
            email: 'kms334488@naver.com',
            name: 'MINSU KIM',
            keyForVerify: '65b07Qe2jL',
            __v: 3,
            naverID: 51555395
            }
            */
            // console.log(newReview);
            // console.log(userID.reviews); // undefined
            // req.body.reviews.push(newReview._id);
            // req.body.save();
            newReview.save();
            return _context.abrupt("return", res.status(200).send({
              success: true
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.json({
              success: false,
              err: _context.t0
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function uploadReview(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.uploadReview = uploadReview;

var getReviews = function getReviews(req, res) {
  var order = req.body.order ? req.body.order : "desc";
  var sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  var limit = req.body.limit ? parseInt(req.body.limit) : 100;
  var skip = parseInt(req.body.skip);

  _Review["default"].find().populate("creator").sort([[sortBy, order]]).skip(skip).limit(limit).exec(function (err, reviews) {
    if (err) {
      return res.status(400).json({
        success: false,
        err: err
      });
    }

    res.status(200).json({
      success: true,
      reviews: reviews,
      postSize: reviews.length
    });
  });
}; // /api/review/reviews_by_id?id=${reviewID}&type=single


exports.getReviews = getReviews;

var reviewDetail = function reviewDetail(req, res) {
  var type = req.query.type;
  var reviewIDs = req.query.id;

  if (type === "array") {} // we need to find the review information that belong to review id


  _Review["default"].find({
    _id: {
      $in: reviewIDs
    }
  }).populate("creator").exec(function (err, review) {
    if (err) {
      return res.status(400).send(err);
    }

    review[0].views++;
    review[0].save();
    return res.status(200).send(review);
  });
};

exports.reviewDetail = reviewDetail;

var deleteReview = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var requestID, id, review;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            requestID = req.body.userData._id;
            id = req.query.id;
            _context2.prev = 2;
            _context2.next = 5;
            return _Review["default"].findById(id);

          case 5:
            review = _context2.sent;
            console.log(review);

            if (!(String(review.creator) !== requestID)) {
              _context2.next = 11;
              break;
            }

            throw Error();

          case 11:
            _context2.next = 13;
            return _Review["default"].findOneAndRemove({
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

  return function deleteReview(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteReview = deleteReview;