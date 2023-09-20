import connectDB from "../config/conn.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";

const getAllProducts = async (req, res) => {
  try {
    const db = await connectDB();
    let collection = await db.collection("categories");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Server error" });
  }
};

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
  try{
    const response = req.body;
    console.log("Response in the payment verification", response);
    res.send("hello").status(200);
  } 
  catch (err) {
    res.status(400).send("Error in the payment verification")
  }
  
};

const registerUser = async (req, res) => {
  const db = await connectDB();
  let user = await db.collection("user");
  const { email, password, phone, name } = req.body;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const newUser = {
    email: email,
    name: name,
    password: hashedPassword,
    phone: phone,
  };
  let result = user.insertOne(newUser);
  res.send(result).status(200);
};

const loginUser = async (req, res) => {
  const db = await connectDB();
  let user = await db.collection("user");
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }
  const users = await user.findOne({ email });
  if (!users) {
    return res.status(401).json({ message: "Email is not registered" });
  }
  if (users && (await bcrypt.compare(password, users.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: users.username,
          email: users.email,
          id: users.id,
        }, //this payload will be embedded in the token
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "100m" }
    );
    res.status(200).json({ accessToken, message: "Login Successfull!" });
  } else {
    res.status(401).json({ message: "Email or password is not valid" });
    // throw new Error("Email or password is not valid");
  }
};
export {
  registerUser,
  getAllProducts,
  loginUser,
  createOrder,
  paymentVerification,
};
