import { useEffect, useState } from "react";
import { Grid } from "./Grid";

export const Board = () => {
  const [word, setWord] = useState("");
  // ["HELLO", "WORLD", "REACT", "HOOKS", "GAMES", "STATE"]
  const [guess, setGuess] = useState(Array(6).fill("     "));
  const [guessNum, setGuessNum] = useState(0);

  // const newWord=(i)=>(word+)
  const handleInput = (e) => {
    // console.log(`${e.key} was pressed`)
    if (e.key === "Enter"||word.length==5) {
      setGuessNum((prev) => prev + 1);
      setWord("");
      console.log(guessNum);
    } else {
      let newWord = word + e.key;
      if (e.key === "Backspace") {
        newWord = word.slice(0, -1);
      }
      setWord(newWord);
      // console.log(`${newWord} is newword`);
      console.log(`${word} is word`);
      const newGuess = [...guess];
      newGuess[guessNum] = newWord.padEnd(5, " ");
      setGuess(newGuess);
    }
    // console.log(newGuess)
  };
  // console.log(guessNum)
  useEffect(() => {
    document.addEventListener("keydown", handleInput);
    return () => document.removeEventListener("keydown", handleInput);
  }, [word, guessNum]);
  return (
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
      {guess.map((val, i) => (
        <div key={i}>
          <Grid guess={val} />
        </div>
      ))}
    </div>
  );
};
