import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/styles/game-intro.css";


function GameIntro() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Play sound once
    const audio = new Audio("/public/Assests/sounds/game-intro.mp3");
    audio.play();

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
      <img src="/Assests/game-logo.png" alt="BurgerGames Logo" />
    </section>
  );
}

export default GameIntro;