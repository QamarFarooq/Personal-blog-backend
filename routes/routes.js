const express = require('express');

const feedController = require('../controllers/feed');

const postController = require('../controllers/post');

const resetPasswordController = require('../controllers/reset-password');

const userController = require('../controllers/user');



const router = express.Router();

// get list of post
router.get('/', feedController.getPost);

// creating a post 
router.post('/create-post', postController.createPost);

// editing a post 
router.put('/edit-post', postController.editPost);

// deleting a post 
router.delete('/delete-post', postController.deletePost);

// forgot password 
router.post('/forgot-password', resetPasswordController.resetPassword);

// signing user in 
router.post('/signin', userController.signInUser);

// change password 
router.post('/profile-page/change-password', userController.changePassword);

// change email 
router.post('/profile-page/change-email', userController.changeEmail);




module.exports = router;