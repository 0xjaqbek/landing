import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./story.css";
import ariaIcon from "../Asets/ariaChatIcon.png";
import navUp from "../Asets/navUp.svg";
import navBack from "../Asets/navBack.svg";
import chapters from "./chapters.js";

const Story = () => {
  const [currentChapter, setCurrentChapter] = useState("1");

  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeChapter = (chapter) => {
    setCurrentChapter(chapter);
    console.log("Current chapter: " + currentChapter);
  };

  const mint = (chapter) => {
    window.open(`https://example.com/${chapter}`, "_blank");
  };

  return (
    <>
      <img
        className="nav-back"
        src={navBack}
        alt="Nav back"
        onClick={() => navigate("/")}
      />

      <img className="nav-up" src={navUp} alt="Nav up" onClick={scrollToTop} />
      <div className="header">
        {[...Array(8)].map((_, i) => {
          const chapterNumber = (i + 1).toString();
          return (
            <button
              key={chapterNumber}
              className={`button-header ${
                currentChapter === chapterNumber ? "active" : ""
              }`}
              onClick={() => changeChapter(chapterNumber)}
            >
              CHAPTER {chapterNumber}
            </button>
          );
        })}
      </div>
      <div className="baner">
        <p className="banner-header">What is Lorem Ipsum?</p>
        <p className="banner-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
        <img className="banner-img" />
        <button className="banner-button" onClick={() => mint(currentChapter)}>
          MINT
        </button>
      </div>
      <div className="plot-big-cointerner">
        <div className="plot-cointerner">
          <div className="message-header">
            <img className="aria-profile" src={ariaIcon} />
            <p className="title">
              Chapter {chapters[currentChapter].id} “
              {chapters[currentChapter].title}”
            </p>
          </div>
          <p className="plot">
            {chapters[currentChapter].content.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default Story;
