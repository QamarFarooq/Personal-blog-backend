const mongoose = require('mongoose');
const Post = require('../models/post');

exports.createPost = (req, res, next) => {

    const title = req.body.title
    const body = req.body.content

};

exports.editPost = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'I am inside editPost'}]
    });
};

exports.deletePost = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'I am inside deletePost'}]
    });
};