// Base URL - /api/v1/bills/
const express = require('express');
const router = express('Router');

// / - GET - get all bills
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Get all Bills' });
});
// / - POST - create bill
router.post('/', (req, res) => {
  res.status(200).json({ msg: 'Create Bill' });
});
// /:id - GET - get single bill

router.get('/:id', (req, res) => {
  res.status(200).json({ msg: 'Get single Bill' });
});
// /:id - PUT - update bill
router.put('/:id', (req, res) => {
  res.status(200).json({ msg: 'Update single Bill' });
});
// /:id - delete - delete bill
router.delete('/:id', (req, res) => {
  res.status(200).json({ msg: 'Delete single Bill' });
});

module.exports = router;
