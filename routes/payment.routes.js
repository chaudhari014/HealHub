const express = require("express");
const paymentStatus = express.Router();
const { StatusPayment } = require("../controllers/appointment.controller");
const isAuthentarized = require("../middleware/isAuth");
paymentStatus.post("/payment",StatusPayment);
module.exports = { paymentStatus };
