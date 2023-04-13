const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String,
  },
  skill: {
    type: [String],
  },
  language: {
    type: [String],
  },
});
module.exports = mongoose.model("Member", memberSchema);
