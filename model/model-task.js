const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    explain: {
      type: String,
    },
    finished: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
    },
  },
  { timestamps: true }
);
const Task = mongoose.model("Tasks", taskSchema);
module.exports = Task;
