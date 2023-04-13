const express = require("express");
const {
  getAllTask,
  updatedTask,
  createTask,
  deleteTask,
} = require("../contorlle/taskcontorolle");

const router = express.Router();
router.get("/", getAllTask);
router.post("/", createTask);
router.patch("/:id", updatedTask);
router.delete("/:id", deleteTask);
module.exports = router;
