const express = require("express");
const isAuthentarized = require("../middleware/isAuth");
const { getAllDoc, addDoctor } = require("../controllers/doctor.controller");

const doctorRouter = express.Router();

doctorRouter.get("/doctors", getAllDoc);
doctorRouter.post("/doctors", addDoctor);
module.exports = {
  doctorRouter,
};
