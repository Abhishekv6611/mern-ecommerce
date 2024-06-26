const express = require("express");
const useRouter = express();
const bcrypt = require("bcrypt");
const UserData = require("../Schemas/UserSchema");
require("../config/Passport");
const jwt = require("jsonwebtoken");
var passport = require("passport");



useRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const User = await UserData.findOne({ email });
  if (User) {
    let message = "User already exists";
    return res.status(501).send({ message });
  }
  const HashPassword = await bcrypt.hash(password, 10);
  const Newuser = new UserData({ email, password: HashPassword });
  await Newuser.save().then((user) => {
    res.status(200).send({
      message: "added to database",
      email: user.email,
      id: user._id,
    });
  });
});

useRouter.post("/signin", async (req, res) => {
  try {
    const user = await UserData.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        success: false,
        message: "email is not matching",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.send({
        success: false,
        message: "Password is not matching",
      });
    }

    const payload = {
      email: req.body.email,
      id: user._id,
    };
    const token = jwt.sign(payload, "RandomString", { expiresIn: "1h" });
    return res.status(200).send({
      success: true,
      message: "logged in",
      token: "Bearer " + token,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred",
    });
  }
});

useRouter.get("/",passport.authenticate('jwt', { session: false }),
  (req, res) => {
    return res.status(200).send({
      sucesss: true,
      user: {
        id: req.user._id,
        email: req.user.email,
      },
    });
  }
);

module.exports = useRouter;
