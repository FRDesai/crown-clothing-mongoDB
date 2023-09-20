// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {}, // for user object
//     userToken: null, // for storing the JWT
//     error: null,
//     success: false, // for monitoring the registration process.
//   },
//   reducers: {
//     register: (state, action) => {
//       axios
//         .post("http://localhost:8000/api/registerUser", {
//           email: action.payload.email,
//           phone: action.payload.phone,
//           password: action.payload.password,
//         })
//         .then(
//           (response) => {
//             console.log(response);
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//     },
//     login: (state, action) => {
//       axios
//         .post("http://localhost:8000/api/loginUser", {
//           email: action.payload.email,
//           password: action.payload.password,
//         })
//         .then((response) => {
//           state.userInfo = response;
//         })
//         .catch((error) => {
//           //console.log(error.response.data.message); // Access the error message sent by the backend
//           state.error = error.response.data.message;
//         });
//     },
//   },
// });
// export const { register, login } = userSlice.actions;
// export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:8000/api/loginUser", {
        email,
        password,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    // userInfo: {},
    // userToken: null,
    // error: null,
    // success: false,
  },
  reducers: {
    register: (state, action) => {
      axios
        .post("http://localhost:8000/api/registerUser", {
          email: action.payload.email,
          phone: action.payload.phone,
          password: action.payload.password,
          name: action.payload.name,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
});

export const { register } = userSlice.actions;
export default userSlice.reducer;
