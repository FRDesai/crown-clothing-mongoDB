import React from "react";
import styled from "styled-components";
import "./SignUp.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  const Button = styled.button`
    background: black;
    color: white;
    width: 100%;
    justify-content: center;
    align-items: center;
  `;

  const handleChange = (value) => {
    console.log(value);
  };

  const handleSubmit = () => {
    console.log("This is sign up");
  };

  return (
    <div className="sign-up">
      <input
        type="email"
        placeholder="Enter your Email"
        autoComplete="true"
        onChange={(e) => handleChange(e.target.value)}
      />
      <input
        type="phone"
        placeholder="Enter your phone"
        onChange={(e) => handleChange(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => handleChange(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm your password"
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button onClick={() => handleSubmit()} type="submit">
        Sign up
      </Button>

      <Link to="/signIn">Already a user? Click here</Link>
    </div>
  );
};

export default SignUp;
