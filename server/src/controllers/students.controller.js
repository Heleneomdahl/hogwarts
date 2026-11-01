import * as studentsRepository from "../repositories/students.repository.js";

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await studentsRepository.getAllStudents();
    console.log(allStudents);
    res.json(allStudents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error", code: error.code });
  }
};

async function getSingleStudentById(req, res) {
  try {
    const id = req.params.id;
    const student = await studentsRepository.getStudentById(id);

    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "22P02") {
      return res.status(400).json({ error: "Invalid id" });
    }
    res.status(500).json({ error: "Database error" });
  }
}

async function updateStudent(req, res) {
  try {
    const id = req.params.id;
    const { name, house_id } = req.body;
    const student = await studentsRepository.updateStudent(id, name, house_id);

    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "22P02" || error.code === "23502") {
      return res.status(400).json({ error: "Invalid or missing data" });
    }
    if (error.code === "23503") {
      return res.status(404).json({ error: "House not found" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createStudent(req, res) {
  try {
    const { name, house_id } = req.body;
    const student = await studentsRepository.createStudent(name, house_id);
    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    if (error.code === "22P02" || error.code === "23502") {
      return res.status(400).json({ error: "Invalid or missing data" });
    }
    if (error.code === "23503") {
      return res.status(404).json({ error: "House not found" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteStudent(req, res) {
  try {
    const id = req.params.id;
    const student = await studentsRepository.deleteStudent(id);

    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "22P02") {
      return res.status(400).json({ error: "Invalid id" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getAllStudents, getSingleStudentById, updateStudent, createStudent, deleteStudent };
