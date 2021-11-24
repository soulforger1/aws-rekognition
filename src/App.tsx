import { Routes, Route } from "react-router-dom";
import { HomeScreen, SignIn, SignUp } from "./screens";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
