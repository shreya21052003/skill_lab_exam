// controllers/emailController.js

const nodemailer = require('nodemailer');

exports.sendOTP = async (userEmail, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your_email@gmail.com',
                pass: 'your_password'
            }
        });

        const mailOptions = {
            from: 'your_email@gmail.com',
            to: userEmail,
            subject: 'Order Delivery Confirmation OTP',
            text: `Your OTP for confirming order delivery is: ${otp}`
        };

        await transporter.sendMail(mailOptions);
        console.log('OTP sent to user');
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
};
