import * as studentsRepository from "../repositories/students.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import Dto from "../dtos/student.dto.js";

const getAll = async (req, res) => {
  const allStudents = await studentsRepository.getAll();
  console.log(allStudents);
  res.status(200).json(allStudents);
};

async function getById(req, res) {
  const id = req.params.id;
  const student = await studentsRepository.getById(id);

  if (student) {
    return res.status(200).json(student);
  }
  throw new HTTPError(404, "Student not found");
}

async function update(req, res) {
  const id = req.params.id;
  const input = req.body;
  const student = Dto.parse(input);
  const updatedStudent = await studentsRepository.update(id, student);

  if (updatedStudent) {
    return res.status(200).json(updatedStudent);
  }
  throw new HTTPError(404, "Student not found");
}

async function create(req, res) {
  const input = req.body;
  const student = Dto.parse(input);
  const newStudent = await studentsRepository.create(student);
  return res.status(201).json(newStudent);
}

async function deleteStudent(req, res) {
  const id = req.params.id;
  const student = await studentsRepository.deleteStudent(id);

  if (student) {
    return res.status(200).json(student);
  }
  throw new HTTPError(404, "Student not found");
}

export { getAll, getById, update, create, deleteStudent };
