import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const HomeNewUser = () => {
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState("");

  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveName = () => {
    const correctedInputValue = inputValue.trim().substring(0, 10);
    localStorage.setItem("userName", correctedInputValue);
    setUserName(correctedInputValue);
  };

  //

  return (
    <>
      <div>
        <h2>
          It’s my pleasure to finally meet you. May I ask, how should I address
          you?
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={handleNameChange}
        />
        <button onClick={handleSaveName}>Save Name</button>
      </div>

      {userName ? (
        <div>
          <h3>What a wonderful name, {userName}!</h3>

          <h3>
            As you've realized, our timelines haven’t fully aligned yet, which
            is why we can’t have a live conversation just yet.{" "}
          </h3>
          <h3>
            But don’t worry, I’ve managed to transcode some of my diaries so you
            can tune in to my history.
          </h3>
          <h3>
            And before you go, remember that you can find more information about
            my universe by following my media.
          </h3>

          <h3>Choose a chapter to start reading:</h3>

          <Link to="/chapter1">
            <button>Chapter 1</button>
          </Link>
          <Link to="/chapter2">
            <button>Chapter 2</button>
          </Link>
          <Link to="/chapter3">
            <button>Chapter 3</button>
          </Link>
          <Link to="/chapter4">
            <button>Chapter 4</button>
          </Link>
          <Link to="/chapter5">
            <button>Chapter 5</button>
          </Link>
          <Link to="/chapter6">
            <button>Chapter 6</button>
          </Link>
          <Link to="/chapter7">
            <button>Chapter 7</button>
          </Link>
          <Link to="/chapter8">
            <button>Chapter 8</button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default HomeNewUser;
