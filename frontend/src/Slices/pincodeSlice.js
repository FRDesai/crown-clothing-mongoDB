import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAddressFromPincode = createAsyncThunk(
  "pincode/getAddressFromPincode",
  async (pincode) => {
    try {
      const options = {
        method: "POST",
        url: "https://pincode.p.rapidapi.com/",
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "78d92b9efbmshef51a867662cf94p14a721jsn4ab62f4eb67f",
          "X-RapidAPI-Host": "pincode.p.rapidapi.com",
        },
        data: {
          searchBy: "pincode",
          value: `${pincode}`,
        },
      };
      const response = await axios.request(options);
      console.log(response.data[0]);
      return response.data[0]; // Assuming you want to return the first item
    } catch (error) {
      throw error; // This will trigger the rejection action
    }
  }
);

const pincodeSlice = createSlice({
  name: "pincode",
  initialState: {
    stateName: null,
    city: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddressFromPincode.fulfilled, (state, action) => {
        state.city = action.payload.taluk;
        state.stateName = action.payload.circle;
      })
      .addCase(getAddressFromPincode.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});

export default pincodeSlice.reducer;
