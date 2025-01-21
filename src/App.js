import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chapter1 from "./Pages/Chapter1";
import Chapter2 from "./Pages/Chapter2";
import Chapter3 from "./Pages/Chapter3";
import Chapter4 from "./Pages/Chapter4";
import Chapter5 from "./Pages/Chapter5";
import Chapter6 from "./Pages/Chapter6";
import Chapter7 from "./Pages/Chapter7";
import Chapter8 from "./Pages/Chapter8";
import NotFound from "./Pages/NotFound";
import Header from "./Header";
import Footer from "./Footer";

import backgroundImage from "./Asets/background/background.jpg";
import stone1 from "./Asets/background/stone1.svg";
import stone2 from "./Asets/background/stone2.svg";
import stone3 from "./Asets/background/stone3.svg";
import stone4 from "./Asets/background/stone4.svg";
import stone5 from "./Asets/background/stone5.svg";

function App() {
  return (
    <>
      <div className="app-container">
        <img src={stone1} className={"stone stone1"} alt="stoneImg"></img>
        <img src={stone2} className={"stone stone2"} alt="stoneImg"></img>
        <img src={stone3} className={"stone stone3"} alt="stoneImg"></img>
        <img src={stone4} className={"stone stone4"} alt="stoneImg"></img>
        <img src={stone5} className={"stone stone5"} alt="stoneImg"></img>
        {/* <div className="app-croped"> */}
        {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapter1" element={<Chapter1 />} />
            <Route path="/chapter2" element={<Chapter2 />} />
            <Route path="/chapter3" element={<Chapter3 />} />
            <Route path="/chapter4" element={<Chapter4 />} />
            <Route path="/chapter5" element={<Chapter5 />} />
            <Route path="/chapter6" element={<Chapter6 />} />
            <Route path="/chapter7" element={<Chapter7 />} />
            <Route path="/chapter8" element={<Chapter8 />} />
            <Route path="*" element={<NotFound />} />
          </Routes> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
