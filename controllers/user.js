exports.signInUser = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'I am inside signInUser'}]
    });
};

exports.changePassword = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'I am inside changePassword'}]
    });
};

exports.changeEmail = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'I am inside changeEmail'}]
    });
};