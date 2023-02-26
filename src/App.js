import { Routes, Route } from "react-router-dom";
import { Audience } from "./screens/Audience";
import { Dj } from "./screens/Dj";
import { Home } from "./screens/Home";
import "./App.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dj" element={<Dj />} />
      <Route path="/audience" element={<Audience />} />
    </Routes>
  );
};
