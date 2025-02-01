import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path
import "./story.css";
import ariaIcon from "../Asets/ariaChatIcon.png";

const Story = () => {
  return (
    <div>
      <div className="header">
        <button className="button-header">CHAPTER 1</button>
        <button className="button-header">CHAPTER 2</button>
        <button className="button-header">CHAPTER 3</button>
        <button className="button-header">CHAPTER 4</button>
        <button className="button-header">CHAPTER 5</button>
        <button className="button-header">CHAPTER 6</button>
        <button className="button-header">CHAPTER 7</button>
        <button className="button-header">CHAPTER 8</button>
      </div>
      <div className="baner">
        <p className="banner-header">What is Lorem Ipsum?</p>
        <p className="banner-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
        <img className="banner-img" />
        <button className="banner-button">MINT</button>
      </div>
      <div className="plot-cointerner">
        <div className="message-header">
          <img className="aria-profile" src={ariaIcon} />
          <p className="title">ARIA INGRAM</p>
        </div>
        <p className="plot">
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). <br /> <br />
          Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32
        </p>
      </div>
    </div>
  );
};

export default Story;
