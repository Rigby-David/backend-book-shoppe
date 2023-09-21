const pool = require('../utils/pool.js');

class GolfHole {
  id;
  hole_number;
  par;

  constructor(row) {
    this.id = row.id;
    this.hole_number = row.hole_number;
    this.par = row.par;
  }

  static async getAllGolfHoles() {
    const { rows } = await pool.query('SELECT * FROM golfholes');
    return rows.map((row) => new GolfHole(row));
  }
}

module.exports = GolfHole;
