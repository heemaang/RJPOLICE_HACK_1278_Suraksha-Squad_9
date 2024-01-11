const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 1,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 1,
    },
    // repassword: {
    //   type: String,
    //   required: true,
    //   min: 12,
    // },
    barAssociationNumber: {
      type: Number,
      required: true,
      min: 1,
    },
    legalSpecialization: {
      type: String,
      required: true,
      min: 1,
    },
    yearsOfPractice: {
      type: Number,
      required: true,
      min: 1,
    },
    lawSchoolAttended: {
      type: String,
      required: true,
      minlength: 1,
    },
    professionalCertifications: {
      type: String,
      //required: true,
      min: 1,
    },
    lawFirm: {
      type: String,
      required: true,
      min: 1,
    },
    officeAddress: {
      type: String,
      required: true,
      min: 1,
    },
    contactNumber: {
      type: Number,
      required: true,
      min: 1,
      unique: true,
    },
    areasOfPractice: {
      type: String,
      required: true,
      min: 1,
      //unique: true,
    },
    linkedinProfile: {
      type: String,
      required: true,
      min: 1,
      //unique: true,
    },
    lawFirmWebsite: {
      type: String,
      required: true,
      min: 1,
      //unique: true,
    },
    preferredContactHours: {
      type: Number,
      required: true,
      min: 1,
      //unique: true,
    },
    consultationAvailability: {
      type: Number,
      required: true,
      min: 1,
      //unique: true,
    },
    bio: {
      type: String,
      //required: true,
      min: 1,
      //unique: true,
    },
    
  });
  

module.exports = new mongoose.model('register', userSchema);
