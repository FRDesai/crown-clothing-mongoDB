import express from "express";
import {
  getAllProducts,
  registerUser,
  loginUser,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/api/categories", getAllProducts);
router.post("/api/registerUser", registerUser);
router.post("/api/loginUser", loginUser);

export default router;
