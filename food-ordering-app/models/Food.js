// Food.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
});

module.exports = mongoose.model('Food', foodSchema);
