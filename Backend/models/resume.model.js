const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  template: {
    type: String,
    enum: ["Professional", "Modern", "Minimalistic"],
    default: "Professional",
  },
  sections: {
    education: [
      {
        degree: {
          type: String,
          required: true,
        },
        institution: {
          type: String,
          required: true,
        },
        year: {
          type: String,
          required: true,
        },
      },
    ],
    experience: [
      {
        company: {
          type: String,
          required: true,
        },
        role: {
          type: String,
          required: true,
        },
        duration: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
  generated_by_ai: {
    type: Boolean,
    default: false,
  },
  downloaded: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const ResumeModel = mongoose.model("ResumeModel", ResumeSchema);
module.exports = ResumeModel;
