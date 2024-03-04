import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routes/auth.route.js";
dotenv.config({
  path: "../.env",
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", auth);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
