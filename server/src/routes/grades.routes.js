import express from "express";
import * as gradesController from "../controllers/grades.controller.js";

const router = express.Router();

// grades - get all grades //

router.get("/", gradesController.getAll);

// grades - get a single grade //

router.get("/:letter", gradesController.getById);

export default router;
