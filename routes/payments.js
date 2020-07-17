const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// Base URL - /api/v1/payments/

// / - GET - get all payments
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find();

    if (!payments) {
      return res.status(400).json({ success: 'false', data: {} });
    }
    res.status(200).json({ success: 'true', data: payments });
  } catch (error) {
    res.status(500).json({ success: 'false', msg: 'Server Error' });
  }
});
// / - POST - create payment
router.post('/', async (req, res) => {
  try {
    const payment = await Payment.create(req.body);

    if (!payment) {
      return res.status(400).json({ success: 'false', data: {} });
    }
    res.status(200).json({ success: 'true', data: payment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: 'false', msg: 'Server Error' });
  }
});
// /:id - GET - get single payment
router.get('/:id', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(400).json({ success: 'false', data: {} });
    }
    res.status(200).json({ success: 'true', data: payment });
  } catch (error) {
    res.status(500).json({ success: 'false', msg: 'Server Error' });
  }
});
// /:id - PUT - update payment
router.put('/:id', async (req, res) => {
  try {
    console.log(req.body);
    const payment = await Payment.findOneAndUpdate(req.params.id, req.body);

    if (!payment) {
      return res.status(400).json({ success: 'false', data: {} });
    }
    res.status(200).json({ success: 'true', data: payment });
  } catch (error) {
    res.status(500).json({ success: 'false', msg: 'Server Error' });
  }
});
// /:id - delete - delete payment
router.delete('/:id', async (req, res) => {
  try {
    await Payment.delete(req.params.id);
    res.status(200).json({ success: 'true', data: {} });
  } catch (error) {
    res.status(500).json({ success: 'false', msg: 'Server Error' });
  }
});

module.exports = router;
