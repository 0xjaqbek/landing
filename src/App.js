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

import backgroundImage1 from "./Asets/background1.svg";
import backgroundImage2 from "./Asets/background2.png";

function App() {
  return (
    <>
      <div className="app-container">
        <img src={backgroundImage1} className="background"></img>
        <img src={backgroundImage2} className="background background2"></img>

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
