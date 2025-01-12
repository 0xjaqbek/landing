import React from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path

const Chapter6 = () => {
  usePageVisitTracking(useLocation().pathname);

  return (
    <div>
      <h1>Chapter 6: The Turning Tide</h1>
      <p>
        In Chapter 6, the consequences of the betrayal are beginning to show.
        The group must face the reality of their fractured unity. As they move
        forward, each decision will impact their survival and the fate of the
        world they are fighting to protect.
      </p>

      <h2>Regrouping</h2>
      <p>
        After the betrayal, the group is in disarray. Trust is a hard thing to
        rebuild, but it's the only way forward. In this chapter, characters are
        forced to confront their past mistakes and decide whether they can
        continue to fight together.
      </p>

      <h3>New Alliances</h3>
      <p>
        As the dust settles, new alliances form. Some are born out of necessity,
        others out of common goals. These fragile partnerships may hold the key
        to overcoming the growing threats, but will they be enough to tip the
        balance in their favor?
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/chapter7">Go to Chapter 7</Link>
          </li>
          <li>
            <Link to="/chapter5">Back to Chapter 5</Link>
          </li>
          <li>
            <Link to="/">Back to Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Chapter6;
