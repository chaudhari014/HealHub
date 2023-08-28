const logoutUser = (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error(err);
    }
    res.json({ message: "log out" });
  });
};

module.exports = {
    logoutUser
}
