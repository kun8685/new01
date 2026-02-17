const express = require('express');
const router = express.Router();
const { authUser, registerUser, forgotPassword, resetPassword } = require('../controllers/authController');

router.post('/login', authUser);
router.post('/register', registerUser);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
