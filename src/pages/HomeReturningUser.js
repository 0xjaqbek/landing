import "./page.css";

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const HomeReturningUser = (props) => {
  const [name, setName] = useState(props.userName);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = (messageTxt, messageSender) => {
    const newMessageObject = {
      id: Date.now(),
      senderName: messageSender,
      text: messageTxt,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessageObject]);
    setInput("");
  };

  useEffect(() => {
    handleSendMessage(`Welcome back, ${name}!`, "Aria");
    handleSendMessage(
      `As you've realized, our timelines haven’t fully aligned yet, which is
        why we can’t have a live conversation just yet.`,
      "Aria"
    );
    handleSendMessage(
      `But don’t worry, I’ve managed to transcode some of my diaries so you can
        tune in to my history.`,
      "Aria"
    );
    handleSendMessage(
      `And before you go, remember that you can find more information about my
        universe by following my media.`,
      "Aria"
    );
    handleSendMessage(
      <div>
        <h3>Choose a chapter to start reading:</h3>
        <Link to="/chapter1">
          <button>Chapter 1</button>
        </Link>
        <Link to="/chapter2">
          <button>Chapter 2</button>
        </Link>
        <Link to="/chapter3">
          <button>Chapter 3</button>
        </Link>
        <Link to="/chapter4">
          <button>Chapter 4</button>
        </Link>
        <Link to="/chapter5">
          <button>Chapter 5</button>
        </Link>
        <Link to="/chapter6">
          <button>Chapter 6</button>
        </Link>
        <Link to="/chapter7">
          <button>Chapter 7</button>
        </Link>
        <Link to="/chapter8">
          <button>Chapter 8</button>
        </Link>
      </div>,
      "Aria"
    );
  }, []);

  return (
    <div>
      <div className="message-box">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <div>
              {message.senderName} {message.time}
            </div>
            <div></div>
            <div>--------------</div>
            <div>{message.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeReturningUser;
