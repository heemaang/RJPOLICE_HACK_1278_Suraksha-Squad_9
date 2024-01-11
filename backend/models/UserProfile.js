const mongoose = require("mongoose");


const UserProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 12,
    },
    role: {
      type: String,
      enum: ["user", "lawyer"],
      default: "lawyer",
      required: true,
    },
    avatar: String,
    address: {
      city: String,
      zipcode: String,
    },
    phoneNumber: String,
  },
  { timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);
module.exports = UserProfile;
