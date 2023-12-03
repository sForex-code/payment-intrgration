import exprees from "express";
import { checkout, checkoutVerify, getKey } from "../controllers/paymetControlle.js";


const router =exprees.Router()

router.route("/checkout").post(checkout)
router.post("/verify",checkoutVerify)
router.get("/getkey",getKey)

export default router