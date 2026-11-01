import pool from "../db.js";

// all houses
async function getAllHouses() {
  const result = await pool.query("SELECT * FROM hogwarts.houses");
  console.log(result);
  return result.rows;
}

// get a single house by id
async function getHouseById(id) {
  const one = await pool.query("SELECT * FROM hogwarts.houses WHERE id = $1", [id]);
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export { getAllHouses, getHouseById };
