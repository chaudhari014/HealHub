const express = require('express');
const { getAllDoc } = require('../controllers/doctor.controller');

const doctorRouter = express.Router();

doctorRouter.get("/doctors", getAllDoc);

module.exports = {
    doctorRouter
}