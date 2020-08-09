import express from "express";
import { getAllUsers, sendSMS } from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/getAllUsers", getAllUsers);
adminRouter.post("/sendSMS", sendSMS);

export default adminRouter;
