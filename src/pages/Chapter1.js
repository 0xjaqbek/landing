import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path

const Chapter1 = () => {
  usePageVisitTracking(useLocation().pathname);

  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default Chapter1;
