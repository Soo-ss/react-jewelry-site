import express from "express";
import {
  uploadReview,
  uploadImage,
  getReviews,
  reviewDetail,
  deleteReview,
} from "../controllers/reviewController";
import { auth } from "../middleware/auth";

const reviewRouter = express.Router();

reviewRouter.post("/uploadImage", auth, uploadImage);
reviewRouter.post("/uploadReview", uploadReview);
reviewRouter.post("/getReviews", getReviews);
reviewRouter.get("/reviews_by_id", reviewDetail);
reviewRouter.post("/delete_review_by_id", deleteReview);

export default reviewRouter;
