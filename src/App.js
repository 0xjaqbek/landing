import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Story from "./pages/Story";
import NotFound from "./pages/NotFound";

import backgroundImage01 from "./Asets/background01.svg";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const isStoryPage = location.pathname === "/story";

  useEffect(() => {
    // This will run when the app is opened/mounted
    setIsLoaded(true);
  }, []);

  return (
    <div className="app-container">
      {/* Only show background on non-story pages */}
      {!isStoryPage && <img src={backgroundImage01} className="background" alt="Background" />}
      
      <div className="app-croped">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/story" element={<Story />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;