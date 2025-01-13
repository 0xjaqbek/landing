import { useEffect } from "react";

const usePageVisitTracking = (locationPath) => {
  useEffect(() => {
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");

    if (lastVisitedPage) {
      console.log("Last visited page: (hook)", lastVisitedPage);
    } else {
      console.log("No last visited page found. (hook) ");
    }

    localStorage.setItem("lastVisitedPage (hook)", locationPath);
  }, []);
};

export default usePageVisitTracking;
