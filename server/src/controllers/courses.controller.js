import * as coursesRepository from "../repositories/courses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import Dto from "../dtos/course.dto.js";

const getAll = async (req, res) => {
  const allCourses = await coursesRepository.getAll();
  console.log(allCourses);
  res.status(200).json(allCourses);
};

async function getById(req, res) {
  const id = req.params.id;
  const course = await coursesRepository.getById(id);
  if (course) {
    return res.status(200).json(course);
  }
  throw new HTTPError(404, "Course not found");
}

async function create(req, res) {
  const input = req.body;
  const course = Dto.parse(input);
  const newCourse = await coursesRepository.create(course);
  return res.status(201).json(newCourse);
}

async function update(req, res) {
  const id = req.params.id;
  const input = req.body;
  const course = Dto.parse(input);
  const updatedCourse = await coursesRepository.update(id, course);

  if (updatedCourse) {
    return res.status(200).json(updatedCourse);
  }
  throw new HTTPError(404, "Course not found");
}

async function setTeacher(req, res) {
  const id = req.params.id;
  const teacherId = req.params.teacherId;
  const course = await coursesRepository.setTeacher(id, teacherId);

  if (course) {
    return res.status(200).json(course);
  }
  throw new HTTPError(404, "Course not found");
}

async function addStudent(req, res) {
  const id = req.params.id;
  const studentId = req.params.studentId;
  const added = await coursesRepository.addStudent(id, studentId);
  return res.status(201).json(added);
}

async function removeStudent(req, res) {
  const id = req.params.id;
  const studentId = req.params.studentId;
  const removed = await coursesRepository.removeStudent(id, studentId);
  if (removed) {
    return res.status(200).json(removed);
  }
  throw new HTTPError(404, "Student not found on course");
}

async function deleteCourse(req, res) {
  const id = req.params.id;
  const course = await coursesRepository.deleteCourse(id);

  if (course) {
    return res.status(200).json(course);
  }
  throw new HTTPError(404, "Course not found");
}

export { getAll, getById, create, update, setTeacher, addStudent, removeStudent, deleteCourse };
