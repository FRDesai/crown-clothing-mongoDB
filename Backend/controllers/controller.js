import connectDB from "../config/conn.js";

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
  const { email, password, phone } = req.body;
  const newUser = {
    email: email,
    password: password,
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
    res.status(400).json({ message: "All fields are mandatory" });
  }
  const users = await user.findOne({ email });
  if (!users) {
    res.status(401).json({ message: "Email is not registered" });
  }
  if (users && users.password === password) {
    res.status(200).json({ message: "User successfully logged in" });
  } else {
    res.status(401).json({ message: "Email or password is not valid" });
  }
};
export { registerUser, getAllProducts, loginUser };
