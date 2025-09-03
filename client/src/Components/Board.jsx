import { Grid } from "./Grid";

export const Board = ({ guess }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-2">
      {guess.map((val, i) => (
        <div key={i}>
          <Grid guess={val} />
        </div>
      ))}
    </div>
  );
};
