import { instance } from "../server.js";
import crypto from "crypto"

export const checkout=async(req,res)=>{

  console.log()

const options ={
  amount: Number(req.body.amount *100),
  currency: "INR",
  receipt: "order_rcptid_11"
};
     const order = await instance.orders.create(options);
res.json({
  success:true,
  order
})
}
export const checkoutVerify=async(req,res)=>{
  const {razorpay_order_id , razorpay_payment_id,razorpay_signature}=req.body

  const body= razorpay_order_id + "|" + razorpay_payment_id

  var generatedSignature = crypto 
       .createHmac("SHA256",process.env.SECRET_KRY)
       .update(body.toString())
       .digest("hex");  
     console.log(razorpay_signature)
     console.log(generatedSignature)
 var isAuth = generatedSignature === razorpay_signature

if(isAuth){
res.redirect(`http://localhost:5173/paymentsucess?ref=${razorpay_signature}`)
}
else{

}


}


export const getKey =(req,res)=>{

  res.json({
    success:true,
    key:process.env.API_KEY
  })

}