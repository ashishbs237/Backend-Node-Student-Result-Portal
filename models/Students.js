import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },
}, { timestamps: true });

const Students = mongoose.model("Students", studentsSchema);

export default Students;
