import React from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path

const Home = () => {
  const location = useLocation();
  usePageVisitTracking(location.pathname);

  return (
    <div>
      <h1>Welcome to the Story</h1>
      <p>Choose a chapter to start reading:</p>

      <div>
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

        <p>----------------------------------</p>

        <p>
          It’s my pleasure to finally meet you. May I ask, how should I address
          you?
        </p>
        <p>Tom, what a wonderful name!</p>
        <p>
          As you've realized, our timelines haven’t fully aligned yet, which is
          why we can’t have a live conversation just yet.{" "}
        </p>
        <p>
          But don’t worry, I’ve managed to transcode some of my diaries so you
          can tune in to my history.
        </p>
        <p>
          And before you go, remember that you can find more information about
          my universe by following my media.
        </p>
        <p>
          And before you go, remember that you can find more information about
          my universe by following my media.
        </p>
        <p>----------------------------------</p>
        <p>chapter</p>
        <p>info anout the mint</p>
      </div>
    </div>
  );
};

export default Home;
