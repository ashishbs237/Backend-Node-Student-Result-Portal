import Students from "../models/Students.js";
import User from "../models/User.js";

// Add a new user
export const getStudents = async (req, res) => {
  try {
    const students = await Students.find();

    res.status(200).json({ message: "Students retrieved successfully", students });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Add a new user
export const addStudent = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Check if user already exists
    const emailExists = await Students.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Create new user
    const newUser = await Students.create({ name, email, phone });

    res.status(201).json({ message: "Student added successfully", student: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

