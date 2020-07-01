import express from "express";
import { uploadReview, uploadImage } from "../controllers/reviewController";
import { auth } from "../middleware/auth";

const reviewRouter = express.Router();

reviewRouter.post("/uploadImage", auth, uploadImage);
reviewRouter.post("/uploadReview", uploadReview);

export default reviewRouter;
