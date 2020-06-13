// import { User } from "../models/User";
import Review from "../models/Review";

export const uploadReview = async (req, res) => {
  const userID = req.body.creator;

  try {
    const newReview = await Review.create({
      title: req.body.title,
      description: req.body.desc,
      creator: userID,
    });
    console.log(newReview);
    userID.reviews.push(newReview.id);
    userID.save();
    return res.success(200).send({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      err,
    });
  }
};
