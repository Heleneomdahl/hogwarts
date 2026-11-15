import express from "express";
import * as teachersController from "../controllers/teachers.controller.js";

const router = express.Router();

// teachers - get all teachers //

router.get("/", teachersController.getAll);

// teachers - get a single teacher //

router.get("/:id", teachersController.getById);

// teachers - Update a single teacher //

router.put("/:id", teachersController.update);

// teachers - create a new teacher //

router.post("/", teachersController.create);

// teachers - delete a single teacher //

router.delete("/:id", teachersController.deleteTeacher);

export default router;
