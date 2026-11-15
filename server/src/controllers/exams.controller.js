import * as examsRepository from "../repositories/exams.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import Dto from "../dtos/exam.dto.js";

const getAll = async (req, res) => {
  const allExams = await examsRepository.getAll();
  console.log(allExams);
  res.status(200).json(allExams);
};

async function getById(req, res) {
  const id = req.params.id;
  const exam = await examsRepository.getById(id);
  if (exam) {
    return res.status(200).json(exam);
  }
  throw new HTTPError(404, "Exam not found");
}

async function create(req, res) {
  const input = req.body;
  const exam = Dto.parse(input);
  const newExam = await examsRepository.create(exam);
  return res.status(201).json(newExam);
}

async function update(req, res) {
  const id = req.params.id;
  const input = req.body;
  const exam = Dto.parse(input);
  const updatedExam = await examsRepository.update(id, exam);

  if (updatedExam) {
    return res.status(200).json(updatedExam);
  }
  throw new HTTPError(404, "Exam not found");
}

async function deleteExam(req, res) {
  const id = req.params.id;
  const exam = await examsRepository.deleteExam(id);

  if (exam) {
    return res.status(200).json(exam);
  }
  throw new HTTPError(404, "Exam not found");
}

export { getAll, getById, create, update, deleteExam };
