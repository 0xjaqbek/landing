import { useEffect } from "react";

const usePageVisitTracking = (locationPath) => {
  useEffect(() => {
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");

    if (lastVisitedPage) {
      console.log("Last visited page:", lastVisitedPage);
    } else {
      console.log("No last visited page found.");
    }

    localStorage.setItem("lastVisitedPage", locationPath);
  }, []);
};

export default usePageVisitTracking;
