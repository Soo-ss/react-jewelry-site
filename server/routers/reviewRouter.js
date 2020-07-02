import express from "express";
import {
  uploadReview,
  uploadImage,
  getReviews,
  reviewDetail,
} from "../controllers/reviewController";
import { auth } from "../middleware/auth";

const reviewRouter = express.Router();

reviewRouter.post("/uploadImage", auth, uploadImage);
reviewRouter.post("/uploadReview", uploadReview);
reviewRouter.post("/getReviews", getReviews);
reviewRouter.get("/reviews_by_id", reviewDetail);

export default reviewRouter;
