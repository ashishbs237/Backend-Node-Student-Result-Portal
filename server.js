import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import manageStudentsRoute from "./routes/manageStudentsRoutes.js";
import cors from "cors";
import connectDB from "./database/db.js";

dotenv.config();
connectDB(); // Connect to MongoDB

const server = express();

const PORT =   process.env.PORT;


server.use(express.json());

// Allow requests from frontend (localhost:3000)
server.use(cors({ origin: "http://localhost:3000", credentials: true }));


// Auth Routes
server.use("/api/auth", authRoutes);

// Admin Routes
server.use("/api/manage-students", manageStudentsRoute );


// Global Error Handling Middleware (Must be last)
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Server is running and listening on defined PORT
server.listen(PORT, () =>
  console.log(`Server is running at http//localhost:${PORT}`)
);

