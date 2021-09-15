exports.createPost = (req, res, next) => {
    res.status(200).json({
        postsaass: [{sexypig: 'I am inside createPostaaa'}],
        ANOTHERONE: [{sexypig: 'I am inside BITCHES'}]
    });
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