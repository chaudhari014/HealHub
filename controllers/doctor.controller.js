const { DoctorModel } = require("../Models/doctors.model");

const addDoctor = async (req, res) => {
  const {
    image,
    availability,
    status,
    name,
    email,
    Speciality,
    description,
    rating,
  } = req.body;
  try {
    const addDoc = await DoctorModel({
      image,
      availability,
      status,
      name,
      email,
      Speciality,
      description,
      rating,
    });
    addDoc.save();
    res.status(200).json({ status: true, data: addDoc });
  } catch (error) {
    res.status(400).json({ status: false, error: error });
  }
};

const getAllDoc = async (req, res) => {
  try {
    const data = await DoctorModel.find();
    res.status(200).json({ status: "successful", data: data });
  } catch (error) {
    res.status(400).json({ status: "failed", error: error });
  }
};

module.exports = {
  getAllDoc,addDoctor
};
