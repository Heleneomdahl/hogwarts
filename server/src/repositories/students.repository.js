import pool from "../db.js";

// all students
async function getAllStudents() {
  const result = await pool.query("SELECT * FROM hogwarts.students");
  console.log(result);
  return result.rows;
}

// get a single student by id
async function getStudentById(id) {
  const one = await pool.query("SELECT * FROM hogwarts.students WHERE id = $1", [id]);
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// update a single student
async function updateStudent(id, name, house_id) {
  const update = await pool.query(
    `UPDATE hogwarts.students
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

// create a new student
async function createStudent(name, house_id) {
  const create = await pool.query(
    `INSERT INTO hogwarts.students (name, house_id)
    VALUES ($1, $2)
    RETURNING id, name, house_id`,
    [name, house_id],
  );
  return create.rows[0];
}

// delete a single student
async function deleteStudent(id) {
  const remove = await pool.query(
    `DELETE FROM hogwarts.students
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

export { getAllStudents, getStudentById, updateStudent, createStudent, deleteStudent };
