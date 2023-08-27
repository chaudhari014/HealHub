const express = require("express");
const logoutRouter = express.Router();
// const { logoutUser } = require("../controllers/logout.controller");

logoutRouter.get("/logout", (req, res) => {
  try {
    req.logout();
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.json({ error: "Logout error", error: error.message });
  }
});

module.exports = { logoutRouter };
