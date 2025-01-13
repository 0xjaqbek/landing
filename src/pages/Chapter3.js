import React from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path

const Chapter3 = () => {
  usePageVisitTracking(useLocation().pathname);

  return (
    <div>
      <h1>Rozdział 3: Przemiany i Tajemnice</h1>
      <p>
        Po podjęciu decyzji, która miała ogromne konsekwencje, nadszedł czas na
        konfrontację z nieznanym. W tym rozdziale odkryjesz prawdę, która może
        zmienić wszystko. Jednak pytanie, które teraz nasuwa się to: Jakie będą
        następstwa Twoich działań?
      </p>

      <h2>Wszystko w Twoich rękach</h2>
      <p>
        Czas podjąć ważne decyzje. Każdy krok, który wykonasz, wpłynie na to,
        jak historia się potoczy. Czy zdołasz zrozumieć, co tak naprawdę się
        dzieje, czy pozwolisz, by wydarzenia wymknęły się spod kontroli?
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/chapter4">Przejdź do Rozdziału 4</Link>
          </li>
          <li>
            <Link to="/chapter2">Wróć do Rozdziału 2</Link>
          </li>
          <li>
            <Link to="/">Powrót do Strony Głównej</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Chapter3;
