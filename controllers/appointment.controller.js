const { AppointModel } = require("../Models/appointment.model");

// const addAppointment = async (req, res) => {
//     const {time, status, userId, docId} = req.body;
//     try {
//         const addAppoint = await AppointModel(time, status, userId, docId);
//         addAppoint.save();
//         res.status(200).json({data: addAppoint });
//     } catch (error) {
//         res.status(400).json({error: error });
//     }
// }

const addAppointment = async (req, res) => {
    const { time, userId, docId } = req.body;
    let status = false;

    try {
        const addAppoint = new AppointModel({
            time: time,
            userId: userId,
            docId: docId
        });

        // Payment confirmed logic { ...here }

        const paymentSuccess = true;

        if (paymentSuccess) {
            status = true;
            addAppoint.status = status;
            await addAppoint.save();
            res.status(200).json({status: true, data: addAppoint });
        } else {
            res.status(200).json({status: false, data: { message: 'Appointment booking failed' } });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

module.exports = {
    addAppointment
}