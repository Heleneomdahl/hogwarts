import pool from "../db.js";

// all teachers
async function getAllTeachers() {
  const result = await pool.query("SELECT * FROM hogwarts.teachers");
  console.log(result);
  return result.rows;
}

// get a single teacher by id
async function getTeacherById(id) {
  const one = await pool.query("SELECT * FROM hogwarts.teachers WHERE id = $1", [id]);
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// update a single teacher
async function updateTeacher(id, name, house_id) {
  const update = await pool.query(
    `UPDATE hogwarts.teachers
    SET name = $1, house_id = $2
    WHERE id = $3
    RETURNING id, name, house_id`,
    [name, house_id, id],
  );
  if (update.rowCount === 0) {
    return null;
  } else {
    return update.rows[0];
  }
}

// create a new teacher
async function createTeacher(name, house_id) {
  const create = await pool.query(
    `INSERT INTO hogwarts.teachers (name, house_id)
    VALUES ($1, $2)
    RETURNING id, name, house_id`,
    [name, house_id],
  );
  return create.rows[0];
}

// delete a single teacher
async function deleteTeacher(id) {
  const remove = await pool.query(
    `DELETE FROM hogwarts.teachers
    WHERE id = $1
    RETURNING id, name, house_id`,
    [id],
  );
  if (remove.rowCount === 0) {
    return null;
  } else {
    return remove.rows[0];
  }
}

export { getAllTeachers, getTeacherById, updateTeacher, createTeacher, deleteTeacher };
