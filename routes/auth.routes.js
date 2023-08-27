const express = require('express');
const { suggestCredentials } = require('../controllers/auth.controller');
const authRouter = express.Router();

authRouter.post('/suggest-credentials', suggestCredentials);

module.exports = {
    authRouter
};