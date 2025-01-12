import React from "react";
import { Link } from "react-router-dom";

const Chapter2 = () => {
  return (
    <div>
      <h1>Rozdział 2: Odkrywając Nowe Światy</h1>
      <p>
        Teraz, gdy zaczynasz rozumieć, co się dzieje, przychodzi czas na kolejne
        wyzwania. W tym rozdziale dowiesz się więcej o zagadkach, które czekają
        na rozwiązanie. Możliwe, że Twoje działania wpłyną na dalszy bieg
        wydarzeń.
      </p>

      <h2>Co się stało po poprzednich wydarzeniach?</h2>
      <p>
        Na horyzoncie pojawiają się nowe zagrożenia, a odpowiedzi na pytania z
        rozdziału 1 stają się bardziej skomplikowane. Kliknij poniżej, aby
        przejść do kolejnego etapu lub wrócić do poprzedniego rozdziału:
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/chapter3">Przejdź do Rozdziału 3</Link>
          </li>
          <li>
            <Link to="/chapter1">Wróć do Rozdziału 1</Link>
          </li>
          <li>
            <Link to="/">Powrót do Strony Głównej</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Chapter2;
