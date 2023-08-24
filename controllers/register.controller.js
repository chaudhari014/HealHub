const passport = require("passport");
const { RegisterModel } = require("../Models/register.model");

const getAllRegistrations = async (req, res) => {
  try {
    const data = await RegisterModel.find();
    res.status(200).json({ status: "successful", data: data });
  } catch (error) {
    res.status(400).json({ status: "failed", error: error });
  }
};

const addNewRegistration = async (req, res) => {
  try {
    RegisterModel.register(
      { name: req.body.name, username: req.body.username },
      req.body.password,
      async (err, user) => {
        if (err) {
          if (err.name === 'UserExistsError') {
            res.status(409).json({ error: 'Username already exists' });
          } else {
            console.log(err);
            res.status(500).json({ error: 'An error occurred' });
          }
        } else {
          passport.authenticate('local')(req, res, () => {
            res.json({ user: user });
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};


const deleteARegistration = () => {};

const updateARegistration = () => {};

module.exports = {
  getAllRegistrations,
  addNewRegistration,
};