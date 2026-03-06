const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "https://hrms-lite-omega-navy.vercel.app",
      "http://localhost:5173"
    ],
    credentials: true
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HRMS Backend Running 🚀");
});

app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})
.catch(err => {
  console.error("MongoDB connection error:", err);
});