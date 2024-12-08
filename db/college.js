const mongoose = require("mongoose");
const college = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  courses: [
    {
      courseName: {
        type: String,
        required: true,
      },
      courseDuration: {
        type: Number, // Duration can be in years or months
        required: true,
      },
      courseFee: {
        type: Number,
        required: true,
      },
      eligibility: {
        qualification: {
          type: String, // Qualification required for the course (e.g., "12th Grade", "Bachelors")
          required: true,
        },
        minimumPercentage: {
          type: Number, // Minimum percentage required for eligibility
          required: true,
        },
      },
    },
  ],
  phone: {
    type: String,
    required: true,
  },
  location: [
    {
      locationName: {
        type: String, // The name of the location or city
        required: true,
      },
      hostelFee: {
        type: Number, // Hostel fees specific to that location
        required: true,
      },
    },
  ],
  isAbroad: {
    // This key determines if the institute has branches abroad
    type: Boolean,
    required: true,
    default: false, // By default, assuming it is in India unless specified
  },
  officeLocation: {
    locationName: {
      type: String, // The name of the office location (e.g., "New Delhi Office")
      required: true,
    },
    officeAddress: {
      type: String, // Full address of the office
      required: true,
    },
  },
});

const Colleges = mongoose.model("Colleges", college);
module.exports = Colleges;
