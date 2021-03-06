const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide a phone'],
  },
  flatNo: {
    type: String,
    required: [true, 'Please provide a Flat No'],
  },
  block: {
    type: String,
    required: [true, 'Please provide a Block No'],
  },
  role: {
    type: String,
    enum: ['admin', 'resident'],
    default: 'resident',
    required: [true, 'Please enter User Role as admin or resident'],
  },
});

module.exports = mongoose.model('User', UserSchema);
