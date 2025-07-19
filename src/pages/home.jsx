import { useEffect } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
  const audio = new Audio("/game-home-sound.mp3"); // no 'public'
  audio.loop = true;
  audio.volume = 0.5;

  // autoplay policy: browsers block sound until user interacts
  const playAudio = () => {
    audio.play().catch(() => console.log("Autoplay blocked until user interacts"));
    document.removeEventListener("click", playAudio);
  };

  document.addEventListener("click", playAudio);

  return () => {
    audio.pause();
    audio.currentTime = 0;
    document.removeEventListener("click", playAudio);
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
