import { Board } from "./Components/Board";
import { Keyboard } from "./Components/Keyboard";

function App() {

  return (
    <div className="min-h-[100dvh] bg-base text-text flex flex-col gap-10 items-center justify-between px-auto p-5">
        <div className="text-center">
          <div className="text-lg font-medium tracking-wide  mb-1 text-text">
            Multiplayer
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-widest text-main">
            WORDLE
          </h1>
        </div>
        <Board />
        <Keyboard />
    </div>
  );
}

export default App;
