import express from "express";
import {
  postRegister,
  postLogin,
  getAuth,
  getLogout,
  withdraw,
  getMyInfo,
  confirm,
} from "../controllers/userController";
import { auth } from "../middleware/auth";
const userRouter = express.Router();

userRouter.get("/confirmEmail", confirm);
userRouter.post("/register", postRegister);
userRouter.post("/login", postLogin);

// need to auth
userRouter.get("/auth", auth, getAuth);
userRouter.get("/logout", auth, getLogout);

userRouter.get("/get_user_by_id", getMyInfo);
userRouter.post("/delete_user_by_id", withdraw);

export default userRouter;
