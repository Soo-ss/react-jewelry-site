import express from "express";
import {
  postRegister,
  postLogin,
  getAuth,
  getLogout,
} from "../controllers/userController";
import { auth } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/register", postRegister);
userRouter.post("/login", postLogin);
userRouter.get("/auth", auth, getAuth);
userRouter.get("/logout", auth, getLogout);

export default userRouter;
