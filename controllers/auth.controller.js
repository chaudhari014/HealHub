const { redisClient } = require("../Redis/redisClient");

const suggestCredentials = (req, res) => {
  const username = req.body.username;

  redisClient.hGetAll('user:' + username, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json({ email: user.email, password: user.password });
    }
  });
};

// Other authentication functions...

module.exports = {
  suggestCredentials,
};
