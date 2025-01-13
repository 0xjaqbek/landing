import React from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path

const Chapter4 = () => {
  usePageVisitTracking(useLocation().pathname);

  return (
    <div>
      <h1>Chapter 4: The Twilight of Hope</h1>
      <p>
        Chapter 4 takes us into the darkness. Decisions made in previous
        chapters begin to have their consequences. The heroes face their
        greatest challenges, which may decide their fate.
      </p>

      <h2>The Race Against Time</h2>
      <p>
        Time is running out. The looming crisis forces action, but every choice
        will come with its risks. The question is whether it’s still possible to
        turn back before the final confrontation, or if it’s too late to save
        what’s left.
      </p>

      <h3>The Ultimate Choice</h3>
      <p>
        As the line between friends and enemies grows increasingly blurred, your
        actions will determine the future of the world. It’s time for the final
        choice that will shape the course of events.
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/chapter5">Go to Chapter 5</Link>
          </li>
          <li>
            <Link to="/chapter3">Back to Chapter 3</Link>
          </li>
          <li>
            <Link to="/">Back to Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Chapter4;
