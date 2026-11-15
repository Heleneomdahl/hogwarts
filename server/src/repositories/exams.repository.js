import pool from "../db.js";

// all exams
async function getAll() {
  const result = await pool.query(/*sql*/ `SELECT * FROM hogwarts.exams`);
  console.log(result);
  return result.rows;
}

// get a single exam by id
async function getById(id) {
  const one = await pool.query(/*sql*/ `SELECT * FROM hogwarts.exams WHERE id = $1`, [id]);
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// create a new exam
async function create(exam) {
  const create = await pool.query(
    /*sql*/
    `INSERT INTO hogwarts.exams (course_id, student_id, grade)
    VALUES ($1, $2, $3)
    RETURNING id, course_id, student_id, grade`,
    [exam.course_id, exam.student_id, exam.grade],
  );
  return create.rows[0];
}

// update a single exam
async function update(id, newExamData) {
  const update = await pool.query(
    /*sql*/
    `UPDATE hogwarts.exams
    SET course_id = $1, student_id = $2, grade = $3
    WHERE id = $4
    RETURNING id, course_id, student_id, grade`,
    [newExamData.course_id, newExamData.student_id, newExamData.grade, id],
  );
  if (update.rowCount === 0) {
    return null;
  } else {
    return update.rows[0];
  }
}

// delete a single exam
async function deleteExam(id) {
  const remove = await pool.query(
    /*sql*/
    `DELETE FROM hogwarts.exams
    WHERE id = $1
    RETURNING id, course_id, student_id, grade`,
    [id],
  );
  if (remove.rowCount === 0) {
    return null;
  } else {
    return remove.rows[0];
  }
}

export { getAll, getById, create, update, deleteExam };
