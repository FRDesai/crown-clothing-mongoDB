import express from "express";
import {
  getAllProducts,
  registerUser,
  loginUser,
  createOrder,

  paymentVerification,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/api/categories", getAllProducts);
router.post("/api/registerUser", registerUser);
router.post("/api/loginUser", loginUser);
router.post("/api/createOrder", createOrder);
router.post("/api/paymentVerification", paymentVerification);

export default router;
