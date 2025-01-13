import React from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path

const Chapter8 = () => {
  usePageVisitTracking(useLocation().pathname);

  return (
    <div>
      <h1>Chapter 8: The Final Showdown</h1>
      <p>
        The long-awaited confrontation is finally here. The characters must put
        everything on the line, facing their greatest adversary in a battle that
        will decide the fate of the universe. Every choice they’ve made, every
        sacrifice, has led them to this moment.
      </p>

      <h2>The Last Stand</h2>
      <p>
        The heroes rally together, their individual strengths combining to
        create an unstoppable force. But their enemy is just as powerful, and
        the fight will test their limits. The stakes are higher than ever, with
        the future of everything they care about hanging in the balance.
      </p>

      <h3>The Unexpected Ally</h3>
      <p>
        Just when all hope seems lost, an unexpected ally emerges. Someone from
        their past, thought to be an enemy, now offers the help they need. Can
        this new alliance turn the tide in their favor, or is it just another
        trick in the web of betrayal?
      </p>

      <h4>Victory or Defeat</h4>
      <p>
        In the end, only one can emerge victorious. The battle reaches its
        climax, and the fate of the galaxy hangs by a thread. Will the heroes
        succeed, or will their enemies rise to claim the universe for
        themselves?
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/chapter7">Back to Chapter 7</Link>
          </li>
          <li>
            <Link to="/">Back to Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Chapter8;
