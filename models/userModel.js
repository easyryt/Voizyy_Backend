const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  googleId: {
    type: String
  },
  facebookId: {
    type: String
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  }
}, {timestamps:true});

module.exports = mongoose.model("User", userSchema);


