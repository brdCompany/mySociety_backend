const express = require('express');
const router = express('Router');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

// create user - POST - /api/v1/auth
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    console.log(req.body.password);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const user = await User.create(req.body);
    if (!user) {
      return res.status(400).json({ msg: 'Error creating User' });
    }
    res.status(200).json({ msg: 'Success', data: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// login user - POST - /api/v1/auth
router.post('/login', (req, res) => {
  try {
    let fetchedUser;
    console.log(req.body);
    User.findOne({ email: req.body.email, role: req.body.role })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            message: 'User Authentication failed',
          });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
      })
      .then((result) => {
        if (!result) {
          console.log(result);
          return res.status(401).json({
            message: 'User Authentication failed',
          });
        }
        const token = jsonwebtoken.sign(
          { email: fetchedUser.email },
          process.env.TOKEN_SECRET_ID,
          { expiresIn: '1h' }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
        });
      });
  } catch (error) {
    res.status(500).json({
      msg: 'Server Error',
    });
  }
});

module.exports = router;
