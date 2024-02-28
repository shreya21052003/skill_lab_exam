// orderController.js
const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const { foodId, userId, userAddressId, paymentMode } = req.body;
  
  try {
    const order = new Order({
      foodId,
      userId,
      userAddressId,
      paymentMode,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
