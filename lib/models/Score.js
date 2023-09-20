const pool = require('../utils/pool');

class Score {
  id;
  score;

  constructor(row) {
    this.id = row.id;
    this.score = row.score;
  }

  static async getAllScores() {
    const { rows } = await pool.query('SELECT * FROM scores');
    return rows.map((row) => new Score(row));
  }
}

module.exports = { Score };
