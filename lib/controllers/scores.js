const { Router } = require('express');
const { Score } = require('../models/Score');

module.exports = Router().get('/', async (req, res) => {
  const scores = await Score.getAllScores();
  res.json(scores);
});
