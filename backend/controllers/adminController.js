//const UserProfile =  require("../models/UserProfile.js");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");


const { generateToken } = require("../utils/generateJwt");

const Admin = require("../models/AdminModal");

// Registers a new Admin '/api/users'
const registerAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please include all data");
  }

  // Checks if Admin already exists
  const AdminExists = await Admin.findOne({ email });

  if (AdminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  // Hashes password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Creates Admin
  const admin = await Admin.create({
    email,
    password: hashedPassword,
      
  });
  
   // Save to DB
   await admin.save();
   console.log({ admin });
 // Create a AdminProfile from the req data and save it to DB
 
});

// Login an user '/api/users/login'
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  // Checks if user exists and if password is correct
  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.status(200).json({
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});


module.exports = { registerAdmin, loginAdmin};