import React from "react";
import styled from "styled-components";
import "./SignIn.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
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

  const handleSignIn = () => {
    alert("SignIn");
  };
  return (
    <div className="sign-in">
      <input
        type="email"
        placeholder="Enter your Email"
        autoComplete="true"
        onChange={(e) => handleChange(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button type="submit" onClick={() => handleSignIn()}>
        Sign In
      </Button>
      <Link to="/signUp">Not a user? Click here to register</Link>
    </div>
  );
};

export default SignIn;
