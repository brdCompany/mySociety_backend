const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  //get token from request header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  //verify token
  if (!token) {
    return res
      .status(401)
      .json({ success: false, msg: 'Authrorization failed' });
  }
  try {
    const decodedToken = await jwt.verify(token, process.env.TOKEN_SECRET_ID);

    if (!decodedToken) {
      return res
        .status(401)
        .json({ success: false, msg: 'Authrorization failed' });
    }
    //if valid - fetch the corresponding user
    req.user = await User.findOne({ email: decodedToken.email });

    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: 'Authrorization failed' });
  }
};

module.exports = protect;
