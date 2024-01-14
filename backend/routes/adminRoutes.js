const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/adminController");

// Register a new Admin
router.post("/registerad", registerAdmin);

// Login an Admin
router.post("/loginad", loginAdmin);

module.exports = router;
