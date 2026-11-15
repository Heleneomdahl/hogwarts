import pool from "../db.js";

// all teachers
async function getAll() {
  const result = await pool.query(
    /*sql*/
    `SELECT teachers.*, houses.name as house_name
    FROM hogwarts.teachers
    full JOIN hogwarts.houses
    ON teachers.house_id = houses.id;`,
  );
  console.log(result);
  return result.rows;
}

// get a single teacher by id
async function getById(id) {
  const one = await pool.query(
    /*sql*/ `
    SELECT teachers.*, houses.name as house_name
    FROM hogwarts.teachers
    full JOIN hogwarts.houses
    ON teachers.house_id = houses.id
    WHERE teachers.id = $1;`,
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// create a new teacher
async function create(teacher) {
  const create = await pool.query(
    /*sql*/
    `INSERT INTO hogwarts.teachers (name, house_id, employment_start, currently_active, deceased)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, name, house_id, employment_start, currently_active, deceased`,
    [teacher.name, teacher.house_id, teacher.employment_start, teacher.currently_active, teacher.deceased],
  );
  return create.rows[0];
}

// update a single teacher
async function update(id, newTeacherData) {
  const update = await pool.query(
    /*sql*/
    `UPDATE hogwarts.teachers
    SET name = $1, house_id = $2, employment_start = $3, currently_active = $4, deceased = $5
    WHERE id = $6
    RETURNING id, name, house_id, employment_start, currently_active, deceased`,
    [newTeacherData.name, newTeacherData.house_id, newTeacherData.employment_start, newTeacherData.currently_active, newTeacherData.deceased, id],
  );
  if (update.rowCount === 0) return null;

  const updatedId = update.rows[0].id;
  return getById(updatedId);
}

// delete a single teacher
async function deleteTeacher(id) {
  /*sql*/
  const remove = await pool.query(
    `DELETE FROM hogwarts.teachers
    WHERE id = $1
    RETURNING id, name, house_id, employment_start, currently_active, deceased
`,
    [id],
  );
  if (remove.rowCount === 0) {
    return null;
  } else {
    return remove.rows[0];
  }
}

export { getAll, getById, update, create, deleteTeacher };
