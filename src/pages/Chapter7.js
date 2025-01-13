import React from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path

const Chapter7 = () => {
  usePageVisitTracking(useLocation().pathname);

  return (
    <div>
      <h1>Chapter 7: The Ultimate Test</h1>
      <p>
        In Chapter 7, the characters face their most difficult challenge yet.
        With the new alliances they formed, they're now tested like never
        before. As danger closes in from all sides, the strength of their unity
        is the only thing that stands between them and total destruction.
      </p>

      <h2>The Breaking Point</h2>
      <p>
        The pressure is mounting. Tensions between the characters are at an
        all-time high, and the group is on the brink of falling apart. Can they
        put aside their differences to face the coming storm, or will their
        disunity be their downfall?
      </p>

      <h3>Unexpected Sacrifices</h3>
      <p>
        As the group prepares for battle, some characters must make sacrifices
        they never imagined. These decisions will define their futures and
        possibly change the course of the war. Who will make the ultimate
        sacrifice, and what will the cost be?
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/chapter8">Go to Chapter 8</Link>
          </li>
          <li>
            <Link to="/chapter6">Back to Chapter 6</Link>
          </li>
          <li>
            <Link to="/">Back to Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Chapter7;
