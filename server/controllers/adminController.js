import { User } from "../models/User";

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
