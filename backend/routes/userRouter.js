const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMIddleware")
const {authUser,allusers, userProfile, registerUser, logout} = require("../controller/userController");

router.post("/login", authUser);
router.get("/logout", logout);
router.get("/allusers", allusers);
router.get("/userprofile/:id", protect,userProfile);
router.post("/registeruser", registerUser);

module.exports = router;


