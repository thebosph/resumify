import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Selector from "./Selector";
import Builder from "./Builder";

const Screens = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/builder" element={<Selector />} />
      <Route path="/builder/:theme" element={<Builder />} />
    </Routes>
  );
};

export default Screens;
