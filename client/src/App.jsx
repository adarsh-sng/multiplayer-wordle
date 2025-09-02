import { Board } from "./Components/Board";
import { Keyboard } from "./Components/Keyboard";

function App() {

  return (
    <div className="min-h-[100dvh] bg-base text-text flex flex-col gap-10 items-center justify-center px-4">
      <div className="w-fit flex flex-col gap-4">
        <div className="text-center">
          <div className=" sm:text-lg font-medium tracking-wide  mb-1 text-">
            Multiplayer
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-widest text-main">
            WORDLE
          </h1>
        </div>
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
