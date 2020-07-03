import passport from "passport";
import NaverStrategy from "passport-naver";
import { User } from "../models/User";
import { NAVER_ID, NAVER_SECRET } from "../config/key";
import { naverLoginCallback } from "../controllers/OAuthController";

const NAVER_CALLBACK = "/api/OAuth/naver/callback";

passport.use(User.createStrategy());

passport.use(
  new NaverStrategy(
    {
      clientID: NAVER_ID,
      clientSecret: NAVER_SECRET,
      callbackURL: `http://localhost:3000${NAVER_CALLBACK}`,
    },
    naverLoginCallback
  )
);
