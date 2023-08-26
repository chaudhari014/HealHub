const express = require("express");
const { logoutUser } = require("../controllers/logout.controller");
const logoutRouter = express.Router();

logoutRouter.get("/logout", logoutUser);

module.exports = { logoutRouter };
