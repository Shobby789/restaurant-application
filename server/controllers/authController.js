require("../models/db/userSchema");
const mongoose = require("mongoose");
const User = mongoose.model("Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../data/key");

module.exports.createUser = async (req, res) => {
  const { userName, address, phoneNumber, email, password } = req.body;
  console.log("body data: ", req.body);
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      userName,
      address,
      phoneNumber,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok user created" });
  } catch (error) {
    res.send({ status: "error" });
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email);
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, SECRET_KEY, {
      expiresIn: "1hr",
    });

    if (res.status(201)) {
      // res.redirect("/home");
      return res.json({ status: "ok", data: { user, token } });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const allCustomers = await User.find();
    res.status(200).json(allCustomers);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
