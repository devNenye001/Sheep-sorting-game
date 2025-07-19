import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/game");
    }, 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="loading-page">
      <div className="top">
        <img src="/game-logo.png" alt="burgergames-logo" />
        <h1>HOW TO PLAY</h1>
        <p>
          All you have to do <br />
          is click on the sheeps
        </p>
      </div>

      <div className="loader-bar">
        <div className="loader-fill"></div>
      </div>
    </section>
  );
}
