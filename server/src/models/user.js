const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  githubLogin: String,
  name: String,
  avatar: String
});

module.exports = mongoose.model("users", User);
