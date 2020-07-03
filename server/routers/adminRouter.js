import express from "express";
import { getAllUsers } from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/getAllUsers", getAllUsers);

export default adminRouter;
