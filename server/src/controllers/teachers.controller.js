import * as teachersRepository from "../repositories/teachers.repository.js";

const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await teachersRepository.getAllTeachers();
    console.log(allTeachers);
    res.json(allTeachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error", code: error.code });
  }
};

async function getSingleTeacherById(req, res) {
  try {
    const id = req.params.id;
    const teacher = await teachersRepository.getTeacherById(id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: "Teacher not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

async function updateTeacher(req, res) {
  try {
    const id = req.params.id;
    const { name, house_id } = req.body;
    const teacher = await teachersRepository.updateTeacher(id, name, house_id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: "Teacher not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createTeacher(req, res) {
  try {
    const { name, house_id } = req.body;
    const teacher = await teachersRepository.createTeacher(name, house_id);
    res.status(201).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteTeacher(req, res) {
  try {
    const id = req.params.id;
    const teacher = await teachersRepository.deleteTeacher(id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: "Teacher not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getAllTeachers, getSingleTeacherById, updateTeacher, createTeacher, deleteTeacher };
