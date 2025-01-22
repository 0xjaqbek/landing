import "./page.css";

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

  const handleClick = () => {
    alert("Button clicked!");
  };

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
            <p className="headerTxt">
              Hello adventurer! <br /> MY NAME IS ARIA INGRAM. <br />
              <span className="highlight">ready</span> to follow my story?
            </p>
            <img className="frame" src={frame} alt="frame" />
          </div>
        </div>
        <button onClick={() => navigate("/page1")} className="button">
          ENTER STORY
        </button>
        <button onClick={() => navigate("/page1")} className="button button2">
          LETS TALK
        </button>
      </div>
    </>
  );
}

export default Home;
