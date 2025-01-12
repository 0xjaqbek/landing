import React, { useState, useEffect } from "react";
import HomeNewUser from "./HomeNewUser";
import HomeReturningUser from "./HomeReturningUser";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  if (userName) {
    return <HomeReturningUser userName={userName} />;
  } else {
    return <HomeNewUser />;
  }
};

export default Home;
