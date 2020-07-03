import passport from "passport";
import { User } from "../models/User";

// 인증은 3STEP => (login, callback, post)
export const naverLogin = passport.authenticate("naver");

export const naverLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  console.log("여기까지 왔어요");
  const {
    _json: { id, email },
  } = profile;
  //   console.log(id);
  try {
    const user = await User.findOne({
      email,
    });
    if (user) {
      user.naverID = id;
      user.save();
      return done(null, user);
    }

    const newUser = await User.create({
      email,
      keyForVerify: true,
      emailVerified: true,
      naverID: id,
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};

export const postNaverLogin = (req, res) => {
  //   res.redirect(routes.home);
  return res.status(200).json({
    success: true,
  });
};
