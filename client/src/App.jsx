import { Board } from "./Components/Board";

function App() {

  return (
    <div className=" min-h-[100dvh] bg-base text-text flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8 sm:mb-12">
        <div className=" sm:text-lg font-medium tracking-wide  mb-1 text-">
          Multiplayer
        </div>
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-[0.3em] text-main">
          WORDLE
        </h1>
      </div>
      <Board />
    </div>
  );
}

export default App;
