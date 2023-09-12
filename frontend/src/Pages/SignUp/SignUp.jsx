import React, { useState } from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../Slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordMatch, setpasswordMatch] = useState(false);
  
  const [inputs, setInputs] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    if (inputs.password !== inputs.confirmPassword) {
      setpasswordMatch(true);
      toast("Password do not match!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 300,
        hideProgressBar: true,
        closeButton: false,
      });
      setInputs({
        ...inputs,
        password: "",
        confirmPassword: "",
      });
    } else {
      dispatch(register(inputs));
      setInputs("");
      toast("You are successfully registered!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 300,
        hideProgressBar: true,
        closeButton: false,
      });
      setpasswordMatch(false);
      navigate("/signin");
    }
  };

  return (
    <div className="sign-up">
      <input
        type="name"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        value={inputs.name || ""}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        autoComplete="true"
        onChange={handleChange}
        value={inputs.email || ""}
      />
      <input
        type="phone"
        name="phone"
        placeholder="Enter your phone"
        onChange={handleChange}
        value={inputs.phone || ""}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
        value={inputs.password || ""}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        onChange={handleChange}
        value={inputs.confirmPassword || ""}
      />
      <button className="signup-btn" onClick={() => handleSubmit()} type="submit">
        Sign up
      </button>

      <Link to="/signIn">Already a user? Click here</Link>
      <ToastContainer
        toastStyle={{
          backgroundColor: passwordMatch ? "red" : "green",
          color: "white",
          display: "inline-block",
          height: "20px",
        }}
      />
    </div>
  );
};

export default SignUp;
