import "./home.css";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ariaProfile from "../Asets/ariaProfile.png";
import frame from "../Asets/frame.svg";
import SocialIconsX from "../Asets/SocialIconsX.svg";
import SocialIconsTelegram from "../Asets/SocialIconsTelegram.svg";
import SocialIconsTT from "../Asets/SocialIconsTT.svg";
import Manifold from "../Asets/manifold.svg";

function Home() {
  const [userName, setUserName] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      console.log("user found: " + storedUserName);
      setUserName(storedUserName);
    } else {
      console.log("new user");
    }

    setIsLoading(false);
  }, []);

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="landing-page">
        {/* Small Header moved outside topGroup for better visibility */}
        <div className="small-header-main">
          <div className="small-header-title">
            ARIA INGRAM'S DIARIES
          </div>
          <div className="social-icons">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={SocialIconsX} alt="X" className="social-icon" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src={SocialIconsTelegram} alt="Telegram" className="social-icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src={SocialIconsTT} alt="TikTok" className="social-icon" />
            </a>
            <a href="https://manifold.markets" target="_blank" rel="noopener noreferrer">
              <img src={Manifold} alt="Manifold" className="social-icon" />
            </a>
          </div>
        </div>
        
        <div className="topGroup">
          <img className="ariaProfile" src={ariaProfile} alt="ariaProfile" />
          <div className="frameContainer">
            <div className="headerTxt">
              {userName ? (
                <p className="line">
                  Hello, {userName}! <br />
                  Good to see you again.
                </p>
              ) : (
                <p className="line">
                  Hello adventurer! <br /> MY NAME IS ARIA INGRAM.
                </p>
              )}
              <p className="line">
                <span className="highlight"> ready</span> to follow my story?
              </p>
            </div>

            <img className="frame" src={frame} alt="frame" />
          </div>
        </div>
        <button onClick={() => navigate("/story")} className="button">
          ENTER STORY
        </button>
        <button onClick={() => navigate("/chat")} className="button button2">
          LETS TALK
        </button>
      </div>
    </>
  );
}

export default Home;