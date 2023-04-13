const express = require("express");

const {
  getAllHistory,
  createHistory,
} = require("../contorlle/historycontorrel");

const router = express.Router();
router.get("/", getAllHistory);
router.post("/", createHistory);

module.exports = router;
