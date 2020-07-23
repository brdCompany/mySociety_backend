const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jsonwebtoken.verify(token, process.env.TOKEN_SECRET_ID);
    next();
  } catch (error) {
    res.status(500).json({ msg: 'Error in Server' });
  }
};
