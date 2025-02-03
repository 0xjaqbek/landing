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

    handleSendMessage(
      `My name is ${correctedInputValue}.`,
      correctedInputValue
    );
    handleSendMessage(
      `What a wonderful name, ${correctedInputValue}!`,
      "Aria",
      "left"
    );
    handleSendMessage(
      "As you've realized, our timelines haven’t fully aligned yet, which is why we can’t have a live conversation just yet.",
      "Aria",
      "left"
    );
    handleSendMessage(
      `But don’t worry, I’ve managed to transcode some of my diaries so you can go directly to read`,
      "Aria",
      "left"
    );
    handleSendMessage("Im desabling the chat fethure", "Aria", "left");
    toggleInput();
  };

  // --------------------------

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = (messageTxt, messageSender, messagePlacement) => {
    const newMessageObject = {
      id: Date.now(),
      senderName: messageSender,
      text: messageTxt,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      placement: messagePlacement,
    };
    setMessages((prev) => [...prev, newMessageObject]);
    setInputValue("");
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
      handleSendMessage(
        `${storedUserName}, I’m just as excited as you are! Though we can’t have a real-time conversation yet.`,
        "Aria",
        "left"
      );
      handleSendMessage(
        "But don’t worry, until that moment arrives, you can explore my diaries and uncover the secrets of my journey.",
        "Aria",
        "left"
      );
    } else {
      handleSendMessage(
        `It’s my pleasure to finally meet you. May I ask, how should I address you?`,
        "Aria",
        "left"
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
            <div>{message.text}</div>
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
