import express from "express";
import * as examsController from "../controllers/exams.controller.js";

const router = express.Router();

// exams - get all exams //

router.get("/", examsController.getAll);

// exams - get a single exam //

router.get("/:id", examsController.getById);

// exams - create a new exam //

router.post("/", examsController.create);

// exams - Update a single exam //

router.put("/:id", examsController.update);

// exams - delete a single exam //

router.delete("/:id", examsController.deleteExam);

export default router;
