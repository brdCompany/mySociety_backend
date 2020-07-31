const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

// Base URL - api/v1/notices

// / - GET - get all notices
router.get('/', async (req, res) => {
  try {
    const notices = await Notice.find();
    if (!notices) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not find notices' });
    }
    res.status(200).json({ success: true, data: notices });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
});
// /:id - GET  - get single notice

router.get('/:id', async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not find notice' });
    }
    res.status(200).json({ success: true, data: notice });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
});

// /- POST - create notice
router.post('/', async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    if (!notice) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not create notice' });
    }
    res.status(200).json({ success: true, data: notice });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
});

// /:id - PUT - Update notice
router.put('/', async (req, res) => {
  try {
    let notice = await Notice.findByIdAndUpdate(req.body._id, req.body);
    if (!notice) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not update notice' });
    }
    res.status(200).json({ success: true, data: notice });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
});

// /:id - DELETE - Delete notice
router.delete('/:id', async (req, res) => {
  try {
    const notice = await Notice.delete(req.params.id);
    if (!notice) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not delete notice' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
});

module.exports = router;
