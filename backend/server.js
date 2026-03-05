const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

/* ---------------- CORS CONFIG ---------------- */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());

/* ---------------- TEST ROUTES ---------------- */
app.get("/", (req, res) => {
  res.send("HRMS Backend Running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "Server is healthy ✅" });
});

/* ---------------- API ROUTES ---------------- */
app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

/* ---------------- DATABASE CONNECTION ---------------- */
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });