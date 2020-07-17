const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
  billNo: {
    type: String,
    required: [true, 'Please provide Bill Number'],
  },
  billDueDate: {
    type: String,
    required: [true, 'Please provide Bill Date'],
  },
  BillMonth: {
    type: String,
    required: [true, 'Please provide Billing Month'],
  },
  billAmount: {
    type: String,
    required: [true, 'Please provide Bill Amount'],
  },
  lateFine: {
    type: String,
    required: [true, 'Please provide Late Fine'],
  },
  outstandingAmount: {
    type: String,
    required: [true, 'Please provide Outstanding Amount'],
  },
});

module.exports = mongoose.model('Bills', BillSchema);
