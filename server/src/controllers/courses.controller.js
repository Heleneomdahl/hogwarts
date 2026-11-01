import * as coursesRepository from "../repositories/courses.repository.js";

const getAllCourses = async (req, res) => {
  try {
    const allCourses = await coursesRepository.getAllCourses();
    console.log(allCourses);
    res.json(allCourses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error", code: error.code });
  }
};

async function getSingleCourseById(req, res) {
  try {
    const id = req.params.id;
    const course = await coursesRepository.getCourseById(id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "22P02") {
      return res.status(400).json({ error: "Invalid id" });
    }
    res.status(500).json({ error: "Database error" });
  }
}

async function createCourse(req, res) {
  try {
    const { name, teacher_id } = req.body;
    const course = await coursesRepository.createCourse(name, teacher_id);
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    if (error.code === "22P02" || error.code === "23502") {
      return res.status(400).json({ error: "Invalid or missing data" });
    }
    if (error.code === "23503") {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateCourse(req, res) {
  try {
    const id = req.params.id;
    const { name, teacher_id } = req.body;
    const course = await coursesRepository.updateCourse(id, name, teacher_id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "22P02" || error.code === "23502") {
      return res.status(400).json({ error: "Invalid or missing data" });
    }
    if (error.code === "23503") {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function setTeacher(req, res) {
  try {
    const id = req.params.id;
    const teacherId = req.params.teacherId;
    const course = await coursesRepository.setTeacher(id, teacherId);

    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "22P02") {
      return res.status(400).json({ error: "Invalid id" });
    }
    if (error.code === "23503") {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addStudent(req, res) {
  try {
    const id = req.params.id;
    const studentId = req.params.studentId;
    const added = await coursesRepository.addStudent(id, studentId);
    res.status(201).json(added);
  } catch (error) {
    console.error(error);
    if (error.code === "22P02") {
      return res.status(400).json({ error: "Invalid id" });
    }
    if (error.code === "23503") {
      return res.status(404).json({ error: "Course or student not found" });
    }
    if (error.code === "23505") {
      return res.status(409).json({ error: "Student is already on course" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function removeStudent(req, res) {
  try {
    const id = req.params.id;
    const studentId = req.params.studentId;
    const removed = await coursesRepository.removeStudent(id, studentId);

    if (removed) {
      res.status(200).json(removed);
    } else {
      res.status(404).json({ error: "Student not found on course" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "22P02") {
      return res.status(400).json({ error: "Invalid id" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteCourse(req, res) {
  try {
    const id = req.params.id;
    const course = await coursesRepository.deleteCourse(id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "22P02") {
      return res.status(400).json({ error: "Invalid id" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getAllCourses, getSingleCourseById, createCourse, updateCourse, setTeacher, addStudent, removeStudent, deleteCourse };
