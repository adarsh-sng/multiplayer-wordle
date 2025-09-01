export const Grid = () => {
  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4">
      {Array(5)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="aspect-square size-12 sm:size-14 md:size-16 lg:size-20 border-2 border-neutral-700 "
          ></div>
        ))}
    </div>
  );
};
