import express from "express";
import { uploadReview } from "../controllers/reviewController";

const reviewRouter = express.Router();

reviewRouter.post("/uploadReview", uploadReview);

export default reviewRouter;
