const Post = require('../models/post');

exports.getPost = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = 2; //this value needs to be the same on the front-end
    let totalItems; 

    //global.title = "cool"
    
    Post.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return Post.find()
                .skip((currentPage - 1) * perPage)
                .limit(perPage);
        })
        .then( posts => {
            console.log(title);
            res.status(200).json({ message: 'Fetched paginated posts successfully', posts: posts, totalItems: totalItems })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err);
        })

    // Post.find()
    // .then(posts => {
    //     res.status(200).json({message: 'Fetched all posts successfully', post: posts});
    // })
    // .catch(err => {
    //     if (!err.statusCode) {
    //         err.statusCode = 500;
    //     }
    //     next(err);
    // })

};

