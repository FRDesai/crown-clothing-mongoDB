import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  confirmPassword: String,
  phone: Number,
  joinDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
