import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const HomeReturningUser = (props) => {
  const [name, setName] = useState(props.userName);

  return (
    <div>
      <h2>Welcome back, {name}!</h2>

      <h3>
        As you've realized, our timelines haven’t fully aligned yet, which is
        why we can’t have a live conversation just yet.{" "}
      </h3>
      <h3>
        But don’t worry, I’ve managed to transcode some of my diaries so you can
        tune in to my history.
      </h3>
      <h3>
        And before you go, remember that you can find more information about my
        universe by following my media.
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
  );
};

export default HomeReturningUser;
