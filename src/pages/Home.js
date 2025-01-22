import "./page.css";

import React, { useState, useEffect } from "react";
import HomeNewUser from "./HomeNewUser";
import HomeReturningUser from "./HomeReturningUser";

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

  // if (isLoading) {
  //   return <div className="">Loading...</div>;
  // } else {
  // }

  // if (userName) {
  //   return <div>home...1</div>;
  //   return <div>home...1</div>;
  //   return <div>home...1</div>;

  //   // return <HomeReturningUser userName={userName} />;
  // } else {
  return (
    <>
      <div className="landing-page">
        <div className="message">head....2</div>
        <div>home....2</div>
        <button onClick={handleClick} className="button">
          ENTER STORY
        </button>
        <button onClick={handleClick} className="button button2">
          LETS TALK
        </button>
        <div>footer....2</div>
      </div>
    </>
  );
  // return <HomeNewUser />;
  // }
}

export default Home;
