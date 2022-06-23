const User = require("../models/userModel");
const { generateToken } = require("../util/generateToken");
const bcrypt = require("bcryptjs");
//  get all user
const allusers = async (req, res) => {
  const user = await User.find({});
  res.json(user);
};

// login 
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.cookie("Token", generateToken(user._id));
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.json({ message: "Invalid Email or Password!!" });
  }
};

//logout
const logout = async (req, res) => {
  try {
    const token = req.cookies.Token;
    if (token) {
      res.clearCookie("Token");
      res.json({ message: "Logout" });
    } else {
      throw new Error("please login First");
    }
  } catch (error) {
    res.send(error.message);
  }
};

// get user profile
const userProfile = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.json({ message: "User not Found!!" });
  }
};

// user registration
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user) {
      throw new Error("User already exist!");
    } else {
      const newUser = await User.create({ name, email, password });
      if (newUser) {
        res.status(201).json({
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          password: bcrypt.hashSync(newUser.password, 10),
          isAdmin: newUser.isAdmin,
          token: generateToken(newUser._id),
        });
      } else {
        res.status(404);
        throw new Error("User not found");
      }
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { authUser, allusers, userProfile, registerUser, logout };
