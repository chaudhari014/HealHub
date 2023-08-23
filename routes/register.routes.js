const express = require('express');
const { getAllRegistrations, addNewRegistration } = require('../controllers/register.controller');

const registerRouter = express.Router();

registerRouter.get("/registrations", getAllRegistrations);
registerRouter.post("/add/user", addNewRegistration);

module.exports = {
    registerRouter
}