import { useState } from "react";

export const Grid = ({guess}) => {
  //  ${i%2==0?"bg-green":"bg-gray"}
  // Convert guess to array
  const guessArray = guess.split('')
  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4">
      {guessArray
        .map((char, i) => (
          <div
            key={i}
            className={`aspect-square size-13 sm:size-14 lg:size-16 border-2 border-border flex items-center justify-center text-3xl sm:text-4xl text-text font-extrabold`}>{char}</div>
        ))}
    </div>
  );
};
