const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth) {
        return res.status(403)
            .json({message: 'Unauthorized, JWT token is required' });
    }
    try{
        const decode = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decode
        next()
    }catch(err) {
        return res.status(403)
        .json({message: 'Unauthorized, JWT token is wrong or expired' });
    }
}

module.exports = ensureAuthenticated;