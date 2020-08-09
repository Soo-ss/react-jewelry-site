import "@babel/polyfill";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
// import session from "express-session";
// import MongoStore from "connect-mongo";
import morgan from "morgan";
import config from "./config/key";
import userRouter from "./routers/userRouter";
import reservationRouter from "./routers/reservationRouter";
import reviewRouter from "./routers/reviewRouter";
import adminRouter from "./routers/adminRouter";
// import passport from "passport";
// import OAuthRouter from "./routers/OAuthRouter";

// import "./middleware/passport";
// import { COOKIE_SECRET } from "./config/key";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// const CookieStore = MongoStore(session);

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(morgan("dev"));
// app.use(
//   session({
//     secret: COOKIE_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     store: new CookieStore({ mongooseConnection: mongoose.connection }),
//   })
// );

// MongoDB
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use("/api/OAuth", OAuthRouter);
app.use("/api/users", userRouter);
app.use("/api/reservation", reservationRouter);
app.use("/api/review", reviewRouter);
app.use("/api/admin", adminRouter);

// production
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../client", "build", "index.html"),
      (err) => {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
