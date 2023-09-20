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

  static async getGolfHolesById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM golfholes
      WHERE golfholes.id = $1 
      GROUP BY golfholes.id`,
      [id]
    );
    return new GolfHole(rows[0]);
  }

  async getScores() {
    const { rows } = await pool.query(
      `SELECT
        gh.id AS hole_id,
        gh.hole_number,
        gh.par,
        s.score
      FROM
        golfholes AS gh
      JOIN
        scorecard AS sc ON gh.id = sc.hole_id
      JOIN
        scores AS s ON sc.score_id = s.id
      WHERE
        gh.hole_number = $1`,
      [this.id]
    );
    this.scores = rows;
    return this;
  }
}

module.exports = { GolfHole };
