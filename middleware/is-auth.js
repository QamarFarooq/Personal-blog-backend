const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, 'secretstringkey');
    }
    catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('User is not Authenticated!');
        error.statusCode = 401;
        throw error;
    }

    // you can basically access the user object payload 
    // with email, userId, iat, and exp
    req.userId = decodedToken.userId;
    next();
}