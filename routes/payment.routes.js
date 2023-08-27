const express=require("express")
//const stripe=require("stripe")("sk_test_51NiVoJSDWqjglPyj5JOYqp0fgKligKcfsCHYnY8Su9dHgcc706bK7Ez5Lfxca4mXTTnNHrGHgiimN8UMmR3CeyER00qbdhwM6Y")
const paymentStatus=express.Router()
const {StatusPayment,confirmPaymentIntent}=require("../controllers/payment.comptroller")
paymentStatus.post("/payment",StatusPayment)
module.exports={paymentStatus}