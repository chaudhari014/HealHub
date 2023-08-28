const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  image: { type: String, required: true },
  availability: [
    {
      t1: { type: Boolean, required: true },
      t2: { type: Boolean, required: true },
      t3: { type: Boolean, required: true },
      t4: { type: Boolean, required: true },
    },
  ],
  status: { type: Boolean, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  Speciality: { type: String, required: true },
  description: { type: String, required: true },
  price: {type : Number, required : true},
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
