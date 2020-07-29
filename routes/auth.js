const express = require('express');
const router = express('Router');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const { json } = require('express');

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
router.post('/login', async (req, res) => {
  try {
    const fetchedUser = await User.findOne({
      email: req.body.email,
      role: req.body.role,
    });
    if (!fetchedUser) {
      return res.status(401).json({
        success: false,
        message: 'User not found. Authentification failed',
      });
    }
    //If found then match password
    isPasswordMatched = await bcrypt.compare(
      req.body.password,
      fetchedUser.password
    );

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: 'Passwords donot match. Authentification failed',
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
  } catch (error) {
    console.log('line 60');
    res.status(500).json({
      msg: 'Server Error',
    });
  }
});

module.exports = router;
