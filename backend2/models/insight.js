// models/Insight.js

const mongoose = require('mongoose');

const insightSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
}, { collection: 'insights',
    strict: false });

module.exports = mongoose.model('Insight', insightSchema);
