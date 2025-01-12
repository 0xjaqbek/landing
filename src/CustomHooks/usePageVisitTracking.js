import { useEffect } from "react";

const usePageVisitTracking = (location) => {
  useEffect(() => {
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");

    if (lastVisitedPage) {
      console.log("Last visited page:", lastVisitedPage);
    } else {
      console.log("No last visited page found.");
    }

    localStorage.setItem("lastVisitedPage", location);
  }, []);
};

export default usePageVisitTracking;
