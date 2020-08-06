const express = require('express');
const router = express.Router();
const User = require('../models/User');

// api base - /api/v1/users

// get all users - GET - /api/v1/users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ msg: 'success', data: users });
  } catch (error) {
    res.status(500).send({ msg: 'Server Error' });
  }
});

// get single user GET - /api/v1/users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) {
      return res.status(400).json({ msg: 'Error getting User' });
    }
    res.status(200).json({ msg: 'success', data: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// update user - PUT - /api/v1/users/
router.put('/', async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(req.body._id, req.body);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not update owner' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// delele user - DELETE - /api/v1/users/:id
router.delete('/:id', async (req, res) => {
  try {
    User.findByIdAndDelete({ _id: req.params.id }).then((result) => {
      console.log(result);
      res.status(200).json({ message: 'User successfully deleted from DB!' });
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
