const express = require('express');
const User = require('../models/user');
const { body } = require('express-validator');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

const userController = require('../controllers/user');

//user signing up, only one user may sign up
router.put('/user-signup', [
    body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email.'),
    body('password').trim().isLength({min: 5}),
    body('name').trim().not().isEmpty()
], userController.signUpUser);

// signing user in 
router.post('/signin', userController.signInUser);

// change password 
router.put('/change-password', isAuth, userController.changePassword);

// change email 
router.put('/change-email', isAuth, userController.changeEmail);

// change username
router.put('/change-name', isAuth, userController.changeName);

// forgot password 
router.put('/forgot-password', userController.resetPassword);

module.exports = router;
