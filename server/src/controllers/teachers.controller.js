import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import Dto from "../dtos/teacher.dto.js";

const getAll = async (req, res) => {
  const allTeachers = await teachersRepository.getAll();
  console.log(allTeachers);
  res.status(200).json(allTeachers);
};

async function getById(req, res) {
  const id = req.params.id;
  const teacher = await teachersRepository.getById(id);

  if (teacher) {
    return res.status(200).json(teacher);
  }
  throw new HTTPError(404, "Teacher not found");
}

async function update(req, res) {
  const id = req.params.id;
  const input = req.body;
  const teacher = Dto.parse(input);
  const updatedTeacher = await teachersRepository.update(id, teacher);

  if (updatedTeacher) {
    return res.status(200).json(updatedTeacher);
  }
  throw new HTTPError(404, "Teacher not found");
}

async function create(req, res) {
  const input = req.body;
  const teacher = Dto.parse(input);
  const newTeacher = await teachersRepository.create(teacher);
  res.status(201).json(newTeacher);
}

async function deleteTeacher(req, res) {
  const id = req.params.id;
  const teacher = await teachersRepository.deleteTeacher(id);

  if (teacher) {
    return res.status(200).json(teacher);
  }
  throw new HTTPError(404, "Teacher could not be deleted");
}

export { getAll, getById, update, create, deleteTeacher };
