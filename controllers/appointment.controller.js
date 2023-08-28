const { AppointModel } = require("../Models/appointment.model");
const  stripe=require("stripe")("sk_test_51NiVoJSDWqjglPyj5JOYqp0fgKligKcfsCHYnY8Su9dHgcc706bK7Ez5Lfxca4mXTTnNHrGHgiimN8UMmR3CeyER00qbdhwM6Y")

let paymentSuccess = false;
const StatusPayment= async (req,res)=>{
  const { paymentMethodId } = req.body;
  console.log(paymentMethodId)
   try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
       currency: 'usd',
      payment_method: paymentMethodId,
    });
    paymentSuccess = true;
    res.json( {success:true })
   } catch (error) {
    res.send(error)
   }
}
const addAppointment = async (req, res) => {
  const { time, userId, docId } = req.body;
  let status = false;

  try {
    const addAppoint = new AppointModel({
      time,
      userId,
      docId
    });
    let paymentSuccess = true;
    if (paymentSuccess) {
      status = true;
      addAppoint.status = status;
      await addAppoint.save();
      res.status(200).json({ status: true, data: addAppoint });
    } else {
      res
        .status(200)
        .json({
          status: false,
          data: { message: "Appointment booking failed" },
        });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  addAppointment,
  StatusPayment
};
