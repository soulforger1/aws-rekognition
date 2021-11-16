import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../component";
import "../styles/main.scss";

export const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className={"flex justify-center align-center h-100"}>
      Home Screen
      <Button onClick={() => navigate("/signup")} value={'go sign up'}/>
    </div>
  );
};
