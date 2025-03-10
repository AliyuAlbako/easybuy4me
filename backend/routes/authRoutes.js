const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);

// Only admins can access this route
router.get("/admin-dashboard", authMiddleware, checkRole(["admin"]), (req, res) => {
    res.json({ message: "Welcome to the Admin Dashboard" });
  });

module.exports = router;
