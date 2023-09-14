import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/userSlice";
import pincodeSlice from "../Slices/pincodeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    pincode: pincodeSlice,
  },
});
