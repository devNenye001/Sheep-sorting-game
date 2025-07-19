import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/styles/game-intro.css";


function GameIntro() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

   // play background music on mount
  useEffect(() => {
    const music = new Audio("/game-intro.mp3");
    music.loop = true;
    music.volume = 0.5;
    music.play().catch(() => console.log("Autoplay blocked"));
    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    // Start fade out after 4.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Navigate after fade
    const navTimer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <section className={`game-intro ${fadeOut ? "fade-out" : ""}`}>
      <img src="/game-logo.png" alt="BurgerGames Logo" />
    </section>
  );
}

export default GameIntro;