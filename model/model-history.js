const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    typeOfModification: {
      type: String,
    },
    date: {
      type: String,
    },
    userName: {
      type: String,
    },
  },
  { timestamps: true }
);
const History = mongoose.model("Histories", historySchema);
module.exports = History;
