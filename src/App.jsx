import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Auth from "./pages/Auth/auth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}
