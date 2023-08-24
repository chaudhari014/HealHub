const express = require('express');
const passport = require('passport');
const { loginUser } = require('../controllers/login.controller');

const loginRouter = express.Router();

loginRouter.post("/login",loginUser);

module.exports = {
    loginRouter
}