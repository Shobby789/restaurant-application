const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "Users",
  }
);

mongoose.model("Users", userSchema);
