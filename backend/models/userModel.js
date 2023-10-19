const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-A5HyX-dT6wS33Fwl6GZsDpx3Q_Qq8JTng&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-A5HyX-dT6wS33Fwl6GZsDpx3Q_Qq8JTng&usqp=CAU"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);
module.exports = User;
