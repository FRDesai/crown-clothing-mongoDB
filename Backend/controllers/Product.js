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

export { getAllProducts };
