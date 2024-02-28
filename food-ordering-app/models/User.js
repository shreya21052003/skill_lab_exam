// User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  googleId: String,
  roles: [String],
});

module.exports = mongoose.model('User', userSchema);
