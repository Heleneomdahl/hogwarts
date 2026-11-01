import express from "express";
import * as studentsController from "../controllers/students.controller.js";

const router = express.Router();

// students - get all students //

router.get("/", studentsController.getAllStudents);

// students - get a single student //

router.get("/:id", studentsController.getSingleStudentById);

// students - Update a single student //

router.put("/:id", studentsController.updateStudent);

// students - create a new student //

router.post("/", studentsController.createStudent);

// students - delete a single student //

router.delete("/:id", studentsController.deleteStudent);

export default router;
