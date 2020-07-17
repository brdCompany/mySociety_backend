const mongoose = require('mongoose');
const PaymentSchema = mongoose.Schema({
  billNo: {
    type: String,
    required: [true, 'Please provide bill no for payment'],
  },
  billAmount: {
    type: String,
    required: [true, 'Please provide bill amount for payment'],
  },
  paymentMethod: {
    type: String,
    required: [true, 'Please provide payment method'],
  },
  paymentDate: {
    type: String,
    required: [true, 'Please provide payment date'],
  },
  transactionId: {
    type: String,
    required: [true, 'Please provide transaction ID'],
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);
