import React, { useState } from "react";
import "./SignIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Slices/userSlice";
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSignIn = () => {
    dispatch(login(inputs))
      .then((result) => {
        if (result.type === "user/login/fulfilled") {
          console.log("data", result);
          toast("Login successfull!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500,
            hideProgressBar: true,
            closeButton: false,
          });
          setInputs("");
          setSuccess(true);
          navigate("/shop");
        } else if (result.type === "user/login/rejected") {
          console.log("This the error", result.error.message);
          toast(result.error.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500,
            hideProgressBar: true,
            closeButton: false,
          });
          setInputs("");
        }
      })
      .catch((error) => {
        alert("Error", error.message.data);
      });
  };
  return (
    <div className="sign-in">
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        autoComplete="true"
        value={inputs.email || ""}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={inputs.password || ""}
        onChange={handleChange}
      />
      <button
        className="signin-btn"
        type="submit"
        onClick={() => handleSignIn()}
      >
        Sign In
      </button>
      <ToastContainer
        toastStyle={{
          backgroundColor: success ? "green" : "red",
          color: "white",
          display: "block",
          height: "10px",
          border: "1px solid yellow",
        }}
      />
      <Link to="/signUp">Not a user? Click here to register</Link>
    </div>
  );
};

export default SignIn;
