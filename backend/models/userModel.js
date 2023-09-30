const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, required: true }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);
module.exports = User;
