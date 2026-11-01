import pool from "../db.js";

// all courses
async function getAllCourses() {
  const result = await pool.query("SELECT * FROM hogwarts.courses");
  console.log(result);
  return result.rows;
}

// get a single course by id
async function getCourseById(id) {
  const one = await pool.query("SELECT * FROM hogwarts.courses WHERE id = $1", [id]);
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// create a new course
async function createCourse(name, teacher_id) {
  const create = await pool.query(
    `INSERT INTO hogwarts.courses (name, teacher_id)
    VALUES ($1, $2)
    RETURNING id, name, teacher_id`,
    [name, teacher_id],
  );
  return create.rows[0];
}

// update a single course
async function updateCourse(id, name, teacher_id) {
  const update = await pool.query(
    `UPDATE hogwarts.courses
    SET name = $1, teacher_id = $2
    WHERE id = $3
    RETURNING id, name, teacher_id`,
    [name, teacher_id, id],
  );
  if (update.rowCount === 0) {
    return null;
  } else {
    return update.rows[0];
  }
}

// change the teacher of a course
async function setTeacher(id, teacher_id) {
  const update = await pool.query(
    `UPDATE hogwarts.courses
    SET teacher_id = $1
    WHERE id = $2
    RETURNING id, name, teacher_id`,
    [teacher_id, id],
  );
  if (update.rowCount === 0) {
    return null;
  } else {
    return update.rows[0];
  }
}

// add a student to a course
async function addStudent(course_id, student_id) {
  const add = await pool.query(
    `INSERT INTO hogwarts.course_students (course_id, student_id)
    VALUES ($1, $2)
    RETURNING course_id, student_id`,
    [course_id, student_id],
  );
  return add.rows[0];
}

// remove a student from a course
async function removeStudent(course_id, student_id) {
  const remove = await pool.query(
    `DELETE FROM hogwarts.course_students
    WHERE course_id = $1 AND student_id = $2
    RETURNING course_id, student_id`,
    [course_id, student_id],
  );
  if (remove.rowCount === 0) {
    return null;
  } else {
    return remove.rows[0];
  }
}

// delete a single course
async function deleteCourse(id) {
  const remove = await pool.query(
    `DELETE FROM hogwarts.courses
    WHERE id = $1
    RETURNING id, name, teacher_id`,
    [id],
  );
  if (remove.rowCount === 0) {
    return null;
  } else {
    return remove.rows[0];
  }
}

export { getAllCourses, getCourseById, createCourse, updateCourse, setTeacher, addStudent, removeStudent, deleteCourse };
