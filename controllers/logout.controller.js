const logoutUser = (req, res) => {
  try {
    req.logout();
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.json({ error: "Logout error", error : error });
  }
};

module.exports = {
    logoutUser
}
