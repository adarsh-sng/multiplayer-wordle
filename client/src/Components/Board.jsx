import { useState } from "react";
import { Grid } from "./Grid";

export const Board = () => {
  const [word,setWord]=useState("");
  const [guess, setGuess] = useState(["HELLO", "WORLD", "REACT", "HOOKS", "GAMES", "STATE"]);
  return (
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
      {guess
        .map((val, i) => (
          <div key={i}>
            <Grid guess={val}/>
          </div>
        ))}
    </div>
  );
};
