const express = require('express');
const router = express.Router();

// Base URL - /api/v1/payments/

// / - GET - get all payments
router.get('/', (req, res) => {
  res.status(200).json({msg: "Get All payments"})
});
// / - POST - create payment
router.post('/', (req, res) => {
  res.status(200).json({msg: "Create payments"})
});
// /:id - GET - get single payment
router.get('/:id', (req, res) => {
  res.status(200).json({msg: "Get single payment"})
});
// /:id - PUT - update payment
router.put('/:id', (req, res) => {
  res.status(200).json({msg: "Update payment"})
});
// /:id - delete - delete payment
router.delete('/:id', (req, res) => {
  res.status(200).json({msg: "Delete payment"})
});

module.exports = router;