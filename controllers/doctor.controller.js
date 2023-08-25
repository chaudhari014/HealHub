const { DoctorModel } = require("../Models/doctors.model")

const getAllDoc = async (req, res) => {
    try {
        const data = await DoctorModel.find();
        res.status(200).json({ status: "successful", data: data });
    } catch (error) {
        res.status(400).json({ status: "failed", error: error });
    }
}

module.exports = {
    getAllDoc
}