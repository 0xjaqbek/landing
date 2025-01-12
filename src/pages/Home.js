import React, { useState, useEffect } from "react";
import HomeNewUser from "./HomeNewUser";
import HomeReturningUser from "./HomeReturningUser";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (userName) {
    return <HomeReturningUser userName={userName} />;
  } else {
    return <HomeNewUser />;
  }
};

export default Home;
