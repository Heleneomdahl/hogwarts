import express from "express";
import * as teachersController from "../controllers/teachers.controller.js";

const router = express.Router();

// teachers - get all teachers //

router.get("/", teachersController.getAllTeachers);

// teachers - get a single teacher //

router.get("/:id", teachersController.getSingleTeacherById);

// teachers - Update a single teacher //

router.put("/:id", teachersController.updateTeacher);

// teachers - create a new teacher //

router.post("/", teachersController.createTeacher);

// teachers - delete a single teacher //

router.delete("/:id", teachersController.deleteTeacher);

export default router;
