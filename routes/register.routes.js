const express = require('express');
const { getAllRegistrations, addNewRegistration } = require('../controllers/register.controller');
const isAuthentarized = require('../middleware/isAuth');

const registerRouter = express.Router();

registerRouter.get("/registrations", getAllRegistrations);
registerRouter.post("/add/user", addNewRegistration);

module.exports = {
    registerRouter
}