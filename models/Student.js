const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    course: {
      type: String,
      default: "BCA"
    },

    skills: {
      type: [String],
      default: []
    },

    resume: {
      type: String,
      default: ""
    },

    role: {
      type: String,
      default: "student"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Student",
  studentSchema
);