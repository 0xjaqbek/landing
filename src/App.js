import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Story from "./Pages/Story";
import NotFound from "./Pages/NotFound";

import backgroundImage1 from "./Asets/background1.webp";
import backgroundImage2 from "./Asets/background2.png";

function App() {
  return (
    <>
      <div className="app-container">
        <img src={backgroundImage1} className="background"></img>
        <img src={backgroundImage2} className="background background2"></img>
        <div className="app-croped">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/story" element={<Story />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
