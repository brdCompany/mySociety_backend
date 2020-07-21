const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone"],
  },
  flat: {
    type: String,
    required: [true, "Please provide a Flat No"],
  },
  block: {
    type: String,
    required: [true, "Please provide a Block No"],
  },
});

module.exports = mongoose.model("User", UserSchema);
