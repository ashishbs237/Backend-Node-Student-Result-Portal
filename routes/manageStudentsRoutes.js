import express from "express";
import { getStudents, addStudent } from "../controllers/adminController.js";

const router = express.Router();

router.post("/", addStudent);

router.get("/", getStudents);

export default router;
