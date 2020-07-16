const express = require('express');
const router = express.Router();
const User = require('../models/User');

// api base - /api/v1/users

// get all users - GET - /api/v1/users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ msg: 'Server Error' });
  }
});

// get single user GET - /api/v1/users/:email
router.get('/:email', async (req, res) => {
  try {
    console.log(req.params.email);
    const user = await User.findOne({ email: req.params.email });

    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
  res.status(200).json({ msg: 'Get single users' });
});

// create user - POST - /api/v1/users
router.post('/', (req, res) => {
  User.create(req.body);
  res.status(200).json({ msg: 'Create user' });
});

// update user - PUT - /api/v1/users/:id
router.put('/:id', (req, res) => {
  res.status(200).json({ msg: 'Update user' });
});

// delele user - DELETE - /api/v1/users/:id
router.delete('/:id', (req, res) => {
  res.status(200).json({ msg: 'Delete user' });
});

module.exports = router;
