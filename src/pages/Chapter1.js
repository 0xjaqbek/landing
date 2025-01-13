import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path

const Chapter1 = () => {
  usePageVisitTracking(useLocation().pathname);

  return (
    <div>
      <h1>Rozdział 1: Początek Przygody</h1>
      <p>
        To jest pierwszy rozdział w Twojej aplikacji! Tutaj możesz wprowadzić
        treść rozdziału, np. tekst opisujący wstęp do Twojej historii lub
        aplikacji.
      </p>

      <h2>Co się wydarzy dalej?</h2>
      <p>
        Przed Tobą jeszcze wiele nieznanych przygód. Kliknij poniżej, aby
        przejść do kolejnego rozdziału:
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/chapter2">Przejdź do Rozdziału 2</Link>
          </li>
          <li>
            <Link to="/">Powrót do Strony Głównej</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Chapter1;
