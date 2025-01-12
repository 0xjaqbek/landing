import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Chapter4 from "./pages/Chapter4";
import Chapter5 from "./pages/Chapter5";
import Chapter6 from "./pages/Chapter6";
import Chapter7 from "./pages/Chapter7";
import Chapter8 from "./pages/Chapter8";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter4" element={<Chapter4 />} />
        <Route path="/chapter5" element={<Chapter5 />} />
        <Route path="/chapter6" element={<Chapter6 />} />
        <Route path="/chapter7" element={<Chapter7 />} />
        <Route path="/chapter8" element={<Chapter8 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <p>
  It’s my pleasure to finally meet you. May I ask, how should I address
  you?
</p>
<p>Tom, what a wonderful name!</p>
<p>
  As you've realized, our timelines haven’t fully aligned yet, which is
  why we can’t have a live conversation just yet.{" "}
</p>
<p>
  But don’t worry, I’ve managed to transcode some of my diaries so you
  can tune in to my history.
</p>
<p>
  And before you go, remember that you can find more information about
  my universe by following my media.
</p>
<p>
  And before you go, remember that you can find more information about
  my universe by following my media.
</p>
<p>----------------------------------</p>
<p>chapter</p>
<p>info anout the mint</p> */
}
