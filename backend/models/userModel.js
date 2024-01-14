const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 12,
    },
    // repassword: {
    //   type: String,
    //   required: true,
    //   min: 12,
    // },
    barAssociationNumber: {
      type: Number,
      required: true,
      min: 12,
    },
    legalSpecialization: {
      type: String,
      required: true,
      min: 12,
    },
    yearsOfPractice: {
      type: Number,
      required: true,
      min: 1,
    },
    lawSchoolAttended: {
      type: String,
      required: true,
      minlength: 10,
    },
    professionalCertifications: {
      type: String,
      //required: true,
      min: 12,
    },
    lawFirm: {
      type: String,
      required: true,
      min: 12,
    },
    officeAddress: {
      type: String,
      required: true,
      min: 25,
    },
    contactNumber: {
      type: Number,
      required: true,
      min: 11,
      unique: true,
    },
    areasOfPractice: {
      type: String,
      required: true,
      min: 50,
      //unique: true,
    },
    linkedinProfile: {
      type: String,
      required: true,
      min: 50,
      //unique: true,
    },
    lawFirmWebsite: {
      type: String,
      required: true,
      min: 50,
      //unique: true,
    },
    preferredContactHours: {
      type: Number,
      required: true,
      min: 5,
      //unique: true,
    },
    consultationAvailability: {
      type: Number,
      required: true,
      min: 5,
      //unique: true,
    },
    bio: {
      type: String,
      //required: true,
      min: 100,
      //unique: true,
    },
    
  });
  

module.exports = new mongoose.model('register', userSchema);
