import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },
  result: {
    physics: { type: Number, min: 0, max: 100 },
    chemistry: { type: Number, min: 0, max: 100 },
    maths: { type: Number, min: 0, max: 100 },
    english: { type: Number, min: 0, max: 100 },
    computer: { type: Number, min: 0, max: 100 },
  },
}, { timestamps: true });

const Students = mongoose.model("Students", studentsSchema);

export default Students;
