import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const register = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) return res.status(400).json("Email already exists");
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    console.log(user);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Please provide an email and password");
  }
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) return res.status(400).json("User does not exist");

    const validPassword = await userExists.matchPasswords(password);
    if (!validPassword) return res.status(400).json("Invalid credentials");

    const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    const options = {
      httpOnly: true,
    };
    res.status(200).cookie("access_token", token, options).json("Logged in");
  } catch (err) {
    res.status(500).json(err);
  }
};

export { register, login };
