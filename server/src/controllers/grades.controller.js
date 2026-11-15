import * as gradesRepository from "../repositories/grades.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

const getAll = async (req, res) => {
  const allGrades = await gradesRepository.getAll();
  console.log(allGrades);
  res.status(200).json(allGrades);
};

async function getById(req, res) {
  const id = req.params.letter;
  const grade = await gradesRepository.getById(id);
  if (grade) {
    return res.status(200).json(grade);
  }
  throw new HTTPError(404, "Grade not found");
}

export { getAll, getById };
