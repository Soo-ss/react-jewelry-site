// import { User } from "../models/User";
import Review from "../models/Review";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import { AWS_KEY, AWS_PRIVATE_KEY } from "../config/key";

const s3 = new aws.S3({
  accessKeyId: AWS_KEY,
  secretAccessKey: AWS_PRIVATE_KEY,
  region: "ap-northeast-2",
});

const multerReview = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "desiacw/images",
  }),
});

const upload = multerReview.single("file");

export const uploadImage = (req, res) => {
  upload(req, res, (err) => {
    // console.log(res.req.file);
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.location,
    });
  });
};

export const uploadReview = async (req, res) => {
  try {
    // console.log(req.body);
    const newReview = await Review.create({
      fileUrl: req.body.images,
      title: req.body.title,
      description: req.body.desc,
      creator: req.body.creator,
    });
    /*
    {
  isAdmin: false,
  emailVerified: true,
  reviews: [
    5e817dd3b553d10061f05631,
    5e8437052c124b31a0a84e07,
    5e843b1f2c124b31a0a84e08
  ],
  reservations: [],
  _id: 5e817d61b553d10061f05630,
  email: 'kms334488@naver.com',
  name: 'MINSU KIM',
  keyForVerify: '65b07Qe2jL',
  __v: 3,
  naverID: 51555395
}
    */

    // console.log(newReview);
    // console.log(userID.reviews); // undefined
    // req.body.reviews.push(newReview._id);
    // req.body.save();

    newReview.save();

    return res.status(200).send({
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

export const getReviews = (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  Review.find()
    .populate("creator")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, reviews) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err,
        });
      }
      res.status(200).json({
        success: true,
        reviews,
        postSize: reviews.length,
      });
    });
};

// /api/review/reviews_by_id?id=${reviewID}&type=single
export const reviewDetail = (req, res) => {
  let type = req.query.type;
  let reviewIDs = req.query.id;

  if (type === "array") {
  }

  // we need to find the review information that belong to review id

  Review.find({ _id: { $in: reviewIDs } })
    .populate("creator")
    .exec((err, review) => {
      if (err) {
        return res.status(400).send(err);
      }
      review[0].views++;
      review[0].save();
      return res.status(200).send(review);
    });
};

export const deleteReview = async (req, res) => {
  const requestID = req.body.userData._id;
  const id = req.query.id;
  try {
    const review = await Review.findById(id);
    console.log(review);
    if (String(review.creator) !== requestID) {
      throw Error();
    } else {
      await Review.findOneAndRemove({
        _id: id,
      });
      return res.status(200).json({
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
    });
  }
};
