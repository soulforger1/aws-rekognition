import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.scss";

export const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className={"flex justify-center align-center h-100"}>
      Sign Up
    </div>
  );
};
