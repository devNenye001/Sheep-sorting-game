import { useNavigate } from "react-router-dom";
import Button from "../components/button";
function Credits() {
  const navigate = useNavigate();

  const handleHome = () => {
    const clickSound = new Audio("/click-sound.wav");
    clickSound.play();
    navigate("/home");
  };
  return (
    <section className="credits-page">
      <img src="/game-logo.png" alt="" />
      <h1>CREDITS</h1>
      <p>
        Sheep, Cow, and Pig Sprites by Daniel Eddeland. available on
        https://opengameart.org/content/lpc-style-farm-animals
        <br /> <br />
        Additional Animations: Lynn Chen - Woolly & Shaggy - Gifs
        <br /> <br />
        Free sounds from pixabay
      </p>
      <Button value="GO BACK" onClick={handleHome} />
    </section>
  );
}

export default Credits;
