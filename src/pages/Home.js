import "./home.css";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ariaProfile from "../Asets/ariaProfile.png";
import frame from "../Asets/frame.svg";

function Home() {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
    setIsLoading(false);
  }, []);

  const navigate = useNavigate();

  if (isLoading) {
    return <div className="">Loading...</div>;
  } else {
  }
  return (
    <>
      <div className="landing-page">
        <div className="topGroup">
          <img className="ariaProfile" src={ariaProfile} alt="ariaProfile" />
          <div className="frameContainer">
            <div className="headerTxt">
              <p className="line">
                Hello adventurer! <br /> MY NAME IS ARIA INGRAM.
              </p>
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
