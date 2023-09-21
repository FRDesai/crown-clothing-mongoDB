import Razorpay from "razorpay";
import connectDB from "../config/conn.js";
import CryptoJs from "crypto-js";

const createOrder = async (req, res) => {
  console.log("creating order");
  console.log("amount type", typeof req.body.amount);
  var instance = new Razorpay({
    key_id: "rzp_test_0nnCRojDM6Id9H",
    key_secret: "svqx70SvCScleXLsWY1AoYYj",
  });
  var options = {
    amount: Number(req.body.amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  try {
    const response = await instance.orders.create(options);
    const db = await connectDB();
    let payment = await db.collection("Payment");
    const newOrder = {
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
      user_id: "65002d47a2e87cdb5448bb66",
    };
    let result = await payment.insertOne(newOrder);
    console.log("result", result);
    res.send(response).status(200);
    console.log("response", response);
  } catch (err) {
    res.status(400).send("Not able to create order. Please try again!");
  }
};

const paymentVerification = async (req, res) => {
  try {
    const response = req.body;
    const { razorpay_payment_id, razorpay_signature, razorpay_order_id } =
      req.body;
    const generated_signature = CryptoJs.HmacSHA256(
      razorpay_order_id + "|" + razorpay_payment_id,
      "svqx70SvCScleXLsWY1AoYYj"
    );

    if (generated_signature == razorpay_signature) {
      res.send("Payment is Successful").status(200);
    }
  } catch (err) {
    res.status(400).send("Error in the payment verification");
  }
};
export { createOrder, paymentVerification };
