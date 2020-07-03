"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = void 0;

var test = function test(req, res, next) {
  console.log("여기는test");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*"); //res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  //res.header("Access-Control-Allow-Credentials", true);

  next();
};

exports.test = test;