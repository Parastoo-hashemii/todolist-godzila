const express = require("express");
const {
  getAllMember,
  CreateMember,
  updateMember,
  deleteMember,
} = require("../contorlle/membercontorel");

const router = express.Router();
router.get("/", getAllMember);
router.post("/", CreateMember);
router.patch("/:id", updateMember);
router.delete("/:id", deleteMember);
module.exports = router;
