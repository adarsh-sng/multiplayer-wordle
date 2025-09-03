import { useState, useEffect } from "react";
import { Board } from "./Components/Board";
import { Keyboard } from "./Components/Keyboard";

function App() {
  const [guess, setGuess] = useState(Array(6).fill("     "));
  const [guessNum, setGuessNum] = useState(0);

  const handleInput = (key) => {
    const newGuess = [...guess];
    let newWord = newGuess[guessNum];
    
    if (key === "Enter" && newWord.trim().length === 5 && guessNum < 5) {
      setGuessNum((prev) => prev + 1);
    } else if (key.match(/^[A-Z]$/) && newWord.trim().length < 5) {
      newWord = newWord.trim() + key;
      newGuess[guessNum] = newWord.padEnd(5, " ");
      setGuess(newGuess);
    } else if (key === "Backspace") {
      newWord = newWord.trim().slice(0, -1);
      newGuess[guessNum] = newWord.padEnd(5, " ");
      setGuess(newGuess);
    }
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleInput("Enter");
    } else if (e.key.match(/^[a-zA-Z]$/)) {
      handleInput(e.key.toUpperCase());
    } else if (e.key === "Backspace") {
      handleInput("Backspace");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [guess, guessNum]);

  return (
    <div className="min-h-[100dvh] bg-base text-text flex flex-col gap-5 items-center justify-between px-auto p-5">
        <div className="text-center">
          <div className="text-lg font-medium tracking-wide  mb-1 text-text">
            Multiplayer
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-widest text-main">
            WORDLE
          </h1>
        </div>
        <Board guess={guess} />
        <Keyboard onKeyClick={handleInput} />
    </div>
  );
}

export default App;
