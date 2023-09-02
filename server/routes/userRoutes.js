const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/authController");

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/getAllCustomers", getAllUsers);

module.exports = router;
