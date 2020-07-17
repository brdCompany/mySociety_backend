// Base URL - /api/v1/bills/
const express = require('express');
const router = express('Router');

const Bills = require('../models/Bills');

// / - GET - get all bills
router.get('/', async (req, res) => {
  try {
    const bills = await Bills.find();
    res.status(200).json({ msg: 'Success', data: bills });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
// / - POST - create bill
router.post('/', async (req, res) => {
  try {
    const bills = await Bills.create(req.body);
    if (!bills) {
      res.status(400).json({ msg: 'Error creating bills' });
    }
    res.status(200).json({ msg: 'Success', data: bills });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});
// /:id - GET - get single bill

router.get('/:billNo', async (req, res) => {
  try {
    console.log(req.params.billNo);
    const bills = await Bills.findOne({ billNo: req.params.billNo });
    res.status(200).json({ msg: 'Success', data: bills });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
// /:id - PUT - update bill
router.put('/:id', async (req, res) => {
  try {
    const bills = new Bills({
      _id: req.params.id,
      billNo: req.body.billNo,
      billDueDate: req.body.billDueDate,
      BillMonth: req.body.BillMonth,
      billAmount: req.body.billAmount,
      lateFine: req.body.lateFine,
      outstandingAmount: req.body.outstandingAmount,
    });
    Bills.updateOne({ _id: req.params.id }, bills).then((result) => {
      res.status(200).json({ msg: 'Bills updated Successfully' });
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
// /:id - delete - delete bill
router.delete('/:billNo', async (req, res) => {
  try {
    console.log(req.params.billNo);
    Bills.deleteOne({ billNo: req.params.billNo }).then((result) => {
      res.status(200).json({ msg: 'Bill successfully Deleted from Database' });
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
