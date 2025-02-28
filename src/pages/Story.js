import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./story.css";
import ariaIcon from "../Asets/ariaChatIcon.png";
import StoryHeader from "./StoryHeader";
import chapters from "./chapters";
// Direct import of the banner and NFT images to ensure they load
import Chapter1Banner from "../Asets/Chapter1.svg";
import Nft1Image from "../Asets/Nft1.svg";

const Story = () => {
  const [currentChapter, setCurrentChapter] = useState("1");
  const contentRef = useRef(null);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    // Add class to body for story-specific styling
    document.body.classList.add('story-page');
    
    // Remove class when component unmounts
    return () => {
      document.body.classList.remove('story-page');
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeChapter = (chapter) => {
    setCurrentChapter(chapter);
    scrollToTop();
  };

  const mint = (chapter) => {
    window.open(`https://example.com/${chapter}`, "_blank");
  };

  // Get banner image source
  const getBannerSrc = () => {
    if (currentChapter === "1") {
      return Chapter1Banner;
    }
    return chapters[currentChapter].banner;
  };
  
  // Get NFT image source
  const getNftSrc = () => {
    if (currentChapter === "1") {
      return Nft1Image;
    }
    return chapters[currentChapter].nft;
  };

  return (
    <>
      <StoryHeader 
        scrollToTop={scrollToTop} 
        currentChapter={currentChapter} 
        chapterTitle={chapters[currentChapter].title} 
        onChangeChapter={changeChapter}
      />
      
      {/* Full width banner */}
      <div className="banner-container">
        <img 
          src={getBannerSrc()} 
          alt={`Chapter ${currentChapter} banner`} 
          className="banner-img" 
        />
      </div>
      
      <div className="nft-container">
        <div className="nft-content">
          <img 
            src={getNftSrc()} 
            alt={`Chapter ${currentChapter} NFT`} 
            className="nft-img" 
          />
          <div className="nft-text-container">
            <h1 className="nft-title-h1">{chapters[currentChapter]["nft-title-h1"]}</h1>
            <h2 className="nft-title-h2">{chapters[currentChapter]["nft-title-h2"]}</h2>
            <button className="mint-button" onClick={() => mint(currentChapter)}>
              Buy NOW
            </button>
          </div>
        </div>
      </div>
      
      <div className="plot-big-container" ref={contentRef}>
        <div className="plot-container">
          
          <p className="plot-summary">
            {chapters[currentChapter].plot}
          </p>
          
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