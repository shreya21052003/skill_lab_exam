// routes/paymentRoutes.js

const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Route to initiate payment
router.post('/pay', paymentController.initiatePayment);

module.exports = router;
