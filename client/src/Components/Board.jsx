import { Grid } from "./Grid";

export const Board = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
      {Array(6)
        .fill()
        .map((_, i) => (
          <div key={i}>
            <Grid />
          </div>
        ))}
    </div>
  );
};
