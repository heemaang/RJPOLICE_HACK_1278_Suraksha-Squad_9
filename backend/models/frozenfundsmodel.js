const mongoose = require("mongoose");

const frozenFundsSchema = mongoose.Schema({

    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    aadhaarCardNumber: {
      type: String,
      required: true,
    },
    panCardNumber: {
      type: String,
      required: true,
    },
  majorIssueDomains: {
    type: String,
    required: true,
  },
  AccountNumber: {
    type: Number,
    required: true,
  },
  AccountHolder: {
    type: String,
    required: true,
  },
  IFSCcode: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    required: true,
  },
  FraudAmount:{
    type: Number,
    required: true,
  },

  evidence: {
    type: String, // Use Buffer type for storing binary data (e.g., PDF)
    //required: true,
  },
    City: {
      type: String,
      required: true,
    },
    Pincode: {
      type: String,
      required: true,
    },
    Locality: {
      type: String,
      required: true,
    },
    LandMark:{
        type: String,
        required: true,
    },
    FullAddress:{
        type: String,
        required: true,
    }
  },
  // You can add more fields based on your specific requirements
);

module.exports = mongoose.model("FrozenFunds", frozenFundsSchema);
