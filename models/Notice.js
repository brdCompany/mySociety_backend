const mongoose = require('mongoose');

const NoticeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  expiresOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Notice', NoticeSchema);
