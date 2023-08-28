const  stripe=require("stripe")("sk_test_51NiVoJSDWqjglPyj5JOYqp0fgKligKcfsCHYnY8Su9dHgcc706bK7Ez5Lfxca4mXTTnNHrGHgiimN8UMmR3CeyER00qbdhwM6Y")
 StatusPayment= async (req,res)=>{
  const { paymentMethodId } = req.body;
  console.log(paymentMethodId)
   try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
       currency: 'usd',
      payment_method: paymentMethodId,
    });
    // console.log(paymentIntent)
    res.json( {success:true })
   } catch (error) {
    res.send(error)
   }
}
module.exports={StatusPayment}