import React from "react";
import { useNavigate } from "react-router-dom";
import navBack from "../Asets/navBack.svg";
import "./story.css";

const Claim = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        className="nav-back"
        src={navBack}
        alt="Nav back"
        onClick={() => navigate("/")}
      />
      <div className="plot-big-cointerner">
        <div className="plot-cointerner">
          <h1 className="title">CLAIM</h1>
          <p className="plot">
            Claim your digital assets and unlock the mysteries of Aria Ingram's universe.
          </p>
        </div>
      </div>
    </>
  );
};

export default Claim;