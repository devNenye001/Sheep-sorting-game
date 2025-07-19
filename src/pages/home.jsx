import { useEffect } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

   // play background music on mount
  useEffect(() => {
    const music = new Audio("/game-home-sound.mp3");
    music.loop = true;
    music.volume = 0.5;
    music.play().catch(() => console.log("Autoplay blocked"));
    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, []);


  const handlePlay = () => {
    const clickSound = new Audio("/click-sound.wav");
    clickSound.play();
    navigate("/loading");
  };

  const handleCredits = () => {
    const clickSound = new Audio("/click-sound.wav");
    clickSound.play();
    navigate("/credits");
  };

  return (
    <section className="home-page fade-in">
      <img src="/game-logo.png" alt="burgergames-logo" />
      <h1>SHEEP <br /> SORTING</h1>
      <div className="buttons">
        <Button value="PLAY" onClick={handlePlay} />
        <Button value="CREDITS" className="credits" onClick={handleCredits} />
      </div>
    </section>
  );
}

export default Home;
