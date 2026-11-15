import express from "express";
import * as coursesController from "../controllers/courses.controller.js";

const router = express.Router();

// courses - get all courses //

router.get("/", coursesController.getAll);

// courses - get a single course //

router.get("/:id", coursesController.getById);

// courses - create a new course //

router.post("/", coursesController.create);

// courses - Update a single course //

router.put("/:id", coursesController.update);

// courses - change teacher for a course //

router.put("/:id/teacher/:teacherId", coursesController.setTeacher);

// courses - add a student to a course //

router.put("/:id/students/:studentId", coursesController.addStudent);

// courses - remove a student from a course //

router.delete("/:id/students/:studentId", coursesController.removeStudent);

// courses - delete a single course //

router.delete("/:id", coursesController.deleteCourse);

export default router;
