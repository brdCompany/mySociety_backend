const mongoose = require('mongoose');

const NoticeSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  expiresIn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Notice', NoticeSchema);
