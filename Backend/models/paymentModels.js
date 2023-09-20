import mongoose from "mongoose";
import User from "./userModels";

const paymentSchema = new mongoose.Schema({
  order_id: String,
  currency: String,
  amount: Number,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: User },
  OrderDate: {
    type: Date,
    default: Date.now,
  },
});

const payment = mongoose.model("payment", paymentSchema);

export default payment;
