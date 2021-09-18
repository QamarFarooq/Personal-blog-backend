const express = require('express');
const { body } = require('express-validator');
const router = express.Router();


const feedController = require('../controllers/feed');

const postController = require('../controllers/post');

const resetPasswordController = require('../controllers/reset-password');

const userController = require('../controllers/user');


// get list of post
// example of url localhost:3000/?page=2
router.get('/', feedController.getPost);

// creating a post 
router.post('/create-post', [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
], postController.createPost);

// editing a post 
// exampe of url localhost:3000/edit-post/614362f38f1dde4020a063bb
router.put('/edit-post/:postId', [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
], postController.editPost);

// deleting a post 
router.delete('/delete-post/:postId', postController.deletePost);

// signing user in 
router.post('/signin', userController.signInUser);

// forgot password 
router.post('/forgot-password', resetPasswordController.resetPassword);

// change password 
router.post('/profile-page/change-password', userController.changePassword);

// change email 
router.post('/profile-page/change-email', userController.changeEmail);




module.exports = router;