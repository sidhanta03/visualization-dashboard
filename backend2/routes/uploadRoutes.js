// routes/upload.js
const express = require('express');
const router = express.Router();
const Insight = require('../models/insight');

router.post('/upload', async (req, res) => {
  try {
    await Insight.insertMany(req.body);
    res.status(200).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error inserting data' });
  }
});

router.get('/insights', async (req, res) => {
  try {
    const data = await Insight.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch insights' });
  }
});

module.exports = router;
