const express = require("express");
const {
  registerUser,
  authUser,
  allUser
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, allUser);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
