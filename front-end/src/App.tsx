import { Routes, Route } from "react-router-dom";
import { HomeScreen, SignUp } from "./screens";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
