import connectDB from "../config/conn.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
export { registerUser, getAllProducts, loginUser };
