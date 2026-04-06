const mongoose = require("mongoose"); // Fixed: 2 'o's

// Fixed: Capital 'S' in Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already taken"],
    required: true,
  },

  email: {
    type: String,
    unique: [true, "Account already exists with this email address"],
    required: true,
  },

  password: {
    type: String,
    required: true,
  }
});

// Fixed: used the correct variable name 'mongoose'
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;