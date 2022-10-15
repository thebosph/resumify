import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Builder from "./Builder";

const Screens = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/builder" element={<Builder />} />
    </Routes>
  );
};

export default Screens;
