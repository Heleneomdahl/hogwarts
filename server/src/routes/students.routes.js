import express from "express";
import * as studentsController from "../controllers/students.controller.js";

const router = express.Router();

// students - get all students //

router.get("/", studentsController.getAll);

// students - get a single student //

router.get("/:id", studentsController.getById);

// students - Update a single student //

router.put("/:id", studentsController.update);

// students - create a new student //

router.post("/", studentsController.create);

// students - delete a single student //

router.delete("/:id", studentsController.deleteStudent);

export default router;
