import { Box, Button, Image, Stack, Text, VStack } from "@chakra-ui/react"
import img from "./988.jpg"
import axios from 'axios'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Paymet from "./Payment"


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/paymentsuccess" element={<Paymet/>}/>

    </Routes>
    
    
    </BrowserRouter>
  )
     
}

export default App


const Home=()=>{
  const onsubmit=async(amount)=>{
    const {data:{key}}=await axios.get("http://localhost:4000/api/getkey")
   const{data:{order}} =await axios.post("http://localhost:4000/api/checkout",{
     amount
   })
   const options = {
     key, // Enter the Key ID generated from the Dashboard
     amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
     currency: "INR",
     name: "Acme Corp",
     description: "Test Transaction",
     image: "https://example.com/your_logo",
     order_id: order.id,//This is a sample Order ID. Pass the `id` obtained in the response of Step 1
     callback_url: "http://localhost:4000/api/verify",
     prefill: {
         name: "Gaurav Kumar",
         email: "gaurav.kumar@example.com",
         contact: 9000090000
     },
     notes: {
         address: "Razorpay Corporate Office"
     },
     theme: {
         color: "#3399cc"
     }
 };
 const rzp1 = new window.Razorpay(options);
    rzp1.open();
 
 }

 return(
  <>
  <Box>
  <Stack direction={["column","row"]} h={"100vh"} justifyContent={"center"} alignItems={"cnter"}>
  <VStack w={60} objectFit={"contain"}>
       <Image src={img}/>
       <Text>mackbook</Text>
       <Button onClick={()=>onsubmit(5000)}>buy now</Button>
   </VStack>
  <VStack w={60} objectFit={"contain"}>
       <Image src={img}/>
       <Text>mackbook</Text>
       <Button onClick={()=>onsubmit(4000)}>buy now</Button>
   </VStack>
  </Stack>
  </Box>
   </>
 )
}
