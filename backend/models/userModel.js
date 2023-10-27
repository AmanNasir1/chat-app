const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-A5HyX-dT6wS33Fwl6GZsDpx3Q_Qq8JTng&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-A5HyX-dT6wS33Fwl6GZsDpx3Q_Qq8JTng&usqp=CAU"
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
);

userModel.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userModel.pre("save", async function(next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userModel);
module.exports = User;
