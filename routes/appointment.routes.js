const express = require('express');

const { addAppointment } = require('../controllers/appointment.controller');
const isAuthentarized = require('../middleware/isAuth');

const appointRouter = express.Router();

appointRouter.post("/appointment/:id", isAuthentarized, addAppointment);

module.exports = {
    appointRouter
}