import React from "react";
import { Link } from "react-router-dom";

const Chapter5 = () => {
  return (
    <div>
      <h1>Chapter 5: The Shattered Alliance</h1>
      <p>
        In Chapter 5, the stakes have never been higher. Betrayals and broken
        alliances start to take their toll, and the group faces an uncertain
        future. What once seemed like a united front is now fracturing.
      </p>

      <h2>The Betrayal</h2>
      <p>
        Trust is a fragile thing. As the journey progresses, certain members of
        the group reveal their true motives, leading to a critical betrayal that
        threatens to undo everything they’ve worked for.
      </p>

      <h3>Fighting for Survival</h3>
      <p>
        The remaining allies must band together, not just to confront external
        forces, but to overcome the internal divisions that threaten to tear
        them apart. In this chapter, survival is not guaranteed, and choices
        made will have irreversible consequences.
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/chapter6">Go to Chapter 6</Link>
          </li>
          <li>
            <Link to="/chapter4">Back to Chapter 4</Link>
          </li>
          <li>
            <Link to="/">Back to Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Chapter5;
