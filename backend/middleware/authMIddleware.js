const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const protect = async (req, res, next) => {
  try {
    const token = req.cookies.Token;
    if (token) {
      const decode = jwt.verify(token, "abced123");
      req.user = await User.findById(decode.id).select("-password");
      next();
    } else {
      throw new Error("please login first");
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { protect };



// module.exports = { protect }
