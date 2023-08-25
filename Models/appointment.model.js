const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    time : {type : String, required: true},
	status : {type: Boolean, required: true},
	userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RegisterModel',
        required: true
    },
    docId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DoctorModel',
        required: true
    }
})

const AppointModel = mongoose.model("appointments", appointmentSchema);

module.exports = {
    AppointModel
}