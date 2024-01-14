const FrozenFunds = require('../models/frozenfundsmodel'); // Adjust the path as needed
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const { generateToken } = require("../utils/generateJwt");

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('pdfFile');

// Frozen funds entry
// Create a new frozen funds entry
const FrozenFundsEntry = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      name,
      email,
      aadhaarCardNumber,
      panCardNumber,
      majorIssueDomains,
      AccountNumber,
      AccountHolder,
      IFSCcode,
      Mobile,
      FraudAmount,
      evidence,
      City,
      Pincode,
      Locality,
      LandMark,
      FullAddress,
    } = req.body;

    if (!name || !email || !aadhaarCardNumber
      || !panCardNumber
      || !majorIssueDomains
      || !AccountNumber
      || !AccountHolder
      || !IFSCcode
      || !Mobile
      || !FraudAmount
      //|| !evidence
      || !City
      || !Pincode
      || !Locality
      || !LandMark
      || !FullAddress) {
      res.status(400);
      throw new Error("Please include all data");
    }

    // Check if a PDF file is present in the request
     // Check if a PDF file is present in the request
     if (req.file && req.file.mimetype !== 'application/pdf') {
      console.log('Invalid File:', req.file);
      res.status(400);
      throw new Error('Please provide a valid PDF file as evidence');
    }
    //console.log('File Mimetype:', req.file.mimetype);
    // Create a new instance of the FrozenFunds model
    const newFrozenFundsEntry = new FrozenFunds({
      name,
      email,
      aadhaarCardNumber,
      panCardNumber,
      majorIssueDomains,
      AccountNumber,
      AccountHolder,
      IFSCcode,
      Mobile,
      FraudAmount,
      evidence: req.file ? req.file.buffer : null,
      City,
      Pincode,
      Locality,
      LandMark,
      FullAddress,
    });

    // Save the entry to the database
    const savedEntry = await newFrozenFundsEntry.save();
    console.log({ savedEntry });

    if (savedEntry) {
      res.status(201).json({
        _id: savedEntry._id,
        name: savedEntry.name,
        email: savedEntry.email,
        aadhaarCardNumber: savedEntry.aadhaarCardNumber,
        panCardNumber: savedEntry.panCardNumber, 
        majorIssueDomains: savedEntry.majorIssueDomains, 
        AccountNumber: savedEntry.AccountNumber, 
        AccountHolder: savedEntry.AccountHolder,
        IFSCcode: savedEntry.IFSCcode,
        Mobile: savedEntry.Mobile,
        FraudAmount: savedEntry.FraudAmount,
        evidence: savedEntry.evidence ? savedEntry.evidence.toString('base64') : null, 
        City: savedEntry.City,
        Pincode: savedEntry.Pincode,
        Locality: savedEntry.Locality,
        LandMark: savedEntry.LandMark,
        FullAddress: savedEntry.FullAddress,
        token: generateToken(savedEntry._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid Entry");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get user entry
const getCurrentSavedEntry = asyncHandler(async (req, res) => {
  const savedEntry = {
    _id: req.savedEntry._id,
    name: req.savedEntry.name,
    email: req.savedEntry.email,
    aadhaarCardNumber: req.savedEntry.aadhaarCardNumber,
    panCardNumber: req.savedEntry.panCardNumber, 
    majorIssueDomains: req.savedEntry.majorIssueDomains, 
    AccountNumber: req.savedEntry.AccountNumber, 
    AccountHolder: req.savedEntry.AccountHolder,
    IFSCcode: req.savedEntry.IFSCcode,
    Mobile: req.savedEntry.Mobile,
    FraudAmount: req.savedEntry.FraudAmount,
    evidence: req.savedEntry.evidence ? savedEntry.evidence.toString('base64') : null, 
    City: req.savedEntry.City,
    Pincode: req.savedEntry.Pincode,
    Locality: req.savedEntry.Locality,
    LandMark: req.savedEntry.LandMark,
    FullAddress: req.savedEntry.FullAddress,
  };

  res.status(200).json(savedEntry, getCurrentSavedEntry );
});


const getAllFrozenFundsEntries = asyncHandler(async (req, res) => {
  const entries = await FrozenFunds.find({});
  res.json(entries);
});

module.exports = { upload, FrozenFundsEntry, getAllFrozenFundsEntries };
