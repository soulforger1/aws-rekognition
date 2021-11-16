import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, SignUp } from "./screens";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </Router>
  );
}