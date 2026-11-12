import * as housesRepository from "../repositories/houses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

const getAllHouses = async (req, res) => {
  // try {
  const allHouses = await housesRepository.getAll();
  console.log(allHouses);
  res.json(allHouses);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Database error", code: error.code });
  // }
};

async function getSingleHouseById(req, res) {
  // try {
  const id = req.params.id;
  const house = await housesRepository.getSingle(id);
  if (house) {
    res.status(200).json(house);
  }
  throw new HTTPError(404, "House not found");
  // if (!house) {
  //   res.status(404).json({
  //     message: "huset findes ikke",
  //     error: "Not found",
  //     statusCode: 404,
  //   });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Database error", code: error.code });
  // }
}

export { getAllHouses, getSingleHouseById };
