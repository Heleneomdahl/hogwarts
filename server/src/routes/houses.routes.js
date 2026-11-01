import express from "express";
import * as housesController from "../controllers/houses.controller.js";

const router = express.Router();

// houses - get all houses //

router.get("/", housesController.getAllHouses);

// houses - get a single house //

router.get("/:id", housesController.getSingleHouseById);

export default router;
