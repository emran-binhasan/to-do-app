const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { 
    type: String, 
    required: function() { return !this.googleId; },  // Only require password if no googleId
  },
  googleId: { type: String, default: null },
  twoFactorSecret: { type: String, default: null },
  isTwoFactorEnabled: { type: Boolean, default: false },
  mailCode: { type: String, default: null },  // Mail code for 2-step login
  mailCodeExpirationTime: { type: Date },  // Expiration time for the mail code
});

module.exports = mongoose.model('User', UserSchema);
