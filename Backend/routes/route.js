import express from "express";
import { getAllProducts } from "../controllers/Product.js";
import { registerUser, loginUser } from "../controllers/User.js";
import { createOrder, paymentVerification } from "../controllers/Payment.js";

const router = express.Router();

router.get("/api/categories", getAllProducts);
router.post("/api/registerUser", registerUser);
router.post("/api/loginUser", loginUser);
router.post("/api/createOrder", createOrder);
router.post("/api/paymentVerification", paymentVerification);

export default router;
