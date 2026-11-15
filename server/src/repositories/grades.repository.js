import pool from "../db.js";

// all grades
async function getAll() {
  const result = await pool.query(/*sql*/ `SELECT * FROM hogwarts.grades`);
  console.log(result);
  return result.rows;
}

// get a single grade by letter
async function getById(letter) {
  const one = await pool.query(/*sql*/ `SELECT * FROM hogwarts.grades WHERE letter = $1`, [letter]);
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export { getAll, getById };
