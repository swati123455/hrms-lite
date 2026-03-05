const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

router.post("/", async (req, res) => {
  const attendance = new Attendance(req.body);
  await attendance.save();
  res.json(attendance);
});

router.get("/:employeeId", async (req, res) => {
  const records = await Attendance.find({
    employeeId: req.params.employeeId
  });

  res.json(records);
});

module.exports = router;