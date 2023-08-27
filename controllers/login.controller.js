const passport = require("passport");
const { RegisterModel } = require("../Models/register.model");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const foundUser = await RegisterModel.findOne({ username });

    if (foundUser) {
      const user = new RegisterModel({
        username,
        password,
      });
      user.name = foundUser.name;

      req.login(user, (err) => {
        if (err) {
          console.log(err);
        } else {
          passport.authenticate("local")(req, res, () => {
            const userData = {
              message: "Login successful...",
              userID: user._id,
              name: user.name,
              email : user.username,
              role: foundUser.role,
            };
            res.json(userData);
          });
        }
      });
    } else {
      res.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  loginUser,
};
