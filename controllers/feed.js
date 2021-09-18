const Post = require('../models/post');

exports.getPost = (req, res, next) => {
    Post.find()
    .then(data => {
        res.status(200).json({message: 'fetched all posts successfully', post: data});
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })

};

