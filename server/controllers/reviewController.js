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
