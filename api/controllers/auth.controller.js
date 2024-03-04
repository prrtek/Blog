import User from "../models/user.model.js";

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

const login = (req, res) => {
  res.send("Login route");
  console.log(req.body);
};

export { register, login };
