import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { MyAppNav } from "./MyAppNav.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyAppNav />
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
