// import express from "express";
// import passport from "passport";
// import { naverLogin, postNaverLogin } from "../controllers/OAuthController";
// import { auth } from "../middleware/auth";
// import { test } from "../middleware/test";

// const OAuthRouter = express.Router();

// OAuthRouter.get("/naver", passport.authenticate("naver"), (req, res) => {
//   console.log("/auth/naver failed, stopped");
// });
// OAuthRouter.get(
//   "http://localhost:3000/api/OAuth/naver/callback",
//   passport.authenticate("naver", {
//     failureRedirect: "http://localhost:3000/login",
//   }),
//   postNaverLogin
// );

// export default OAuthRouter;
