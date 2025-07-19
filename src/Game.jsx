// pages
import GameIntro from "./components/game-into";
import Home from "./pages/home";
import Credits from "./pages/credit";
import LoadingPage from "./pages/loadingPage";
import GamePage from "./pages/gamePage";
import GameOver from "./pages/gameOver";

// styles
import "./pages/styles/home.css";
import "./pages/styles/credit.css";
import "./pages/styles/loadingPage.css";
import "./pages/styles/gamePage.css";
import "./pages/styles/GameOver.css";
import "./pages/styles/game-intro.css";

// imports from react
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Game() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameIntro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Game;
