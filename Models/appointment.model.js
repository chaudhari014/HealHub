const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    time : {type : String, required: true},
	status : {type: Boolean, required: true},
	userId: {
        type: String,
        required: true
    },
    docId: {
        type: String,
        required: true
    }
})

const AppointModel = mongoose.model("appointments", appointmentSchema);

module.exports = {
    AppointModel
}