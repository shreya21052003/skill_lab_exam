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

// controllers/orderController.js

let orders = [];

exports.getOrdersByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userOrders = orders.filter(order => order.userId === userId);
        res.json(userOrders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// controllers/orderController.js

const emailController = require('./emailController');

exports.confirmDelivery = async (req, res) => {
    const { orderId, otp } = req.body;
    const storedOTP = req.session.otp;

    if (otp && storedOTP && parseInt(otp) === storedOTP) {
        try {
            // Update order status to "delivered"
            const updatedOrder = orders.find(order => order.orderId === orderId);
            if (updatedOrder) {
                updatedOrder.status = 'delivered';
                res.json({ message: 'Order delivered successfully', order: updatedOrder });
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(400).json({ message: 'Invalid OTP' });
    }
};
