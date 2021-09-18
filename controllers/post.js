const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, data entered is incorrect.')
        error.statusCode = 422;
        throw error;
    }

    //extract post from req
    const title = req.body.title
    const content = req.body.content
    const post = new Post({
        title: title,
        content: content,
        creator: { name: 'Qamar'},
    });
    //create post in db
    post.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Post was created successfully!',
            post: result
        })
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        // you need to do next() otherwise error will not reach
        // our middlewear in app.js file
        next(err);
    });
};

exports.editPost = (req, res, next) => {
    const updatedTitle = req.body.title
    const updatedContent = req.body.content
    const postId = req.params.postId

    Post.findById(postId).then(post => {
        //if post is undefined
        if (!post) {
            const error = new Error('Could not find post.')
            error.statusCode = 404;
            // if you throw an error inside a then block
            // than catch block will be reached and it will
            // be passed as an error to the catch block
            throw error;
        }
        post.title = updatedTitle
        post.content = updatedContent
        return post.save();
    })
    .then(result => {res.status(200).send({message: "Post updated successfully!", post: result})})
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            message:'Validation failed, data entered is incorrect.',
            errors: errors.array()
        })
    }

    Post.findByIdAndRemove(postId).then(post => {
        //if post is undefined
        if (!post) {
            const error = new Error('Post could not be found')
            error.statusCode = 404;
            throw error;
        }
    })
    .then(result => {res.status(410).send({message: "Post was deleted successfully!"})})
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
};