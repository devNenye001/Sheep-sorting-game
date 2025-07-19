import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GamePage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [speed, setSpeed] = useState(3); // seconds per animal
  const [animals, setAnimals] = useState([]);

  // play background music on mount
  useEffect(() => {
    const music = new Audio("/game-sound.mp3");
    music.loop = true;
    music.volume = 0.5;
    music.play().catch(() => console.log("Autoplay blocked"));
    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, []);

  // spawn animals periodically
 useEffect(() => {
  const spawn = setInterval(() => {
    const types = ["sheep", "cow", "pig"];
    const type = types[Math.floor(Math.random() * types.length)];
    const id = Date.now() + Math.random();

    // add new animal
    setAnimals((prev) => [...prev, { id, type }]);

    // after crossing screen, check if it's still there
    setTimeout(() => {
      setAnimals((prev) => {
        const animal = prev.find((a) => a.id === id);
        if (animal && animal.type === "sheep") {
          // 🐑❌ missed a sheep
          setMistakes((m) => m + 1);
        }
        // remove the animal from the list
        return prev.filter((a) => a.id !== id);
      });
    }, speed * 1000 + 1000);
  }, 1000); // spawn interval

  return () => clearInterval(spawn);
}, [speed]);


  // handle clicks
  const handleClick = (type, id) => {
    if (type === "sheep") {
      const clickSound = new Audio("/sheep-sound.mp3");
      clickSound.play();
      setScore((s) => s + 1);
      // speed up a little every 5 sheep
      setSpeed((prev) => (score % 5 === 4 ? Math.max(1, prev - 0.3) : prev));
    } else {
      const badSound = new Audio("/wrong.mp3");
      badSound.play();
      setMistakes((m) => m + 1);
    }
    setAnimals((prev) => prev.filter((a) => a.id !== id));
  };

  // game over when mistakes reach 3
  useEffect(() => {
  if (mistakes >= 3) {
    navigate("/gameover", { state: { score } });
  }
}, [mistakes, navigate, score]);

  return (
    <section className="game-page">
      <div className="top-div">
        <img src="/game-logo.png" alt="burgergames-logo" />
        <div className="scoreboard">
          <div className="sheep">
            <img
              src="/sheep1-removebg-preview.png"
              alt="sheep icon"
            />
            <span className="sheeps-clicked">{score}</span>
          </div>
          <div className="mistakes">
            <span>
              MISTAKES: <b>{mistakes}</b>
            </span>
          </div>
        </div>
      </div>

      <div className="animal-road">
        {animals.map((animal) => (
          <img
            key={animal.id}
            className={`animal ${animal.type}`}
            style={{ animationDuration: `${speed}s` }}
            src={`/${animal.type}1-removebg-preview.png`}
            alt={animal.type}
            onClick={() => handleClick(animal.type, animal.id)}
          />
        ))}
      </div>
    </section>
  );
}
