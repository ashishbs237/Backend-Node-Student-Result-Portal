import express from "express";
import { getStudents, addStudent, deleteStudent , deleteStudents } from "../controllers/adminController.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", addStudent);
// router.post("/", addStudent);
// router.delete("/", deleteStudent);

router.delete("/", deleteStudents);

export default router;
