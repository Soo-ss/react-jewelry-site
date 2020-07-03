"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postReservation = void 0;

var _User = require("../models/User");

var postReservation = function postReservation(req, res) {
  // 유저에다가 저장한다. 예약은 유저당 한개이다.
  _User.User.findOneAndUpdate({
    _id: req.body.creator
  }, {
    phone: req.body.phone,
    myName: req.body.name,
    weddingDate: req.body.weddingDate,
    reservationDate: req.body.reservationDate
  }, function (err) {
    if (err) {
      return res.json({
        success: false,
        err: err
      });
    }

    return res.status(200).send({
      success: true
    });
  });
};

exports.postReservation = postReservation;