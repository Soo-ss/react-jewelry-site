"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _morgan = _interopRequireDefault(require("morgan"));

var _key = _interopRequireWildcard(require("./config/key"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _reservationRouter = _interopRequireDefault(require("./routers/reservationRouter"));

var _reviewRouter = _interopRequireDefault(require("./routers/reviewRouter"));

var _adminRouter = _interopRequireDefault(require("./routers/adminRouter"));

var _passport = _interopRequireDefault(require("passport"));

var _OAuthRouter = _interopRequireDefault(require("./routers/OAuthRouter"));

require("./middleware/passport");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 5000;
app.use((0, _cors["default"])());
var CookieStore = (0, _connectMongo["default"])(_expressSession["default"]); // application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use((0, _cookieParser["default"])());
app.use((0, _morgan["default"])("dev"));
app.use((0, _expressSession["default"])({
  secret: _key.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new CookieStore({
    mongooseConnection: _mongoose["default"].connection
  })
})); // MongoDB

_mongoose["default"].connect(_key["default"].mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB Connected...");
})["catch"](function (err) {
  return console.log(err);
});

app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use("/api/OAuth", _OAuthRouter["default"]);
app.use("/api/users", _userRouter["default"]);
app.use("/api/reservation", _reservationRouter["default"]);
app.use("/api/review", _reviewRouter["default"]);
app.use("/api/admin", _adminRouter["default"]); // Handle React routing, return all requests to React app

app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "../client", "public", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
}); // production

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(_express["default"]["static"](_path["default"].join(__dirname, "../client/build"))); // Handle React routing, return all requests to React app

  app.get("*", function (req, res) {
    res.sendFile(_path["default"].join(__dirname, "../client", "build", "index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}

app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});