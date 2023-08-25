const express = require('express');

const { addAppointment } = require('../controllers/appointment.controller');

const appointRouter = express.Router();

appointRouter.post("/appointment/:userId", addAppointment)

module.exports = {
    appointRouter
}