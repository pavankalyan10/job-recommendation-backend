const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  name: String,
  skills: [String],
  experience_level: String,
  preferences: {
    desired_roles: [String],
    locations: [String],
    job_type: String,
  },
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);
