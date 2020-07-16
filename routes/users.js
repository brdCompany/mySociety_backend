const express = require('express');
const router = express.Router();
const User = require('../models/User');

// api base - /api/v1/users

// get all users - GET - /api/v1/users
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Get all users' });
});

// get single user GET - /api/v1/users/:id
router.get('/:id', (req, res) => {
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
