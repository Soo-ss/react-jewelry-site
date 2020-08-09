import { User } from "../models/User";
import { config, Group } from "coolsms-node-sdk";
import { COOL_API_KEY, COOL_API_SECRET, COOL_MY_PHONE } from "../config/key";

const apiKey = COOL_API_KEY;
const apiSecret = COOL_API_SECRET;

config.init({
  apiKey,
  apiSecret,
});

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({
      _id: -1,
    });
    // console.log(users);
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
    });
  }
};

export const sendSMS = async (req, res) => {
  //   console.log(req.body);
  const params = {
    text: req.body.contents,
    type: "LMS",
    to: req.body.phone,
    from: COOL_MY_PHONE,
  };
  try {
    const response = await Group.sendSimpleMessage(params);
    console.log(response);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({
      success: false,
      error,
    });
  }
};
