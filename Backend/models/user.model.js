const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  profile: {
    photo: {
      type: String,
      default: "default_profile.jpg", // Default profile picture
    },
    contact: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
