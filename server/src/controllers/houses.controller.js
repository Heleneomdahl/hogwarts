import * as housesRepository from "../repositories/houses.repository.js";

const getAllHouses = async (req, res) => {
  try {
    const allHouses = await housesRepository.getAllHouses();
    console.log(allHouses);
    res.json(allHouses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error", code: error.code });
  }
};

async function getSingleHouseById(req, res) {
  try {
    const id = req.params.id;
    const house = await housesRepository.getHouseById(id);

    if (house) {
      res.status(200).json(house);
    } else {
      res.status(404).json({ error: "House not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export { getAllHouses, getSingleHouseById };
