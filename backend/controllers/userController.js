const UserProfile =  require("../models/UserProfile.js");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");


const { generateToken } = require("../utils/generateJwt");

const User = require("../models/userModel");

// Registers a new user '/api/users'
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, barAssociationNumber, legalSpecialization, yearsOfPractice, lawSchoolAttended, 
    professionalCertifications, lawFirm, officeAddress, contactNumber, areasOfPractice, 
    linkedinProfile, lawFirmWebsite, preferredContactHours, consultationAvailability, bio } = req.body;

  if (!name || !email || !password || !barAssociationNumber || !legalSpecialization || !yearsOfPractice 
    || !lawSchoolAttended || !lawFirm || !officeAddress|| !contactNumber || !areasOfPractice
    || !preferredContactHours || !consultationAvailability) {
    res.status(400);
    throw new Error("Please include all data");
  }

  // Checks if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hashes password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Creates user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    barAssociationNumber,
      legalSpecialization, 
      yearsOfPractice, 
      lawSchoolAttended, 
      professionalCertifications, 
      lawFirm, 
      officeAddress, 
      contactNumber, 
      areasOfPractice, 
      linkedinProfile, 
      lawFirmWebsite, 
      preferredContactHours, 
      consultationAvailability, 
      bio,
      
  });
  
   // Save to DB
   await user.save();
   console.log({ user });
 // Create a userProfile from the req data and save it to DB
 const userProfile = new UserProfile({
   name,
   email,
   password: hashedPassword,
   barAssociationNumber,
   legalSpecialization, 
   yearsOfPractice, 
   lawSchoolAttended, 
   professionalCertifications, 
   lawFirm, 
   officeAddress, 
   contactNumber, 
   areasOfPractice, 
   linkedinProfile, 
   lawFirmWebsite, 
   preferredContactHours, 
   consultationAvailability, 
   bio,
 });
 
 await userProfile.save();
 
 const response = {
   ...user.toObject(),
 };

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      barAssociationNumber: user.barAssociationNumber,
      legalSpecialization: user.legalSpecialization, 
      yearsOfPractice: user.yearsOfPractice, 
      lawSchoolAttended: user.lawSchoolAttended, 
      professionalCertifications: user.professionalCertifications, 
      lawFirm: user.lawFirm, 
      officeAddress: user.officeAddress, 
      contactNumber: user.contactNumber, 
      areasOfPractice: user.areasOfPractice, 
      linkedinProfile: user.linkedinProfile, 
      lawFirmWebsite: user.lawFirmWebsite, 
      preferredContactHours: user.preferredContactHours, 
      consultationAvailability: user.consultationAvailability, 
      bio: user.bio,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Login an user '/api/users/login'
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // Checks if user exists and if password is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// Gets current user (private) '/api/users/me'
const getCurrentUser = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    barAssociationNumber: req.user.barAssociationNumber,
      legalSpecialization: req.user.legalSpecialization, 
      yearsOfPractice: req.user.yearsOfPractice, 
      lawSchoolAttended: req.user.lawSchoolAttended, 
      professionalCertifications: req.user.professionalCertifications, 
      lawFirm: req.user.lawFirm, 
      officeAddress: req.user.officeAddress, 
      contactNumber: req.user.contactNumber, 
      areasOfPractice: req.user.areasOfPractice, 
      linkedinProfile: req.user.linkedinProfile, 
      lawFirmWebsite: req.user.lawFirmWebsite, 
      preferredContactHours: req.user.preferredContactHours, 
      consultationAvailability: req.user.consultationAvailability, 
      bio: req.user.bio,
  };
 
  res.status(200).json(user);
});



const getAllLawyers = asyncHandler(async (req, res) => {
  const lawyers = await User.find({}, '-password');
  res.json(lawyers);
});

module.exports = { registerUser, loginUser, getCurrentUser, getAllLawyers };
