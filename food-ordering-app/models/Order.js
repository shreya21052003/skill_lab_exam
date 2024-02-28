// Order.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  foodId: { type: Schema.Types.ObjectId, ref: 'Food' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: String,
  userAddressId: String,
  paymentMode: String,
});

module.exports = mongoose.model('Order', orderSchema);
