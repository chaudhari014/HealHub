const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  image: { type: String, required: true },
  availability: {
    type: [String],
    required: true,
  },
  status : {type : Boolean, required : true},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  Speciality: { type: String, required: true },
  description: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const DoctorModel = mongoose.model("doctors", doctorSchema);

module.exports = {
  DoctorModel,
};
