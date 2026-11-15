import * as housesRepository from "../repositories/houses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

const getAll = async (req, res) => {
  const allHouses = await housesRepository.getAll();
  console.log(allHouses);
  res.status(200).json(allHouses);
};

async function getById(req, res) {
  const id = req.params.id;
  const house = await housesRepository.getById(id);
  if (house) {
    return res.status(200).json(house);
  }
  throw new HTTPError(404, "House not found");
}

export { getAll, getById };
