const express = require("express");

const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");

const{
  upload,
  FrozenFundsEntry,
  getAllFrozenFundsEntries,
} = require("../controllers/FrozenController");

const { protect } = require("../middlewares/authMiddleware");

const { getAllLawyers } = require('../controllers/userController');

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/FrozenFundsEntry", upload, FrozenFundsEntry);
router.get('/lawyers', getAllLawyers);
router.get('/frozen-funds', getAllFrozenFundsEntries);
router.get("/me", protect, getCurrentUser);

module.exports = router;
