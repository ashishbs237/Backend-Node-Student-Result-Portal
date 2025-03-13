import express from "express";
import { getStudents, addStudent, deleteStudent } from "../controllers/adminController.js";

const router = express.Router();

router.post("/", addStudent);

router.get("/", getStudents);

router.delete("/:id", deleteStudent);

export default router;
