import express from "express";
import connectDB from "../config/conn.js";

const router = express.Router();

router.get("/api/categories", async (req, res) => {
  const db = await connectDB();
  let collection = await db.collection("categories");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

export default router;
