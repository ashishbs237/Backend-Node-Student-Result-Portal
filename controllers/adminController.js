import Students from "../models/Students.js";

// Add a new user
export const getStudents = async (req, res) => {
  try {
    const students = await Students.find();

    res.status(200).json({ message: "Students retrieved successfully", data : students });
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

// Delete a student by ID
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if student exists
    const student = await Students.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Delete student
    await Students.findByIdAndDelete(id);

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
