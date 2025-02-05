import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path
import "./story.css";
import ariaIcon from "../Asets/ariaChatIcon.png";

const Story = () => {
  const [currentChapter, setCurrentChapter] = useState("1");

  const changeChapter = (chapter) => {
    setCurrentChapter(chapter);
    console.log("Current chapter: " + currentChapter);
  };
  const mint = (chapter) => {
    alert(`Minting for Chapter ${chapter}`);
  };

  const chapters = {
    1: `Why do we use it? It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its
        layout...`,
    2: `Where does it come from? Contrary to popular belief, Lorem Ipsum is
        not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC...`,
    3: `Chapter 3: Some different content for another chapter...`,
    4: `Chapter 4: More content here...`,
    5: `Chapter 5: Additional chapter details...`,
    6: `Chapter 6: Something else interesting...`,
    7: `Chapter 7: Another section of content...`,
    8: `Chapter 8: The final chapter with information...`,
  };

  return (
    <div>
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
            <p className="title">ARIA INGRAM</p>
          </div>
          <p className="plot">{chapters[currentChapter]}</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
