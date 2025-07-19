import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/button";

function GameOver() {
  const location = useLocation();
  const navigate = useNavigate();

  // get score from location.state
  const score = location.state?.score ?? 0;

  useEffect(() => {
    const gameOverSound = new Audio("/Assests/sounds/game-over-sound.mp3");
    gameOverSound.volume = 0.7;
    gameOverSound.play().catch(() => console.log("Autoplay blocked"));

    return () => {
      // clean up if needed
      gameOverSound.pause();
      gameOverSound.currentTime = 0;
    };
  }, []);

  return (
    <section className="GameOver-page">
      <img src="/Assests/game-logo.png" alt="burgergames-logo" />
      <h1>GAME OVER</h1>
      <p>You did your best</p>

      <div className="sheep">
        <img
          src="/Assests/sprites/sheep1-removebg-preview.png"
          alt="sheep icon"
        />
        <span className="sheeps-clicked">{score}</span>
      </div>

      <div className="buttons">
        <Button value="NEW GAME" onClick={() => navigate("/loading")} />
      </div>
    </section>
  );
}

export default GameOver;
