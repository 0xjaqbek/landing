import React from "react";
import { useNavigate } from "react-router-dom";
import navBack from "../Asets/navBack.svg";
import "./story.css"; 

const Airdrop = () => {
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
          <h1 className="title">AIRDROP</h1>
          <p className="plot">
            Discover exclusive airdrop opportunities in Aria Ingram's expansive digital realm.
          </p>
        </div>
      </div>
    </>
  );
};

export default Airdrop;