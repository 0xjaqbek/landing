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
          <h1 className="title">Aria I love U </h1>
          <p className="plot">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          </p>
        </div>
      </div>
    </>
  );
};

export default Airdrop;