import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../Asets/Home.svg";
import ChevronsUpIcon from "../Asets/ChevronsUp.svg";
import BookIcon from "../Asets/Book.svg";
import SocialIconsX from "../Asets/SocialIconsX.svg";
import SocialIconsTelegram from "../Asets/SocialIconsTelegram.svg";
import SocialIconsTT from "../Asets/SocialIconsTT.svg";
import Manifold from "../Asets/manifold.svg";
import ChapterDropdown from "./ChapterDropdown";
import chapters from "./chapters";

const StoryHeader = ({ scrollToTop, currentChapter, chapterTitle, onChangeChapter }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleChapterSelect = (chapterKey) => {
    onChangeChapter(chapterKey);
  };

  return (
    <>
      <div className="story-header">
        <div className="story-header-left">
          <img 
            src={HomeIcon} 
            alt="Home" 
            className="story-nav-icon" 
            onClick={() => navigate("/")}
          />
        </div>
        
        <div className="story-header-center">
          <div className="story-header-title-container">
            <div className="story-title-wrapper">
              <span className="story-header-title">ARIA INGRAM'S DIARIES</span>
              <span className="chapter-number">CHAPTER {currentChapter}</span>
              <span className="chapter-title">{chapterTitle}</span>
            </div>
            <img 
              src={BookIcon} 
              alt="Book" 
              className="story-nav-icon book-icon" 
              onClick={toggleDropdown}
            />
          </div>
        </div>
        
        <div className="story-header-right">
          <div className="social-icons-inline">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={SocialIconsX} alt="X" className="social-icon" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src={SocialIconsTelegram} alt="Telegram" className="social-icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src={SocialIconsTT} alt="TikTok" className="social-icon" />
            </a>
            <a href="https://manifold.markets" target="_blank" rel="noopener noreferrer">
              <img src={Manifold} alt="Manifold" className="social-icon" />
            </a>
          </div>
          <img 
            src={ChevronsUpIcon} 
            alt="Scroll to top" 
            className="story-nav-icon" 
            onClick={scrollToTop}
          />
        </div>
      </div>

      <ChapterDropdown 
        chapters={chapters} 
        isOpen={dropdownOpen} 
        onClose={closeDropdown} 
        onSelectChapter={handleChapterSelect}
      />
    </>
  );
};

export default StoryHeader;