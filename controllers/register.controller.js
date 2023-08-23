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
  const { username, email, password, role } = req.body;
  try {
    const existingUser = await RegisterModel.findOne({email});
    if(existingUser) {
        res.status(200).json({message : "User Already Exists...!"})
    }
    const newRegister = RegisterModel({
      username,
      email,
      password,
      role,
    });
    await newRegister.save();
    res.status(200).json({ status: "successfully added", data: newRegister });
  } catch (error) {
    res.status(400).json({ status: "failed", error: error });
  }
};

const deleteARegistration = () => {};

const updateARegistration = () => {};

module.exports = {
  getAllRegistrations,
  addNewRegistration,
};
