const { Router } = require('express');
const { GolfHole } = require('../models/GolfHole');

module.exports = Router().get('/', async (req, res) => {
  const golfholes = await GolfHole.getAllGolfHoles();
  res.json(golfholes);
});
