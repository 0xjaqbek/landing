import React, { useRef, useEffect } from 'react';
import "./ChapterDropdown.css";

const ChapterDropdown = ({ chapters, isOpen, onClose, onSelectChapter }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Function to handle clicks outside dropdown
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      // Add event listener when dropdown is open
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  return (
    <div className="chapter-dropdown-overlay">
      <div className="chapter-dropdown-container" ref={containerRef}>
        <div className="chapter-dropdown-header">
          <div className="close-button" onClick={onClose}>✕</div>
        </div>
        <div className="chapter-dropdown-content">
          {Object.keys(chapters).map(key => {
            const chapter = chapters[key];
            if (chapter.published) {
              return (
                <div 
                  key={key} 
                  className="chapter-item"
                  onClick={() => {
                    onSelectChapter(key);
                    onClose();
                  }}
                >
                  <div className="chapter-number">CHAPTER {chapter.id}</div>
                  <div className="chapter-title">{chapter.title.toUpperCase()}</div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChapterDropdown;