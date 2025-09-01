import { useState } from "react";

export const Grid = ({guess}) => {
  // Convert guess to array
  const guessArray = guess.split('')
  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4">
      {guessArray
        .map((char, i) => (
          <div
            key={i}
            className="aspect-square size-12 sm:size-14 md:size-16 lg:size-20 border-2 border-border flex items-center justify-center text-3xl "
          >{char}</div>
        ))}
    </div>
  );
};
