import "./chat.css";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ariaIcon from "../Asets/ariaChatIcon.png";
import userIcon from "../Asets/userChatIcon.png";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/story");
  };

  const toggleInput = () => {
    setInputDisabled((prev) => !prev);
    console.log("toggleInput");
  };

  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveName = () => {
    const correctedInputValue = inputValue.trim().substring(0, 10);
    localStorage.setItem("userName", correctedInputValue);
    setUserName(correctedInputValue);
    setInputValue("");

    setTimeout(() => {
      handleSendMessage(
        `My name is ${correctedInputValue}.`,
        correctedInputValue
      );
    }, 200);

    setTimeout(() => {
      simulateTyping(`What a wonderful name, ${correctedInputValue}!`, 1500);
    }, 1000);

    setTimeout(() => {
      simulateTyping(
        "As you've realized, our timelines haven’t fully aligned yet, which is why we can’t have a live conversation just yet.",
        2000
      );
    }, 3500);

    setTimeout(() => {
      simulateTyping(
        `But don’t worry, I’ve managed to transcode some of my diaries so you can go directly to read`,
        1600
      );
    }, 7000);

    setTimeout(() => {
      simulateTyping("I'm disabling the chat feature.", 900);
    }, 9000);

    setTimeout(() => {
      toggleInput();
    }, 1000);
  };

  // --------------------------

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = (messageTxt, messageSender, messagePlacement) => {
    const newMessageObject = {
      id: Date.now(),
      senderName: messageSender,
      text: messageTxt,
      placement: messagePlacement,
    };
    setMessages((prev) => [...prev, newMessageObject]);
    setInputValue("");
  };

  const simulateTyping = (message, delay) => {
    const typingMessage = {
      id: "typing",
      senderName: "ARIA",
      placement: "left",
      isTyping: true,
    };
    setMessages((prev) => [...prev, typingMessage]);

    setTimeout(() => {
      setMessages((prev) =>
        prev
          .filter((msg) => msg.id !== "typing")
          .concat({
            id: Date.now(),
            senderName: "Aria",
            text: message,
            placement: "left",
          })
      );
    }, delay);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSaveName();
    }
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
      setInputDisabled(true);

      simulateTyping(
        `${storedUserName}, I’m just as excited as you are! Though we can’t have a real-time conversation yet.`,
        1500
      );

      setTimeout(() => {
        simulateTyping(
          "But don’t worry, until that moment arrives, you can explore my diaries and uncover the secrets of my journey.",
          1600
        );
      }, 2500);
    } else {
      simulateTyping(
        `It’s my pleasure to finally meet you. May I ask, how should I address you?`,
        1200
      );
    }
  }, []);

  return (
    <>
      <div className="message-box">
        {messages.map((message) => (
          <div
            className={`message ${
              message.placement === "left" ? "left-message" : ""
            }`}
            key={message.id}
          >
            <div className="message-header">
              <img
                src={message.placement === "left" ? ariaIcon : userIcon}
                className="profile-img"
                alt="User Icon"
              />
              {message.senderName}
            </div>
            <div>
              {message.isTyping ? (
                <div className="typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                message.text
              )}
            </div>{" "}
          </div>
        ))}

        <div className={`input-box ${inputDisabled ? "disabled-box" : ""}`}>
          <input
            className={`input ${
              inputDisabled ? "input-disabled" : "input-active"
            }`}
            type="text"
            placeholder={
              inputDisabled
                ? "Chat function got disabled."
                : "type your name ....."
            }
            value={inputValue}
            onKeyDown={handleKeyPress}
            onChange={handleNameChange}
            disabled={inputDisabled}
          />
          <button
            className="input-button"
            onClick={inputDisabled ? handleNavigate : handleSaveName}
          >
            {inputDisabled ? "Enter story" : "Enter"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
