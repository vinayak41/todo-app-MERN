const jwt = require('jsonwebtoken')


exports.requireLogin = (req, res, next) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error) res.status(400).json({error})
            req.userId = decoded._id;
        })
    }
    next();
} 