import pool from "../db.js";

// all students
async function getAll() {
  const result = await pool.query(/*sql*/ `SELECT * FROM hogwarts.students`);
  console.log(result);
  return result.rows;
}

// get a single student by id
async function getById(id) {
  const one = await pool.query(
    /*sql*/
    `SELECT * FROM hogwarts.students 
    WHERE id = $1`,
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// update a single student
async function update(id, newStudentData) {
  const update = await pool.query(
    /*sql*/
    `UPDATE hogwarts.students
    SET name = $1, house_id = $2, birthday = $3, school_year = $4
    WHERE id = $5
    RETURNING id, name, house_id, birthday, school_year`,
    [newStudentData.name, newStudentData.house_id, newStudentData.birthday, newStudentData.school_year, id],
  );
  if (update.rowCount === 0) {
    return null;
  } else {
    return update.rows[0];
  }
}

// create a new student
async function create(student) {
  const create = await pool.query(
    /*sql*/
    `INSERT INTO hogwarts.students (name, house_id, birthday, school_year)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, house_id, birthday, school_year`,
    [student.name, student.house_id, student.birthday, student.school_year],
  );
  return create.rows[0];
}

// delete a single student
async function deleteStudent(id) {
  const remove = await pool.query(
    /*sql*/
    `DELETE FROM hogwarts.students
    WHERE id = $1
    RETURNING id, name, house_id, birthday, school_year`,
    [id],
  );
  if (remove.rowCount === 0) {
    return null;
  } else {
    return remove.rows[0];
  }
}

export { getAll, getById, update, create, deleteStudent };
