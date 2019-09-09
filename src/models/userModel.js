const mongoose = require("mongoose");
const shortId = require("shortid");
const Schema = mongoose.Schema;

//create schema for user
const userSchema = new Schema(
  {
    _id:{
      type: String,
      default : shortId.generate
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

//create model
const User = mongoose.model("User", userSchema);

module.exports = User;
